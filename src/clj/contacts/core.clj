(ns contacts.core
   (:require [org.httpkit.server :refer [run-server]]
             [reitit.ring :as ring]
             [ring.middleware.cors :refer [wrap-cors]]
             [reitit.ring.middleware.exception :refer [exception-middleware]]
             [reitit.ring.middleware.parameters :refer [parameters-middleware]]
             [reitit.ring.middleware.muuntaja :refer [format-negotiate-middleware
                                                      format-request-middleware
                                                      format-response-middleware]]
             [reitit.ring.coercion :refer [coerce-exceptions-middleware
                                           coerce-request-middleware
                                           coerce-response-middleware]]
             [reitit.coercion.schema]
             [muuntaja.core :as m]
             [contacts.routes :refer [ping-route contact-routes]]))

(defonce server (atom nil))

(def app
   (ring/ring-handler
      (ring/router
         [["/api"
           ping-route
           contact-routes]]
         {:data {:coercion reitit.coercion.schema/coercion
                 :muuntaja m/instance
                 :middleware [[wrap-cors
                               :access-control-allow-origin [#"http://localhost:4200"]
                               :access-control-allow-methods [:get :post :put :delete]]
                              parameters-middleware
                              format-negotiate-middleware
                              format-response-middleware
                              exception-middleware
                              format-request-middleware
                              coerce-exceptions-middleware
                              coerce-request-middleware
                              coerce-response-middleware]}})
      (ring/routes
          (ring/redirect-trailing-slash-handler)
          (ring/create-default-handler
            {:not-found (constantly {:status 404 :body "Route not found"})}))))

(defn stop-server []
   (when-not (nil? @server)
       ;; graceful shutdown: wait 100ms for existing requests to be finished
       ;; :timeout is optional, when no timeout, stop immediately
       (@server :timeout 100)
       (reset! server nil)))

(defn -main [& args]
   ;; The #' is useful when you want to hot-reload code
   ;; You may want to take a look: https://github.com/clojure/tools.namespace
   ;; and https://http-kit.github.io/migration.html#reload
   (println "Server started")
   (reset! server (run-server #'app {:port 8080})))

(defn restart-server []
   (stop-server)
   (-main))

(comment
   (restart-server)
   @server
   (-main)
   (app {:request-method :get :uri "/api/contacts"}))