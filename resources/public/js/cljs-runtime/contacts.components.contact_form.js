goog.provide('contacts.components.contact_form');

contacts.components.contact_form.contact_display_item = (function (){var G__33424 = (function contacts$components$contact_form$contact_display_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33425,(0),null);
var map__33428__$1 = cljs.core.__destructure_map(map__33428);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33428__$1,new cljs.core.Keyword(null,"value","value",305978217));

return helix.core.get_react().createElement("p",null,helix.core.get_react().createElement("strong",null,contacts.utils.make_label_str(label)),value);
});
if(goog.DEBUG === true){
var G__33429 = G__33424;
goog.object.set(G__33429,"displayName","contacts.components.contact-form/contact-display-item");

return G__33429;
} else {
return G__33424;
}
})();




contacts.components.contact_form.contact_display = (function (){var G__33433 = (function contacts$components$contact_form$contact_display(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33434,(0),null);
var map__33437__$1 = cljs.core.__destructure_map(map__33437);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

return helix.core.get_react().createElement(helix.core.Fragment,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_display_item,(function (){var obj33443 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(contact,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i});
return obj33443;
})());
}),contacts.utils.contact_form_fields));
});
if(goog.DEBUG === true){
var G__33447 = G__33433;
goog.object.set(G__33447,"displayName","contacts.components.contact-form/contact-display");

return G__33447;
} else {
return G__33433;
}
})();




contacts.components.contact_form.contact_edit_item = (function (){var G__33451 = (function contacts$components$contact_form$contact_edit_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33455,(0),null);
var map__33458__$1 = cljs.core.__destructure_map(map__33458);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("label",(function (){var obj33466 = ({"htmlFor":label,"className":"font-bold"});
return obj33466;
})(),contacts.utils.make_label_str(label)),helix.core.get_react().createElement("input",(function (){var obj33468 = ({"id":label,"className":"shadow border rounded w-full py-2 px-3 mb-3","value":helix.impl.props.or_undefined(value),"onChange":on_change});
return obj33468;
})()));
});
if(goog.DEBUG === true){
var G__33471 = G__33451;
goog.object.set(G__33471,"displayName","contacts.components.contact-form/contact-edit-item");

return G__33471;
} else {
return G__33451;
}
})();




contacts.components.contact_form.contact_edit = (function (){var G__33476 = (function contacts$components$contact_form$contact_edit(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(0),null);
var map__33480__$1 = cljs.core.__destructure_map(map__33480);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33480__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__33481 = helix.hooks.use_state(contact);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33481,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33481,(1),null);
return helix.core.get_react().createElement("form",null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_edit_item,(function (){var obj33485 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i,"on-change":(function (p1__33473_SHARP_){
var G__33486 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v),p1__33473_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__33486) : set_state.call(null,G__33486));
})});
return obj33485;
})());
}),contacts.utils.contact_form_fields));
});
if(goog.DEBUG === true){
var G__33487 = G__33476;
goog.object.set(G__33487,"displayName","contacts.components.contact-form/contact-edit");

return G__33487;
} else {
return G__33476;
}
})();




contacts.components.contact_form.contact_form = (function (){var G__33490 = (function contacts$components$contact_form$contact_form(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__33494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33491,(0),null);
var map__33494__$1 = cljs.core.__destructure_map(map__33494);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33494__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__33495 = helix.hooks.use_state(false);
var edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495,(0),null);
var set_edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495,(1),null);
var vec__33498 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33498,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33498,(1),null);
var contact__$1 = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state);
return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("h1",null,"Contact Form"),helix.core.get_react().createElement("button",(function (){var obj33502 = ({"onClick":(function (){
var G__33503 = cljs.core.not(edit);
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(G__33503) : set_edit.call(null,G__33503));
})});
return obj33502;
})(),"toggle"),(cljs.core.truth_(edit)?helix.core.get_react().createElement(contacts.components.contact_form.contact_edit,(function (){var obj33505 = ({"contact":contact__$1});
return obj33505;
})()):helix.core.get_react().createElement(contacts.components.contact_form.contact_display,(function (){var obj33507 = ({"contact":contact__$1});
return obj33507;
})())));
});
if(goog.DEBUG === true){
var G__33508 = G__33490;
goog.object.set(G__33508,"displayName","contacts.components.contact-form/contact-form");

return G__33508;
} else {
return G__33490;
}
})();




//# sourceMappingURL=contacts.components.contact_form.js.map
