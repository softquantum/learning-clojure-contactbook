goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36823 = arguments.length;
var i__4830__auto___36824 = (0);
while(true){
if((i__4830__auto___36824 < len__4829__auto___36823)){
args__4835__auto__.push((arguments[i__4830__auto___36824]));

var G__36825 = (i__4830__auto___36824 + (1));
i__4830__auto___36824 = G__36825;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36699){
var G__36700 = cljs.core.first(seq36699);
var seq36699__$1 = cljs.core.next(seq36699);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36700,seq36699__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36701 = cljs.core.seq(sources);
var chunk__36702 = null;
var count__36703 = (0);
var i__36704 = (0);
while(true){
if((i__36704 < count__36703)){
var map__36711 = chunk__36702.cljs$core$IIndexed$_nth$arity$2(null,i__36704);
var map__36711__$1 = cljs.core.__destructure_map(map__36711);
var src = map__36711__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36711__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36711__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36711__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36712){var e_36826 = e36712;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36826);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36826.message)].join('')));
}

var G__36827 = seq__36701;
var G__36828 = chunk__36702;
var G__36829 = count__36703;
var G__36830 = (i__36704 + (1));
seq__36701 = G__36827;
chunk__36702 = G__36828;
count__36703 = G__36829;
i__36704 = G__36830;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36701);
if(temp__5753__auto__){
var seq__36701__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36701__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36701__$1);
var G__36831 = cljs.core.chunk_rest(seq__36701__$1);
var G__36832 = c__4649__auto__;
var G__36833 = cljs.core.count(c__4649__auto__);
var G__36834 = (0);
seq__36701 = G__36831;
chunk__36702 = G__36832;
count__36703 = G__36833;
i__36704 = G__36834;
continue;
} else {
var map__36713 = cljs.core.first(seq__36701__$1);
var map__36713__$1 = cljs.core.__destructure_map(map__36713);
var src = map__36713__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36713__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36713__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36714){var e_36835 = e36714;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36835);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36835.message)].join('')));
}

var G__36836 = cljs.core.next(seq__36701__$1);
var G__36837 = null;
var G__36838 = (0);
var G__36839 = (0);
seq__36701 = G__36836;
chunk__36702 = G__36837;
count__36703 = G__36838;
i__36704 = G__36839;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36715 = cljs.core.seq(js_requires);
var chunk__36716 = null;
var count__36717 = (0);
var i__36718 = (0);
while(true){
if((i__36718 < count__36717)){
var js_ns = chunk__36716.cljs$core$IIndexed$_nth$arity$2(null,i__36718);
var require_str_36840 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36840);


var G__36841 = seq__36715;
var G__36842 = chunk__36716;
var G__36843 = count__36717;
var G__36844 = (i__36718 + (1));
seq__36715 = G__36841;
chunk__36716 = G__36842;
count__36717 = G__36843;
i__36718 = G__36844;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36715);
if(temp__5753__auto__){
var seq__36715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36715__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36715__$1);
var G__36845 = cljs.core.chunk_rest(seq__36715__$1);
var G__36846 = c__4649__auto__;
var G__36847 = cljs.core.count(c__4649__auto__);
var G__36848 = (0);
seq__36715 = G__36845;
chunk__36716 = G__36846;
count__36717 = G__36847;
i__36718 = G__36848;
continue;
} else {
var js_ns = cljs.core.first(seq__36715__$1);
var require_str_36849 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36849);


var G__36850 = cljs.core.next(seq__36715__$1);
var G__36851 = null;
var G__36852 = (0);
var G__36853 = (0);
seq__36715 = G__36850;
chunk__36716 = G__36851;
count__36717 = G__36852;
i__36718 = G__36853;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36720){
var map__36721 = p__36720;
var map__36721__$1 = cljs.core.__destructure_map(map__36721);
var msg = map__36721__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36721__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36721__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36722(s__36723){
return (new cljs.core.LazySeq(null,(function (){
var s__36723__$1 = s__36723;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36723__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36728 = cljs.core.first(xs__6308__auto__);
var map__36728__$1 = cljs.core.__destructure_map(map__36728);
var src = map__36728__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36728__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__36723__$1,map__36728,map__36728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36721,map__36721__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36722_$_iter__36724(s__36725){
return (new cljs.core.LazySeq(null,((function (s__36723__$1,map__36728,map__36728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36721,map__36721__$1,msg,info,reload_info){
return (function (){
var s__36725__$1 = s__36725;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36725__$1);
if(temp__5753__auto____$1){
var s__36725__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36725__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__36725__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__36727 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__36726 = (0);
while(true){
if((i__36726 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__36726);
cljs.core.chunk_append(b__36727,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36854 = (i__36726 + (1));
i__36726 = G__36854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36727),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36722_$_iter__36724(cljs.core.chunk_rest(s__36725__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36727),null);
}
} else {
var warning = cljs.core.first(s__36725__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36722_$_iter__36724(cljs.core.rest(s__36725__$2)));
}
} else {
return null;
}
break;
}
});})(s__36723__$1,map__36728,map__36728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36721,map__36721__$1,msg,info,reload_info))
,null,null));
});})(s__36723__$1,map__36728,map__36728__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36721,map__36721__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36722(cljs.core.rest(s__36723__$1)));
} else {
var G__36855 = cljs.core.rest(s__36723__$1);
s__36723__$1 = G__36855;
continue;
}
} else {
var G__36856 = cljs.core.rest(s__36723__$1);
s__36723__$1 = G__36856;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36729_36857 = cljs.core.seq(warnings);
var chunk__36730_36858 = null;
var count__36731_36859 = (0);
var i__36732_36860 = (0);
while(true){
if((i__36732_36860 < count__36731_36859)){
var map__36735_36861 = chunk__36730_36858.cljs$core$IIndexed$_nth$arity$2(null,i__36732_36860);
var map__36735_36862__$1 = cljs.core.__destructure_map(map__36735_36861);
var w_36863 = map__36735_36862__$1;
var msg_36864__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36735_36862__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36735_36862__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36735_36862__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36735_36862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36867)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36865),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36866),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36864__$1)].join(''));


var G__36868 = seq__36729_36857;
var G__36869 = chunk__36730_36858;
var G__36870 = count__36731_36859;
var G__36871 = (i__36732_36860 + (1));
seq__36729_36857 = G__36868;
chunk__36730_36858 = G__36869;
count__36731_36859 = G__36870;
i__36732_36860 = G__36871;
continue;
} else {
var temp__5753__auto___36872 = cljs.core.seq(seq__36729_36857);
if(temp__5753__auto___36872){
var seq__36729_36873__$1 = temp__5753__auto___36872;
if(cljs.core.chunked_seq_QMARK_(seq__36729_36873__$1)){
var c__4649__auto___36874 = cljs.core.chunk_first(seq__36729_36873__$1);
var G__36875 = cljs.core.chunk_rest(seq__36729_36873__$1);
var G__36876 = c__4649__auto___36874;
var G__36877 = cljs.core.count(c__4649__auto___36874);
var G__36878 = (0);
seq__36729_36857 = G__36875;
chunk__36730_36858 = G__36876;
count__36731_36859 = G__36877;
i__36732_36860 = G__36878;
continue;
} else {
var map__36736_36879 = cljs.core.first(seq__36729_36873__$1);
var map__36736_36880__$1 = cljs.core.__destructure_map(map__36736_36879);
var w_36881 = map__36736_36880__$1;
var msg_36882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36736_36880__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36736_36880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36736_36880__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36736_36880__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36885)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36883),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36884),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36882__$1)].join(''));


var G__36886 = cljs.core.next(seq__36729_36873__$1);
var G__36887 = null;
var G__36888 = (0);
var G__36889 = (0);
seq__36729_36857 = G__36886;
chunk__36730_36858 = G__36887;
count__36731_36859 = G__36888;
i__36732_36860 = G__36889;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36719_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36719_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36737){
var map__36738 = p__36737;
var map__36738__$1 = cljs.core.__destructure_map(map__36738);
var msg = map__36738__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36738__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36739 = cljs.core.seq(updates);
var chunk__36741 = null;
var count__36742 = (0);
var i__36743 = (0);
while(true){
if((i__36743 < count__36742)){
var path = chunk__36741.cljs$core$IIndexed$_nth$arity$2(null,i__36743);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36773_36890 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36777_36891 = null;
var count__36778_36892 = (0);
var i__36779_36893 = (0);
while(true){
if((i__36779_36893 < count__36778_36892)){
var node_36894 = chunk__36777_36891.cljs$core$IIndexed$_nth$arity$2(null,i__36779_36893);
if(cljs.core.not(node_36894.shadow$old)){
var path_match_36895 = shadow.cljs.devtools.client.browser.match_paths(node_36894.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36895)){
var new_link_36896 = (function (){var G__36785 = node_36894.cloneNode(true);
G__36785.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36895),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36785;
})();
(node_36894.shadow$old = true);

(new_link_36896.onload = ((function (seq__36773_36890,chunk__36777_36891,count__36778_36892,i__36779_36893,seq__36739,chunk__36741,count__36742,i__36743,new_link_36896,path_match_36895,node_36894,path,map__36738,map__36738__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36894);
});})(seq__36773_36890,chunk__36777_36891,count__36778_36892,i__36779_36893,seq__36739,chunk__36741,count__36742,i__36743,new_link_36896,path_match_36895,node_36894,path,map__36738,map__36738__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36895], 0));

goog.dom.insertSiblingAfter(new_link_36896,node_36894);


var G__36897 = seq__36773_36890;
var G__36898 = chunk__36777_36891;
var G__36899 = count__36778_36892;
var G__36900 = (i__36779_36893 + (1));
seq__36773_36890 = G__36897;
chunk__36777_36891 = G__36898;
count__36778_36892 = G__36899;
i__36779_36893 = G__36900;
continue;
} else {
var G__36901 = seq__36773_36890;
var G__36902 = chunk__36777_36891;
var G__36903 = count__36778_36892;
var G__36904 = (i__36779_36893 + (1));
seq__36773_36890 = G__36901;
chunk__36777_36891 = G__36902;
count__36778_36892 = G__36903;
i__36779_36893 = G__36904;
continue;
}
} else {
var G__36905 = seq__36773_36890;
var G__36906 = chunk__36777_36891;
var G__36907 = count__36778_36892;
var G__36908 = (i__36779_36893 + (1));
seq__36773_36890 = G__36905;
chunk__36777_36891 = G__36906;
count__36778_36892 = G__36907;
i__36779_36893 = G__36908;
continue;
}
} else {
var temp__5753__auto___36909 = cljs.core.seq(seq__36773_36890);
if(temp__5753__auto___36909){
var seq__36773_36910__$1 = temp__5753__auto___36909;
if(cljs.core.chunked_seq_QMARK_(seq__36773_36910__$1)){
var c__4649__auto___36911 = cljs.core.chunk_first(seq__36773_36910__$1);
var G__36912 = cljs.core.chunk_rest(seq__36773_36910__$1);
var G__36913 = c__4649__auto___36911;
var G__36914 = cljs.core.count(c__4649__auto___36911);
var G__36915 = (0);
seq__36773_36890 = G__36912;
chunk__36777_36891 = G__36913;
count__36778_36892 = G__36914;
i__36779_36893 = G__36915;
continue;
} else {
var node_36916 = cljs.core.first(seq__36773_36910__$1);
if(cljs.core.not(node_36916.shadow$old)){
var path_match_36917 = shadow.cljs.devtools.client.browser.match_paths(node_36916.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36917)){
var new_link_36918 = (function (){var G__36786 = node_36916.cloneNode(true);
G__36786.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36917),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36786;
})();
(node_36916.shadow$old = true);

(new_link_36918.onload = ((function (seq__36773_36890,chunk__36777_36891,count__36778_36892,i__36779_36893,seq__36739,chunk__36741,count__36742,i__36743,new_link_36918,path_match_36917,node_36916,seq__36773_36910__$1,temp__5753__auto___36909,path,map__36738,map__36738__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36916);
});})(seq__36773_36890,chunk__36777_36891,count__36778_36892,i__36779_36893,seq__36739,chunk__36741,count__36742,i__36743,new_link_36918,path_match_36917,node_36916,seq__36773_36910__$1,temp__5753__auto___36909,path,map__36738,map__36738__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36917], 0));

goog.dom.insertSiblingAfter(new_link_36918,node_36916);


var G__36919 = cljs.core.next(seq__36773_36910__$1);
var G__36920 = null;
var G__36921 = (0);
var G__36922 = (0);
seq__36773_36890 = G__36919;
chunk__36777_36891 = G__36920;
count__36778_36892 = G__36921;
i__36779_36893 = G__36922;
continue;
} else {
var G__36923 = cljs.core.next(seq__36773_36910__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36773_36890 = G__36923;
chunk__36777_36891 = G__36924;
count__36778_36892 = G__36925;
i__36779_36893 = G__36926;
continue;
}
} else {
var G__36927 = cljs.core.next(seq__36773_36910__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36773_36890 = G__36927;
chunk__36777_36891 = G__36928;
count__36778_36892 = G__36929;
i__36779_36893 = G__36930;
continue;
}
}
} else {
}
}
break;
}


var G__36931 = seq__36739;
var G__36932 = chunk__36741;
var G__36933 = count__36742;
var G__36934 = (i__36743 + (1));
seq__36739 = G__36931;
chunk__36741 = G__36932;
count__36742 = G__36933;
i__36743 = G__36934;
continue;
} else {
var G__36935 = seq__36739;
var G__36936 = chunk__36741;
var G__36937 = count__36742;
var G__36938 = (i__36743 + (1));
seq__36739 = G__36935;
chunk__36741 = G__36936;
count__36742 = G__36937;
i__36743 = G__36938;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36739);
if(temp__5753__auto__){
var seq__36739__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36739__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36739__$1);
var G__36939 = cljs.core.chunk_rest(seq__36739__$1);
var G__36940 = c__4649__auto__;
var G__36941 = cljs.core.count(c__4649__auto__);
var G__36942 = (0);
seq__36739 = G__36939;
chunk__36741 = G__36940;
count__36742 = G__36941;
i__36743 = G__36942;
continue;
} else {
var path = cljs.core.first(seq__36739__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36787_36943 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36791_36944 = null;
var count__36792_36945 = (0);
var i__36793_36946 = (0);
while(true){
if((i__36793_36946 < count__36792_36945)){
var node_36947 = chunk__36791_36944.cljs$core$IIndexed$_nth$arity$2(null,i__36793_36946);
if(cljs.core.not(node_36947.shadow$old)){
var path_match_36948 = shadow.cljs.devtools.client.browser.match_paths(node_36947.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36948)){
var new_link_36949 = (function (){var G__36799 = node_36947.cloneNode(true);
G__36799.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36948),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36799;
})();
(node_36947.shadow$old = true);

(new_link_36949.onload = ((function (seq__36787_36943,chunk__36791_36944,count__36792_36945,i__36793_36946,seq__36739,chunk__36741,count__36742,i__36743,new_link_36949,path_match_36948,node_36947,path,seq__36739__$1,temp__5753__auto__,map__36738,map__36738__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36947);
});})(seq__36787_36943,chunk__36791_36944,count__36792_36945,i__36793_36946,seq__36739,chunk__36741,count__36742,i__36743,new_link_36949,path_match_36948,node_36947,path,seq__36739__$1,temp__5753__auto__,map__36738,map__36738__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36948], 0));

goog.dom.insertSiblingAfter(new_link_36949,node_36947);


var G__36950 = seq__36787_36943;
var G__36951 = chunk__36791_36944;
var G__36952 = count__36792_36945;
var G__36953 = (i__36793_36946 + (1));
seq__36787_36943 = G__36950;
chunk__36791_36944 = G__36951;
count__36792_36945 = G__36952;
i__36793_36946 = G__36953;
continue;
} else {
var G__36954 = seq__36787_36943;
var G__36955 = chunk__36791_36944;
var G__36956 = count__36792_36945;
var G__36957 = (i__36793_36946 + (1));
seq__36787_36943 = G__36954;
chunk__36791_36944 = G__36955;
count__36792_36945 = G__36956;
i__36793_36946 = G__36957;
continue;
}
} else {
var G__36958 = seq__36787_36943;
var G__36959 = chunk__36791_36944;
var G__36960 = count__36792_36945;
var G__36961 = (i__36793_36946 + (1));
seq__36787_36943 = G__36958;
chunk__36791_36944 = G__36959;
count__36792_36945 = G__36960;
i__36793_36946 = G__36961;
continue;
}
} else {
var temp__5753__auto___36962__$1 = cljs.core.seq(seq__36787_36943);
if(temp__5753__auto___36962__$1){
var seq__36787_36963__$1 = temp__5753__auto___36962__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36787_36963__$1)){
var c__4649__auto___36964 = cljs.core.chunk_first(seq__36787_36963__$1);
var G__36965 = cljs.core.chunk_rest(seq__36787_36963__$1);
var G__36966 = c__4649__auto___36964;
var G__36967 = cljs.core.count(c__4649__auto___36964);
var G__36968 = (0);
seq__36787_36943 = G__36965;
chunk__36791_36944 = G__36966;
count__36792_36945 = G__36967;
i__36793_36946 = G__36968;
continue;
} else {
var node_36969 = cljs.core.first(seq__36787_36963__$1);
if(cljs.core.not(node_36969.shadow$old)){
var path_match_36970 = shadow.cljs.devtools.client.browser.match_paths(node_36969.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36970)){
var new_link_36971 = (function (){var G__36800 = node_36969.cloneNode(true);
G__36800.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36970),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36800;
})();
(node_36969.shadow$old = true);

(new_link_36971.onload = ((function (seq__36787_36943,chunk__36791_36944,count__36792_36945,i__36793_36946,seq__36739,chunk__36741,count__36742,i__36743,new_link_36971,path_match_36970,node_36969,seq__36787_36963__$1,temp__5753__auto___36962__$1,path,seq__36739__$1,temp__5753__auto__,map__36738,map__36738__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36969);
});})(seq__36787_36943,chunk__36791_36944,count__36792_36945,i__36793_36946,seq__36739,chunk__36741,count__36742,i__36743,new_link_36971,path_match_36970,node_36969,seq__36787_36963__$1,temp__5753__auto___36962__$1,path,seq__36739__$1,temp__5753__auto__,map__36738,map__36738__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36970], 0));

goog.dom.insertSiblingAfter(new_link_36971,node_36969);


var G__36972 = cljs.core.next(seq__36787_36963__$1);
var G__36973 = null;
var G__36974 = (0);
var G__36975 = (0);
seq__36787_36943 = G__36972;
chunk__36791_36944 = G__36973;
count__36792_36945 = G__36974;
i__36793_36946 = G__36975;
continue;
} else {
var G__36976 = cljs.core.next(seq__36787_36963__$1);
var G__36977 = null;
var G__36978 = (0);
var G__36979 = (0);
seq__36787_36943 = G__36976;
chunk__36791_36944 = G__36977;
count__36792_36945 = G__36978;
i__36793_36946 = G__36979;
continue;
}
} else {
var G__36980 = cljs.core.next(seq__36787_36963__$1);
var G__36981 = null;
var G__36982 = (0);
var G__36983 = (0);
seq__36787_36943 = G__36980;
chunk__36791_36944 = G__36981;
count__36792_36945 = G__36982;
i__36793_36946 = G__36983;
continue;
}
}
} else {
}
}
break;
}


var G__36984 = cljs.core.next(seq__36739__$1);
var G__36985 = null;
var G__36986 = (0);
var G__36987 = (0);
seq__36739 = G__36984;
chunk__36741 = G__36985;
count__36742 = G__36986;
i__36743 = G__36987;
continue;
} else {
var G__36988 = cljs.core.next(seq__36739__$1);
var G__36989 = null;
var G__36990 = (0);
var G__36991 = (0);
seq__36739 = G__36988;
chunk__36741 = G__36989;
count__36742 = G__36990;
i__36743 = G__36991;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36801){
var map__36802 = p__36801;
var map__36802__$1 = cljs.core.__destructure_map(map__36802);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36803){
var map__36804 = p__36803;
var map__36804__$1 = cljs.core.__destructure_map(map__36804);
var _ = map__36804__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36804__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36805,done,error){
var map__36806 = p__36805;
var map__36806__$1 = cljs.core.__destructure_map(map__36806);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36806__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36807,done,error){
var map__36808 = p__36807;
var map__36808__$1 = cljs.core.__destructure_map(map__36808);
var msg = map__36808__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36808__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36808__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36808__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36809){
var map__36810 = p__36809;
var map__36810__$1 = cljs.core.__destructure_map(map__36810);
var src = map__36810__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36810__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36811 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36811) : done.call(null,G__36811));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36812){
var map__36813 = p__36812;
var map__36813__$1 = cljs.core.__destructure_map(map__36813);
var msg__$1 = map__36813__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36813__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36814){var ex = e36814;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36815){
var map__36816 = p__36815;
var map__36816__$1 = cljs.core.__destructure_map(map__36816);
var env = map__36816__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36817){
var map__36818 = p__36817;
var map__36818__$1 = cljs.core.__destructure_map(map__36818);
var msg = map__36818__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36818__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36819){
var map__36820 = p__36819;
var map__36820__$1 = cljs.core.__destructure_map(map__36820);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36820__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36820__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36821){
var map__36822 = p__36821;
var map__36822__$1 = cljs.core.__destructure_map(map__36822);
var svc = map__36822__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36822__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
