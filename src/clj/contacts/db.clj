(ns contacts.db
   (:require [hugsql.core :as hugsql]))

(def config
   {:classname "org.postgresql.Driver"
    :subprotocol "postgresql"
    :subname "//localhost:5432/clj_contacts"
    :user "postgres"
    :password ""})

(hugsql/def-db-fns "contacts.sql")

(comment
   (create-contacts-table config)
   (get-contacts config)
   (insert-contact config {:first-name "Ginger"
                           :last-name "Ale"
                           :email "ga@dot.com"})
   (get-contact-by-id config {:id 1})
   (update-contact-by-id config {:id 4
                                 :first-name "Maxime updated"
                                 :last-name "Decooman"
                                 :email "email@dot.com"})
   (delete-contact-by-id config {:id 1}))