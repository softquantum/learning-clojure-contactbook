(ns contacts.state
   (:require [helix.core :refer [create-context]]
             [helix.hooks :as hooks]))

(def initial-state {:selected nil
                    :contacts []})

(def app-state (create-context nil))

;(defn app-reducer [state [action-type action-payload]]
;   ;(case action-type...)
;   ;usually in a switch case but here we are going to use multi-methods
;   state)

(defmulti app-reducer
          (fn [_ action]
             (first action)))

(defmethod app-reducer
   ::set-contacts [state [_ payload]]
   (assoc state :contacts payload))

(defmethod app-reducer
   ::set-selected [state [_ payload]]
   (assoc state :selected payload))

(defmethod app-reducer
   ::update-contact [state [_ payload]]
   (let [prev (:contacts state)
         update-contact #(if (= (:id %) (:id payload))
                            payload
                            %)
         next (map update-contact prev)]
      (assoc state :contacts next)))

(defmethod app-reducer
   ::add-contact [state [_ payload]]
   ;(assoc state :contacts (conj (:contacts state) payload)))
   (let [prev (:contacts state)
         next (conj prev payload)]
      (assoc state :contacts next)))

(defmethod app-reducer
   ::remove-contact [state [_ payload]]
   (let [prev (:contacts state)
         not-matching #(not (= (:id %) (:id payload)))
         next (filter not-matching prev)]
      (assoc state :contacts next)))

;(comment
;   (app-reducer initial-state [:set-contacts [{:data 1}
;                                              {:data 2}]])
;   (app-reducer {:selected nil
;                 :contacts [{:id 1
;                             :value "Kelvin"}
;                            {:id 2
;                             :value "Andrea"}]}
;                [::update-contact {:id 1
;                                   :value "Kelvin Updated"}]))

;custom hook
(defn use-app-state []
   (let [[state dispatch] (hooks/use-context app-state)]
      [state {:init (fn [response]
                       (dispatch [::set-contacts response])
                       (dispatch [::set-selected (first response)]))
              :select #(dispatch [::set-selected %])
              :new-contact #(dispatch [::set-selected nil])
              :add-contact #(dispatch [::add-contact %])
              :update-contact #(dispatch [::update-contact %])
              :remove-contact #(dispatch [::remove-contact %])}]))

