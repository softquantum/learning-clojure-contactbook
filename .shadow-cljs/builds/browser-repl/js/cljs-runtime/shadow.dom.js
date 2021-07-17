goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33757 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33757(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33760 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33760(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32537 = coll;
var G__32538 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32537,G__32538) : shadow.dom.lazy_native_coll_seq.call(null,G__32537,G__32538));
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
var G__32558 = arguments.length;
switch (G__32558) {
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
var G__32564 = arguments.length;
switch (G__32564) {
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
var G__32575 = arguments.length;
switch (G__32575) {
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
var G__32586 = arguments.length;
switch (G__32586) {
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
var G__32592 = arguments.length;
switch (G__32592) {
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
var G__32613 = arguments.length;
switch (G__32613) {
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
}catch (e32630){if((e32630 instanceof Object)){
var e = e32630;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32630;

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
var seq__32643 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32644 = null;
var count__32645 = (0);
var i__32646 = (0);
while(true){
if((i__32646 < count__32645)){
var el = chunk__32644.cljs$core$IIndexed$_nth$arity$2(null,i__32646);
var handler_33830__$1 = ((function (seq__32643,chunk__32644,count__32645,i__32646,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32643,chunk__32644,count__32645,i__32646,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33830__$1);


var G__33831 = seq__32643;
var G__33832 = chunk__32644;
var G__33833 = count__32645;
var G__33834 = (i__32646 + (1));
seq__32643 = G__33831;
chunk__32644 = G__33832;
count__32645 = G__33833;
i__32646 = G__33834;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32643);
if(temp__5753__auto__){
var seq__32643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32643__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32643__$1);
var G__33838 = cljs.core.chunk_rest(seq__32643__$1);
var G__33839 = c__4649__auto__;
var G__33840 = cljs.core.count(c__4649__auto__);
var G__33841 = (0);
seq__32643 = G__33838;
chunk__32644 = G__33839;
count__32645 = G__33840;
i__32646 = G__33841;
continue;
} else {
var el = cljs.core.first(seq__32643__$1);
var handler_33843__$1 = ((function (seq__32643,chunk__32644,count__32645,i__32646,el,seq__32643__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32643,chunk__32644,count__32645,i__32646,el,seq__32643__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33843__$1);


var G__33844 = cljs.core.next(seq__32643__$1);
var G__33845 = null;
var G__33846 = (0);
var G__33847 = (0);
seq__32643 = G__33844;
chunk__32644 = G__33845;
count__32645 = G__33846;
i__32646 = G__33847;
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
var G__32685 = arguments.length;
switch (G__32685) {
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
var seq__32709 = cljs.core.seq(events);
var chunk__32710 = null;
var count__32711 = (0);
var i__32712 = (0);
while(true){
if((i__32712 < count__32711)){
var vec__32730 = chunk__32710.cljs$core$IIndexed$_nth$arity$2(null,i__32712);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33857 = seq__32709;
var G__33858 = chunk__32710;
var G__33859 = count__32711;
var G__33860 = (i__32712 + (1));
seq__32709 = G__33857;
chunk__32710 = G__33858;
count__32711 = G__33859;
i__32712 = G__33860;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32709);
if(temp__5753__auto__){
var seq__32709__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32709__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32709__$1);
var G__33863 = cljs.core.chunk_rest(seq__32709__$1);
var G__33864 = c__4649__auto__;
var G__33865 = cljs.core.count(c__4649__auto__);
var G__33866 = (0);
seq__32709 = G__33863;
chunk__32710 = G__33864;
count__32711 = G__33865;
i__32712 = G__33866;
continue;
} else {
var vec__32737 = cljs.core.first(seq__32709__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33868 = cljs.core.next(seq__32709__$1);
var G__33869 = null;
var G__33870 = (0);
var G__33871 = (0);
seq__32709 = G__33868;
chunk__32710 = G__33869;
count__32711 = G__33870;
i__32712 = G__33871;
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
var seq__32745 = cljs.core.seq(styles);
var chunk__32746 = null;
var count__32747 = (0);
var i__32748 = (0);
while(true){
if((i__32748 < count__32747)){
var vec__32758 = chunk__32746.cljs$core$IIndexed$_nth$arity$2(null,i__32748);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32758,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33872 = seq__32745;
var G__33873 = chunk__32746;
var G__33874 = count__32747;
var G__33875 = (i__32748 + (1));
seq__32745 = G__33872;
chunk__32746 = G__33873;
count__32747 = G__33874;
i__32748 = G__33875;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32745);
if(temp__5753__auto__){
var seq__32745__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32745__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32745__$1);
var G__33876 = cljs.core.chunk_rest(seq__32745__$1);
var G__33877 = c__4649__auto__;
var G__33878 = cljs.core.count(c__4649__auto__);
var G__33879 = (0);
seq__32745 = G__33876;
chunk__32746 = G__33877;
count__32747 = G__33878;
i__32748 = G__33879;
continue;
} else {
var vec__32765 = cljs.core.first(seq__32745__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32765,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33880 = cljs.core.next(seq__32745__$1);
var G__33881 = null;
var G__33882 = (0);
var G__33883 = (0);
seq__32745 = G__33880;
chunk__32746 = G__33881;
count__32747 = G__33882;
i__32748 = G__33883;
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
var G__32776_33884 = key;
var G__32776_33885__$1 = (((G__32776_33884 instanceof cljs.core.Keyword))?G__32776_33884.fqn:null);
switch (G__32776_33885__$1) {
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
var ks_33891 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_33891,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_33891,"aria-");
}
})())){
el.setAttribute(ks_33891,value);
} else {
(el[ks_33891] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32811){
var map__32812 = p__32811;
var map__32812__$1 = cljs.core.__destructure_map(map__32812);
var props = map__32812__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32813 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32813,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32813,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32813,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32820 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32820,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32820;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32830 = arguments.length;
switch (G__32830) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32836){
var vec__32837 = p__32836;
var seq__32838 = cljs.core.seq(vec__32837);
var first__32839 = cljs.core.first(seq__32838);
var seq__32838__$1 = cljs.core.next(seq__32838);
var nn = first__32839;
var first__32839__$1 = cljs.core.first(seq__32838__$1);
var seq__32838__$2 = cljs.core.next(seq__32838__$1);
var np = first__32839__$1;
var nc = seq__32838__$2;
var node = vec__32837;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32857 = nn;
var G__32858 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32857,G__32858) : create_fn.call(null,G__32857,G__32858));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32863 = nn;
var G__32864 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32863,G__32864) : create_fn.call(null,G__32863,G__32864));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32870 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32870,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32870,(1),null);
var seq__32876_33916 = cljs.core.seq(node_children);
var chunk__32877_33917 = null;
var count__32878_33918 = (0);
var i__32879_33919 = (0);
while(true){
if((i__32879_33919 < count__32878_33918)){
var child_struct_33921 = chunk__32877_33917.cljs$core$IIndexed$_nth$arity$2(null,i__32879_33919);
var children_33922 = shadow.dom.dom_node(child_struct_33921);
if(cljs.core.seq_QMARK_(children_33922)){
var seq__32929_33923 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33922));
var chunk__32931_33924 = null;
var count__32932_33925 = (0);
var i__32933_33926 = (0);
while(true){
if((i__32933_33926 < count__32932_33925)){
var child_33928 = chunk__32931_33924.cljs$core$IIndexed$_nth$arity$2(null,i__32933_33926);
if(cljs.core.truth_(child_33928)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33928);


var G__33929 = seq__32929_33923;
var G__33930 = chunk__32931_33924;
var G__33931 = count__32932_33925;
var G__33932 = (i__32933_33926 + (1));
seq__32929_33923 = G__33929;
chunk__32931_33924 = G__33930;
count__32932_33925 = G__33931;
i__32933_33926 = G__33932;
continue;
} else {
var G__33933 = seq__32929_33923;
var G__33934 = chunk__32931_33924;
var G__33935 = count__32932_33925;
var G__33936 = (i__32933_33926 + (1));
seq__32929_33923 = G__33933;
chunk__32931_33924 = G__33934;
count__32932_33925 = G__33935;
i__32933_33926 = G__33936;
continue;
}
} else {
var temp__5753__auto___33937 = cljs.core.seq(seq__32929_33923);
if(temp__5753__auto___33937){
var seq__32929_33938__$1 = temp__5753__auto___33937;
if(cljs.core.chunked_seq_QMARK_(seq__32929_33938__$1)){
var c__4649__auto___33939 = cljs.core.chunk_first(seq__32929_33938__$1);
var G__33942 = cljs.core.chunk_rest(seq__32929_33938__$1);
var G__33943 = c__4649__auto___33939;
var G__33944 = cljs.core.count(c__4649__auto___33939);
var G__33945 = (0);
seq__32929_33923 = G__33942;
chunk__32931_33924 = G__33943;
count__32932_33925 = G__33944;
i__32933_33926 = G__33945;
continue;
} else {
var child_33946 = cljs.core.first(seq__32929_33938__$1);
if(cljs.core.truth_(child_33946)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33946);


var G__33947 = cljs.core.next(seq__32929_33938__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__32929_33923 = G__33947;
chunk__32931_33924 = G__33948;
count__32932_33925 = G__33949;
i__32933_33926 = G__33950;
continue;
} else {
var G__33951 = cljs.core.next(seq__32929_33938__$1);
var G__33952 = null;
var G__33953 = (0);
var G__33954 = (0);
seq__32929_33923 = G__33951;
chunk__32931_33924 = G__33952;
count__32932_33925 = G__33953;
i__32933_33926 = G__33954;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33922);
}


var G__33955 = seq__32876_33916;
var G__33956 = chunk__32877_33917;
var G__33957 = count__32878_33918;
var G__33958 = (i__32879_33919 + (1));
seq__32876_33916 = G__33955;
chunk__32877_33917 = G__33956;
count__32878_33918 = G__33957;
i__32879_33919 = G__33958;
continue;
} else {
var temp__5753__auto___33961 = cljs.core.seq(seq__32876_33916);
if(temp__5753__auto___33961){
var seq__32876_33962__$1 = temp__5753__auto___33961;
if(cljs.core.chunked_seq_QMARK_(seq__32876_33962__$1)){
var c__4649__auto___33963 = cljs.core.chunk_first(seq__32876_33962__$1);
var G__33964 = cljs.core.chunk_rest(seq__32876_33962__$1);
var G__33965 = c__4649__auto___33963;
var G__33966 = cljs.core.count(c__4649__auto___33963);
var G__33967 = (0);
seq__32876_33916 = G__33964;
chunk__32877_33917 = G__33965;
count__32878_33918 = G__33966;
i__32879_33919 = G__33967;
continue;
} else {
var child_struct_33968 = cljs.core.first(seq__32876_33962__$1);
var children_33969 = shadow.dom.dom_node(child_struct_33968);
if(cljs.core.seq_QMARK_(children_33969)){
var seq__32956_33973 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33969));
var chunk__32958_33974 = null;
var count__32959_33975 = (0);
var i__32960_33976 = (0);
while(true){
if((i__32960_33976 < count__32959_33975)){
var child_33977 = chunk__32958_33974.cljs$core$IIndexed$_nth$arity$2(null,i__32960_33976);
if(cljs.core.truth_(child_33977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33977);


var G__33978 = seq__32956_33973;
var G__33979 = chunk__32958_33974;
var G__33980 = count__32959_33975;
var G__33981 = (i__32960_33976 + (1));
seq__32956_33973 = G__33978;
chunk__32958_33974 = G__33979;
count__32959_33975 = G__33980;
i__32960_33976 = G__33981;
continue;
} else {
var G__33982 = seq__32956_33973;
var G__33983 = chunk__32958_33974;
var G__33984 = count__32959_33975;
var G__33985 = (i__32960_33976 + (1));
seq__32956_33973 = G__33982;
chunk__32958_33974 = G__33983;
count__32959_33975 = G__33984;
i__32960_33976 = G__33985;
continue;
}
} else {
var temp__5753__auto___33986__$1 = cljs.core.seq(seq__32956_33973);
if(temp__5753__auto___33986__$1){
var seq__32956_33987__$1 = temp__5753__auto___33986__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32956_33987__$1)){
var c__4649__auto___33988 = cljs.core.chunk_first(seq__32956_33987__$1);
var G__33989 = cljs.core.chunk_rest(seq__32956_33987__$1);
var G__33990 = c__4649__auto___33988;
var G__33991 = cljs.core.count(c__4649__auto___33988);
var G__33992 = (0);
seq__32956_33973 = G__33989;
chunk__32958_33974 = G__33990;
count__32959_33975 = G__33991;
i__32960_33976 = G__33992;
continue;
} else {
var child_33993 = cljs.core.first(seq__32956_33987__$1);
if(cljs.core.truth_(child_33993)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33993);


var G__33994 = cljs.core.next(seq__32956_33987__$1);
var G__33995 = null;
var G__33996 = (0);
var G__33997 = (0);
seq__32956_33973 = G__33994;
chunk__32958_33974 = G__33995;
count__32959_33975 = G__33996;
i__32960_33976 = G__33997;
continue;
} else {
var G__33999 = cljs.core.next(seq__32956_33987__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__32956_33973 = G__33999;
chunk__32958_33974 = G__34000;
count__32959_33975 = G__34001;
i__32960_33976 = G__34002;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33969);
}


var G__34003 = cljs.core.next(seq__32876_33962__$1);
var G__34004 = null;
var G__34005 = (0);
var G__34006 = (0);
seq__32876_33916 = G__34003;
chunk__32877_33917 = G__34004;
count__32878_33918 = G__34005;
i__32879_33919 = G__34006;
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
var seq__32975 = cljs.core.seq(node);
var chunk__32976 = null;
var count__32977 = (0);
var i__32978 = (0);
while(true){
if((i__32978 < count__32977)){
var n = chunk__32976.cljs$core$IIndexed$_nth$arity$2(null,i__32978);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34014 = seq__32975;
var G__34015 = chunk__32976;
var G__34016 = count__32977;
var G__34017 = (i__32978 + (1));
seq__32975 = G__34014;
chunk__32976 = G__34015;
count__32977 = G__34016;
i__32978 = G__34017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32975);
if(temp__5753__auto__){
var seq__32975__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32975__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32975__$1);
var G__34022 = cljs.core.chunk_rest(seq__32975__$1);
var G__34023 = c__4649__auto__;
var G__34024 = cljs.core.count(c__4649__auto__);
var G__34025 = (0);
seq__32975 = G__34022;
chunk__32976 = G__34023;
count__32977 = G__34024;
i__32978 = G__34025;
continue;
} else {
var n = cljs.core.first(seq__32975__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34026 = cljs.core.next(seq__32975__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__32975 = G__34026;
chunk__32976 = G__34027;
count__32977 = G__34028;
i__32978 = G__34029;
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
var G__33000 = arguments.length;
switch (G__33000) {
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
var G__33002 = arguments.length;
switch (G__33002) {
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
var G__33022 = arguments.length;
switch (G__33022) {
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
var len__4829__auto___34041 = arguments.length;
var i__4830__auto___34042 = (0);
while(true){
if((i__4830__auto___34042 < len__4829__auto___34041)){
args__4835__auto__.push((arguments[i__4830__auto___34042]));

var G__34044 = (i__4830__auto___34042 + (1));
i__4830__auto___34042 = G__34044;
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
var seq__33049_34045 = cljs.core.seq(nodes);
var chunk__33050_34046 = null;
var count__33051_34047 = (0);
var i__33052_34048 = (0);
while(true){
if((i__33052_34048 < count__33051_34047)){
var node_34050 = chunk__33050_34046.cljs$core$IIndexed$_nth$arity$2(null,i__33052_34048);
fragment.appendChild(shadow.dom._to_dom(node_34050));


var G__34051 = seq__33049_34045;
var G__34052 = chunk__33050_34046;
var G__34053 = count__33051_34047;
var G__34054 = (i__33052_34048 + (1));
seq__33049_34045 = G__34051;
chunk__33050_34046 = G__34052;
count__33051_34047 = G__34053;
i__33052_34048 = G__34054;
continue;
} else {
var temp__5753__auto___34055 = cljs.core.seq(seq__33049_34045);
if(temp__5753__auto___34055){
var seq__33049_34056__$1 = temp__5753__auto___34055;
if(cljs.core.chunked_seq_QMARK_(seq__33049_34056__$1)){
var c__4649__auto___34057 = cljs.core.chunk_first(seq__33049_34056__$1);
var G__34058 = cljs.core.chunk_rest(seq__33049_34056__$1);
var G__34059 = c__4649__auto___34057;
var G__34060 = cljs.core.count(c__4649__auto___34057);
var G__34061 = (0);
seq__33049_34045 = G__34058;
chunk__33050_34046 = G__34059;
count__33051_34047 = G__34060;
i__33052_34048 = G__34061;
continue;
} else {
var node_34062 = cljs.core.first(seq__33049_34056__$1);
fragment.appendChild(shadow.dom._to_dom(node_34062));


var G__34063 = cljs.core.next(seq__33049_34056__$1);
var G__34064 = null;
var G__34065 = (0);
var G__34066 = (0);
seq__33049_34045 = G__34063;
chunk__33050_34046 = G__34064;
count__33051_34047 = G__34065;
i__33052_34048 = G__34066;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33043){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33043));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33062_34068 = cljs.core.seq(scripts);
var chunk__33063_34069 = null;
var count__33064_34070 = (0);
var i__33065_34071 = (0);
while(true){
if((i__33065_34071 < count__33064_34070)){
var vec__33074_34072 = chunk__33063_34069.cljs$core$IIndexed$_nth$arity$2(null,i__33065_34071);
var script_tag_34073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074_34072,(0),null);
var script_body_34074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33074_34072,(1),null);
eval(script_body_34074);


var G__34075 = seq__33062_34068;
var G__34076 = chunk__33063_34069;
var G__34077 = count__33064_34070;
var G__34078 = (i__33065_34071 + (1));
seq__33062_34068 = G__34075;
chunk__33063_34069 = G__34076;
count__33064_34070 = G__34077;
i__33065_34071 = G__34078;
continue;
} else {
var temp__5753__auto___34079 = cljs.core.seq(seq__33062_34068);
if(temp__5753__auto___34079){
var seq__33062_34080__$1 = temp__5753__auto___34079;
if(cljs.core.chunked_seq_QMARK_(seq__33062_34080__$1)){
var c__4649__auto___34081 = cljs.core.chunk_first(seq__33062_34080__$1);
var G__34082 = cljs.core.chunk_rest(seq__33062_34080__$1);
var G__34083 = c__4649__auto___34081;
var G__34084 = cljs.core.count(c__4649__auto___34081);
var G__34085 = (0);
seq__33062_34068 = G__34082;
chunk__33063_34069 = G__34083;
count__33064_34070 = G__34084;
i__33065_34071 = G__34085;
continue;
} else {
var vec__33078_34086 = cljs.core.first(seq__33062_34080__$1);
var script_tag_34087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33078_34086,(0),null);
var script_body_34088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33078_34086,(1),null);
eval(script_body_34088);


var G__34089 = cljs.core.next(seq__33062_34080__$1);
var G__34090 = null;
var G__34091 = (0);
var G__34092 = (0);
seq__33062_34068 = G__34089;
chunk__33063_34069 = G__34090;
count__33064_34070 = G__34091;
i__33065_34071 = G__34092;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33082){
var vec__33083 = p__33082;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33083,(1),null);
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
var G__33094 = arguments.length;
switch (G__33094) {
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
var seq__33100 = cljs.core.seq(style_keys);
var chunk__33101 = null;
var count__33102 = (0);
var i__33103 = (0);
while(true){
if((i__33103 < count__33102)){
var it = chunk__33101.cljs$core$IIndexed$_nth$arity$2(null,i__33103);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34099 = seq__33100;
var G__34100 = chunk__33101;
var G__34101 = count__33102;
var G__34102 = (i__33103 + (1));
seq__33100 = G__34099;
chunk__33101 = G__34100;
count__33102 = G__34101;
i__33103 = G__34102;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33100);
if(temp__5753__auto__){
var seq__33100__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33100__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33100__$1);
var G__34103 = cljs.core.chunk_rest(seq__33100__$1);
var G__34104 = c__4649__auto__;
var G__34105 = cljs.core.count(c__4649__auto__);
var G__34106 = (0);
seq__33100 = G__34103;
chunk__33101 = G__34104;
count__33102 = G__34105;
i__33103 = G__34106;
continue;
} else {
var it = cljs.core.first(seq__33100__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34107 = cljs.core.next(seq__33100__$1);
var G__34108 = null;
var G__34109 = (0);
var G__34110 = (0);
seq__33100 = G__34107;
chunk__33101 = G__34108;
count__33102 = G__34109;
i__33103 = G__34110;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33106,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33111 = k33106;
var G__33111__$1 = (((G__33111 instanceof cljs.core.Keyword))?G__33111.fqn:null);
switch (G__33111__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33106,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33113){
var vec__33115 = p__33113;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33115,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33105){
var self__ = this;
var G__33105__$1 = this;
return (new cljs.core.RecordIter((0),G__33105__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33107,other33108){
var self__ = this;
var this33107__$1 = this;
return (((!((other33108 == null)))) && ((((this33107__$1.constructor === other33108.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33107__$1.x,other33108.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33107__$1.y,other33108.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33107__$1.__extmap,other33108.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33106){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33159 = k33106;
var G__33159__$1 = (((G__33159 instanceof cljs.core.Keyword))?G__33159.fqn:null);
switch (G__33159__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33106);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33105){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33166 = cljs.core.keyword_identical_QMARK_;
var expr__33167 = k__4481__auto__;
if(cljs.core.truth_((pred__33166.cljs$core$IFn$_invoke$arity$2 ? pred__33166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33167) : pred__33166.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33167)))){
return (new shadow.dom.Coordinate(G__33105,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33166.cljs$core$IFn$_invoke$arity$2 ? pred__33166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33167) : pred__33166.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33167)))){
return (new shadow.dom.Coordinate(self__.x,G__33105,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33105),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33105){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33105,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33109){
var extmap__4512__auto__ = (function (){var G__33184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33109,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33109)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33184);
} else {
return G__33184;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33109),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33109),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k33192,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__33199 = k33192;
var G__33199__$1 = (((G__33199 instanceof cljs.core.Keyword))?G__33199.fqn:null);
switch (G__33199__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33192,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__33202){
var vec__33203 = p__33202;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33191){
var self__ = this;
var G__33191__$1 = this;
return (new cljs.core.RecordIter((0),G__33191__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33193,other33194){
var self__ = this;
var this33193__$1 = this;
return (((!((other33194 == null)))) && ((((this33193__$1.constructor === other33194.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33193__$1.w,other33194.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33193__$1.h,other33194.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33193__$1.__extmap,other33194.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k33192){
var self__ = this;
var this__4479__auto____$1 = this;
var G__33255 = k33192;
var G__33255__$1 = (((G__33255 instanceof cljs.core.Keyword))?G__33255.fqn:null);
switch (G__33255__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33192);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__33191){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__33258 = cljs.core.keyword_identical_QMARK_;
var expr__33259 = k__4481__auto__;
if(cljs.core.truth_((pred__33258.cljs$core$IFn$_invoke$arity$2 ? pred__33258.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33259) : pred__33258.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33259)))){
return (new shadow.dom.Size(G__33191,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33258.cljs$core$IFn$_invoke$arity$2 ? pred__33258.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33259) : pred__33258.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33259)))){
return (new shadow.dom.Size(self__.w,G__33191,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__33191),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__33191){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33191,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33195){
var extmap__4512__auto__ = (function (){var G__33278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33195,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33195)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33278);
} else {
return G__33278;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33195),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33195),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__34164 = (i + (1));
var G__34165 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34164;
ret = G__34165;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33324){
var vec__33328 = p__33324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33328,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
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
var G__34167 = ps;
var G__34168 = (i + (1));
el__$1 = G__34167;
i = G__34168;
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
var vec__33400 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33406_34179 = cljs.core.seq(props);
var chunk__33407_34180 = null;
var count__33408_34181 = (0);
var i__33409_34182 = (0);
while(true){
if((i__33409_34182 < count__33408_34181)){
var vec__33420_34186 = chunk__33407_34180.cljs$core$IIndexed$_nth$arity$2(null,i__33409_34182);
var k_34187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34186,(0),null);
var v_34188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34186,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34187);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34187),v_34188);


var G__34191 = seq__33406_34179;
var G__34192 = chunk__33407_34180;
var G__34193 = count__33408_34181;
var G__34194 = (i__33409_34182 + (1));
seq__33406_34179 = G__34191;
chunk__33407_34180 = G__34192;
count__33408_34181 = G__34193;
i__33409_34182 = G__34194;
continue;
} else {
var temp__5753__auto___34198 = cljs.core.seq(seq__33406_34179);
if(temp__5753__auto___34198){
var seq__33406_34201__$1 = temp__5753__auto___34198;
if(cljs.core.chunked_seq_QMARK_(seq__33406_34201__$1)){
var c__4649__auto___34202 = cljs.core.chunk_first(seq__33406_34201__$1);
var G__34203 = cljs.core.chunk_rest(seq__33406_34201__$1);
var G__34204 = c__4649__auto___34202;
var G__34205 = cljs.core.count(c__4649__auto___34202);
var G__34206 = (0);
seq__33406_34179 = G__34203;
chunk__33407_34180 = G__34204;
count__33408_34181 = G__34205;
i__33409_34182 = G__34206;
continue;
} else {
var vec__33456_34209 = cljs.core.first(seq__33406_34201__$1);
var k_34210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456_34209,(0),null);
var v_34211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456_34209,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34210);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34210),v_34211);


var G__34217 = cljs.core.next(seq__33406_34201__$1);
var G__34218 = null;
var G__34219 = (0);
var G__34220 = (0);
seq__33406_34179 = G__34217;
chunk__33407_34180 = G__34218;
count__33408_34181 = G__34219;
i__33409_34182 = G__34220;
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
var vec__33476 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(1),null);
var seq__33479_34229 = cljs.core.seq(node_children);
var chunk__33481_34230 = null;
var count__33482_34231 = (0);
var i__33483_34232 = (0);
while(true){
if((i__33483_34232 < count__33482_34231)){
var child_struct_34233 = chunk__33481_34230.cljs$core$IIndexed$_nth$arity$2(null,i__33483_34232);
if((!((child_struct_34233 == null)))){
if(typeof child_struct_34233 === 'string'){
var text_34234 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34234),child_struct_34233].join(''));
} else {
var children_34235 = shadow.dom.svg_node(child_struct_34233);
if(cljs.core.seq_QMARK_(children_34235)){
var seq__33541_34240 = cljs.core.seq(children_34235);
var chunk__33543_34241 = null;
var count__33544_34242 = (0);
var i__33545_34243 = (0);
while(true){
if((i__33545_34243 < count__33544_34242)){
var child_34251 = chunk__33543_34241.cljs$core$IIndexed$_nth$arity$2(null,i__33545_34243);
if(cljs.core.truth_(child_34251)){
node.appendChild(child_34251);


var G__34252 = seq__33541_34240;
var G__34253 = chunk__33543_34241;
var G__34254 = count__33544_34242;
var G__34255 = (i__33545_34243 + (1));
seq__33541_34240 = G__34252;
chunk__33543_34241 = G__34253;
count__33544_34242 = G__34254;
i__33545_34243 = G__34255;
continue;
} else {
var G__34256 = seq__33541_34240;
var G__34257 = chunk__33543_34241;
var G__34258 = count__33544_34242;
var G__34259 = (i__33545_34243 + (1));
seq__33541_34240 = G__34256;
chunk__33543_34241 = G__34257;
count__33544_34242 = G__34258;
i__33545_34243 = G__34259;
continue;
}
} else {
var temp__5753__auto___34260 = cljs.core.seq(seq__33541_34240);
if(temp__5753__auto___34260){
var seq__33541_34261__$1 = temp__5753__auto___34260;
if(cljs.core.chunked_seq_QMARK_(seq__33541_34261__$1)){
var c__4649__auto___34265 = cljs.core.chunk_first(seq__33541_34261__$1);
var G__34266 = cljs.core.chunk_rest(seq__33541_34261__$1);
var G__34267 = c__4649__auto___34265;
var G__34268 = cljs.core.count(c__4649__auto___34265);
var G__34269 = (0);
seq__33541_34240 = G__34266;
chunk__33543_34241 = G__34267;
count__33544_34242 = G__34268;
i__33545_34243 = G__34269;
continue;
} else {
var child_34270 = cljs.core.first(seq__33541_34261__$1);
if(cljs.core.truth_(child_34270)){
node.appendChild(child_34270);


var G__34271 = cljs.core.next(seq__33541_34261__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__33541_34240 = G__34271;
chunk__33543_34241 = G__34272;
count__33544_34242 = G__34273;
i__33545_34243 = G__34274;
continue;
} else {
var G__34275 = cljs.core.next(seq__33541_34261__$1);
var G__34276 = null;
var G__34277 = (0);
var G__34278 = (0);
seq__33541_34240 = G__34275;
chunk__33543_34241 = G__34276;
count__33544_34242 = G__34277;
i__33545_34243 = G__34278;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34235);
}
}


var G__34279 = seq__33479_34229;
var G__34280 = chunk__33481_34230;
var G__34281 = count__33482_34231;
var G__34282 = (i__33483_34232 + (1));
seq__33479_34229 = G__34279;
chunk__33481_34230 = G__34280;
count__33482_34231 = G__34281;
i__33483_34232 = G__34282;
continue;
} else {
var G__34283 = seq__33479_34229;
var G__34284 = chunk__33481_34230;
var G__34285 = count__33482_34231;
var G__34286 = (i__33483_34232 + (1));
seq__33479_34229 = G__34283;
chunk__33481_34230 = G__34284;
count__33482_34231 = G__34285;
i__33483_34232 = G__34286;
continue;
}
} else {
var temp__5753__auto___34287 = cljs.core.seq(seq__33479_34229);
if(temp__5753__auto___34287){
var seq__33479_34288__$1 = temp__5753__auto___34287;
if(cljs.core.chunked_seq_QMARK_(seq__33479_34288__$1)){
var c__4649__auto___34289 = cljs.core.chunk_first(seq__33479_34288__$1);
var G__34290 = cljs.core.chunk_rest(seq__33479_34288__$1);
var G__34291 = c__4649__auto___34289;
var G__34292 = cljs.core.count(c__4649__auto___34289);
var G__34293 = (0);
seq__33479_34229 = G__34290;
chunk__33481_34230 = G__34291;
count__33482_34231 = G__34292;
i__33483_34232 = G__34293;
continue;
} else {
var child_struct_34294 = cljs.core.first(seq__33479_34288__$1);
if((!((child_struct_34294 == null)))){
if(typeof child_struct_34294 === 'string'){
var text_34295 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34295),child_struct_34294].join(''));
} else {
var children_34296 = shadow.dom.svg_node(child_struct_34294);
if(cljs.core.seq_QMARK_(children_34296)){
var seq__33570_34297 = cljs.core.seq(children_34296);
var chunk__33572_34298 = null;
var count__33573_34299 = (0);
var i__33574_34300 = (0);
while(true){
if((i__33574_34300 < count__33573_34299)){
var child_34301 = chunk__33572_34298.cljs$core$IIndexed$_nth$arity$2(null,i__33574_34300);
if(cljs.core.truth_(child_34301)){
node.appendChild(child_34301);


var G__34304 = seq__33570_34297;
var G__34305 = chunk__33572_34298;
var G__34306 = count__33573_34299;
var G__34307 = (i__33574_34300 + (1));
seq__33570_34297 = G__34304;
chunk__33572_34298 = G__34305;
count__33573_34299 = G__34306;
i__33574_34300 = G__34307;
continue;
} else {
var G__34309 = seq__33570_34297;
var G__34310 = chunk__33572_34298;
var G__34311 = count__33573_34299;
var G__34312 = (i__33574_34300 + (1));
seq__33570_34297 = G__34309;
chunk__33572_34298 = G__34310;
count__33573_34299 = G__34311;
i__33574_34300 = G__34312;
continue;
}
} else {
var temp__5753__auto___34313__$1 = cljs.core.seq(seq__33570_34297);
if(temp__5753__auto___34313__$1){
var seq__33570_34314__$1 = temp__5753__auto___34313__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33570_34314__$1)){
var c__4649__auto___34315 = cljs.core.chunk_first(seq__33570_34314__$1);
var G__34316 = cljs.core.chunk_rest(seq__33570_34314__$1);
var G__34317 = c__4649__auto___34315;
var G__34318 = cljs.core.count(c__4649__auto___34315);
var G__34319 = (0);
seq__33570_34297 = G__34316;
chunk__33572_34298 = G__34317;
count__33573_34299 = G__34318;
i__33574_34300 = G__34319;
continue;
} else {
var child_34320 = cljs.core.first(seq__33570_34314__$1);
if(cljs.core.truth_(child_34320)){
node.appendChild(child_34320);


var G__34321 = cljs.core.next(seq__33570_34314__$1);
var G__34322 = null;
var G__34323 = (0);
var G__34324 = (0);
seq__33570_34297 = G__34321;
chunk__33572_34298 = G__34322;
count__33573_34299 = G__34323;
i__33574_34300 = G__34324;
continue;
} else {
var G__34325 = cljs.core.next(seq__33570_34314__$1);
var G__34326 = null;
var G__34327 = (0);
var G__34328 = (0);
seq__33570_34297 = G__34325;
chunk__33572_34298 = G__34326;
count__33573_34299 = G__34327;
i__33574_34300 = G__34328;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34296);
}
}


var G__34329 = cljs.core.next(seq__33479_34288__$1);
var G__34330 = null;
var G__34331 = (0);
var G__34332 = (0);
seq__33479_34229 = G__34329;
chunk__33481_34230 = G__34330;
count__33482_34231 = G__34331;
i__33483_34232 = G__34332;
continue;
} else {
var G__34333 = cljs.core.next(seq__33479_34288__$1);
var G__34334 = null;
var G__34335 = (0);
var G__34336 = (0);
seq__33479_34229 = G__34333;
chunk__33481_34230 = G__34334;
count__33482_34231 = G__34335;
i__33483_34232 = G__34336;
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
var len__4829__auto___34340 = arguments.length;
var i__4830__auto___34343 = (0);
while(true){
if((i__4830__auto___34343 < len__4829__auto___34340)){
args__4835__auto__.push((arguments[i__4830__auto___34343]));

var G__34345 = (i__4830__auto___34343 + (1));
i__4830__auto___34343 = G__34345;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33617){
var G__33618 = cljs.core.first(seq33617);
var seq33617__$1 = cljs.core.next(seq33617);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33618,seq33617__$1);
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
var G__33639 = arguments.length;
switch (G__33639) {
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
var c__26215__auto___34349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33685){
var state_val_33686 = (state_33685[(1)]);
if((state_val_33686 === (1))){
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33685__$1,(2),once_or_cleanup);
} else {
if((state_val_33686 === (2))){
var inst_33682 = (state_33685[(2)]);
var inst_33683 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33685__$1 = (function (){var statearr_33695 = state_33685;
(statearr_33695[(7)] = inst_33682);

return statearr_33695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33685__$1,inst_33683);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26131__auto__ = null;
var shadow$dom$state_machine__26131__auto____0 = (function (){
var statearr_33701 = [null,null,null,null,null,null,null,null];
(statearr_33701[(0)] = shadow$dom$state_machine__26131__auto__);

(statearr_33701[(1)] = (1));

return statearr_33701;
});
var shadow$dom$state_machine__26131__auto____1 = (function (state_33685){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33685);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33703){var ex__26134__auto__ = e33703;
var statearr_33704_34358 = state_33685;
(statearr_33704_34358[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33685[(4)]))){
var statearr_33705_34363 = state_33685;
(statearr_33705_34363[(1)] = cljs.core.first((state_33685[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34364 = state_33685;
state_33685 = G__34364;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
shadow$dom$state_machine__26131__auto__ = function(state_33685){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26131__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26131__auto____1.call(this,state_33685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26131__auto____0;
shadow$dom$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26131__auto____1;
return shadow$dom$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33733 = f__26216__auto__();
(statearr_33733[(6)] = c__26215__auto___34349);

return statearr_33733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
