goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__30346,p__30347){
var map__30348 = p__30346;
var map__30348__$1 = cljs.core.__destructure_map(map__30348);
var svc = map__30348__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30348__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30348__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30348__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30349 = p__30347;
var map__30349__$1 = cljs.core.__destructure_map(map__30349);
var msg = map__30349__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30349__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__30351,p__30352){
var map__30353 = p__30351;
var map__30353__$1 = cljs.core.__destructure_map(map__30353);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__30354 = p__30352;
var map__30354__$1 = cljs.core.__destructure_map(map__30354);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30354__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__30356,p__30357){
var map__30360 = p__30356;
var map__30360__$1 = cljs.core.__destructure_map(map__30360);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30360__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30360__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__30361 = p__30357;
var map__30361__$1 = cljs.core.__destructure_map(map__30361);
var msg = map__30361__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30361__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__30367,tid){
var map__30369 = p__30367;
var map__30369__$1 = cljs.core.__destructure_map(map__30369);
var svc = map__30369__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__30380 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__30381 = null;
var count__30382 = (0);
var i__30383 = (0);
while(true){
if((i__30383 < count__30382)){
var vec__30396 = chunk__30381.cljs$core$IIndexed$_nth$arity$2(null,i__30383);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30396,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30417 = seq__30380;
var G__30418 = chunk__30381;
var G__30419 = count__30382;
var G__30420 = (i__30383 + (1));
seq__30380 = G__30417;
chunk__30381 = G__30418;
count__30382 = G__30419;
i__30383 = G__30420;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30380);
if(temp__5753__auto__){
var seq__30380__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30380__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__30380__$1);
var G__30421 = cljs.core.chunk_rest(seq__30380__$1);
var G__30422 = c__4649__auto__;
var G__30423 = cljs.core.count(c__4649__auto__);
var G__30424 = (0);
seq__30380 = G__30421;
chunk__30381 = G__30422;
count__30382 = G__30423;
i__30383 = G__30424;
continue;
} else {
var vec__30400 = cljs.core.first(seq__30380__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30400,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30400,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__30426 = cljs.core.next(seq__30380__$1);
var G__30427 = null;
var G__30428 = (0);
var G__30429 = (0);
seq__30380 = G__30426;
chunk__30381 = G__30427;
count__30382 = G__30428;
i__30383 = G__30429;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__30370_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__30370_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__30371_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__30371_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__30372_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__30372_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__30373_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__30373_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__30407){
var map__30408 = p__30407;
var map__30408__$1 = cljs.core.__destructure_map(map__30408);
var svc = map__30408__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30408__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30408__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
