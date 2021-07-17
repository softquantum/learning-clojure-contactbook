goog.provide('contacts.utils');
contacts.utils.contact_form_fields = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["first_name","last_name","email"], null);
contacts.utils.make_label_str = (function contacts$utils$make_label_str(s){
return [clojure.string.capitalize(clojure.string.replace(s,"_"," ")),": "].join('');
});
contacts.utils.api_host = "http://localhost:8080/api";

//# sourceMappingURL=contacts.utils.js.map
