goog.provide('contacts.components.contact_list');

contacts.components.contact_list.contact_list_item = (function (){var G__33440 = (function contacts$components$contact_list$contact_list_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33442 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33442,(0),null);
var map__33446__$1 = cljs.core.__destructure_map(map__33446);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33446__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

return helix.core.get_react().createElement("li",null,helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("p",null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"first_name","first_name",-1744629757).cljs$core$IFn$_invoke$arity$1(contact))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"last_name","last_name",44937527).cljs$core$IFn$_invoke$arity$1(contact))].join(''))));
});
if(goog.DEBUG === true){
var G__33448 = G__33440;
goog.object.set(G__33448,"displayName","contacts.components.contact-list/contact-list-item");

return G__33448;
} else {
return G__33440;
}
})();




contacts.components.contact_list.contact_list = (function (){var G__33454 = (function contacts$components$contact_list$contact_list(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

var vec__33462 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(1),null);
var contacts__$1 = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(state);
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement("ul",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,contact){
return helix.core.get_react().createElement(contacts.components.contact_list.contact_list_item,(function (){var obj33470 = ({"key":i,"contact":contact});
return obj33470;
})());
}),contacts__$1)));
});
if(goog.DEBUG === true){
var G__33472 = G__33454;
goog.object.set(G__33472,"displayName","contacts.components.contact-list/contact-list");

return G__33472;
} else {
return G__33454;
}
})();




//# sourceMappingURL=contacts.components.contact_list.js.map
