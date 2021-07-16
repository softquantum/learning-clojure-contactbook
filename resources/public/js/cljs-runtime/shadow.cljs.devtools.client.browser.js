goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35857 = arguments.length;
var i__4830__auto___35858 = (0);
while(true){
if((i__4830__auto___35858 < len__4829__auto___35857)){
args__4835__auto__.push((arguments[i__4830__auto___35858]));

var G__35859 = (i__4830__auto___35858 + (1));
i__4830__auto___35858 = G__35859;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35728){
var G__35729 = cljs.core.first(seq35728);
var seq35728__$1 = cljs.core.next(seq35728);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35729,seq35728__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35730 = cljs.core.seq(sources);
var chunk__35731 = null;
var count__35732 = (0);
var i__35733 = (0);
while(true){
if((i__35733 < count__35732)){
var map__35741 = chunk__35731.cljs$core$IIndexed$_nth$arity$2(null,i__35733);
var map__35741__$1 = cljs.core.__destructure_map(map__35741);
var src = map__35741__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35743){var e_35860 = e35743;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35860);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35860.message)].join('')));
}

var G__35861 = seq__35730;
var G__35862 = chunk__35731;
var G__35863 = count__35732;
var G__35864 = (i__35733 + (1));
seq__35730 = G__35861;
chunk__35731 = G__35862;
count__35732 = G__35863;
i__35733 = G__35864;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35730);
if(temp__5753__auto__){
var seq__35730__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35730__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35730__$1);
var G__35865 = cljs.core.chunk_rest(seq__35730__$1);
var G__35866 = c__4649__auto__;
var G__35867 = cljs.core.count(c__4649__auto__);
var G__35868 = (0);
seq__35730 = G__35865;
chunk__35731 = G__35866;
count__35732 = G__35867;
i__35733 = G__35868;
continue;
} else {
var map__35745 = cljs.core.first(seq__35730__$1);
var map__35745__$1 = cljs.core.__destructure_map(map__35745);
var src = map__35745__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35745__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35746){var e_35869 = e35746;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35869);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35869.message)].join('')));
}

var G__35870 = cljs.core.next(seq__35730__$1);
var G__35871 = null;
var G__35872 = (0);
var G__35873 = (0);
seq__35730 = G__35870;
chunk__35731 = G__35871;
count__35732 = G__35872;
i__35733 = G__35873;
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
var seq__35747 = cljs.core.seq(js_requires);
var chunk__35748 = null;
var count__35749 = (0);
var i__35750 = (0);
while(true){
if((i__35750 < count__35749)){
var js_ns = chunk__35748.cljs$core$IIndexed$_nth$arity$2(null,i__35750);
var require_str_35874 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35874);


var G__35875 = seq__35747;
var G__35876 = chunk__35748;
var G__35877 = count__35749;
var G__35878 = (i__35750 + (1));
seq__35747 = G__35875;
chunk__35748 = G__35876;
count__35749 = G__35877;
i__35750 = G__35878;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35747);
if(temp__5753__auto__){
var seq__35747__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35747__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35747__$1);
var G__35879 = cljs.core.chunk_rest(seq__35747__$1);
var G__35880 = c__4649__auto__;
var G__35881 = cljs.core.count(c__4649__auto__);
var G__35882 = (0);
seq__35747 = G__35879;
chunk__35748 = G__35880;
count__35749 = G__35881;
i__35750 = G__35882;
continue;
} else {
var js_ns = cljs.core.first(seq__35747__$1);
var require_str_35883 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35883);


var G__35884 = cljs.core.next(seq__35747__$1);
var G__35885 = null;
var G__35886 = (0);
var G__35887 = (0);
seq__35747 = G__35884;
chunk__35748 = G__35885;
count__35749 = G__35886;
i__35750 = G__35887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35754){
var map__35755 = p__35754;
var map__35755__$1 = cljs.core.__destructure_map(map__35755);
var msg = map__35755__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35755__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35755__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35756(s__35757){
return (new cljs.core.LazySeq(null,(function (){
var s__35757__$1 = s__35757;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35757__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35762 = cljs.core.first(xs__6308__auto__);
var map__35762__$1 = cljs.core.__destructure_map(map__35762);
var src = map__35762__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35762__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__35757__$1,map__35762,map__35762__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35755,map__35755__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35756_$_iter__35758(s__35759){
return (new cljs.core.LazySeq(null,((function (s__35757__$1,map__35762,map__35762__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35755,map__35755__$1,msg,info,reload_info){
return (function (){
var s__35759__$1 = s__35759;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35759__$1);
if(temp__5753__auto____$1){
var s__35759__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35759__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__35759__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__35761 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__35760 = (0);
while(true){
if((i__35760 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__35760);
cljs.core.chunk_append(b__35761,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35888 = (i__35760 + (1));
i__35760 = G__35888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35761),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35756_$_iter__35758(cljs.core.chunk_rest(s__35759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35761),null);
}
} else {
var warning = cljs.core.first(s__35759__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35756_$_iter__35758(cljs.core.rest(s__35759__$2)));
}
} else {
return null;
}
break;
}
});})(s__35757__$1,map__35762,map__35762__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35755,map__35755__$1,msg,info,reload_info))
,null,null));
});})(s__35757__$1,map__35762,map__35762__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35755,map__35755__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35756(cljs.core.rest(s__35757__$1)));
} else {
var G__35889 = cljs.core.rest(s__35757__$1);
s__35757__$1 = G__35889;
continue;
}
} else {
var G__35890 = cljs.core.rest(s__35757__$1);
s__35757__$1 = G__35890;
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
var seq__35763_35891 = cljs.core.seq(warnings);
var chunk__35764_35892 = null;
var count__35765_35893 = (0);
var i__35766_35894 = (0);
while(true){
if((i__35766_35894 < count__35765_35893)){
var map__35769_35895 = chunk__35764_35892.cljs$core$IIndexed$_nth$arity$2(null,i__35766_35894);
var map__35769_35896__$1 = cljs.core.__destructure_map(map__35769_35895);
var w_35897 = map__35769_35896__$1;
var msg_35898__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769_35896__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769_35896__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769_35896__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769_35896__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35901)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35899),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35900),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35898__$1)].join(''));


var G__35902 = seq__35763_35891;
var G__35903 = chunk__35764_35892;
var G__35904 = count__35765_35893;
var G__35905 = (i__35766_35894 + (1));
seq__35763_35891 = G__35902;
chunk__35764_35892 = G__35903;
count__35765_35893 = G__35904;
i__35766_35894 = G__35905;
continue;
} else {
var temp__5753__auto___35906 = cljs.core.seq(seq__35763_35891);
if(temp__5753__auto___35906){
var seq__35763_35907__$1 = temp__5753__auto___35906;
if(cljs.core.chunked_seq_QMARK_(seq__35763_35907__$1)){
var c__4649__auto___35908 = cljs.core.chunk_first(seq__35763_35907__$1);
var G__35909 = cljs.core.chunk_rest(seq__35763_35907__$1);
var G__35910 = c__4649__auto___35908;
var G__35911 = cljs.core.count(c__4649__auto___35908);
var G__35912 = (0);
seq__35763_35891 = G__35909;
chunk__35764_35892 = G__35910;
count__35765_35893 = G__35911;
i__35766_35894 = G__35912;
continue;
} else {
var map__35770_35913 = cljs.core.first(seq__35763_35907__$1);
var map__35770_35914__$1 = cljs.core.__destructure_map(map__35770_35913);
var w_35915 = map__35770_35914__$1;
var msg_35916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770_35914__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770_35914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770_35914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35770_35914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35919)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35917),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35918),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35916__$1)].join(''));


var G__35920 = cljs.core.next(seq__35763_35907__$1);
var G__35921 = null;
var G__35922 = (0);
var G__35923 = (0);
seq__35763_35891 = G__35920;
chunk__35764_35892 = G__35921;
count__35765_35893 = G__35922;
i__35766_35894 = G__35923;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35753_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35753_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35771){
var map__35772 = p__35771;
var map__35772__$1 = cljs.core.__destructure_map(map__35772);
var msg = map__35772__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35772__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35773 = cljs.core.seq(updates);
var chunk__35775 = null;
var count__35776 = (0);
var i__35777 = (0);
while(true){
if((i__35777 < count__35776)){
var path = chunk__35775.cljs$core$IIndexed$_nth$arity$2(null,i__35777);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35807_35924 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35811_35925 = null;
var count__35812_35926 = (0);
var i__35813_35927 = (0);
while(true){
if((i__35813_35927 < count__35812_35926)){
var node_35928 = chunk__35811_35925.cljs$core$IIndexed$_nth$arity$2(null,i__35813_35927);
if(cljs.core.not(node_35928.shadow$old)){
var path_match_35929 = shadow.cljs.devtools.client.browser.match_paths(node_35928.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35929)){
var new_link_35930 = (function (){var G__35819 = node_35928.cloneNode(true);
G__35819.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35929),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35819;
})();
(node_35928.shadow$old = true);

(new_link_35930.onload = ((function (seq__35807_35924,chunk__35811_35925,count__35812_35926,i__35813_35927,seq__35773,chunk__35775,count__35776,i__35777,new_link_35930,path_match_35929,node_35928,path,map__35772,map__35772__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35928);
});})(seq__35807_35924,chunk__35811_35925,count__35812_35926,i__35813_35927,seq__35773,chunk__35775,count__35776,i__35777,new_link_35930,path_match_35929,node_35928,path,map__35772,map__35772__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35929], 0));

goog.dom.insertSiblingAfter(new_link_35930,node_35928);


var G__35931 = seq__35807_35924;
var G__35932 = chunk__35811_35925;
var G__35933 = count__35812_35926;
var G__35934 = (i__35813_35927 + (1));
seq__35807_35924 = G__35931;
chunk__35811_35925 = G__35932;
count__35812_35926 = G__35933;
i__35813_35927 = G__35934;
continue;
} else {
var G__35935 = seq__35807_35924;
var G__35936 = chunk__35811_35925;
var G__35937 = count__35812_35926;
var G__35938 = (i__35813_35927 + (1));
seq__35807_35924 = G__35935;
chunk__35811_35925 = G__35936;
count__35812_35926 = G__35937;
i__35813_35927 = G__35938;
continue;
}
} else {
var G__35939 = seq__35807_35924;
var G__35940 = chunk__35811_35925;
var G__35941 = count__35812_35926;
var G__35942 = (i__35813_35927 + (1));
seq__35807_35924 = G__35939;
chunk__35811_35925 = G__35940;
count__35812_35926 = G__35941;
i__35813_35927 = G__35942;
continue;
}
} else {
var temp__5753__auto___35943 = cljs.core.seq(seq__35807_35924);
if(temp__5753__auto___35943){
var seq__35807_35944__$1 = temp__5753__auto___35943;
if(cljs.core.chunked_seq_QMARK_(seq__35807_35944__$1)){
var c__4649__auto___35945 = cljs.core.chunk_first(seq__35807_35944__$1);
var G__35946 = cljs.core.chunk_rest(seq__35807_35944__$1);
var G__35947 = c__4649__auto___35945;
var G__35948 = cljs.core.count(c__4649__auto___35945);
var G__35949 = (0);
seq__35807_35924 = G__35946;
chunk__35811_35925 = G__35947;
count__35812_35926 = G__35948;
i__35813_35927 = G__35949;
continue;
} else {
var node_35950 = cljs.core.first(seq__35807_35944__$1);
if(cljs.core.not(node_35950.shadow$old)){
var path_match_35951 = shadow.cljs.devtools.client.browser.match_paths(node_35950.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35951)){
var new_link_35952 = (function (){var G__35820 = node_35950.cloneNode(true);
G__35820.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35951),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35820;
})();
(node_35950.shadow$old = true);

(new_link_35952.onload = ((function (seq__35807_35924,chunk__35811_35925,count__35812_35926,i__35813_35927,seq__35773,chunk__35775,count__35776,i__35777,new_link_35952,path_match_35951,node_35950,seq__35807_35944__$1,temp__5753__auto___35943,path,map__35772,map__35772__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35950);
});})(seq__35807_35924,chunk__35811_35925,count__35812_35926,i__35813_35927,seq__35773,chunk__35775,count__35776,i__35777,new_link_35952,path_match_35951,node_35950,seq__35807_35944__$1,temp__5753__auto___35943,path,map__35772,map__35772__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35951], 0));

goog.dom.insertSiblingAfter(new_link_35952,node_35950);


var G__35953 = cljs.core.next(seq__35807_35944__$1);
var G__35954 = null;
var G__35955 = (0);
var G__35956 = (0);
seq__35807_35924 = G__35953;
chunk__35811_35925 = G__35954;
count__35812_35926 = G__35955;
i__35813_35927 = G__35956;
continue;
} else {
var G__35957 = cljs.core.next(seq__35807_35944__$1);
var G__35958 = null;
var G__35959 = (0);
var G__35960 = (0);
seq__35807_35924 = G__35957;
chunk__35811_35925 = G__35958;
count__35812_35926 = G__35959;
i__35813_35927 = G__35960;
continue;
}
} else {
var G__35961 = cljs.core.next(seq__35807_35944__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35807_35924 = G__35961;
chunk__35811_35925 = G__35962;
count__35812_35926 = G__35963;
i__35813_35927 = G__35964;
continue;
}
}
} else {
}
}
break;
}


var G__35965 = seq__35773;
var G__35966 = chunk__35775;
var G__35967 = count__35776;
var G__35968 = (i__35777 + (1));
seq__35773 = G__35965;
chunk__35775 = G__35966;
count__35776 = G__35967;
i__35777 = G__35968;
continue;
} else {
var G__35969 = seq__35773;
var G__35970 = chunk__35775;
var G__35971 = count__35776;
var G__35972 = (i__35777 + (1));
seq__35773 = G__35969;
chunk__35775 = G__35970;
count__35776 = G__35971;
i__35777 = G__35972;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35773);
if(temp__5753__auto__){
var seq__35773__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35773__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35773__$1);
var G__35973 = cljs.core.chunk_rest(seq__35773__$1);
var G__35974 = c__4649__auto__;
var G__35975 = cljs.core.count(c__4649__auto__);
var G__35976 = (0);
seq__35773 = G__35973;
chunk__35775 = G__35974;
count__35776 = G__35975;
i__35777 = G__35976;
continue;
} else {
var path = cljs.core.first(seq__35773__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35821_35977 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35825_35978 = null;
var count__35826_35979 = (0);
var i__35827_35980 = (0);
while(true){
if((i__35827_35980 < count__35826_35979)){
var node_35981 = chunk__35825_35978.cljs$core$IIndexed$_nth$arity$2(null,i__35827_35980);
if(cljs.core.not(node_35981.shadow$old)){
var path_match_35982 = shadow.cljs.devtools.client.browser.match_paths(node_35981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35982)){
var new_link_35983 = (function (){var G__35833 = node_35981.cloneNode(true);
G__35833.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35833;
})();
(node_35981.shadow$old = true);

(new_link_35983.onload = ((function (seq__35821_35977,chunk__35825_35978,count__35826_35979,i__35827_35980,seq__35773,chunk__35775,count__35776,i__35777,new_link_35983,path_match_35982,node_35981,path,seq__35773__$1,temp__5753__auto__,map__35772,map__35772__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35981);
});})(seq__35821_35977,chunk__35825_35978,count__35826_35979,i__35827_35980,seq__35773,chunk__35775,count__35776,i__35777,new_link_35983,path_match_35982,node_35981,path,seq__35773__$1,temp__5753__auto__,map__35772,map__35772__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35982], 0));

goog.dom.insertSiblingAfter(new_link_35983,node_35981);


var G__35984 = seq__35821_35977;
var G__35985 = chunk__35825_35978;
var G__35986 = count__35826_35979;
var G__35987 = (i__35827_35980 + (1));
seq__35821_35977 = G__35984;
chunk__35825_35978 = G__35985;
count__35826_35979 = G__35986;
i__35827_35980 = G__35987;
continue;
} else {
var G__35988 = seq__35821_35977;
var G__35989 = chunk__35825_35978;
var G__35990 = count__35826_35979;
var G__35991 = (i__35827_35980 + (1));
seq__35821_35977 = G__35988;
chunk__35825_35978 = G__35989;
count__35826_35979 = G__35990;
i__35827_35980 = G__35991;
continue;
}
} else {
var G__35992 = seq__35821_35977;
var G__35993 = chunk__35825_35978;
var G__35994 = count__35826_35979;
var G__35995 = (i__35827_35980 + (1));
seq__35821_35977 = G__35992;
chunk__35825_35978 = G__35993;
count__35826_35979 = G__35994;
i__35827_35980 = G__35995;
continue;
}
} else {
var temp__5753__auto___35996__$1 = cljs.core.seq(seq__35821_35977);
if(temp__5753__auto___35996__$1){
var seq__35821_35997__$1 = temp__5753__auto___35996__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35821_35997__$1)){
var c__4649__auto___35998 = cljs.core.chunk_first(seq__35821_35997__$1);
var G__35999 = cljs.core.chunk_rest(seq__35821_35997__$1);
var G__36000 = c__4649__auto___35998;
var G__36001 = cljs.core.count(c__4649__auto___35998);
var G__36002 = (0);
seq__35821_35977 = G__35999;
chunk__35825_35978 = G__36000;
count__35826_35979 = G__36001;
i__35827_35980 = G__36002;
continue;
} else {
var node_36003 = cljs.core.first(seq__35821_35997__$1);
if(cljs.core.not(node_36003.shadow$old)){
var path_match_36004 = shadow.cljs.devtools.client.browser.match_paths(node_36003.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36004)){
var new_link_36005 = (function (){var G__35834 = node_36003.cloneNode(true);
G__35834.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36004),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35834;
})();
(node_36003.shadow$old = true);

(new_link_36005.onload = ((function (seq__35821_35977,chunk__35825_35978,count__35826_35979,i__35827_35980,seq__35773,chunk__35775,count__35776,i__35777,new_link_36005,path_match_36004,node_36003,seq__35821_35997__$1,temp__5753__auto___35996__$1,path,seq__35773__$1,temp__5753__auto__,map__35772,map__35772__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36003);
});})(seq__35821_35977,chunk__35825_35978,count__35826_35979,i__35827_35980,seq__35773,chunk__35775,count__35776,i__35777,new_link_36005,path_match_36004,node_36003,seq__35821_35997__$1,temp__5753__auto___35996__$1,path,seq__35773__$1,temp__5753__auto__,map__35772,map__35772__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36004], 0));

goog.dom.insertSiblingAfter(new_link_36005,node_36003);


var G__36006 = cljs.core.next(seq__35821_35997__$1);
var G__36007 = null;
var G__36008 = (0);
var G__36009 = (0);
seq__35821_35977 = G__36006;
chunk__35825_35978 = G__36007;
count__35826_35979 = G__36008;
i__35827_35980 = G__36009;
continue;
} else {
var G__36010 = cljs.core.next(seq__35821_35997__$1);
var G__36011 = null;
var G__36012 = (0);
var G__36013 = (0);
seq__35821_35977 = G__36010;
chunk__35825_35978 = G__36011;
count__35826_35979 = G__36012;
i__35827_35980 = G__36013;
continue;
}
} else {
var G__36014 = cljs.core.next(seq__35821_35997__$1);
var G__36015 = null;
var G__36016 = (0);
var G__36017 = (0);
seq__35821_35977 = G__36014;
chunk__35825_35978 = G__36015;
count__35826_35979 = G__36016;
i__35827_35980 = G__36017;
continue;
}
}
} else {
}
}
break;
}


var G__36018 = cljs.core.next(seq__35773__$1);
var G__36019 = null;
var G__36020 = (0);
var G__36021 = (0);
seq__35773 = G__36018;
chunk__35775 = G__36019;
count__35776 = G__36020;
i__35777 = G__36021;
continue;
} else {
var G__36022 = cljs.core.next(seq__35773__$1);
var G__36023 = null;
var G__36024 = (0);
var G__36025 = (0);
seq__35773 = G__36022;
chunk__35775 = G__36023;
count__35776 = G__36024;
i__35777 = G__36025;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35835){
var map__35836 = p__35835;
var map__35836__$1 = cljs.core.__destructure_map(map__35836);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35836__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35837){
var map__35838 = p__35837;
var map__35838__$1 = cljs.core.__destructure_map(map__35838);
var _ = map__35838__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35839,done,error){
var map__35840 = p__35839;
var map__35840__$1 = cljs.core.__destructure_map(map__35840);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35841,done,error){
var map__35842 = p__35841;
var map__35842__$1 = cljs.core.__destructure_map(map__35842);
var msg = map__35842__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35842__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35843){
var map__35844 = p__35843;
var map__35844__$1 = cljs.core.__destructure_map(map__35844);
var src = map__35844__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35845 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35845) : done.call(null,G__35845));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35846){
var map__35847 = p__35846;
var map__35847__$1 = cljs.core.__destructure_map(map__35847);
var msg__$1 = map__35847__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35848){var ex = e35848;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35849){
var map__35850 = p__35849;
var map__35850__$1 = cljs.core.__destructure_map(map__35850);
var env = map__35850__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35850__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35851){
var map__35852 = p__35851;
var map__35852__$1 = cljs.core.__destructure_map(map__35852);
var msg = map__35852__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35852__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35853){
var map__35854 = p__35853;
var map__35854__$1 = cljs.core.__destructure_map(map__35854);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35854__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35854__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__35855){
var map__35856 = p__35855;
var map__35856__$1 = cljs.core.__destructure_map(map__35856);
var svc = map__35856__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35856__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
