goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36022){
var map__36024 = p__36022;
var map__36024__$1 = cljs.core.__destructure_map(map__36024);
var m = map__36024__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36026_36232 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36027_36233 = null;
var count__36028_36234 = (0);
var i__36029_36235 = (0);
while(true){
if((i__36029_36235 < count__36028_36234)){
var f_36236 = chunk__36027_36233.cljs$core$IIndexed$_nth$arity$2(null,i__36029_36235);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36236], 0));


var G__36237 = seq__36026_36232;
var G__36238 = chunk__36027_36233;
var G__36239 = count__36028_36234;
var G__36240 = (i__36029_36235 + (1));
seq__36026_36232 = G__36237;
chunk__36027_36233 = G__36238;
count__36028_36234 = G__36239;
i__36029_36235 = G__36240;
continue;
} else {
var temp__5753__auto___36241 = cljs.core.seq(seq__36026_36232);
if(temp__5753__auto___36241){
var seq__36026_36242__$1 = temp__5753__auto___36241;
if(cljs.core.chunked_seq_QMARK_(seq__36026_36242__$1)){
var c__4649__auto___36243 = cljs.core.chunk_first(seq__36026_36242__$1);
var G__36244 = cljs.core.chunk_rest(seq__36026_36242__$1);
var G__36245 = c__4649__auto___36243;
var G__36246 = cljs.core.count(c__4649__auto___36243);
var G__36247 = (0);
seq__36026_36232 = G__36244;
chunk__36027_36233 = G__36245;
count__36028_36234 = G__36246;
i__36029_36235 = G__36247;
continue;
} else {
var f_36248 = cljs.core.first(seq__36026_36242__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36248], 0));


var G__36249 = cljs.core.next(seq__36026_36242__$1);
var G__36250 = null;
var G__36251 = (0);
var G__36252 = (0);
seq__36026_36232 = G__36249;
chunk__36027_36233 = G__36250;
count__36028_36234 = G__36251;
i__36029_36235 = G__36252;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36253 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36253], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36253)))?cljs.core.second(arglists_36253):arglists_36253)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36034_36255 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36035_36256 = null;
var count__36036_36257 = (0);
var i__36037_36258 = (0);
while(true){
if((i__36037_36258 < count__36036_36257)){
var vec__36047_36259 = chunk__36035_36256.cljs$core$IIndexed$_nth$arity$2(null,i__36037_36258);
var name_36260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047_36259,(0),null);
var map__36050_36261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36047_36259,(1),null);
var map__36050_36262__$1 = cljs.core.__destructure_map(map__36050_36261);
var doc_36263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36050_36262__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36050_36262__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36260], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36264], 0));

if(cljs.core.truth_(doc_36263)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36263], 0));
} else {
}


var G__36265 = seq__36034_36255;
var G__36266 = chunk__36035_36256;
var G__36267 = count__36036_36257;
var G__36268 = (i__36037_36258 + (1));
seq__36034_36255 = G__36265;
chunk__36035_36256 = G__36266;
count__36036_36257 = G__36267;
i__36037_36258 = G__36268;
continue;
} else {
var temp__5753__auto___36269 = cljs.core.seq(seq__36034_36255);
if(temp__5753__auto___36269){
var seq__36034_36270__$1 = temp__5753__auto___36269;
if(cljs.core.chunked_seq_QMARK_(seq__36034_36270__$1)){
var c__4649__auto___36271 = cljs.core.chunk_first(seq__36034_36270__$1);
var G__36272 = cljs.core.chunk_rest(seq__36034_36270__$1);
var G__36273 = c__4649__auto___36271;
var G__36274 = cljs.core.count(c__4649__auto___36271);
var G__36275 = (0);
seq__36034_36255 = G__36272;
chunk__36035_36256 = G__36273;
count__36036_36257 = G__36274;
i__36037_36258 = G__36275;
continue;
} else {
var vec__36068_36276 = cljs.core.first(seq__36034_36270__$1);
var name_36277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36068_36276,(0),null);
var map__36071_36278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36068_36276,(1),null);
var map__36071_36279__$1 = cljs.core.__destructure_map(map__36071_36278);
var doc_36280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071_36279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071_36279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36277], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36281], 0));

if(cljs.core.truth_(doc_36280)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36280], 0));
} else {
}


var G__36282 = cljs.core.next(seq__36034_36270__$1);
var G__36283 = null;
var G__36284 = (0);
var G__36285 = (0);
seq__36034_36255 = G__36282;
chunk__36035_36256 = G__36283;
count__36036_36257 = G__36284;
i__36037_36258 = G__36285;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36079 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36080 = null;
var count__36081 = (0);
var i__36082 = (0);
while(true){
if((i__36082 < count__36081)){
var role = chunk__36080.cljs$core$IIndexed$_nth$arity$2(null,i__36082);
var temp__5753__auto___36286__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36286__$1)){
var spec_36289 = temp__5753__auto___36286__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36289)], 0));
} else {
}


var G__36290 = seq__36079;
var G__36291 = chunk__36080;
var G__36292 = count__36081;
var G__36293 = (i__36082 + (1));
seq__36079 = G__36290;
chunk__36080 = G__36291;
count__36081 = G__36292;
i__36082 = G__36293;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36079);
if(temp__5753__auto____$1){
var seq__36079__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36079__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36079__$1);
var G__36294 = cljs.core.chunk_rest(seq__36079__$1);
var G__36295 = c__4649__auto__;
var G__36296 = cljs.core.count(c__4649__auto__);
var G__36297 = (0);
seq__36079 = G__36294;
chunk__36080 = G__36295;
count__36081 = G__36296;
i__36082 = G__36297;
continue;
} else {
var role = cljs.core.first(seq__36079__$1);
var temp__5753__auto___36298__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36298__$2)){
var spec_36299 = temp__5753__auto___36298__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36299)], 0));
} else {
}


var G__36300 = cljs.core.next(seq__36079__$1);
var G__36301 = null;
var G__36302 = (0);
var G__36303 = (0);
seq__36079 = G__36300;
chunk__36080 = G__36301;
count__36081 = G__36302;
i__36082 = G__36303;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36307 = cljs.core.ex_cause(t);
via = G__36306;
t = G__36307;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36161 = datafied_throwable;
var map__36161__$1 = cljs.core.__destructure_map(map__36161);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36161__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36162 = cljs.core.last(via);
var map__36162__$1 = cljs.core.__destructure_map(map__36162);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36163 = data;
var map__36163__$1 = cljs.core.__destructure_map(map__36163);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36164 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36164__$1 = cljs.core.__destructure_map(map__36164);
var top_data = map__36164__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36166 = phase;
var G__36166__$1 = (((G__36166 instanceof cljs.core.Keyword))?G__36166.fqn:null);
switch (G__36166__$1) {
case "read-source":
var map__36167 = data;
var map__36167__$1 = cljs.core.__destructure_map(map__36167);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36167__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36167__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36168 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36168__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36168,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36168);
var G__36168__$2 = (cljs.core.truth_((function (){var fexpr__36169 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36169.cljs$core$IFn$_invoke$arity$1 ? fexpr__36169.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36169.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36168__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36168__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36168__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36170 = top_data;
var G__36170__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36170,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36170);
var G__36170__$2 = (cljs.core.truth_((function (){var fexpr__36171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36171.cljs$core$IFn$_invoke$arity$1 ? fexpr__36171.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36171.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36170__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36170__$1);
var G__36170__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36170__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36170__$2);
var G__36170__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36170__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36170__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36170__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36170__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36172 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36172,(3),null);
var G__36179 = top_data;
var G__36179__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36179);
var G__36179__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36179__$1);
var G__36179__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36179__$2);
var G__36179__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36179__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36179__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36179__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36179__$4;
}

break;
case "execution":
var vec__36184 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36158_SHARP_){
var or__4223__auto__ = (p1__36158_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__36187 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36187.cljs$core$IFn$_invoke$arity$1 ? fexpr__36187.cljs$core$IFn$_invoke$arity$1(p1__36158_SHARP_) : fexpr__36187.call(null,p1__36158_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__36188 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36188__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36188,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36188);
var G__36188__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36188__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36188__$1);
var G__36188__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36188__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36188__$2);
var G__36188__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36188__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36188__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36188__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36188__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36166__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36191){
var map__36192 = p__36191;
var map__36192__$1 = cljs.core.__destructure_map(map__36192);
var triage_data = map__36192__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36194 = phase;
var G__36194__$1 = (((G__36194 instanceof cljs.core.Keyword))?G__36194.fqn:null);
switch (G__36194__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36195 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36196 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36197 = loc;
var G__36198 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36199_36322 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36200_36323 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36201_36324 = true;
var _STAR_print_fn_STAR__temp_val__36202_36325 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36201_36324);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36202_36325);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36189_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36189_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36200_36323);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36199_36322);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36195,G__36196,G__36197,G__36198) : format.call(null,G__36195,G__36196,G__36197,G__36198));

break;
case "macroexpansion":
var G__36203 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36204 = cause_type;
var G__36205 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36206 = loc;
var G__36207 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36203,G__36204,G__36205,G__36206,G__36207) : format.call(null,G__36203,G__36204,G__36205,G__36206,G__36207));

break;
case "compile-syntax-check":
var G__36208 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36209 = cause_type;
var G__36210 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36211 = loc;
var G__36212 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36208,G__36209,G__36210,G__36211,G__36212) : format.call(null,G__36208,G__36209,G__36210,G__36211,G__36212));

break;
case "compilation":
var G__36213 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36214 = cause_type;
var G__36215 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36216 = loc;
var G__36217 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36213,G__36214,G__36215,G__36216,G__36217) : format.call(null,G__36213,G__36214,G__36215,G__36216,G__36217));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36218 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36219 = symbol;
var G__36220 = loc;
var G__36221 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36223_36329 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36224_36330 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36225_36331 = true;
var _STAR_print_fn_STAR__temp_val__36226_36332 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36225_36331);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36226_36332);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36190_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36190_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36224_36330);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36223_36329);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36218,G__36219,G__36220,G__36221) : format.call(null,G__36218,G__36219,G__36220,G__36221));
} else {
var G__36227 = "Execution error%s at %s(%s).\n%s\n";
var G__36228 = cause_type;
var G__36229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36230 = loc;
var G__36231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36227,G__36228,G__36229,G__36230,G__36231) : format.call(null,G__36227,G__36228,G__36229,G__36230,G__36231));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36194__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
