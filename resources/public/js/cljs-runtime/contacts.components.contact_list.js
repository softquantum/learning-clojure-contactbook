goog.provide('contacts.components.contact_list');

contacts.components.contact_list.contact_list_item = (function (){var G__35895 = (function contacts$components$contact_list$contact_list_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__35896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35896,(0),null);
var map__35899__$1 = cljs.core.__destructure_map(map__35899);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35899__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__35900 = contacts.state.use_app_state();
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35900,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35900,(1),null);
var set_selected = new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(actions);
var remove_contact = new cljs.core.Keyword(null,"remove-contact","remove-contact",1695390755).cljs$core$IFn$_invoke$arity$1(actions);
return helix.core.get_react().createElement("li",(function (){var obj35904 = ({"className":"mb-2"});
return obj35904;
})(),helix.core.get_react().createElement("div",(function (){var obj35906 = ({"className":"flex justify-between"});
return obj35906;
})(),helix.core.get_react().createElement("p",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first_name","first_name",-1744629757).cljs$core$IFn$_invoke$arity$1(contact))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last_name","last_name",44937527).cljs$core$IFn$_invoke$arity$1(contact))].join('')),helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("button",(function (){var obj35908 = ({"className":"bg-green-500 text-white mx-1 py-1 px-4 rounded focus:bg-green-300","onClick":(function (){
return (set_selected.cljs$core$IFn$_invoke$arity$1 ? set_selected.cljs$core$IFn$_invoke$arity$1(contact) : set_selected.call(null,contact));
})});
return obj35908;
})(),"Select"),helix.core.get_react().createElement("button",(function (){var obj35910 = ({"className":"bg-red-500 text-white mx-1 py-1 px-4 rounded","onClick":(function (){
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:8080/api/contacts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(contact))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (___$1){
return (remove_contact.cljs$core$IFn$_invoke$arity$1 ? remove_contact.cljs$core$IFn$_invoke$arity$1(contact) : remove_contact.call(null,contact));
})], null)], 0));
})});
return obj35910;
})(),"Delete"))));
});
if(goog.DEBUG === true){
var G__35911 = G__35895;
goog.object.set(G__35911,"displayName","contacts.components.contact-list/contact-list-item");

return G__35911;
} else {
return G__35895;
}
})();




contacts.components.contact_list.contact_list = (function (){var G__35914 = (function contacts$components$contact_list$contact_list(props__26563__auto__,maybe_ref__26564__auto__){
var vec__35915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

var vec__35918 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35918,(1),null);
var contacts__$1 = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(state);
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("ul",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,contact){
return helix.core.get_react().createElement(contacts.components.contact_list.contact_list_item,(function (){var obj35922 = ({"key":i,"contact":contact});
return obj35922;
})());
}),contacts__$1)));
});
if(goog.DEBUG === true){
var G__35923 = G__35914;
goog.object.set(G__35923,"displayName","contacts.components.contact-list/contact-list");

return G__35923;
} else {
return G__35914;
}
})();




//# sourceMappingURL=contacts.components.contact_list.js.map
