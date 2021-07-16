(ns contacts.core
   (:require
      [ajax.core :refer [GET]]
      [helix.core :refer [defnc $ <>]]
      [helix.dom :as d]
      ["react-dom" :as dom]))

(defnc nav []
   (d/nav {:class '[py-4 shadow]}
      (d/div {:class '[container]}
         (d/h2 {:class '[text-xl]} "Contact Book"))))

(defnc app []
   (<>
      ($ nav)))

(defn ^:export init []
   (dom/render ($ app) (js/document.getElementById "app")))

(comment
   (GET "http://localhost:8080/api/contacts"
        {:handler (fn [response]
                      (.log js/console response))}))