goog.provide('contacts.state');
contacts.state.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.PersistentVector.EMPTY], null);
contacts.state.app_state = (helix.core.create_context.cljs$core$IFn$_invoke$arity$1 ? helix.core.create_context.cljs$core$IFn$_invoke$arity$1(null) : helix.core.create_context.call(null,null));
if((typeof contacts !== 'undefined') && (typeof contacts.state !== 'undefined') && (typeof contacts.state.app_reducer !== 'undefined')){
} else {
contacts.state.app_reducer = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33385 = cljs.core.get_global_hierarchy;
return (fexpr__33385.cljs$core$IFn$_invoke$arity$0 ? fexpr__33385.cljs$core$IFn$_invoke$arity$0() : fexpr__33385.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("contacts.state","app-reducer"),(function (_,action){
return cljs.core.first(action);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
contacts.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("contacts.state","set-contacts","contacts.state/set-contacts",-2002658512),(function (state,p__33386){
var vec__33387 = p__33386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"contacts","contacts",333503174),payload);
}));
contacts.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("contacts.state","set-selected","contacts.state/set-selected",-323723377),(function (state,p__33390){
var vec__33391 = p__33390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selected","selected",574897764),payload);
}));
contacts.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("contacts.state","update-contact","contacts.state/update-contact",1496750658),(function (state,p__33395){
var vec__33396 = p__33395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(1),null);
var prev = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(state);
var update_contact = (function (p1__33394_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33394_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))){
return payload;
} else {
return p1__33394_SHARP_;
}
});
var next = cljs.core.map.cljs$core$IFn$_invoke$arity$2(update_contact,prev);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"contacts","contacts",333503174),next);
}));
contacts.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("contacts.state","add-contact","contacts.state/add-contact",-1077109972),(function (state,p__33399){
var vec__33400 = p__33399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(1),null);
var prev = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(state);
var next = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev,payload);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"contacts","contacts",333503174),next);
}));
contacts.state.app_reducer.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("contacts.state","remove-contact","contacts.state/remove-contact",-156109479),(function (state,p__33404){
var vec__33405 = p__33404;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33405,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33405,(1),null);
var prev = new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(state);
var not_matching = (function (p1__33403_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33403_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(payload))));
});
var next = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(not_matching,prev);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"contacts","contacts",333503174),next);
}));
contacts.state.use_app_state = (function contacts$state$use_app_state(){
var vec__33412 = (helix.hooks.use_context.cljs$core$IFn$_invoke$arity$1 ? helix.hooks.use_context.cljs$core$IFn$_invoke$arity$1(contacts.state.app_state) : helix.hooks.use_context.call(null,contacts.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33412,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33412,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (response){
var G__33415_33430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","set-contacts","contacts.state/set-contacts",-2002658512),response], null);
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33415_33430) : dispatch.call(null,G__33415_33430));

var G__33416 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","set-selected","contacts.state/set-selected",-323723377),cljs.core.first(response)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33416) : dispatch.call(null,G__33416));
}),new cljs.core.Keyword(null,"select","select",1147833503),(function (p1__33408_SHARP_){
var G__33417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","set-selected","contacts.state/set-selected",-323723377),p1__33408_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33417) : dispatch.call(null,G__33417));
}),new cljs.core.Keyword(null,"new-contact","new-contact",-1319881990),(function (){
var G__33418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","set-selected","contacts.state/set-selected",-323723377),null], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33418) : dispatch.call(null,G__33418));
}),new cljs.core.Keyword(null,"add-contact","add-contact",711092342),(function (p1__33409_SHARP_){
var G__33419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","add-contact","contacts.state/add-contact",-1077109972),p1__33409_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33419) : dispatch.call(null,G__33419));
}),new cljs.core.Keyword(null,"update-contact","update-contact",-1253870740),(function (p1__33410_SHARP_){
var G__33420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","update-contact","contacts.state/update-contact",1496750658),p1__33410_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33420) : dispatch.call(null,G__33420));
}),new cljs.core.Keyword(null,"remove-contact","remove-contact",1695390755),(function (p1__33411_SHARP_){
var G__33421 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("contacts.state","remove-contact","contacts.state/remove-contact",-156109479),p1__33411_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__33421) : dispatch.call(null,G__33421));
})], null)], null);
});

//# sourceMappingURL=contacts.state.js.map
