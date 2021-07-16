(ns contacts.core
   (:require [org.httpkit.server :refer [run-server]]
             [reitit.ring :as ring]
             [reitit.ring.middleware.exception :refer [exception-middleware]]
             [reitit.ring.middleware.muuntaja :refer [format-negotiate-middleware
                                                      format-request-middleware
                                                      format-response-middleware]]
             [muuntaja.core :as m]
             [contacts.db :as db]))

(defonce server (atom nil))

(def app
   (ring/ring-handler
      (ring/router
         [["/api"
            ["/ping" {:get (fn [req]
                             {:status 200
                              :body {:ping "pong"}})}]
            ["/contacts" {:get (fn [req]
                                  {:status 200
                                   :body (db/get-contacts db/config)})}]]]
         {:data {:muuntaja m/instance
                 :middleware [format-negotiate-middleware
                              format-request-middleware
                              exception-middleware
                              format-response-middleware]}})
      (ring/routes
          (ring/redirect-trailing-slash-handler)
          (ring/create-default-handler
            {:not-found (constantly {:status 404
                                     :body "Route not found"})}))))

(defn stop-server [] <
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




