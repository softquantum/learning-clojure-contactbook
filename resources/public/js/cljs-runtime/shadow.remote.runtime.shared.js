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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31876,res){
var map__31877 = p__31876;
var map__31877__$1 = cljs.core.__destructure_map(map__31877);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31877__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31877__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31880 = res;
var G__31880__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31880,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31880);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31880__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31880__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31884 = arguments.length;
switch (G__31884) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31892,msg,handlers,timeout_after_ms){
var map__31894 = p__31892;
var map__31894__$1 = cljs.core.__destructure_map(map__31894);
var runtime = map__31894__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31894__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32137 = arguments.length;
var i__4830__auto___32138 = (0);
while(true){
if((i__4830__auto___32138 < len__4829__auto___32137)){
args__4835__auto__.push((arguments[i__4830__auto___32138]));

var G__32141 = (i__4830__auto___32138 + (1));
i__4830__auto___32138 = G__32141;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31913,ev,args){
var map__31914 = p__31913;
var map__31914__$1 = cljs.core.__destructure_map(map__31914);
var runtime = map__31914__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31914__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31915 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31920 = null;
var count__31921 = (0);
var i__31922 = (0);
while(true){
if((i__31922 < count__31921)){
var ext = chunk__31920.cljs$core$IIndexed$_nth$arity$2(null,i__31922);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32144 = seq__31915;
var G__32145 = chunk__31920;
var G__32146 = count__31921;
var G__32147 = (i__31922 + (1));
seq__31915 = G__32144;
chunk__31920 = G__32145;
count__31921 = G__32146;
i__31922 = G__32147;
continue;
} else {
var G__32148 = seq__31915;
var G__32149 = chunk__31920;
var G__32150 = count__31921;
var G__32151 = (i__31922 + (1));
seq__31915 = G__32148;
chunk__31920 = G__32149;
count__31921 = G__32150;
i__31922 = G__32151;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31915);
if(temp__5753__auto__){
var seq__31915__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31915__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__31915__$1);
var G__32153 = cljs.core.chunk_rest(seq__31915__$1);
var G__32154 = c__4649__auto__;
var G__32155 = cljs.core.count(c__4649__auto__);
var G__32156 = (0);
seq__31915 = G__32153;
chunk__31920 = G__32154;
count__31921 = G__32155;
i__31922 = G__32156;
continue;
} else {
var ext = cljs.core.first(seq__31915__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32159 = cljs.core.next(seq__31915__$1);
var G__32160 = null;
var G__32161 = (0);
var G__32162 = (0);
seq__31915 = G__32159;
chunk__31920 = G__32160;
count__31921 = G__32161;
i__31922 = G__32162;
continue;
} else {
var G__32164 = cljs.core.next(seq__31915__$1);
var G__32165 = null;
var G__32166 = (0);
var G__32167 = (0);
seq__31915 = G__32164;
chunk__31920 = G__32165;
count__31921 = G__32166;
i__31922 = G__32167;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31905){
var G__31906 = cljs.core.first(seq31905);
var seq31905__$1 = cljs.core.next(seq31905);
var G__31907 = cljs.core.first(seq31905__$1);
var seq31905__$2 = cljs.core.next(seq31905__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31906,G__31907,seq31905__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31990,p__31991){
var map__31993 = p__31990;
var map__31993__$1 = cljs.core.__destructure_map(map__31993);
var runtime = map__31993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31994 = p__31991;
var map__31994__$1 = cljs.core.__destructure_map(map__31994);
var msg = map__31994__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31994__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31996 = cljs.core.deref(state_ref);
var map__31996__$1 = cljs.core.__destructure_map(map__31996);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31996__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32005){
var map__32006 = p__32005;
var map__32006__$1 = cljs.core.__destructure_map(map__32006);
var runtime = map__32006__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32010,msg){
var map__32011 = p__32010;
var map__32011__$1 = cljs.core.__destructure_map(map__32011);
var runtime = map__32011__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32011__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32019,key,p__32020){
var map__32022 = p__32019;
var map__32022__$1 = cljs.core.__destructure_map(map__32022);
var state = map__32022__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32022__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32023 = p__32020;
var map__32023__$1 = cljs.core.__destructure_map(map__32023);
var spec = map__32023__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32023__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32031,key,spec){
var map__32032 = p__32031;
var map__32032__$1 = cljs.core.__destructure_map(map__32032);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32034_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32034_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32035_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32035_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32036_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32036_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32037_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32037_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32038_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32038_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32045,key){
var map__32046 = p__32045;
var map__32046__$1 = cljs.core.__destructure_map(map__32046);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32053,msg){
var map__32054 = p__32053;
var map__32054__$1 = cljs.core.__destructure_map(map__32054);
var runtime = map__32054__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32062,p__32063){
var map__32064 = p__32062;
var map__32064__$1 = cljs.core.__destructure_map(map__32064);
var runtime = map__32064__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32064__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32065 = p__32063;
var map__32065__$1 = cljs.core.__destructure_map(map__32065);
var msg = map__32065__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32065__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32065__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__32095 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32097 = null;
var count__32098 = (0);
var i__32099 = (0);
while(true){
if((i__32099 < count__32098)){
var map__32112 = chunk__32097.cljs$core$IIndexed$_nth$arity$2(null,i__32099);
var map__32112__$1 = cljs.core.__destructure_map(map__32112);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32112__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32223 = seq__32095;
var G__32224 = chunk__32097;
var G__32225 = count__32098;
var G__32226 = (i__32099 + (1));
seq__32095 = G__32223;
chunk__32097 = G__32224;
count__32098 = G__32225;
i__32099 = G__32226;
continue;
} else {
var G__32227 = seq__32095;
var G__32228 = chunk__32097;
var G__32229 = count__32098;
var G__32230 = (i__32099 + (1));
seq__32095 = G__32227;
chunk__32097 = G__32228;
count__32098 = G__32229;
i__32099 = G__32230;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32095);
if(temp__5753__auto__){
var seq__32095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32095__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32095__$1);
var G__32232 = cljs.core.chunk_rest(seq__32095__$1);
var G__32233 = c__4649__auto__;
var G__32234 = cljs.core.count(c__4649__auto__);
var G__32235 = (0);
seq__32095 = G__32232;
chunk__32097 = G__32233;
count__32098 = G__32234;
i__32099 = G__32235;
continue;
} else {
var map__32119 = cljs.core.first(seq__32095__$1);
var map__32119__$1 = cljs.core.__destructure_map(map__32119);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32119__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32237 = cljs.core.next(seq__32095__$1);
var G__32238 = null;
var G__32239 = (0);
var G__32240 = (0);
seq__32095 = G__32237;
chunk__32097 = G__32238;
count__32098 = G__32239;
i__32099 = G__32240;
continue;
} else {
var G__32243 = cljs.core.next(seq__32095__$1);
var G__32244 = null;
var G__32245 = (0);
var G__32246 = (0);
seq__32095 = G__32243;
chunk__32097 = G__32244;
count__32098 = G__32245;
i__32099 = G__32246;
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
