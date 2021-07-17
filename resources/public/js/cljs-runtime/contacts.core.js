goog.provide('contacts.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

contacts.core.app = (function (){var G__36144 = (function contacts$core$app(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

var vec__36148 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(1),null);
var init = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(actions);
var G__36153_36167 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/api/contacts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),init], null)], 0));
}));
var G__36154_36168 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__36153_36167,G__36154_36168) : helix.hooks.raw_use_effect.call(null,G__36153_36167,G__36154_36168));

console.log(state);

if(cljs.core.truth_(state)){
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(contacts.components.nav.nav,null),helix.core.get_react().createElement("div",(function (){var obj36156 = ({"className":"container pt-4"});
return obj36156;
})(),helix.core.get_react().createElement(contacts.components.contact_list.contact_list,null),helix.core.get_react().createElement(contacts.components.contact_form.contact_form,null)));
} else {
return helix.core.get_react().createElement("p",null,"Loading...");
}
});
if(goog.DEBUG === true){
var G__36157 = G__36144;
goog.object.set(G__36157,"displayName","contacts.core/app");

return G__36157;
} else {
return G__36144;
}
})();




contacts.core.provided_app = (function (){var G__36160 = (function contacts$core$provided_app(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

return helix.core.get_react().createElement(contacts.state.app_state.Provider,(function (){var obj36165 = ({"value":helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2(contacts.state.app_reducer,contacts.state.initial_state)});
return obj36165;
})(),helix.core.get_react().createElement(contacts.core.app,null));
});
if(goog.DEBUG === true){
var G__36166 = G__36160;
goog.object.set(G__36166,"displayName","contacts.core/provided-app");

return G__36166;
} else {
return G__36160;
}
})();



contacts.core.init = (function contacts$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(contacts.core.provided_app,null),document.getElementById("app"));
});
goog.exportSymbol('contacts.core.init', contacts.core.init);

//# sourceMappingURL=contacts.core.js.map
