goog.provide('contacts.components.contact_list');

contacts.components.contact_list.contact_list_item = (function (){var G__27656 = (function contacts$components$contact_list$contact_list_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__27657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__27660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27657,(0),null);
var map__27660__$1 = cljs.core.__destructure_map(map__27660);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27660__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

return helix.core.get_react().createElement("li",null,helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("p",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first_name","first_name",-1744629757).cljs$core$IFn$_invoke$arity$1(contact))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last_name","last_name",44937527).cljs$core$IFn$_invoke$arity$1(contact))].join(''))));
});
if(goog.DEBUG === true){
var G__27661 = G__27656;
goog.object.set(G__27661,"displayName","contacts.components.contact-list/contact-list-item");

return G__27661;
} else {
return G__27656;
}
})();




contacts.components.contact_list.contact_list = (function (){var G__27664 = (function contacts$components$contact_list$contact_list(props__26563__auto__,maybe_ref__26564__auto__){
var vec__27665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__27668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27665,(0),null);
var map__27668__$1 = cljs.core.__destructure_map(map__27668);
var contacts__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27668__$1,new cljs.core.Keyword(null,"contacts","contacts",333503174));

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("ul",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,contact){
return helix.core.get_react().createElement(contacts.components.contact_list.contact_list_item,(function (){var obj27670 = ({"key":i,"contact":contact});
return obj27670;
})());
}),contacts__$1)));
});
if(goog.DEBUG === true){
var G__27671 = G__27664;
goog.object.set(G__27671,"displayName","contacts.components.contact-list/contact-list");

return G__27671;
} else {
return G__27664;
}
})();




//# sourceMappingURL=contacts.components.contact_list.js.map
