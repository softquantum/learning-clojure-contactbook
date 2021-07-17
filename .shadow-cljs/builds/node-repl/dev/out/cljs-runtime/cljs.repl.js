goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29715){
var map__29716 = p__29715;
var map__29716__$1 = cljs.core.__destructure_map(map__29716);
var m = map__29716__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29716__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29718_29992 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29719_29993 = null;
var count__29720_29994 = (0);
var i__29721_29995 = (0);
while(true){
if((i__29721_29995 < count__29720_29994)){
var f_29996 = chunk__29719_29993.cljs$core$IIndexed$_nth$arity$2(null,i__29721_29995);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29996], 0));


var G__29997 = seq__29718_29992;
var G__29998 = chunk__29719_29993;
var G__29999 = count__29720_29994;
var G__30000 = (i__29721_29995 + (1));
seq__29718_29992 = G__29997;
chunk__29719_29993 = G__29998;
count__29720_29994 = G__29999;
i__29721_29995 = G__30000;
continue;
} else {
var temp__5753__auto___30001 = cljs.core.seq(seq__29718_29992);
if(temp__5753__auto___30001){
var seq__29718_30002__$1 = temp__5753__auto___30001;
if(cljs.core.chunked_seq_QMARK_(seq__29718_30002__$1)){
var c__4649__auto___30003 = cljs.core.chunk_first(seq__29718_30002__$1);
var G__30004 = cljs.core.chunk_rest(seq__29718_30002__$1);
var G__30005 = c__4649__auto___30003;
var G__30006 = cljs.core.count(c__4649__auto___30003);
var G__30007 = (0);
seq__29718_29992 = G__30004;
chunk__29719_29993 = G__30005;
count__29720_29994 = G__30006;
i__29721_29995 = G__30007;
continue;
} else {
var f_30008 = cljs.core.first(seq__29718_30002__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_30008], 0));


var G__30009 = cljs.core.next(seq__29718_30002__$1);
var G__30010 = null;
var G__30011 = (0);
var G__30012 = (0);
seq__29718_29992 = G__30009;
chunk__29719_29993 = G__30010;
count__29720_29994 = G__30011;
i__29721_29995 = G__30012;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30013 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_30013], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_30013)))?cljs.core.second(arglists_30013):arglists_30013)], 0));
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
var seq__29762_30014 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29763_30015 = null;
var count__29764_30016 = (0);
var i__29765_30017 = (0);
while(true){
if((i__29765_30017 < count__29764_30016)){
var vec__29781_30018 = chunk__29763_30015.cljs$core$IIndexed$_nth$arity$2(null,i__29765_30017);
var name_30019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29781_30018,(0),null);
var map__29784_30020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29781_30018,(1),null);
var map__29784_30021__$1 = cljs.core.__destructure_map(map__29784_30020);
var doc_30022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784_30021__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29784_30021__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30019], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30023], 0));

if(cljs.core.truth_(doc_30022)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30022], 0));
} else {
}


var G__30024 = seq__29762_30014;
var G__30025 = chunk__29763_30015;
var G__30026 = count__29764_30016;
var G__30027 = (i__29765_30017 + (1));
seq__29762_30014 = G__30024;
chunk__29763_30015 = G__30025;
count__29764_30016 = G__30026;
i__29765_30017 = G__30027;
continue;
} else {
var temp__5753__auto___30028 = cljs.core.seq(seq__29762_30014);
if(temp__5753__auto___30028){
var seq__29762_30029__$1 = temp__5753__auto___30028;
if(cljs.core.chunked_seq_QMARK_(seq__29762_30029__$1)){
var c__4649__auto___30030 = cljs.core.chunk_first(seq__29762_30029__$1);
var G__30031 = cljs.core.chunk_rest(seq__29762_30029__$1);
var G__30032 = c__4649__auto___30030;
var G__30033 = cljs.core.count(c__4649__auto___30030);
var G__30034 = (0);
seq__29762_30014 = G__30031;
chunk__29763_30015 = G__30032;
count__29764_30016 = G__30033;
i__29765_30017 = G__30034;
continue;
} else {
var vec__29788_30035 = cljs.core.first(seq__29762_30029__$1);
var name_30036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788_30035,(0),null);
var map__29791_30037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29788_30035,(1),null);
var map__29791_30038__$1 = cljs.core.__destructure_map(map__29791_30037);
var doc_30039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29791_30038__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29791_30038__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30036], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30040], 0));

if(cljs.core.truth_(doc_30039)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30039], 0));
} else {
}


var G__30045 = cljs.core.next(seq__29762_30029__$1);
var G__30046 = null;
var G__30047 = (0);
var G__30048 = (0);
seq__29762_30014 = G__30045;
chunk__29763_30015 = G__30046;
count__29764_30016 = G__30047;
i__29765_30017 = G__30048;
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

var seq__29797 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29798 = null;
var count__29799 = (0);
var i__29800 = (0);
while(true){
if((i__29800 < count__29799)){
var role = chunk__29798.cljs$core$IIndexed$_nth$arity$2(null,i__29800);
var temp__5753__auto___30050__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30050__$1)){
var spec_30051 = temp__5753__auto___30050__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30051)], 0));
} else {
}


var G__30052 = seq__29797;
var G__30053 = chunk__29798;
var G__30054 = count__29799;
var G__30055 = (i__29800 + (1));
seq__29797 = G__30052;
chunk__29798 = G__30053;
count__29799 = G__30054;
i__29800 = G__30055;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__29797);
if(temp__5753__auto____$1){
var seq__29797__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29797__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29797__$1);
var G__30056 = cljs.core.chunk_rest(seq__29797__$1);
var G__30057 = c__4649__auto__;
var G__30058 = cljs.core.count(c__4649__auto__);
var G__30059 = (0);
seq__29797 = G__30056;
chunk__29798 = G__30057;
count__29799 = G__30058;
i__29800 = G__30059;
continue;
} else {
var role = cljs.core.first(seq__29797__$1);
var temp__5753__auto___30060__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___30060__$2)){
var spec_30061 = temp__5753__auto___30060__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30061)], 0));
} else {
}


var G__30062 = cljs.core.next(seq__29797__$1);
var G__30063 = null;
var G__30064 = (0);
var G__30065 = (0);
seq__29797 = G__30062;
chunk__29798 = G__30063;
count__29799 = G__30064;
i__29800 = G__30065;
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
var G__30073 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30074 = cljs.core.ex_cause(t);
via = G__30073;
t = G__30074;
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
var map__29888 = datafied_throwable;
var map__29888__$1 = cljs.core.__destructure_map(map__29888);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29888__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29888__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29888__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29889 = cljs.core.last(via);
var map__29889__$1 = cljs.core.__destructure_map(map__29889);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29889__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29890 = data;
var map__29890__$1 = cljs.core.__destructure_map(map__29890);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29890__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29890__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29890__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29891 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29891__$1 = cljs.core.__destructure_map(map__29891);
var top_data = map__29891__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29918 = phase;
var G__29918__$1 = (((G__29918 instanceof cljs.core.Keyword))?G__29918.fqn:null);
switch (G__29918__$1) {
case "read-source":
var map__29919 = data;
var map__29919__$1 = cljs.core.__destructure_map(map__29919);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29919__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29919__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29920 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29920__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29920,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29920);
var G__29920__$2 = (cljs.core.truth_((function (){var fexpr__29922 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29922.cljs$core$IFn$_invoke$arity$1 ? fexpr__29922.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29922.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29920__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29920__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29920__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29924 = top_data;
var G__29924__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29924,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29924);
var G__29924__$2 = (cljs.core.truth_((function (){var fexpr__29925 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29925.cljs$core$IFn$_invoke$arity$1 ? fexpr__29925.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29925.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29924__$1);
var G__29924__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29924__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29924__$2);
var G__29924__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29924__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29924__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29924__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29924__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29927 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29927,(3),null);
var G__29930 = top_data;
var G__29930__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29930,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29930);
var G__29930__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29930__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29930__$1);
var G__29930__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29930__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29930__$2);
var G__29930__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29930__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29930__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29930__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29930__$4;
}

break;
case "execution":
var vec__29932 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29932,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29877_SHARP_){
var or__4223__auto__ = (p1__29877_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__29937 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29937.cljs$core$IFn$_invoke$arity$1 ? fexpr__29937.cljs$core$IFn$_invoke$arity$1(p1__29877_SHARP_) : fexpr__29937.call(null,p1__29877_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__29938 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29938__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29938,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29938);
var G__29938__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29938__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29938__$1);
var G__29938__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29938__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29938__$2);
var G__29938__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29938__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29938__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29938__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29938__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29918__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29943){
var map__29944 = p__29943;
var map__29944__$1 = cljs.core.__destructure_map(map__29944);
var triage_data = map__29944__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29944__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__29945 = phase;
var G__29945__$1 = (((G__29945 instanceof cljs.core.Keyword))?G__29945.fqn:null);
switch (G__29945__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29946 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29947 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29948 = loc;
var G__29949 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29950_30106 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29951_30107 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29952_30108 = true;
var _STAR_print_fn_STAR__temp_val__29953_30109 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29952_30108);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29953_30109);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29940_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29940_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29951_30107);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29950_30106);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29946,G__29947,G__29948,G__29949) : format.call(null,G__29946,G__29947,G__29948,G__29949));

break;
case "macroexpansion":
var G__29955 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29956 = cause_type;
var G__29957 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29958 = loc;
var G__29959 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29955,G__29956,G__29957,G__29958,G__29959) : format.call(null,G__29955,G__29956,G__29957,G__29958,G__29959));

break;
case "compile-syntax-check":
var G__29960 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29961 = cause_type;
var G__29962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29963 = loc;
var G__29964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29960,G__29961,G__29962,G__29963,G__29964) : format.call(null,G__29960,G__29961,G__29962,G__29963,G__29964));

break;
case "compilation":
var G__29965 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29966 = cause_type;
var G__29967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29968 = loc;
var G__29969 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29965,G__29966,G__29967,G__29968,G__29969) : format.call(null,G__29965,G__29966,G__29967,G__29968,G__29969));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29970 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29971 = symbol;
var G__29972 = loc;
var G__29973 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29974_30134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29975_30135 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29976_30136 = true;
var _STAR_print_fn_STAR__temp_val__29977_30137 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29976_30136);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29977_30137);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29941_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29941_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29975_30135);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29974_30134);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29970,G__29971,G__29972,G__29973) : format.call(null,G__29970,G__29971,G__29972,G__29973));
} else {
var G__29982 = "Execution error%s at %s(%s).\n%s\n";
var G__29983 = cause_type;
var G__29984 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29985 = loc;
var G__29986 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29982,G__29983,G__29984,G__29985,G__29986) : format.call(null,G__29982,G__29983,G__29984,G__29985,G__29986));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29945__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
