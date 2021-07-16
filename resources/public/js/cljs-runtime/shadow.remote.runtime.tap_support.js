goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35460,p__35461){
var map__35462 = p__35460;
var map__35462__$1 = cljs.core.__destructure_map(map__35462);
var svc = map__35462__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35462__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35463 = p__35461;
var map__35463__$1 = cljs.core.__destructure_map(map__35463);
var msg = map__35463__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35463__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35463__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35471,p__35472){
var map__35473 = p__35471;
var map__35473__$1 = cljs.core.__destructure_map(map__35473);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35473__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35474 = p__35472;
var map__35474__$1 = cljs.core.__destructure_map(map__35474);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35474__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35480,p__35481){
var map__35483 = p__35480;
var map__35483__$1 = cljs.core.__destructure_map(map__35483);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35484 = p__35481;
var map__35484__$1 = cljs.core.__destructure_map(map__35484);
var msg = map__35484__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35484__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35489,tid){
var map__35490 = p__35489;
var map__35490__$1 = cljs.core.__destructure_map(map__35490);
var svc = map__35490__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35490__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35501 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35502 = null;
var count__35503 = (0);
var i__35504 = (0);
while(true){
if((i__35504 < count__35503)){
var vec__35515 = chunk__35502.cljs$core$IIndexed$_nth$arity$2(null,i__35504);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35515,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35515,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35528 = seq__35501;
var G__35529 = chunk__35502;
var G__35530 = count__35503;
var G__35531 = (i__35504 + (1));
seq__35501 = G__35528;
chunk__35502 = G__35529;
count__35503 = G__35530;
i__35504 = G__35531;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35501);
if(temp__5753__auto__){
var seq__35501__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35501__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35501__$1);
var G__35532 = cljs.core.chunk_rest(seq__35501__$1);
var G__35533 = c__4649__auto__;
var G__35534 = cljs.core.count(c__4649__auto__);
var G__35535 = (0);
seq__35501 = G__35532;
chunk__35502 = G__35533;
count__35503 = G__35534;
i__35504 = G__35535;
continue;
} else {
var vec__35520 = cljs.core.first(seq__35501__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35520,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35536 = cljs.core.next(seq__35501__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__35501 = G__35536;
chunk__35502 = G__35537;
count__35503 = G__35538;
i__35504 = G__35539;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35492_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35492_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35493_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35493_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35494_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35494_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35497_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35497_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35524){
var map__35525 = p__35524;
var map__35525__$1 = cljs.core.__destructure_map(map__35525);
var svc = map__35525__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
