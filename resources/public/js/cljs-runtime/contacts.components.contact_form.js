goog.provide('contacts.components.contact_form');

contacts.components.contact_form.contact_display_item = (function (){var G__29337 = (function contacts$components$contact_form$contact_display_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__29338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__29341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var map__29341__$1 = cljs.core.__destructure_map(map__29341);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29341__$1,new cljs.core.Keyword(null,"value","value",305978217));

return helix.core.get_react().createElement("p",null,helix.core.get_react().createElement("strong",null,contacts.utils.make_label_str(label)),value);
});
if(goog.DEBUG === true){
var G__29342 = G__29337;
goog.object.set(G__29342,"displayName","contacts.components.contact-form/contact-display-item");

return G__29342;
} else {
return G__29337;
}
})();




contacts.components.contact_form.contact_display = (function (){var G__29345 = (function contacts$components$contact_form$contact_display(props__26563__auto__,maybe_ref__26564__auto__){
var vec__29346 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__29349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346,(0),null);
var map__29349__$1 = cljs.core.__destructure_map(map__29349);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29349__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

return helix.core.get_react().createElement(helix.core.Fragment,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_display_item,(function (){var obj29351 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(contact,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i});
return obj29351;
})());
}),contacts.utils.contact_form_fields));
});
if(goog.DEBUG === true){
var G__29352 = G__29345;
goog.object.set(G__29352,"displayName","contacts.components.contact-form/contact-display");

return G__29352;
} else {
return G__29345;
}
})();




contacts.components.contact_form.contact_edit_item = (function (){var G__29355 = (function contacts$components$contact_form$contact_edit_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__29356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__29359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356,(0),null);
var map__29359__$1 = cljs.core.__destructure_map(map__29359);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("label",(function (){var obj29361 = ({"htmlFor":label,"className":"font-bold"});
return obj29361;
})(),contacts.utils.make_label_str(label)),helix.core.get_react().createElement("input",(function (){var obj29363 = ({"id":label,"className":"shadow border rounded w-full py-2 px-3 mb-3","value":helix.impl.props.or_undefined(value),"onChange":on_change});
return obj29363;
})()));
});
if(goog.DEBUG === true){
var G__29364 = G__29355;
goog.object.set(G__29364,"displayName","contacts.components.contact-form/contact-edit-item");

return G__29364;
} else {
return G__29355;
}
})();




contacts.components.contact_form.contact_edit = (function (){var G__29368 = (function contacts$components$contact_form$contact_edit(props__26563__auto__,maybe_ref__26564__auto__){
var vec__29369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__29372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var map__29372__$1 = cljs.core.__destructure_map(map__29372);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29372__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__29373 = helix.hooks.use_state(contact);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29373,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29373,(1),null);
return helix.core.get_react().createElement("form",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_edit_item,(function (){var obj29377 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i,"on-change":(function (p1__29365_SHARP_){
var G__29378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v),p1__29365_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__29378) : set_state.call(null,G__29378));
})});
return obj29377;
})());
}),contacts.utils.contact_form_fields));
});
if(goog.DEBUG === true){
var G__29379 = G__29368;
goog.object.set(G__29379,"displayName","contacts.components.contact-form/contact-edit");

return G__29379;
} else {
return G__29368;
}
})();




contacts.components.contact_form.contact_form = (function (){var G__29382 = (function contacts$components$contact_form$contact_form(props__26563__auto__,maybe_ref__26564__auto__){
var vec__29383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__29386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(0),null);
var map__29386__$1 = cljs.core.__destructure_map(map__29386);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29386__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__29387 = helix.hooks.use_state(false);
var edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(0),null);
var set_edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29387,(1),null);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Contact Form"),helix.core.get_react().createElement("button",(function (){var obj29391 = ({"onClick":(function (){
var G__29392 = cljs.core.not(edit);
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(G__29392) : set_edit.call(null,G__29392));
})});
return obj29391;
})(),"toggle"),(cljs.core.truth_(edit)?helix.core.get_react().createElement(contacts.components.contact_form.contact_edit,(function (){var obj29394 = ({"contact":contact});
return obj29394;
})()):helix.core.get_react().createElement(contacts.components.contact_form.contact_display,(function (){var obj29396 = ({"contact":contact});
return obj29396;
})())));
});
if(goog.DEBUG === true){
var G__29397 = G__29382;
goog.object.set(G__29397,"displayName","contacts.components.contact-form/contact-form");

return G__29397;
} else {
return G__29382;
}
})();




//# sourceMappingURL=contacts.components.contact_form.js.map
