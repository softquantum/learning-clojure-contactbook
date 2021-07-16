goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35052){
var map__35053 = p__35052;
var map__35053__$1 = cljs.core.__destructure_map(map__35053);
var m = map__35053__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35053__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35054_35225 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35055_35226 = null;
var count__35056_35227 = (0);
var i__35057_35228 = (0);
while(true){
if((i__35057_35228 < count__35056_35227)){
var f_35229 = chunk__35055_35226.cljs$core$IIndexed$_nth$arity$2(null,i__35057_35228);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35229], 0));


var G__35230 = seq__35054_35225;
var G__35231 = chunk__35055_35226;
var G__35232 = count__35056_35227;
var G__35233 = (i__35057_35228 + (1));
seq__35054_35225 = G__35230;
chunk__35055_35226 = G__35231;
count__35056_35227 = G__35232;
i__35057_35228 = G__35233;
continue;
} else {
var temp__5753__auto___35234 = cljs.core.seq(seq__35054_35225);
if(temp__5753__auto___35234){
var seq__35054_35235__$1 = temp__5753__auto___35234;
if(cljs.core.chunked_seq_QMARK_(seq__35054_35235__$1)){
var c__4649__auto___35236 = cljs.core.chunk_first(seq__35054_35235__$1);
var G__35237 = cljs.core.chunk_rest(seq__35054_35235__$1);
var G__35238 = c__4649__auto___35236;
var G__35239 = cljs.core.count(c__4649__auto___35236);
var G__35240 = (0);
seq__35054_35225 = G__35237;
chunk__35055_35226 = G__35238;
count__35056_35227 = G__35239;
i__35057_35228 = G__35240;
continue;
} else {
var f_35241 = cljs.core.first(seq__35054_35235__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35241], 0));


var G__35242 = cljs.core.next(seq__35054_35235__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35054_35225 = G__35242;
chunk__35055_35226 = G__35243;
count__35056_35227 = G__35244;
i__35057_35228 = G__35245;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35246 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35246], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35246)))?cljs.core.second(arglists_35246):arglists_35246)], 0));
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
var seq__35060_35258 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35061_35259 = null;
var count__35062_35260 = (0);
var i__35063_35261 = (0);
while(true){
if((i__35063_35261 < count__35062_35260)){
var vec__35075_35263 = chunk__35061_35259.cljs$core$IIndexed$_nth$arity$2(null,i__35063_35261);
var name_35264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075_35263,(0),null);
var map__35078_35265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35075_35263,(1),null);
var map__35078_35266__$1 = cljs.core.__destructure_map(map__35078_35265);
var doc_35267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078_35266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35264], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35268], 0));

if(cljs.core.truth_(doc_35267)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35267], 0));
} else {
}


var G__35293 = seq__35060_35258;
var G__35294 = chunk__35061_35259;
var G__35295 = count__35062_35260;
var G__35296 = (i__35063_35261 + (1));
seq__35060_35258 = G__35293;
chunk__35061_35259 = G__35294;
count__35062_35260 = G__35295;
i__35063_35261 = G__35296;
continue;
} else {
var temp__5753__auto___35297 = cljs.core.seq(seq__35060_35258);
if(temp__5753__auto___35297){
var seq__35060_35298__$1 = temp__5753__auto___35297;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35298__$1)){
var c__4649__auto___35299 = cljs.core.chunk_first(seq__35060_35298__$1);
var G__35300 = cljs.core.chunk_rest(seq__35060_35298__$1);
var G__35301 = c__4649__auto___35299;
var G__35302 = cljs.core.count(c__4649__auto___35299);
var G__35303 = (0);
seq__35060_35258 = G__35300;
chunk__35061_35259 = G__35301;
count__35062_35260 = G__35302;
i__35063_35261 = G__35303;
continue;
} else {
var vec__35079_35304 = cljs.core.first(seq__35060_35298__$1);
var name_35305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35079_35304,(0),null);
var map__35082_35306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35079_35304,(1),null);
var map__35082_35307__$1 = cljs.core.__destructure_map(map__35082_35306);
var doc_35308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35082_35307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35082_35307__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35305], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35309], 0));

if(cljs.core.truth_(doc_35308)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35308], 0));
} else {
}


var G__35310 = cljs.core.next(seq__35060_35298__$1);
var G__35311 = null;
var G__35312 = (0);
var G__35313 = (0);
seq__35060_35258 = G__35310;
chunk__35061_35259 = G__35311;
count__35062_35260 = G__35312;
i__35063_35261 = G__35313;
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

var seq__35084 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35085 = null;
var count__35086 = (0);
var i__35087 = (0);
while(true){
if((i__35087 < count__35086)){
var role = chunk__35085.cljs$core$IIndexed$_nth$arity$2(null,i__35087);
var temp__5753__auto___35314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35314__$1)){
var spec_35315 = temp__5753__auto___35314__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35315)], 0));
} else {
}


var G__35316 = seq__35084;
var G__35317 = chunk__35085;
var G__35318 = count__35086;
var G__35319 = (i__35087 + (1));
seq__35084 = G__35316;
chunk__35085 = G__35317;
count__35086 = G__35318;
i__35087 = G__35319;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35084);
if(temp__5753__auto____$1){
var seq__35084__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35084__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35084__$1);
var G__35320 = cljs.core.chunk_rest(seq__35084__$1);
var G__35321 = c__4649__auto__;
var G__35322 = cljs.core.count(c__4649__auto__);
var G__35323 = (0);
seq__35084 = G__35320;
chunk__35085 = G__35321;
count__35086 = G__35322;
i__35087 = G__35323;
continue;
} else {
var role = cljs.core.first(seq__35084__$1);
var temp__5753__auto___35324__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35324__$2)){
var spec_35325 = temp__5753__auto___35324__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35325)], 0));
} else {
}


var G__35326 = cljs.core.next(seq__35084__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__35084 = G__35326;
chunk__35085 = G__35327;
count__35086 = G__35328;
i__35087 = G__35329;
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
var G__35330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35331 = cljs.core.ex_cause(t);
via = G__35330;
t = G__35331;
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
var map__35093 = datafied_throwable;
var map__35093__$1 = cljs.core.__destructure_map(map__35093);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35093__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35093__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35093__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35095 = cljs.core.last(via);
var map__35095__$1 = cljs.core.__destructure_map(map__35095);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35095__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35095__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35096 = data;
var map__35096__$1 = cljs.core.__destructure_map(map__35096);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35096__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35097 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35097__$1 = cljs.core.__destructure_map(map__35097);
var top_data = map__35097__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35098 = phase;
var G__35098__$1 = (((G__35098 instanceof cljs.core.Keyword))?G__35098.fqn:null);
switch (G__35098__$1) {
case "read-source":
var map__35099 = data;
var map__35099__$1 = cljs.core.__destructure_map(map__35099);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35099__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35100 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35100__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35100);
var G__35100__$2 = (cljs.core.truth_((function (){var fexpr__35101 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35101.cljs$core$IFn$_invoke$arity$1 ? fexpr__35101.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35101.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35100__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35100__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35100__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35100__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35102 = top_data;
var G__35102__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35102,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35102);
var G__35102__$2 = (cljs.core.truth_((function (){var fexpr__35103 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35103.cljs$core$IFn$_invoke$arity$1 ? fexpr__35103.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35103.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35102__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35102__$1);
var G__35102__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35102__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35102__$2);
var G__35102__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35102__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35102__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35102__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35102__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35105 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35105,(3),null);
var G__35108 = top_data;
var G__35108__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35108,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35108);
var G__35108__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35108__$1);
var G__35108__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35108__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35108__$2);
var G__35108__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35108__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35108__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35108__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35108__$4;
}

break;
case "execution":
var vec__35110 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35092_SHARP_){
var or__4223__auto__ = (p1__35092_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__35113 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35113.cljs$core$IFn$_invoke$arity$1 ? fexpr__35113.cljs$core$IFn$_invoke$arity$1(p1__35092_SHARP_) : fexpr__35113.call(null,p1__35092_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__35114 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35114__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35114,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35114);
var G__35114__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35114__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35114__$1);
var G__35114__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35114__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35114__$2);
var G__35114__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35114__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35114__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35114__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35114__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35098__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35117){
var map__35118 = p__35117;
var map__35118__$1 = cljs.core.__destructure_map(map__35118);
var triage_data = map__35118__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35118__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35119 = phase;
var G__35119__$1 = (((G__35119 instanceof cljs.core.Keyword))?G__35119.fqn:null);
switch (G__35119__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35120 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35122 = loc;
var G__35123 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35128_35345 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35129_35346 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35130_35347 = true;
var _STAR_print_fn_STAR__temp_val__35131_35348 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35130_35347);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35131_35348);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35115_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35115_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35129_35346);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35128_35345);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35120,G__35121,G__35122,G__35123) : format.call(null,G__35120,G__35121,G__35122,G__35123));

break;
case "macroexpansion":
var G__35145 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35146 = cause_type;
var G__35147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35148 = loc;
var G__35149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35145,G__35146,G__35147,G__35148,G__35149) : format.call(null,G__35145,G__35146,G__35147,G__35148,G__35149));

break;
case "compile-syntax-check":
var G__35150 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35151 = cause_type;
var G__35152 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35153 = loc;
var G__35154 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35150,G__35151,G__35152,G__35153,G__35154) : format.call(null,G__35150,G__35151,G__35152,G__35153,G__35154));

break;
case "compilation":
var G__35155 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35156 = cause_type;
var G__35157 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35158 = loc;
var G__35159 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35155,G__35156,G__35157,G__35158,G__35159) : format.call(null,G__35155,G__35156,G__35157,G__35158,G__35159));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35167 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35168 = symbol;
var G__35169 = loc;
var G__35170 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35171_35356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35172_35357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35173_35358 = true;
var _STAR_print_fn_STAR__temp_val__35174_35359 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35173_35358);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35174_35359);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35116_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35116_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35172_35357);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35171_35356);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35167,G__35168,G__35169,G__35170) : format.call(null,G__35167,G__35168,G__35169,G__35170));
} else {
var G__35189 = "Execution error%s at %s(%s).\n%s\n";
var G__35190 = cause_type;
var G__35191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35192 = loc;
var G__35193 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35189,G__35190,G__35191,G__35192,G__35193) : format.call(null,G__35189,G__35190,G__35191,G__35192,G__35193));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35119__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
