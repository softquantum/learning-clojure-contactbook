goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29166,res){
var map__29167 = p__29166;
var map__29167__$1 = cljs.core.__destructure_map(map__29167);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29167__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29167__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29168 = res;
var G__29168__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29168,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29168);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29168__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29168__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29176 = arguments.length;
switch (G__29176) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29178,msg,handlers,timeout_after_ms){
var map__29179 = p__29178;
var map__29179__$1 = cljs.core.__destructure_map(map__29179);
var runtime = map__29179__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29179__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___29447 = arguments.length;
var i__4830__auto___29448 = (0);
while(true){
if((i__4830__auto___29448 < len__4829__auto___29447)){
args__4835__auto__.push((arguments[i__4830__auto___29448]));

var G__29449 = (i__4830__auto___29448 + (1));
i__4830__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29189,ev,args){
var map__29190 = p__29189;
var map__29190__$1 = cljs.core.__destructure_map(map__29190);
var runtime = map__29190__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29190__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29191 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29194 = null;
var count__29195 = (0);
var i__29196 = (0);
while(true){
if((i__29196 < count__29195)){
var ext = chunk__29194.cljs$core$IIndexed$_nth$arity$2(null,i__29196);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29456 = seq__29191;
var G__29457 = chunk__29194;
var G__29458 = count__29195;
var G__29459 = (i__29196 + (1));
seq__29191 = G__29456;
chunk__29194 = G__29457;
count__29195 = G__29458;
i__29196 = G__29459;
continue;
} else {
var G__29460 = seq__29191;
var G__29461 = chunk__29194;
var G__29462 = count__29195;
var G__29463 = (i__29196 + (1));
seq__29191 = G__29460;
chunk__29194 = G__29461;
count__29195 = G__29462;
i__29196 = G__29463;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29191);
if(temp__5753__auto__){
var seq__29191__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29191__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29191__$1);
var G__29467 = cljs.core.chunk_rest(seq__29191__$1);
var G__29468 = c__4649__auto__;
var G__29469 = cljs.core.count(c__4649__auto__);
var G__29470 = (0);
seq__29191 = G__29467;
chunk__29194 = G__29468;
count__29195 = G__29469;
i__29196 = G__29470;
continue;
} else {
var ext = cljs.core.first(seq__29191__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29471 = cljs.core.next(seq__29191__$1);
var G__29472 = null;
var G__29473 = (0);
var G__29474 = (0);
seq__29191 = G__29471;
chunk__29194 = G__29472;
count__29195 = G__29473;
i__29196 = G__29474;
continue;
} else {
var G__29475 = cljs.core.next(seq__29191__$1);
var G__29476 = null;
var G__29477 = (0);
var G__29478 = (0);
seq__29191 = G__29475;
chunk__29194 = G__29476;
count__29195 = G__29477;
i__29196 = G__29478;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29185){
var G__29186 = cljs.core.first(seq29185);
var seq29185__$1 = cljs.core.next(seq29185);
var G__29187 = cljs.core.first(seq29185__$1);
var seq29185__$2 = cljs.core.next(seq29185__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29186,G__29187,seq29185__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29242,p__29243){
var map__29244 = p__29242;
var map__29244__$1 = cljs.core.__destructure_map(map__29244);
var runtime = map__29244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29245 = p__29243;
var map__29245__$1 = cljs.core.__destructure_map(map__29245);
var msg = map__29245__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29245__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29255 = cljs.core.deref(state_ref);
var map__29255__$1 = cljs.core.__destructure_map(map__29255);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29255__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29270){
var map__29271 = p__29270;
var map__29271__$1 = cljs.core.__destructure_map(map__29271);
var runtime = map__29271__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29275,msg){
var map__29276 = p__29275;
var map__29276__$1 = cljs.core.__destructure_map(map__29276);
var runtime = map__29276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29292,key,p__29293){
var map__29295 = p__29292;
var map__29295__$1 = cljs.core.__destructure_map(map__29295);
var state = map__29295__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29295__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29297 = p__29293;
var map__29297__$1 = cljs.core.__destructure_map(map__29297);
var spec = map__29297__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29297__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29321,key,spec){
var map__29322 = p__29321;
var map__29322__$1 = cljs.core.__destructure_map(map__29322);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29328_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29328_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29329_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29329_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29330_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29330_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29331_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29331_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29332_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29332_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29357,key){
var map__29359 = p__29357;
var map__29359__$1 = cljs.core.__destructure_map(map__29359);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29359__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29364,msg){
var map__29366 = p__29364;
var map__29366__$1 = cljs.core.__destructure_map(map__29366);
var runtime = map__29366__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29366__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29373,p__29374){
var map__29375 = p__29373;
var map__29375__$1 = cljs.core.__destructure_map(map__29375);
var runtime = map__29375__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29376 = p__29374;
var map__29376__$1 = cljs.core.__destructure_map(map__29376);
var msg = map__29376__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29376__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29376__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29398 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29400 = null;
var count__29401 = (0);
var i__29402 = (0);
while(true){
if((i__29402 < count__29401)){
var map__29418 = chunk__29400.cljs$core$IIndexed$_nth$arity$2(null,i__29402);
var map__29418__$1 = cljs.core.__destructure_map(map__29418);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29418__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29514 = seq__29398;
var G__29515 = chunk__29400;
var G__29516 = count__29401;
var G__29517 = (i__29402 + (1));
seq__29398 = G__29514;
chunk__29400 = G__29515;
count__29401 = G__29516;
i__29402 = G__29517;
continue;
} else {
var G__29518 = seq__29398;
var G__29519 = chunk__29400;
var G__29520 = count__29401;
var G__29521 = (i__29402 + (1));
seq__29398 = G__29518;
chunk__29400 = G__29519;
count__29401 = G__29520;
i__29402 = G__29521;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29398);
if(temp__5753__auto__){
var seq__29398__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29398__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29398__$1);
var G__29522 = cljs.core.chunk_rest(seq__29398__$1);
var G__29523 = c__4649__auto__;
var G__29524 = cljs.core.count(c__4649__auto__);
var G__29525 = (0);
seq__29398 = G__29522;
chunk__29400 = G__29523;
count__29401 = G__29524;
i__29402 = G__29525;
continue;
} else {
var map__29423 = cljs.core.first(seq__29398__$1);
var map__29423__$1 = cljs.core.__destructure_map(map__29423);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29423__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29526 = cljs.core.next(seq__29398__$1);
var G__29527 = null;
var G__29528 = (0);
var G__29529 = (0);
seq__29398 = G__29526;
chunk__29400 = G__29527;
count__29401 = G__29528;
i__29402 = G__29529;
continue;
} else {
var G__29530 = cljs.core.next(seq__29398__$1);
var G__29531 = null;
var G__29532 = (0);
var G__29533 = (0);
seq__29398 = G__29530;
chunk__29400 = G__29531;
count__29401 = G__29532;
i__29402 = G__29533;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
