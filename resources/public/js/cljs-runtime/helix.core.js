goog.provide('helix.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
helix.core.Fragment = module$node_modules$react$index.Fragment;
helix.core.Suspense = module$node_modules$react$index.Suspense;
helix.core.create_element = module$node_modules$react$index.createElement;
helix.core.create_context = module$node_modules$react$index.createContext;
helix.core.get_react = (function helix$core$get_react(){
return module$node_modules$react$index;
});
/**
 * Create a new React element from a valid React type.
 * 
 *   Example:
 *   ```
 *   ($ MyComponent
 * "child1"
 * ($ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$ = (function helix$core$$(var_args){
var args__4835__auto__ = [];
var len__4829__auto___36443 = arguments.length;
var i__4830__auto___36444 = (0);
while(true){
if((i__4830__auto___36444 < len__4829__auto___36443)){
args__4835__auto__.push((arguments[i__4830__auto___36444]));

var G__36445 = (i__4830__auto___36444 + (1));
i__4830__auto___36444 = G__36445;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return helix.core.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(helix.core.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_p = cljs.core.first(args);
var _QMARK_c = cljs.core.rest(args);
var native_QMARK_ = (function (){var or__4223__auto__ = (type instanceof cljs.core.Keyword);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = typeof type === 'string';
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type));
}
}
})();
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
if(cljs.core.map_QMARK_(_QMARK_p)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,(cljs.core.truth_(native_QMARK_)?helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(_QMARK_p):helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(_QMARK_p)),_QMARK_c);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(helix.core.create_element,type_SINGLEQUOTE_,null,args);
}
}));

(helix.core.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(helix.core.$.cljs$lang$applyTo = (function (seq36432){
var G__36433 = cljs.core.first(seq36432);
var seq36432__$1 = cljs.core.next(seq36432);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36433,seq36432__$1);
}));

/**
 * Dynamically create a new React element from a valid React type.
 * 
 *   `$` can typically be faster, because it will statically process the arguments
 *   at macro-time if possible.
 * 
 *   Example:
 *   ```
 *   ($$ MyComponent
 * "child1"
 * ($$ "span"
 *   {:style {:color "green"}}
 *   "child2" ))
 *   ```
 */
helix.core.$$ = helix.core.$;

/**
 * @interface
 */
helix.core.IExtractType = function(){};

var helix$core$IExtractType$_type$dyn_36446 = (function (factory){
var x__4521__auto__ = (((factory == null))?null:factory);
var m__4522__auto__ = (helix.core._type[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4522__auto__.call(null,factory));
} else {
var m__4519__auto__ = (helix.core._type["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4519__auto__.call(null,factory));
} else {
throw cljs.core.missing_protocol("IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
helix.core._type = (function helix$core$_type(factory){
if((((!((factory == null)))) && ((!((factory.helix$core$IExtractType$_type$arity$1 == null)))))){
return factory.helix$core$IExtractType$_type$arity$1(factory);
} else {
return helix$core$IExtractType$_type$dyn_36446(factory);
}
});

helix.core.type = (function helix$core$type(f){
return helix.core._type(f);
});
/**
 * Creates a factory function for a React component
 */
helix.core.factory = (function helix$core$factory(type){
var x36434 = (function() { 
var helix$core$factory_$_factory__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,type,args);
};
var helix$core$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36449__i = 0, G__36449__a = new Array(arguments.length -  0);
while (G__36449__i < G__36449__a.length) {G__36449__a[G__36449__i] = arguments[G__36449__i + 0]; ++G__36449__i;}
  args = new cljs.core.IndexedSeq(G__36449__a,0,null);
} 
return helix$core$factory_$_factory__delegate.call(this,args);};
helix$core$factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$factory_$_factory.cljs$lang$applyTo = (function (arglist__36450){
var args = cljs.core.seq(arglist__36450);
return helix$core$factory_$_factory__delegate(args);
});
helix$core$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$factory_$_factory__delegate;
return helix$core$factory_$_factory;
})()
;
(x36434.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x36434.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x36434;
});
helix.core.cljs_factory = (function helix$core$cljs_factory(type){
var x36435 = (function() { 
var helix$core$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var props = cljs.core.first(args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({"helix/props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967)], 0)), "key": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"key","key",-1516042587),undefined), "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),undefined)}),cljs.core.rest(args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({}),args);
}
};
var helix$core$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36454__i = 0, G__36454__a = new Array(arguments.length -  0);
while (G__36454__i < G__36454__a.length) {G__36454__a[G__36454__i] = arguments[G__36454__i + 0]; ++G__36454__i;}
  args = new cljs.core.IndexedSeq(G__36454__a,0,null);
} 
return helix$core$cljs_factory_$_factory__delegate.call(this,args);};
helix$core$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
helix$core$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__36456){
var args = cljs.core.seq(arglist__36456);
return helix$core$cljs_factory_$_factory__delegate(args);
});
helix$core$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = helix$core$cljs_factory_$_factory__delegate;
return helix$core$cljs_factory_$_factory;
})()
;
(x36435.helix$core$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x36435.helix$core$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x36435;
});
helix.core.assoc_some = (function helix$core$assoc_some(m,k,x){
if((!((x == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,x);
} else {
return m;
}
});
helix.core.extract_cljs_props = (function helix$core$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_(o)) || ((o == null)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5751__auto__ = goog.object.get(o,"helix/props");
if(cljs.core.truth_(temp__5751__auto__)){
var props = temp__5751__auto__;
return helix.core.assoc_some(props,new cljs.core.Keyword(null,"children","children",-940561982),goog.object.get(o,"children"));
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(o);
}
});
/**
 * Like React.memo, but passes props as CLJS map-likes instead of JS objects.
 */
helix.core.memo = (function helix$core$memo(var_args){
var G__36437 = arguments.length;
switch (G__36437) {
case 1:
return helix.core.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.core.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.core.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react$index.memo(component);
}));

(helix.core.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,compare){
return module$node_modules$react$index.memo(component,(function helix$core$memo_compare(o,o_SINGLEQUOTE_){
var G__36438 = helix.core.extract_cljs_props(o);
var G__36439 = helix.core.extract_cljs_props(o_SINGLEQUOTE_);
return (compare.cljs$core$IFn$_invoke$arity$2 ? compare.cljs$core$IFn$_invoke$arity$2(G__36438,G__36439) : compare.call(null,G__36438,G__36439));
}));
}));

(helix.core.memo.cljs$lang$maxFixedArity = 2);

helix.core.create_component = (function helix$core$create_component(spec,statics){
var render = spec.render;
var render_SINGLEQUOTE_ = (function (this$){
var G__36440 = this$;
var G__36441 = helix.core.extract_cljs_props(this$.props);
var G__36442 = this$.state;
return (render.cljs$core$IFn$_invoke$arity$3 ? render.cljs$core$IFn$_invoke$arity$3(G__36440,G__36441,G__36442) : render.call(null,G__36440,G__36441,G__36442));
});
goog.object.set(spec,"render",render_SINGLEQUOTE_);

return helix.impl.classes.createComponent(module$node_modules$react$index.Component,spec,statics);
});
/**
 * Registers a component with the React Fresh runtime.
 *   `type` is the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
helix.core.register_BANG_ = (function helix$core$register_BANG_(type,id){
if((!((window.$$Register$$ == null)))){
return window.$$Register$$(type,id);
} else {
return null;
}
});
helix.core.signature_BANG_ = (function helix$core$signature_BANG_(){
var and__4221__auto__ = (!((window.$$Signature$$ == null)));
if(and__4221__auto__){
return window.$$Signature$$();
} else {
return and__4221__auto__;
}
});

//# sourceMappingURL=helix.core.js.map
