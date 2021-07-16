goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33462 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33462(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33465 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33465(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32186 = coll;
var G__32187 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32186,G__32187) : shadow.dom.lazy_native_coll_seq.call(null,G__32186,G__32187));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32242 = arguments.length;
switch (G__32242) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32258 = arguments.length;
switch (G__32258) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32287 = arguments.length;
switch (G__32287) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32308 = arguments.length;
switch (G__32308) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32319 = arguments.length;
switch (G__32319) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32332 = arguments.length;
switch (G__32332) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32356){if((e32356 instanceof Object)){
var e = e32356;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32356;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32374 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32375 = null;
var count__32376 = (0);
var i__32377 = (0);
while(true){
if((i__32377 < count__32376)){
var el = chunk__32375.cljs$core$IIndexed$_nth$arity$2(null,i__32377);
var handler_33521__$1 = ((function (seq__32374,chunk__32375,count__32376,i__32377,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32374,chunk__32375,count__32376,i__32377,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33521__$1);


var G__33522 = seq__32374;
var G__33523 = chunk__32375;
var G__33524 = count__32376;
var G__33525 = (i__32377 + (1));
seq__32374 = G__33522;
chunk__32375 = G__33523;
count__32376 = G__33524;
i__32377 = G__33525;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32374);
if(temp__5753__auto__){
var seq__32374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32374__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32374__$1);
var G__33527 = cljs.core.chunk_rest(seq__32374__$1);
var G__33528 = c__4649__auto__;
var G__33529 = cljs.core.count(c__4649__auto__);
var G__33530 = (0);
seq__32374 = G__33527;
chunk__32375 = G__33528;
count__32376 = G__33529;
i__32377 = G__33530;
continue;
} else {
var el = cljs.core.first(seq__32374__$1);
var handler_33531__$1 = ((function (seq__32374,chunk__32375,count__32376,i__32377,el,seq__32374__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32374,chunk__32375,count__32376,i__32377,el,seq__32374__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33531__$1);


var G__33532 = cljs.core.next(seq__32374__$1);
var G__33533 = null;
var G__33534 = (0);
var G__33535 = (0);
seq__32374 = G__33532;
chunk__32375 = G__33533;
count__32376 = G__33534;
i__32377 = G__33535;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32403 = arguments.length;
switch (G__32403) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32415 = cljs.core.seq(events);
var chunk__32416 = null;
var count__32417 = (0);
var i__32418 = (0);
while(true){
if((i__32418 < count__32417)){
var vec__32436 = chunk__32416.cljs$core$IIndexed$_nth$arity$2(null,i__32418);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32436,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33548 = seq__32415;
var G__33549 = chunk__32416;
var G__33550 = count__32417;
var G__33551 = (i__32418 + (1));
seq__32415 = G__33548;
chunk__32416 = G__33549;
count__32417 = G__33550;
i__32418 = G__33551;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32415);
if(temp__5753__auto__){
var seq__32415__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32415__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32415__$1);
var G__33553 = cljs.core.chunk_rest(seq__32415__$1);
var G__33554 = c__4649__auto__;
var G__33555 = cljs.core.count(c__4649__auto__);
var G__33556 = (0);
seq__32415 = G__33553;
chunk__32416 = G__33554;
count__32417 = G__33555;
i__32418 = G__33556;
continue;
} else {
var vec__32441 = cljs.core.first(seq__32415__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33559 = cljs.core.next(seq__32415__$1);
var G__33560 = null;
var G__33561 = (0);
var G__33562 = (0);
seq__32415 = G__33559;
chunk__32416 = G__33560;
count__32417 = G__33561;
i__32418 = G__33562;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32455 = cljs.core.seq(styles);
var chunk__32456 = null;
var count__32457 = (0);
var i__32458 = (0);
while(true){
if((i__32458 < count__32457)){
var vec__32473 = chunk__32456.cljs$core$IIndexed$_nth$arity$2(null,i__32458);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32473,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33566 = seq__32455;
var G__33567 = chunk__32456;
var G__33568 = count__32457;
var G__33569 = (i__32458 + (1));
seq__32455 = G__33566;
chunk__32456 = G__33567;
count__32457 = G__33568;
i__32458 = G__33569;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32455);
if(temp__5753__auto__){
var seq__32455__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32455__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32455__$1);
var G__33574 = cljs.core.chunk_rest(seq__32455__$1);
var G__33575 = c__4649__auto__;
var G__33576 = cljs.core.count(c__4649__auto__);
var G__33577 = (0);
seq__32455 = G__33574;
chunk__32456 = G__33575;
count__32457 = G__33576;
i__32458 = G__33577;
continue;
} else {
var vec__32484 = cljs.core.first(seq__32455__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32484,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33578 = cljs.core.next(seq__32455__$1);
var G__33579 = null;
var G__33580 = (0);
var G__33581 = (0);
seq__32455 = G__33578;
chunk__32456 = G__33579;
count__32457 = G__33580;
i__32458 = G__33581;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32495_33583 = key;
var G__32495_33584__$1 = (((G__32495_33583 instanceof cljs.core.Keyword))?G__32495_33583.fqn:null);
switch (G__32495_33584__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33592 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_33592,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_33592,"aria-");
}
})())){
el.setAttribute(ks_33592,value);
} else {
(el[ks_33592] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32497){
var map__32498 = p__32497;
var map__32498__$1 = cljs.core.__destructure_map(map__32498);
var props = map__32498__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32498__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32499 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32499,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32499,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32499,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32504 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32504,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32504;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32510 = arguments.length;
switch (G__32510) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32520){
var vec__32521 = p__32520;
var seq__32522 = cljs.core.seq(vec__32521);
var first__32523 = cljs.core.first(seq__32522);
var seq__32522__$1 = cljs.core.next(seq__32522);
var nn = first__32523;
var first__32523__$1 = cljs.core.first(seq__32522__$1);
var seq__32522__$2 = cljs.core.next(seq__32522__$1);
var np = first__32523__$1;
var nc = seq__32522__$2;
var node = vec__32521;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32527 = nn;
var G__32528 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32527,G__32528) : create_fn.call(null,G__32527,G__32528));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32529 = nn;
var G__32530 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32529,G__32530) : create_fn.call(null,G__32529,G__32530));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32534 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32534,(1),null);
var seq__32537_33617 = cljs.core.seq(node_children);
var chunk__32538_33618 = null;
var count__32539_33619 = (0);
var i__32540_33620 = (0);
while(true){
if((i__32540_33620 < count__32539_33619)){
var child_struct_33623 = chunk__32538_33618.cljs$core$IIndexed$_nth$arity$2(null,i__32540_33620);
var children_33624 = shadow.dom.dom_node(child_struct_33623);
if(cljs.core.seq_QMARK_(children_33624)){
var seq__32581_33626 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33624));
var chunk__32583_33627 = null;
var count__32584_33628 = (0);
var i__32585_33629 = (0);
while(true){
if((i__32585_33629 < count__32584_33628)){
var child_33631 = chunk__32583_33627.cljs$core$IIndexed$_nth$arity$2(null,i__32585_33629);
if(cljs.core.truth_(child_33631)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33631);


var G__33632 = seq__32581_33626;
var G__33633 = chunk__32583_33627;
var G__33634 = count__32584_33628;
var G__33635 = (i__32585_33629 + (1));
seq__32581_33626 = G__33632;
chunk__32583_33627 = G__33633;
count__32584_33628 = G__33634;
i__32585_33629 = G__33635;
continue;
} else {
var G__33638 = seq__32581_33626;
var G__33639 = chunk__32583_33627;
var G__33640 = count__32584_33628;
var G__33641 = (i__32585_33629 + (1));
seq__32581_33626 = G__33638;
chunk__32583_33627 = G__33639;
count__32584_33628 = G__33640;
i__32585_33629 = G__33641;
continue;
}
} else {
var temp__5753__auto___33643 = cljs.core.seq(seq__32581_33626);
if(temp__5753__auto___33643){
var seq__32581_33644__$1 = temp__5753__auto___33643;
if(cljs.core.chunked_seq_QMARK_(seq__32581_33644__$1)){
var c__4649__auto___33645 = cljs.core.chunk_first(seq__32581_33644__$1);
var G__33646 = cljs.core.chunk_rest(seq__32581_33644__$1);
var G__33647 = c__4649__auto___33645;
var G__33648 = cljs.core.count(c__4649__auto___33645);
var G__33649 = (0);
seq__32581_33626 = G__33646;
chunk__32583_33627 = G__33647;
count__32584_33628 = G__33648;
i__32585_33629 = G__33649;
continue;
} else {
var child_33650 = cljs.core.first(seq__32581_33644__$1);
if(cljs.core.truth_(child_33650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33650);


var G__33653 = cljs.core.next(seq__32581_33644__$1);
var G__33654 = null;
var G__33655 = (0);
var G__33656 = (0);
seq__32581_33626 = G__33653;
chunk__32583_33627 = G__33654;
count__32584_33628 = G__33655;
i__32585_33629 = G__33656;
continue;
} else {
var G__33658 = cljs.core.next(seq__32581_33644__$1);
var G__33659 = null;
var G__33660 = (0);
var G__33661 = (0);
seq__32581_33626 = G__33658;
chunk__32583_33627 = G__33659;
count__32584_33628 = G__33660;
i__32585_33629 = G__33661;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33624);
}


var G__33662 = seq__32537_33617;
var G__33663 = chunk__32538_33618;
var G__33664 = count__32539_33619;
var G__33665 = (i__32540_33620 + (1));
seq__32537_33617 = G__33662;
chunk__32538_33618 = G__33663;
count__32539_33619 = G__33664;
i__32540_33620 = G__33665;
continue;
} else {
var temp__5753__auto___33666 = cljs.core.seq(seq__32537_33617);
if(temp__5753__auto___33666){
var seq__32537_33667__$1 = temp__5753__auto___33666;
if(cljs.core.chunked_seq_QMARK_(seq__32537_33667__$1)){
var c__4649__auto___33668 = cljs.core.chunk_first(seq__32537_33667__$1);
var G__33669 = cljs.core.chunk_rest(seq__32537_33667__$1);
var G__33670 = c__4649__auto___33668;
var G__33671 = cljs.core.count(c__4649__auto___33668);
var G__33672 = (0);
seq__32537_33617 = G__33669;
chunk__32538_33618 = G__33670;
count__32539_33619 = G__33671;
i__32540_33620 = G__33672;
continue;
} else {
var child_struct_33674 = cljs.core.first(seq__32537_33667__$1);
var children_33676 = shadow.dom.dom_node(child_struct_33674);
if(cljs.core.seq_QMARK_(children_33676)){
var seq__32605_33677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33676));
var chunk__32607_33678 = null;
var count__32608_33679 = (0);
var i__32609_33680 = (0);
while(true){
if((i__32609_33680 < count__32608_33679)){
var child_33682 = chunk__32607_33678.cljs$core$IIndexed$_nth$arity$2(null,i__32609_33680);
if(cljs.core.truth_(child_33682)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33682);


var G__33684 = seq__32605_33677;
var G__33685 = chunk__32607_33678;
var G__33686 = count__32608_33679;
var G__33687 = (i__32609_33680 + (1));
seq__32605_33677 = G__33684;
chunk__32607_33678 = G__33685;
count__32608_33679 = G__33686;
i__32609_33680 = G__33687;
continue;
} else {
var G__33689 = seq__32605_33677;
var G__33690 = chunk__32607_33678;
var G__33691 = count__32608_33679;
var G__33692 = (i__32609_33680 + (1));
seq__32605_33677 = G__33689;
chunk__32607_33678 = G__33690;
count__32608_33679 = G__33691;
i__32609_33680 = G__33692;
continue;
}
} else {
var temp__5753__auto___33694__$1 = cljs.core.seq(seq__32605_33677);
if(temp__5753__auto___33694__$1){
var seq__32605_33695__$1 = temp__5753__auto___33694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32605_33695__$1)){
var c__4649__auto___33696 = cljs.core.chunk_first(seq__32605_33695__$1);
var G__33697 = cljs.core.chunk_rest(seq__32605_33695__$1);
var G__33698 = c__4649__auto___33696;
var G__33699 = cljs.core.count(c__4649__auto___33696);
var G__33700 = (0);
seq__32605_33677 = G__33697;
chunk__32607_33678 = G__33698;
count__32608_33679 = G__33699;
i__32609_33680 = G__33700;
continue;
} else {
var child_33701 = cljs.core.first(seq__32605_33695__$1);
if(cljs.core.truth_(child_33701)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33701);


var G__33702 = cljs.core.next(seq__32605_33695__$1);
var G__33703 = null;
var G__33704 = (0);
var G__33705 = (0);
seq__32605_33677 = G__33702;
chunk__32607_33678 = G__33703;
count__32608_33679 = G__33704;
i__32609_33680 = G__33705;
continue;
} else {
var G__33706 = cljs.core.next(seq__32605_33695__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__32605_33677 = G__33706;
chunk__32607_33678 = G__33707;
count__32608_33679 = G__33708;
i__32609_33680 = G__33709;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33676);
}


var G__33710 = cljs.core.next(seq__32537_33667__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__32537_33617 = G__33710;
chunk__32538_33618 = G__33711;
count__32539_33619 = G__33712;
i__32540_33620 = G__33713;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32629 = cljs.core.seq(node);
var chunk__32630 = null;
var count__32631 = (0);
var i__32632 = (0);
while(true){
if((i__32632 < count__32631)){
var n = chunk__32630.cljs$core$IIndexed$_nth$arity$2(null,i__32632);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33725 = seq__32629;
var G__33726 = chunk__32630;
var G__33727 = count__32631;
var G__33728 = (i__32632 + (1));
seq__32629 = G__33725;
chunk__32630 = G__33726;
count__32631 = G__33727;
i__32632 = G__33728;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32629);
if(temp__5753__auto__){
var seq__32629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32629__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32629__$1);
var G__33731 = cljs.core.chunk_rest(seq__32629__$1);
var G__33732 = c__4649__auto__;
var G__33733 = cljs.core.count(c__4649__auto__);
var G__33734 = (0);
seq__32629 = G__33731;
chunk__32630 = G__33732;
count__32631 = G__33733;
i__32632 = G__33734;
continue;
} else {
var n = cljs.core.first(seq__32629__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33736 = cljs.core.next(seq__32629__$1);
var G__33737 = null;
var G__33738 = (0);
var G__33739 = (0);
seq__32629 = G__33736;
chunk__32630 = G__33737;
count__32631 = G__33738;
i__32632 = G__33739;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32665 = arguments.length;
switch (G__32665) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32755 = arguments.length;
switch (G__32755) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33759 = arguments.length;
var i__4830__auto___33761 = (0);
while(true){
if((i__4830__auto___33761 < len__4829__auto___33759)){
args__4835__auto__.push((arguments[i__4830__auto___33761]));

var G__33764 = (i__4830__auto___33761 + (1));
i__4830__auto___33761 = G__33764;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32804_33766 = cljs.core.seq(nodes);
var chunk__32805_33767 = null;
var count__32806_33768 = (0);
var i__32807_33769 = (0);
while(true){
if((i__32807_33769 < count__32806_33768)){
var node_33772 = chunk__32805_33767.cljs$core$IIndexed$_nth$arity$2(null,i__32807_33769);
fragment.appendChild(shadow.dom._to_dom(node_33772));


var G__33773 = seq__32804_33766;
var G__33774 = chunk__32805_33767;
var G__33775 = count__32806_33768;
var G__33776 = (i__32807_33769 + (1));
seq__32804_33766 = G__33773;
chunk__32805_33767 = G__33774;
count__32806_33768 = G__33775;
i__32807_33769 = G__33776;
continue;
} else {
var temp__5753__auto___33777 = cljs.core.seq(seq__32804_33766);
if(temp__5753__auto___33777){
var seq__32804_33779__$1 = temp__5753__auto___33777;
if(cljs.core.chunked_seq_QMARK_(seq__32804_33779__$1)){
var c__4649__auto___33781 = cljs.core.chunk_first(seq__32804_33779__$1);
var G__33783 = cljs.core.chunk_rest(seq__32804_33779__$1);
var G__33784 = c__4649__auto___33781;
var G__33785 = cljs.core.count(c__4649__auto___33781);
var G__33786 = (0);
seq__32804_33766 = G__33783;
chunk__32805_33767 = G__33784;
count__32806_33768 = G__33785;
i__32807_33769 = G__33786;
continue;
} else {
var node_33787 = cljs.core.first(seq__32804_33779__$1);
fragment.appendChild(shadow.dom._to_dom(node_33787));


var G__33788 = cljs.core.next(seq__32804_33779__$1);
var G__33789 = null;
var G__33790 = (0);
var G__33791 = (0);
seq__32804_33766 = G__33788;
chunk__32805_33767 = G__33789;
count__32806_33768 = G__33790;
i__32807_33769 = G__33791;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32784){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32784));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32844_33797 = cljs.core.seq(scripts);
var chunk__32845_33798 = null;
var count__32846_33799 = (0);
var i__32847_33800 = (0);
while(true){
if((i__32847_33800 < count__32846_33799)){
var vec__32869_33805 = chunk__32845_33798.cljs$core$IIndexed$_nth$arity$2(null,i__32847_33800);
var script_tag_33806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869_33805,(0),null);
var script_body_33807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869_33805,(1),null);
eval(script_body_33807);


var G__33811 = seq__32844_33797;
var G__33812 = chunk__32845_33798;
var G__33813 = count__32846_33799;
var G__33814 = (i__32847_33800 + (1));
seq__32844_33797 = G__33811;
chunk__32845_33798 = G__33812;
count__32846_33799 = G__33813;
i__32847_33800 = G__33814;
continue;
} else {
var temp__5753__auto___33815 = cljs.core.seq(seq__32844_33797);
if(temp__5753__auto___33815){
var seq__32844_33816__$1 = temp__5753__auto___33815;
if(cljs.core.chunked_seq_QMARK_(seq__32844_33816__$1)){
var c__4649__auto___33817 = cljs.core.chunk_first(seq__32844_33816__$1);
var G__33822 = cljs.core.chunk_rest(seq__32844_33816__$1);
var G__33823 = c__4649__auto___33817;
var G__33824 = cljs.core.count(c__4649__auto___33817);
var G__33825 = (0);
seq__32844_33797 = G__33822;
chunk__32845_33798 = G__33823;
count__32846_33799 = G__33824;
i__32847_33800 = G__33825;
continue;
} else {
var vec__32883_33827 = cljs.core.first(seq__32844_33816__$1);
var script_tag_33828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883_33827,(0),null);
var script_body_33829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32883_33827,(1),null);
eval(script_body_33829);


var G__33831 = cljs.core.next(seq__32844_33816__$1);
var G__33832 = null;
var G__33833 = (0);
var G__33834 = (0);
seq__32844_33797 = G__33831;
chunk__32845_33798 = G__33832;
count__32846_33799 = G__33833;
i__32847_33800 = G__33834;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32891){
var vec__32892 = p__32891;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32950 = cljs.core.seq(style_keys);
var chunk__32951 = null;
var count__32952 = (0);
var i__32953 = (0);
while(true){
if((i__32953 < count__32952)){
var it = chunk__32951.cljs$core$IIndexed$_nth$arity$2(null,i__32953);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33856 = seq__32950;
var G__33857 = chunk__32951;
var G__33858 = count__32952;
var G__33859 = (i__32953 + (1));
seq__32950 = G__33856;
chunk__32951 = G__33857;
count__32952 = G__33858;
i__32953 = G__33859;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32950);
if(temp__5753__auto__){
var seq__32950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32950__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32950__$1);
var G__33866 = cljs.core.chunk_rest(seq__32950__$1);
var G__33867 = c__4649__auto__;
var G__33868 = cljs.core.count(c__4649__auto__);
var G__33869 = (0);
seq__32950 = G__33866;
chunk__32951 = G__33867;
count__32952 = G__33868;
i__32953 = G__33869;
continue;
} else {
var it = cljs.core.first(seq__32950__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33871 = cljs.core.next(seq__32950__$1);
var G__33872 = null;
var G__33873 = (0);
var G__33874 = (0);
seq__32950 = G__33871;
chunk__32951 = G__33872;
count__32952 = G__33873;
i__32953 = G__33874;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k32971,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__32995 = k32971;
var G__32995__$1 = (((G__32995 instanceof cljs.core.Keyword))?G__32995.fqn:null);
switch (G__32995__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32971,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33011){
var vec__33017 = p__33011;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33017,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33017,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32970){
var self__ = this;
var G__32970__$1 = this;
return (new cljs.core.RecordIter((0),G__32970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32972,other32973){
var self__ = this;
var this32972__$1 = this;
return (((!((other32973 == null)))) && ((((this32972__$1.constructor === other32973.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32972__$1.x,other32973.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32972__$1.y,other32973.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32972__$1.__extmap,other32973.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k32971){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33080 = k32971;
var G__33080__$1 = (((G__33080 instanceof cljs.core.Keyword))?G__33080.fqn:null);
switch (G__33080__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32971);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__32970){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33081 = cljs.core.keyword_identical_QMARK_;
var expr__33082 = k__4481__auto__;
if(cljs.core.truth_((pred__33081.cljs$core$IFn$_invoke$arity$2 ? pred__33081.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33082) : pred__33081.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33082)))){
return (new shadow.dom.Coordinate(G__32970,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33081.cljs$core$IFn$_invoke$arity$2 ? pred__33081.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33082) : pred__33081.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33082)))){
return (new shadow.dom.Coordinate(self__.x,G__32970,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__32970),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__32970){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32970,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32977){
var extmap__4512__auto__ = (function (){var G__33089 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32977,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32977)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33089);
} else {
return G__33089;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32977),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32977),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33095,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33102 = k33095;
var G__33102__$1 = (((G__33102 instanceof cljs.core.Keyword))?G__33102.fqn:null);
switch (G__33102__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33095,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33110){
var vec__33115 = p__33110;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33094){
var self__ = this;
var G__33094__$1 = this;
return (new cljs.core.RecordIter((0),G__33094__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33096,other33097){
var self__ = this;
var this33096__$1 = this;
return (((!((other33097 == null)))) && ((((this33096__$1.constructor === other33097.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33096__$1.w,other33097.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33096__$1.h,other33097.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33096__$1.__extmap,other33097.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33095){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33139 = k33095;
var G__33139__$1 = (((G__33139 instanceof cljs.core.Keyword))?G__33139.fqn:null);
switch (G__33139__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33095);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33094){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33142 = cljs.core.keyword_identical_QMARK_;
var expr__33143 = k__4481__auto__;
if(cljs.core.truth_((pred__33142.cljs$core$IFn$_invoke$arity$2 ? pred__33142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33143) : pred__33142.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33143)))){
return (new shadow.dom.Size(G__33094,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33142.cljs$core$IFn$_invoke$arity$2 ? pred__33142.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33143) : pred__33142.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33143)))){
return (new shadow.dom.Size(self__.w,G__33094,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33094),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33094){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33094,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33098){
var extmap__4512__auto__ = (function (){var G__33154 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33098,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33154);
} else {
return G__33154;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33098),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33098),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__33960 = (i + (1));
var G__33961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33960;
ret = G__33961;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33179){
var vec__33180 = p__33179;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33180,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33186 = arguments.length;
switch (G__33186) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33967 = ps;
var G__33968 = (i + (1));
el__$1 = G__33967;
i = G__33968;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33217 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33217,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33217,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33217,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33221_33980 = cljs.core.seq(props);
var chunk__33222_33981 = null;
var count__33223_33982 = (0);
var i__33224_33983 = (0);
while(true){
if((i__33224_33983 < count__33223_33982)){
var vec__33249_33984 = chunk__33222_33981.cljs$core$IIndexed$_nth$arity$2(null,i__33224_33983);
var k_33985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33249_33984,(0),null);
var v_33986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33249_33984,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33985);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33985),v_33986);


var G__33990 = seq__33221_33980;
var G__33991 = chunk__33222_33981;
var G__33992 = count__33223_33982;
var G__33993 = (i__33224_33983 + (1));
seq__33221_33980 = G__33990;
chunk__33222_33981 = G__33991;
count__33223_33982 = G__33992;
i__33224_33983 = G__33993;
continue;
} else {
var temp__5753__auto___33994 = cljs.core.seq(seq__33221_33980);
if(temp__5753__auto___33994){
var seq__33221_33995__$1 = temp__5753__auto___33994;
if(cljs.core.chunked_seq_QMARK_(seq__33221_33995__$1)){
var c__4649__auto___33997 = cljs.core.chunk_first(seq__33221_33995__$1);
var G__33998 = cljs.core.chunk_rest(seq__33221_33995__$1);
var G__33999 = c__4649__auto___33997;
var G__34000 = cljs.core.count(c__4649__auto___33997);
var G__34001 = (0);
seq__33221_33980 = G__33998;
chunk__33222_33981 = G__33999;
count__33223_33982 = G__34000;
i__33224_33983 = G__34001;
continue;
} else {
var vec__33257_34002 = cljs.core.first(seq__33221_33995__$1);
var k_34003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257_34002,(0),null);
var v_34004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257_34002,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34003);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34003),v_34004);


var G__34005 = cljs.core.next(seq__33221_33995__$1);
var G__34006 = null;
var G__34007 = (0);
var G__34008 = (0);
seq__33221_33980 = G__34005;
chunk__33222_33981 = G__34006;
count__33223_33982 = G__34007;
i__33224_33983 = G__34008;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33276 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33276,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33276,(1),null);
var seq__33279_34016 = cljs.core.seq(node_children);
var chunk__33281_34017 = null;
var count__33282_34018 = (0);
var i__33283_34019 = (0);
while(true){
if((i__33283_34019 < count__33282_34018)){
var child_struct_34020 = chunk__33281_34017.cljs$core$IIndexed$_nth$arity$2(null,i__33283_34019);
if((!((child_struct_34020 == null)))){
if(typeof child_struct_34020 === 'string'){
var text_34021 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34021),child_struct_34020].join(''));
} else {
var children_34022 = shadow.dom.svg_node(child_struct_34020);
if(cljs.core.seq_QMARK_(children_34022)){
var seq__33317_34027 = cljs.core.seq(children_34022);
var chunk__33319_34028 = null;
var count__33320_34029 = (0);
var i__33321_34030 = (0);
while(true){
if((i__33321_34030 < count__33320_34029)){
var child_34031 = chunk__33319_34028.cljs$core$IIndexed$_nth$arity$2(null,i__33321_34030);
if(cljs.core.truth_(child_34031)){
node.appendChild(child_34031);


var G__34032 = seq__33317_34027;
var G__34033 = chunk__33319_34028;
var G__34034 = count__33320_34029;
var G__34035 = (i__33321_34030 + (1));
seq__33317_34027 = G__34032;
chunk__33319_34028 = G__34033;
count__33320_34029 = G__34034;
i__33321_34030 = G__34035;
continue;
} else {
var G__34037 = seq__33317_34027;
var G__34038 = chunk__33319_34028;
var G__34039 = count__33320_34029;
var G__34040 = (i__33321_34030 + (1));
seq__33317_34027 = G__34037;
chunk__33319_34028 = G__34038;
count__33320_34029 = G__34039;
i__33321_34030 = G__34040;
continue;
}
} else {
var temp__5753__auto___34044 = cljs.core.seq(seq__33317_34027);
if(temp__5753__auto___34044){
var seq__33317_34045__$1 = temp__5753__auto___34044;
if(cljs.core.chunked_seq_QMARK_(seq__33317_34045__$1)){
var c__4649__auto___34046 = cljs.core.chunk_first(seq__33317_34045__$1);
var G__34047 = cljs.core.chunk_rest(seq__33317_34045__$1);
var G__34048 = c__4649__auto___34046;
var G__34049 = cljs.core.count(c__4649__auto___34046);
var G__34050 = (0);
seq__33317_34027 = G__34047;
chunk__33319_34028 = G__34048;
count__33320_34029 = G__34049;
i__33321_34030 = G__34050;
continue;
} else {
var child_34051 = cljs.core.first(seq__33317_34045__$1);
if(cljs.core.truth_(child_34051)){
node.appendChild(child_34051);


var G__34052 = cljs.core.next(seq__33317_34045__$1);
var G__34053 = null;
var G__34054 = (0);
var G__34055 = (0);
seq__33317_34027 = G__34052;
chunk__33319_34028 = G__34053;
count__33320_34029 = G__34054;
i__33321_34030 = G__34055;
continue;
} else {
var G__34056 = cljs.core.next(seq__33317_34045__$1);
var G__34057 = null;
var G__34058 = (0);
var G__34059 = (0);
seq__33317_34027 = G__34056;
chunk__33319_34028 = G__34057;
count__33320_34029 = G__34058;
i__33321_34030 = G__34059;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34022);
}
}


var G__34060 = seq__33279_34016;
var G__34061 = chunk__33281_34017;
var G__34062 = count__33282_34018;
var G__34063 = (i__33283_34019 + (1));
seq__33279_34016 = G__34060;
chunk__33281_34017 = G__34061;
count__33282_34018 = G__34062;
i__33283_34019 = G__34063;
continue;
} else {
var G__34064 = seq__33279_34016;
var G__34065 = chunk__33281_34017;
var G__34066 = count__33282_34018;
var G__34067 = (i__33283_34019 + (1));
seq__33279_34016 = G__34064;
chunk__33281_34017 = G__34065;
count__33282_34018 = G__34066;
i__33283_34019 = G__34067;
continue;
}
} else {
var temp__5753__auto___34068 = cljs.core.seq(seq__33279_34016);
if(temp__5753__auto___34068){
var seq__33279_34069__$1 = temp__5753__auto___34068;
if(cljs.core.chunked_seq_QMARK_(seq__33279_34069__$1)){
var c__4649__auto___34070 = cljs.core.chunk_first(seq__33279_34069__$1);
var G__34071 = cljs.core.chunk_rest(seq__33279_34069__$1);
var G__34072 = c__4649__auto___34070;
var G__34073 = cljs.core.count(c__4649__auto___34070);
var G__34074 = (0);
seq__33279_34016 = G__34071;
chunk__33281_34017 = G__34072;
count__33282_34018 = G__34073;
i__33283_34019 = G__34074;
continue;
} else {
var child_struct_34075 = cljs.core.first(seq__33279_34069__$1);
if((!((child_struct_34075 == null)))){
if(typeof child_struct_34075 === 'string'){
var text_34076 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34076),child_struct_34075].join(''));
} else {
var children_34077 = shadow.dom.svg_node(child_struct_34075);
if(cljs.core.seq_QMARK_(children_34077)){
var seq__33340_34082 = cljs.core.seq(children_34077);
var chunk__33342_34083 = null;
var count__33343_34084 = (0);
var i__33344_34085 = (0);
while(true){
if((i__33344_34085 < count__33343_34084)){
var child_34086 = chunk__33342_34083.cljs$core$IIndexed$_nth$arity$2(null,i__33344_34085);
if(cljs.core.truth_(child_34086)){
node.appendChild(child_34086);


var G__34087 = seq__33340_34082;
var G__34088 = chunk__33342_34083;
var G__34089 = count__33343_34084;
var G__34090 = (i__33344_34085 + (1));
seq__33340_34082 = G__34087;
chunk__33342_34083 = G__34088;
count__33343_34084 = G__34089;
i__33344_34085 = G__34090;
continue;
} else {
var G__34091 = seq__33340_34082;
var G__34092 = chunk__33342_34083;
var G__34093 = count__33343_34084;
var G__34094 = (i__33344_34085 + (1));
seq__33340_34082 = G__34091;
chunk__33342_34083 = G__34092;
count__33343_34084 = G__34093;
i__33344_34085 = G__34094;
continue;
}
} else {
var temp__5753__auto___34095__$1 = cljs.core.seq(seq__33340_34082);
if(temp__5753__auto___34095__$1){
var seq__33340_34096__$1 = temp__5753__auto___34095__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33340_34096__$1)){
var c__4649__auto___34097 = cljs.core.chunk_first(seq__33340_34096__$1);
var G__34099 = cljs.core.chunk_rest(seq__33340_34096__$1);
var G__34100 = c__4649__auto___34097;
var G__34101 = cljs.core.count(c__4649__auto___34097);
var G__34102 = (0);
seq__33340_34082 = G__34099;
chunk__33342_34083 = G__34100;
count__33343_34084 = G__34101;
i__33344_34085 = G__34102;
continue;
} else {
var child_34103 = cljs.core.first(seq__33340_34096__$1);
if(cljs.core.truth_(child_34103)){
node.appendChild(child_34103);


var G__34104 = cljs.core.next(seq__33340_34096__$1);
var G__34105 = null;
var G__34106 = (0);
var G__34107 = (0);
seq__33340_34082 = G__34104;
chunk__33342_34083 = G__34105;
count__33343_34084 = G__34106;
i__33344_34085 = G__34107;
continue;
} else {
var G__34108 = cljs.core.next(seq__33340_34096__$1);
var G__34109 = null;
var G__34110 = (0);
var G__34111 = (0);
seq__33340_34082 = G__34108;
chunk__33342_34083 = G__34109;
count__33343_34084 = G__34110;
i__33344_34085 = G__34111;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34077);
}
}


var G__34112 = cljs.core.next(seq__33279_34069__$1);
var G__34113 = null;
var G__34114 = (0);
var G__34115 = (0);
seq__33279_34016 = G__34112;
chunk__33281_34017 = G__34113;
count__33282_34018 = G__34114;
i__33283_34019 = G__34115;
continue;
} else {
var G__34116 = cljs.core.next(seq__33279_34069__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__33279_34016 = G__34116;
chunk__33281_34017 = G__34117;
count__33282_34018 = G__34118;
i__33283_34019 = G__34119;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34122 = arguments.length;
var i__4830__auto___34123 = (0);
while(true){
if((i__4830__auto___34123 < len__4829__auto___34122)){
args__4835__auto__.push((arguments[i__4830__auto___34123]));

var G__34124 = (i__4830__auto___34123 + (1));
i__4830__auto___34123 = G__34124;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33367){
var G__33368 = cljs.core.first(seq33367);
var seq33367__$1 = cljs.core.next(seq33367);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33368,seq33367__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33378 = arguments.length;
switch (G__33378) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__29174__auto___34129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_33400){
var state_val_33401 = (state_33400[(1)]);
if((state_val_33401 === (1))){
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33400__$1,(2),once_or_cleanup);
} else {
if((state_val_33401 === (2))){
var inst_33397 = (state_33400[(2)]);
var inst_33398 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33400__$1 = (function (){var statearr_33409 = state_33400;
(statearr_33409[(7)] = inst_33397);

return statearr_33409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33400__$1,inst_33398);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28966__auto__ = null;
var shadow$dom$state_machine__28966__auto____0 = (function (){
var statearr_33415 = [null,null,null,null,null,null,null,null];
(statearr_33415[(0)] = shadow$dom$state_machine__28966__auto__);

(statearr_33415[(1)] = (1));

return statearr_33415;
});
var shadow$dom$state_machine__28966__auto____1 = (function (state_33400){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_33400);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e33419){var ex__28969__auto__ = e33419;
var statearr_33421_34130 = state_33400;
(statearr_33421_34130[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_33400[(4)]))){
var statearr_33423_34132 = state_33400;
(statearr_33423_34132[(1)] = cljs.core.first((state_33400[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34134 = state_33400;
state_33400 = G__34134;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
shadow$dom$state_machine__28966__auto__ = function(state_33400){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28966__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28966__auto____1.call(this,state_33400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28966__auto____0;
shadow$dom$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28966__auto____1;
return shadow$dom$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_33429 = f__29175__auto__();
(statearr_33429[(6)] = c__29174__auto___34129);

return statearr_33429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
