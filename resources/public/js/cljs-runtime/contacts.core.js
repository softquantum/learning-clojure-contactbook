goog.provide('contacts.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

contacts.core.app = (function (){var G__33511 = (function contacts$core$app(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33512 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

var vec__33515 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515,(1),null);
var init = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(actions);
var G__33518_33532 = helix.hooks.wrap_fx((function (){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:8080/api/contacts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),init], null)], 0));
}));
var G__33519_33533 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__33518_33532,G__33519_33533) : helix.hooks.raw_use_effect.call(null,G__33518_33532,G__33519_33533));

console.log(state);

if(cljs.core.truth_(state)){
return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(contacts.components.nav.nav,null),helix.core.get_react().createElement("div",(function (){var obj33521 = ({"className":"container pt-4"});
return obj33521;
})(),helix.core.get_react().createElement(contacts.components.contact_list.contact_list,null),helix.core.get_react().createElement(contacts.components.contact_form.contact_form,null)));
} else {
return helix.core.get_react().createElement("p",null,"Loading...");
}
});
if(goog.DEBUG === true){
var G__33522 = G__33511;
goog.object.set(G__33522,"displayName","contacts.core/app");

return G__33522;
} else {
return G__33511;
}
})();




contacts.core.provided_app = (function (){var G__33525 = (function contacts$core$provided_app(props__26563__auto__,maybe_ref__26564__auto__){
var vec__33526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

return helix.core.get_react().createElement(contacts.state.app_state.Provider,(function (){var obj33530 = ({"value":helix.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2(contacts.state.app_reducer,contacts.state.initial_state)});
return obj33530;
})(),helix.core.get_react().createElement(contacts.core.app,null));
});
if(goog.DEBUG === true){
var G__33531 = G__33525;
goog.object.set(G__33531,"displayName","contacts.core/provided-app");

return G__33531;
} else {
return G__33525;
}
})();



contacts.core.init = (function contacts$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(contacts.core.provided_app,null),document.getElementById("app"));
});
goog.exportSymbol('contacts.core.init', contacts.core.init);

//# sourceMappingURL=contacts.core.js.map
