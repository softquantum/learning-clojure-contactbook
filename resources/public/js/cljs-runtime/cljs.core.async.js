goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29282 = arguments.length;
switch (G__29282) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29287 = (function (f,blockable,meta29288){
this.f = f;
this.blockable = blockable;
this.meta29288 = meta29288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29289,meta29288__$1){
var self__ = this;
var _29289__$1 = this;
return (new cljs.core.async.t_cljs$core$async29287(self__.f,self__.blockable,meta29288__$1));
}));

(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29289){
var self__ = this;
var _29289__$1 = this;
return self__.meta29288;
}));

(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29288","meta29288",-568467234,null)], null);
}));

(cljs.core.async.t_cljs$core$async29287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29287");

(cljs.core.async.t_cljs$core$async29287.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29287.
 */
cljs.core.async.__GT_t_cljs$core$async29287 = (function cljs$core$async$__GT_t_cljs$core$async29287(f__$1,blockable__$1,meta29288){
return (new cljs.core.async.t_cljs$core$async29287(f__$1,blockable__$1,meta29288));
});

}

return (new cljs.core.async.t_cljs$core$async29287(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29317 = arguments.length;
switch (G__29317) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29328 = arguments.length;
switch (G__29328) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29338 = arguments.length;
switch (G__29338) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32181 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32181) : fn1.call(null,val_32181));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32181) : fn1.call(null,val_32181));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29377 = arguments.length;
switch (G__29377) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___32196 = n;
var x_32197 = (0);
while(true){
if((x_32197 < n__4706__auto___32196)){
(a[x_32197] = x_32197);

var G__32198 = (x_32197 + (1));
x_32197 = G__32198;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29412 = (function (flag,meta29413){
this.flag = flag;
this.meta29413 = meta29413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29414,meta29413__$1){
var self__ = this;
var _29414__$1 = this;
return (new cljs.core.async.t_cljs$core$async29412(self__.flag,meta29413__$1));
}));

(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29414){
var self__ = this;
var _29414__$1 = this;
return self__.meta29413;
}));

(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29413","meta29413",872370276,null)], null);
}));

(cljs.core.async.t_cljs$core$async29412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29412");

(cljs.core.async.t_cljs$core$async29412.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29412.
 */
cljs.core.async.__GT_t_cljs$core$async29412 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29412(flag__$1,meta29413){
return (new cljs.core.async.t_cljs$core$async29412(flag__$1,meta29413));
});

}

return (new cljs.core.async.t_cljs$core$async29412(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29436 = (function (flag,cb,meta29437){
this.flag = flag;
this.cb = cb;
this.meta29437 = meta29437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29438,meta29437__$1){
var self__ = this;
var _29438__$1 = this;
return (new cljs.core.async.t_cljs$core$async29436(self__.flag,self__.cb,meta29437__$1));
}));

(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29438){
var self__ = this;
var _29438__$1 = this;
return self__.meta29437;
}));

(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29437","meta29437",-2123997619,null)], null);
}));

(cljs.core.async.t_cljs$core$async29436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29436");

(cljs.core.async.t_cljs$core$async29436.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29436.
 */
cljs.core.async.__GT_t_cljs$core$async29436 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29436(flag__$1,cb__$1,meta29437){
return (new cljs.core.async.t_cljs$core$async29436(flag__$1,cb__$1,meta29437));
});

}

return (new cljs.core.async.t_cljs$core$async29436(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29451_SHARP_){
var G__29458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29451_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29458) : fret.call(null,G__29458));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29452_SHARP_){
var G__29462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29452_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29462) : fret.call(null,G__29462));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32231 = (i + (1));
i = G__32231;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32250 = arguments.length;
var i__4830__auto___32251 = (0);
while(true){
if((i__4830__auto___32251 < len__4829__auto___32250)){
args__4835__auto__.push((arguments[i__4830__auto___32251]));

var G__32252 = (i__4830__auto___32251 + (1));
i__4830__auto___32251 = G__32252;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29475){
var map__29476 = p__29475;
var map__29476__$1 = cljs.core.__destructure_map(map__29476);
var opts = map__29476__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29472){
var G__29473 = cljs.core.first(seq29472);
var seq29472__$1 = cljs.core.next(seq29472);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29473,seq29472__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29492 = arguments.length;
switch (G__29492) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29174__auto___32273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_29542){
var state_val_29544 = (state_29542[(1)]);
if((state_val_29544 === (7))){
var inst_29536 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29547_32277 = state_29542__$1;
(statearr_29547_32277[(2)] = inst_29536);

(statearr_29547_32277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var state_29542__$1 = state_29542;
var statearr_29548_32280 = state_29542__$1;
(statearr_29548_32280[(2)] = null);

(statearr_29548_32280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (4))){
var inst_29511 = (state_29542[(7)]);
var inst_29511__$1 = (state_29542[(2)]);
var inst_29516 = (inst_29511__$1 == null);
var state_29542__$1 = (function (){var statearr_29552 = state_29542;
(statearr_29552[(7)] = inst_29511__$1);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29516)){
var statearr_29553_32284 = state_29542__$1;
(statearr_29553_32284[(1)] = (5));

} else {
var statearr_29556_32285 = state_29542__$1;
(statearr_29556_32285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (13))){
var state_29542__$1 = state_29542;
var statearr_29557_32288 = state_29542__$1;
(statearr_29557_32288[(2)] = null);

(statearr_29557_32288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (6))){
var inst_29511 = (state_29542[(7)]);
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29542__$1,(11),to,inst_29511);
} else {
if((state_val_29544 === (3))){
var inst_29538 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29542__$1,inst_29538);
} else {
if((state_val_29544 === (12))){
var state_29542__$1 = state_29542;
var statearr_29559_32293 = state_29542__$1;
(statearr_29559_32293[(2)] = null);

(statearr_29559_32293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (2))){
var state_29542__$1 = state_29542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29542__$1,(4),from);
} else {
if((state_val_29544 === (11))){
var inst_29528 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
if(cljs.core.truth_(inst_29528)){
var statearr_29560_32298 = state_29542__$1;
(statearr_29560_32298[(1)] = (12));

} else {
var statearr_29562_32303 = state_29542__$1;
(statearr_29562_32303[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (9))){
var state_29542__$1 = state_29542;
var statearr_29563_32304 = state_29542__$1;
(statearr_29563_32304[(2)] = null);

(statearr_29563_32304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (5))){
var state_29542__$1 = state_29542;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29565_32305 = state_29542__$1;
(statearr_29565_32305[(1)] = (8));

} else {
var statearr_29566_32307 = state_29542__$1;
(statearr_29566_32307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (14))){
var inst_29534 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29567_32309 = state_29542__$1;
(statearr_29567_32309[(2)] = inst_29534);

(statearr_29567_32309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var inst_29525 = (state_29542[(2)]);
var state_29542__$1 = state_29542;
var statearr_29568_32310 = state_29542__$1;
(statearr_29568_32310[(2)] = inst_29525);

(statearr_29568_32310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (8))){
var inst_29519 = cljs.core.async.close_BANG_(to);
var state_29542__$1 = state_29542;
var statearr_29570_32311 = state_29542__$1;
(statearr_29570_32311[(2)] = inst_29519);

(statearr_29570_32311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_29572 = [null,null,null,null,null,null,null,null];
(statearr_29572[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_29572[(1)] = (1));

return statearr_29572;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_29542){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29542);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29575){var ex__28969__auto__ = e29575;
var statearr_29577_32315 = state_29542;
(statearr_29577_32315[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29542[(4)]))){
var statearr_29578_32316 = state_29542;
(statearr_29578_32316[(1)] = cljs.core.first((state_29542[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32317 = state_29542;
state_29542 = G__32317;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_29542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_29542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29586 = f__29175__auto__();
(statearr_29586[(6)] = c__29174__auto___32273);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29595){
var vec__29596 = p__29595;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29596,(1),null);
var job = vec__29596;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29174__auto___32320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_29607){
var state_val_29608 = (state_29607[(1)]);
if((state_val_29608 === (1))){
var state_29607__$1 = state_29607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29607__$1,(2),res,v);
} else {
if((state_val_29608 === (2))){
var inst_29602 = (state_29607[(2)]);
var inst_29605 = cljs.core.async.close_BANG_(res);
var state_29607__$1 = (function (){var statearr_29618 = state_29607;
(statearr_29618[(7)] = inst_29602);

return statearr_29618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29607__$1,inst_29605);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_29628 = [null,null,null,null,null,null,null,null];
(statearr_29628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__);

(statearr_29628[(1)] = (1));

return statearr_29628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1 = (function (state_29607){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29607);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29638){var ex__28969__auto__ = e29638;
var statearr_29645_32321 = state_29607;
(statearr_29645_32321[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29607[(4)]))){
var statearr_29646_32322 = state_29607;
(statearr_29646_32322[(1)] = cljs.core.first((state_29607[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32324 = state_29607;
state_29607 = G__32324;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = function(state_29607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1.call(this,state_29607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29648 = f__29175__auto__();
(statearr_29648[(6)] = c__29174__auto___32320);

return statearr_29648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29656){
var vec__29657 = p__29656;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29657,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29657,(1),null);
var job = vec__29657;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___32325 = n;
var __32326 = (0);
while(true){
if((__32326 < n__4706__auto___32325)){
var G__29663_32327 = type;
var G__29663_32328__$1 = (((G__29663_32327 instanceof cljs.core.Keyword))?G__29663_32327.fqn:null);
switch (G__29663_32328__$1) {
case "compute":
var c__29174__auto___32331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32326,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = ((function (__32326,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function (state_29677){
var state_val_29678 = (state_29677[(1)]);
if((state_val_29678 === (1))){
var state_29677__$1 = state_29677;
var statearr_29682_32333 = state_29677__$1;
(statearr_29682_32333[(2)] = null);

(statearr_29682_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (2))){
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29677__$1,(4),jobs);
} else {
if((state_val_29678 === (3))){
var inst_29675 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29677__$1,inst_29675);
} else {
if((state_val_29678 === (4))){
var inst_29666 = (state_29677[(2)]);
var inst_29667 = process(inst_29666);
var state_29677__$1 = state_29677;
if(cljs.core.truth_(inst_29667)){
var statearr_29685_32334 = state_29677__$1;
(statearr_29685_32334[(1)] = (5));

} else {
var statearr_29686_32335 = state_29677__$1;
(statearr_29686_32335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (5))){
var state_29677__$1 = state_29677;
var statearr_29687_32336 = state_29677__$1;
(statearr_29687_32336[(2)] = null);

(statearr_29687_32336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (6))){
var state_29677__$1 = state_29677;
var statearr_29688_32341 = state_29677__$1;
(statearr_29688_32341[(2)] = null);

(statearr_29688_32341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29678 === (7))){
var inst_29673 = (state_29677[(2)]);
var state_29677__$1 = state_29677;
var statearr_29689_32346 = state_29677__$1;
(statearr_29689_32346[(2)] = inst_29673);

(statearr_29689_32346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32326,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
;
return ((function (__32326,switch__28965__auto__,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_29691 = [null,null,null,null,null,null,null];
(statearr_29691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1 = (function (state_29677){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29677);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29692){var ex__28969__auto__ = e29692;
var statearr_29693_32355 = state_29677;
(statearr_29693_32355[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29677[(4)]))){
var statearr_29694_32357 = state_29677;
(statearr_29694_32357[(1)] = cljs.core.first((state_29677[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32358 = state_29677;
state_29677 = G__32358;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = function(state_29677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1.call(this,state_29677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__;
})()
;})(__32326,switch__28965__auto__,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
})();
var state__29176__auto__ = (function (){var statearr_29696 = f__29175__auto__();
(statearr_29696[(6)] = c__29174__auto___32331);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
});})(__32326,c__29174__auto___32331,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
);


break;
case "async":
var c__29174__auto___32364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32326,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = ((function (__32326,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function (state_29709){
var state_val_29710 = (state_29709[(1)]);
if((state_val_29710 === (1))){
var state_29709__$1 = state_29709;
var statearr_29714_32366 = state_29709__$1;
(statearr_29714_32366[(2)] = null);

(statearr_29714_32366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (2))){
var state_29709__$1 = state_29709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29709__$1,(4),jobs);
} else {
if((state_val_29710 === (3))){
var inst_29707 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29709__$1,inst_29707);
} else {
if((state_val_29710 === (4))){
var inst_29699 = (state_29709[(2)]);
var inst_29700 = async(inst_29699);
var state_29709__$1 = state_29709;
if(cljs.core.truth_(inst_29700)){
var statearr_29717_32367 = state_29709__$1;
(statearr_29717_32367[(1)] = (5));

} else {
var statearr_29718_32369 = state_29709__$1;
(statearr_29718_32369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (5))){
var state_29709__$1 = state_29709;
var statearr_29721_32372 = state_29709__$1;
(statearr_29721_32372[(2)] = null);

(statearr_29721_32372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (6))){
var state_29709__$1 = state_29709;
var statearr_29722_32373 = state_29709__$1;
(statearr_29722_32373[(2)] = null);

(statearr_29722_32373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29710 === (7))){
var inst_29705 = (state_29709[(2)]);
var state_29709__$1 = state_29709;
var statearr_29723_32378 = state_29709__$1;
(statearr_29723_32378[(2)] = inst_29705);

(statearr_29723_32378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32326,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
;
return ((function (__32326,switch__28965__auto__,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_29724 = [null,null,null,null,null,null,null];
(statearr_29724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__);

(statearr_29724[(1)] = (1));

return statearr_29724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1 = (function (state_29709){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29709);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29725){var ex__28969__auto__ = e29725;
var statearr_29726_32386 = state_29709;
(statearr_29726_32386[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29709[(4)]))){
var statearr_29728_32387 = state_29709;
(statearr_29728_32387[(1)] = cljs.core.first((state_29709[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32391 = state_29709;
state_29709 = G__32391;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = function(state_29709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1.call(this,state_29709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__;
})()
;})(__32326,switch__28965__auto__,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
})();
var state__29176__auto__ = (function (){var statearr_29732 = f__29175__auto__();
(statearr_29732[(6)] = c__29174__auto___32364);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
});})(__32326,c__29174__auto___32364,G__29663_32327,G__29663_32328__$1,n__4706__auto___32325,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29663_32328__$1)].join('')));

}

var G__32394 = (__32326 + (1));
__32326 = G__32394;
continue;
} else {
}
break;
}

var c__29174__auto___32395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_29754){
var state_val_29755 = (state_29754[(1)]);
if((state_val_29755 === (7))){
var inst_29750 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29758_32398 = state_29754__$1;
(statearr_29758_32398[(2)] = inst_29750);

(statearr_29758_32398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (1))){
var state_29754__$1 = state_29754;
var statearr_29759_32399 = state_29754__$1;
(statearr_29759_32399[(2)] = null);

(statearr_29759_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (4))){
var inst_29735 = (state_29754[(7)]);
var inst_29735__$1 = (state_29754[(2)]);
var inst_29736 = (inst_29735__$1 == null);
var state_29754__$1 = (function (){var statearr_29760 = state_29754;
(statearr_29760[(7)] = inst_29735__$1);

return statearr_29760;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29761_32401 = state_29754__$1;
(statearr_29761_32401[(1)] = (5));

} else {
var statearr_29763_32402 = state_29754__$1;
(statearr_29763_32402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (6))){
var inst_29735 = (state_29754[(7)]);
var inst_29740 = (state_29754[(8)]);
var inst_29740__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29742 = [inst_29735,inst_29740__$1];
var inst_29743 = (new cljs.core.PersistentVector(null,2,(5),inst_29741,inst_29742,null));
var state_29754__$1 = (function (){var statearr_29767 = state_29754;
(statearr_29767[(8)] = inst_29740__$1);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29754__$1,(8),jobs,inst_29743);
} else {
if((state_val_29755 === (3))){
var inst_29752 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29754__$1,inst_29752);
} else {
if((state_val_29755 === (2))){
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29754__$1,(4),from);
} else {
if((state_val_29755 === (9))){
var inst_29747 = (state_29754[(2)]);
var state_29754__$1 = (function (){var statearr_29769 = state_29754;
(statearr_29769[(9)] = inst_29747);

return statearr_29769;
})();
var statearr_29771_32404 = state_29754__$1;
(statearr_29771_32404[(2)] = null);

(statearr_29771_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (5))){
var inst_29738 = cljs.core.async.close_BANG_(jobs);
var state_29754__$1 = state_29754;
var statearr_29775_32406 = state_29754__$1;
(statearr_29775_32406[(2)] = inst_29738);

(statearr_29775_32406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (8))){
var inst_29740 = (state_29754[(8)]);
var inst_29745 = (state_29754[(2)]);
var state_29754__$1 = (function (){var statearr_29782 = state_29754;
(statearr_29782[(10)] = inst_29745);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29754__$1,(9),results,inst_29740);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_29786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__);

(statearr_29786[(1)] = (1));

return statearr_29786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1 = (function (state_29754){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29754);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29787){var ex__28969__auto__ = e29787;
var statearr_29788_32410 = state_29754;
(statearr_29788_32410[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29754[(4)]))){
var statearr_29789_32411 = state_29754;
(statearr_29789_32411[(1)] = cljs.core.first((state_29754[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32412 = state_29754;
state_29754 = G__32412;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29791 = f__29175__auto__();
(statearr_29791[(6)] = c__29174__auto___32395);

return statearr_29791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_29833){
var state_val_29834 = (state_29833[(1)]);
if((state_val_29834 === (7))){
var inst_29827 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29836_32420 = state_29833__$1;
(statearr_29836_32420[(2)] = inst_29827);

(statearr_29836_32420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (20))){
var state_29833__$1 = state_29833;
var statearr_29837_32421 = state_29833__$1;
(statearr_29837_32421[(2)] = null);

(statearr_29837_32421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (1))){
var state_29833__$1 = state_29833;
var statearr_29839_32425 = state_29833__$1;
(statearr_29839_32425[(2)] = null);

(statearr_29839_32425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (4))){
var inst_29795 = (state_29833[(7)]);
var inst_29795__$1 = (state_29833[(2)]);
var inst_29796 = (inst_29795__$1 == null);
var state_29833__$1 = (function (){var statearr_29840 = state_29833;
(statearr_29840[(7)] = inst_29795__$1);

return statearr_29840;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_29841_32429 = state_29833__$1;
(statearr_29841_32429[(1)] = (5));

} else {
var statearr_29842_32430 = state_29833__$1;
(statearr_29842_32430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (15))){
var inst_29808 = (state_29833[(8)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29833__$1,(18),to,inst_29808);
} else {
if((state_val_29834 === (21))){
var inst_29822 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29843_32434 = state_29833__$1;
(statearr_29843_32434[(2)] = inst_29822);

(statearr_29843_32434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (13))){
var inst_29824 = (state_29833[(2)]);
var state_29833__$1 = (function (){var statearr_29844 = state_29833;
(statearr_29844[(9)] = inst_29824);

return statearr_29844;
})();
var statearr_29845_32435 = state_29833__$1;
(statearr_29845_32435[(2)] = null);

(statearr_29845_32435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (6))){
var inst_29795 = (state_29833[(7)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29833__$1,(11),inst_29795);
} else {
if((state_val_29834 === (17))){
var inst_29816 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
if(cljs.core.truth_(inst_29816)){
var statearr_29853_32439 = state_29833__$1;
(statearr_29853_32439[(1)] = (19));

} else {
var statearr_29855_32440 = state_29833__$1;
(statearr_29855_32440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (3))){
var inst_29829 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29833__$1,inst_29829);
} else {
if((state_val_29834 === (12))){
var inst_29805 = (state_29833[(10)]);
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29833__$1,(14),inst_29805);
} else {
if((state_val_29834 === (2))){
var state_29833__$1 = state_29833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29833__$1,(4),results);
} else {
if((state_val_29834 === (19))){
var state_29833__$1 = state_29833;
var statearr_29859_32444 = state_29833__$1;
(statearr_29859_32444[(2)] = null);

(statearr_29859_32444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (11))){
var inst_29805 = (state_29833[(2)]);
var state_29833__$1 = (function (){var statearr_29863 = state_29833;
(statearr_29863[(10)] = inst_29805);

return statearr_29863;
})();
var statearr_29864_32445 = state_29833__$1;
(statearr_29864_32445[(2)] = null);

(statearr_29864_32445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (9))){
var state_29833__$1 = state_29833;
var statearr_29865_32449 = state_29833__$1;
(statearr_29865_32449[(2)] = null);

(statearr_29865_32449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (5))){
var state_29833__$1 = state_29833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29866_32450 = state_29833__$1;
(statearr_29866_32450[(1)] = (8));

} else {
var statearr_29867_32454 = state_29833__$1;
(statearr_29867_32454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (14))){
var inst_29808 = (state_29833[(8)]);
var inst_29810 = (state_29833[(11)]);
var inst_29808__$1 = (state_29833[(2)]);
var inst_29809 = (inst_29808__$1 == null);
var inst_29810__$1 = cljs.core.not(inst_29809);
var state_29833__$1 = (function (){var statearr_29870 = state_29833;
(statearr_29870[(8)] = inst_29808__$1);

(statearr_29870[(11)] = inst_29810__$1);

return statearr_29870;
})();
if(inst_29810__$1){
var statearr_29873_32463 = state_29833__$1;
(statearr_29873_32463[(1)] = (15));

} else {
var statearr_29874_32466 = state_29833__$1;
(statearr_29874_32466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (16))){
var inst_29810 = (state_29833[(11)]);
var state_29833__$1 = state_29833;
var statearr_29875_32467 = state_29833__$1;
(statearr_29875_32467[(2)] = inst_29810);

(statearr_29875_32467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (10))){
var inst_29802 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29876_32471 = state_29833__$1;
(statearr_29876_32471[(2)] = inst_29802);

(statearr_29876_32471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (18))){
var inst_29813 = (state_29833[(2)]);
var state_29833__$1 = state_29833;
var statearr_29878_32472 = state_29833__$1;
(statearr_29878_32472[(2)] = inst_29813);

(statearr_29878_32472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29834 === (8))){
var inst_29799 = cljs.core.async.close_BANG_(to);
var state_29833__$1 = state_29833;
var statearr_29882_32476 = state_29833__$1;
(statearr_29882_32476[(2)] = inst_29799);

(statearr_29882_32476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_29883 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__);

(statearr_29883[(1)] = (1));

return statearr_29883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1 = (function (state_29833){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29833);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29884){var ex__28969__auto__ = e29884;
var statearr_29885_32480 = state_29833;
(statearr_29885_32480[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29833[(4)]))){
var statearr_29886_32481 = state_29833;
(statearr_29886_32481[(1)] = cljs.core.first((state_29833[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32487 = state_29833;
state_29833 = G__32487;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__ = function(state_29833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1.call(this,state_29833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_29888 = f__29175__auto__();
(statearr_29888[(6)] = c__29174__auto__);

return statearr_29888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29897 = arguments.length;
switch (G__29897) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29901 = arguments.length;
switch (G__29901) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29909 = arguments.length;
switch (G__29909) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29174__auto___32502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (7))){
var inst_29933 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29946_32503 = state_29937__$1;
(statearr_29946_32503[(2)] = inst_29933);

(statearr_29946_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (1))){
var state_29937__$1 = state_29937;
var statearr_29947_32505 = state_29937__$1;
(statearr_29947_32505[(2)] = null);

(statearr_29947_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (4))){
var inst_29912 = (state_29937[(7)]);
var inst_29912__$1 = (state_29937[(2)]);
var inst_29913 = (inst_29912__$1 == null);
var state_29937__$1 = (function (){var statearr_29948 = state_29937;
(statearr_29948[(7)] = inst_29912__$1);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29913)){
var statearr_29949_32506 = state_29937__$1;
(statearr_29949_32506[(1)] = (5));

} else {
var statearr_29950_32507 = state_29937__$1;
(statearr_29950_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (13))){
var state_29937__$1 = state_29937;
var statearr_29951_32509 = state_29937__$1;
(statearr_29951_32509[(2)] = null);

(statearr_29951_32509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (6))){
var inst_29912 = (state_29937[(7)]);
var inst_29920 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29912) : p.call(null,inst_29912));
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29920)){
var statearr_29952_32511 = state_29937__$1;
(statearr_29952_32511[(1)] = (9));

} else {
var statearr_29953_32512 = state_29937__$1;
(statearr_29953_32512[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (3))){
var inst_29935 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29937__$1,inst_29935);
} else {
if((state_val_29938 === (12))){
var state_29937__$1 = state_29937;
var statearr_29954_32513 = state_29937__$1;
(statearr_29954_32513[(2)] = null);

(statearr_29954_32513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (2))){
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29937__$1,(4),ch);
} else {
if((state_val_29938 === (11))){
var inst_29912 = (state_29937[(7)]);
var inst_29924 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29937__$1,(8),inst_29924,inst_29912);
} else {
if((state_val_29938 === (9))){
var state_29937__$1 = state_29937;
var statearr_29959_32514 = state_29937__$1;
(statearr_29959_32514[(2)] = tc);

(statearr_29959_32514[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (5))){
var inst_29915 = cljs.core.async.close_BANG_(tc);
var inst_29916 = cljs.core.async.close_BANG_(fc);
var state_29937__$1 = (function (){var statearr_29970 = state_29937;
(statearr_29970[(8)] = inst_29915);

return statearr_29970;
})();
var statearr_29971_32515 = state_29937__$1;
(statearr_29971_32515[(2)] = inst_29916);

(statearr_29971_32515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (14))){
var inst_29931 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
var statearr_29973_32516 = state_29937__$1;
(statearr_29973_32516[(2)] = inst_29931);

(statearr_29973_32516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (10))){
var state_29937__$1 = state_29937;
var statearr_29980_32517 = state_29937__$1;
(statearr_29980_32517[(2)] = fc);

(statearr_29980_32517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29938 === (8))){
var inst_29926 = (state_29937[(2)]);
var state_29937__$1 = state_29937;
if(cljs.core.truth_(inst_29926)){
var statearr_29984_32518 = state_29937__$1;
(statearr_29984_32518[(1)] = (12));

} else {
var statearr_29985_32519 = state_29937__$1;
(statearr_29985_32519[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_29987 = [null,null,null,null,null,null,null,null,null];
(statearr_29987[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_29987[(1)] = (1));

return statearr_29987;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_29937){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_29937);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e29989){var ex__28969__auto__ = e29989;
var statearr_29990_32524 = state_29937;
(statearr_29990_32524[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_29937[(4)]))){
var statearr_29991_32525 = state_29937;
(statearr_29991_32525[(1)] = cljs.core.first((state_29937[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32526 = state_29937;
state_29937 = G__32526;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30006 = f__29175__auto__();
(statearr_30006[(6)] = c__29174__auto___32502);

return statearr_30006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_30031){
var state_val_30032 = (state_30031[(1)]);
if((state_val_30032 === (7))){
var inst_30027 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30037_32532 = state_30031__$1;
(statearr_30037_32532[(2)] = inst_30027);

(statearr_30037_32532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (1))){
var inst_30010 = init;
var inst_30011 = inst_30010;
var state_30031__$1 = (function (){var statearr_30038 = state_30031;
(statearr_30038[(7)] = inst_30011);

return statearr_30038;
})();
var statearr_30039_32533 = state_30031__$1;
(statearr_30039_32533[(2)] = null);

(statearr_30039_32533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (4))){
var inst_30014 = (state_30031[(8)]);
var inst_30014__$1 = (state_30031[(2)]);
var inst_30015 = (inst_30014__$1 == null);
var state_30031__$1 = (function (){var statearr_30040 = state_30031;
(statearr_30040[(8)] = inst_30014__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_30015)){
var statearr_30041_32541 = state_30031__$1;
(statearr_30041_32541[(1)] = (5));

} else {
var statearr_30042_32542 = state_30031__$1;
(statearr_30042_32542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (6))){
var inst_30011 = (state_30031[(7)]);
var inst_30018 = (state_30031[(9)]);
var inst_30014 = (state_30031[(8)]);
var inst_30018__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30011,inst_30014) : f.call(null,inst_30011,inst_30014));
var inst_30019 = cljs.core.reduced_QMARK_(inst_30018__$1);
var state_30031__$1 = (function (){var statearr_30043 = state_30031;
(statearr_30043[(9)] = inst_30018__$1);

return statearr_30043;
})();
if(inst_30019){
var statearr_30044_32549 = state_30031__$1;
(statearr_30044_32549[(1)] = (8));

} else {
var statearr_30045_32550 = state_30031__$1;
(statearr_30045_32550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (3))){
var inst_30029 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30031__$1,inst_30029);
} else {
if((state_val_30032 === (2))){
var state_30031__$1 = state_30031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30031__$1,(4),ch);
} else {
if((state_val_30032 === (9))){
var inst_30018 = (state_30031[(9)]);
var inst_30011 = inst_30018;
var state_30031__$1 = (function (){var statearr_30049 = state_30031;
(statearr_30049[(7)] = inst_30011);

return statearr_30049;
})();
var statearr_30050_32551 = state_30031__$1;
(statearr_30050_32551[(2)] = null);

(statearr_30050_32551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (5))){
var inst_30011 = (state_30031[(7)]);
var state_30031__$1 = state_30031;
var statearr_30051_32552 = state_30031__$1;
(statearr_30051_32552[(2)] = inst_30011);

(statearr_30051_32552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (10))){
var inst_30025 = (state_30031[(2)]);
var state_30031__$1 = state_30031;
var statearr_30056_32554 = state_30031__$1;
(statearr_30056_32554[(2)] = inst_30025);

(statearr_30056_32554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30032 === (8))){
var inst_30018 = (state_30031[(9)]);
var inst_30021 = cljs.core.deref(inst_30018);
var state_30031__$1 = state_30031;
var statearr_30061_32555 = state_30031__$1;
(statearr_30061_32555[(2)] = inst_30021);

(statearr_30061_32555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28966__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28966__auto____0 = (function (){
var statearr_30064 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30064[(0)] = cljs$core$async$reduce_$_state_machine__28966__auto__);

(statearr_30064[(1)] = (1));

return statearr_30064;
});
var cljs$core$async$reduce_$_state_machine__28966__auto____1 = (function (state_30031){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_30031);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e30066){var ex__28969__auto__ = e30066;
var statearr_30067_32556 = state_30031;
(statearr_30067_32556[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_30031[(4)]))){
var statearr_30068_32557 = state_30031;
(statearr_30068_32557[(1)] = cljs.core.first((state_30031[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32558 = state_30031;
state_30031 = G__32558;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28966__auto__ = function(state_30031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28966__auto____1.call(this,state_30031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28966__auto____0;
cljs$core$async$reduce_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28966__auto____1;
return cljs$core$async$reduce_$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30070 = f__29175__auto__();
(statearr_30070[(6)] = c__29174__auto__);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_30080){
var state_val_30082 = (state_30080[(1)]);
if((state_val_30082 === (1))){
var inst_30075 = cljs.core.async.reduce(f__$1,init,ch);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30080__$1,(2),inst_30075);
} else {
if((state_val_30082 === (2))){
var inst_30077 = (state_30080[(2)]);
var inst_30078 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30077) : f__$1.call(null,inst_30077));
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30080__$1,inst_30078);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28966__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28966__auto____0 = (function (){
var statearr_30093 = [null,null,null,null,null,null,null];
(statearr_30093[(0)] = cljs$core$async$transduce_$_state_machine__28966__auto__);

(statearr_30093[(1)] = (1));

return statearr_30093;
});
var cljs$core$async$transduce_$_state_machine__28966__auto____1 = (function (state_30080){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_30080);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e30094){var ex__28969__auto__ = e30094;
var statearr_30095_32565 = state_30080;
(statearr_30095_32565[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_30080[(4)]))){
var statearr_30096_32567 = state_30080;
(statearr_30096_32567[(1)] = cljs.core.first((state_30080[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32568 = state_30080;
state_30080 = G__32568;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28966__auto__ = function(state_30080){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28966__auto____1.call(this,state_30080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28966__auto____0;
cljs$core$async$transduce_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28966__auto____1;
return cljs$core$async$transduce_$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30099 = f__29175__auto__();
(statearr_30099[(6)] = c__29174__auto__);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30101 = arguments.length;
switch (G__30101) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_30134){
var state_val_30135 = (state_30134[(1)]);
if((state_val_30135 === (7))){
var inst_30114 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
var statearr_30136_32573 = state_30134__$1;
(statearr_30136_32573[(2)] = inst_30114);

(statearr_30136_32573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (1))){
var inst_30108 = cljs.core.seq(coll);
var inst_30109 = inst_30108;
var state_30134__$1 = (function (){var statearr_30138 = state_30134;
(statearr_30138[(7)] = inst_30109);

return statearr_30138;
})();
var statearr_30139_32575 = state_30134__$1;
(statearr_30139_32575[(2)] = null);

(statearr_30139_32575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (4))){
var inst_30109 = (state_30134[(7)]);
var inst_30112 = cljs.core.first(inst_30109);
var state_30134__$1 = state_30134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30134__$1,(7),ch,inst_30112);
} else {
if((state_val_30135 === (13))){
var inst_30127 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
var statearr_30142_32577 = state_30134__$1;
(statearr_30142_32577[(2)] = inst_30127);

(statearr_30142_32577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (6))){
var inst_30117 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
if(cljs.core.truth_(inst_30117)){
var statearr_30145_32579 = state_30134__$1;
(statearr_30145_32579[(1)] = (8));

} else {
var statearr_30146_32580 = state_30134__$1;
(statearr_30146_32580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (3))){
var inst_30131 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30134__$1,inst_30131);
} else {
if((state_val_30135 === (12))){
var state_30134__$1 = state_30134;
var statearr_30156_32588 = state_30134__$1;
(statearr_30156_32588[(2)] = null);

(statearr_30156_32588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (2))){
var inst_30109 = (state_30134[(7)]);
var state_30134__$1 = state_30134;
if(cljs.core.truth_(inst_30109)){
var statearr_30157_32589 = state_30134__$1;
(statearr_30157_32589[(1)] = (4));

} else {
var statearr_30160_32590 = state_30134__$1;
(statearr_30160_32590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (11))){
var inst_30124 = cljs.core.async.close_BANG_(ch);
var state_30134__$1 = state_30134;
var statearr_30164_32591 = state_30134__$1;
(statearr_30164_32591[(2)] = inst_30124);

(statearr_30164_32591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (9))){
var state_30134__$1 = state_30134;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30168_32592 = state_30134__$1;
(statearr_30168_32592[(1)] = (11));

} else {
var statearr_30169_32593 = state_30134__$1;
(statearr_30169_32593[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (5))){
var inst_30109 = (state_30134[(7)]);
var state_30134__$1 = state_30134;
var statearr_30170_32594 = state_30134__$1;
(statearr_30170_32594[(2)] = inst_30109);

(statearr_30170_32594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (10))){
var inst_30129 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
var statearr_30180_32596 = state_30134__$1;
(statearr_30180_32596[(2)] = inst_30129);

(statearr_30180_32596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (8))){
var inst_30109 = (state_30134[(7)]);
var inst_30120 = cljs.core.next(inst_30109);
var inst_30109__$1 = inst_30120;
var state_30134__$1 = (function (){var statearr_30181 = state_30134;
(statearr_30181[(7)] = inst_30109__$1);

return statearr_30181;
})();
var statearr_30182_32597 = state_30134__$1;
(statearr_30182_32597[(2)] = null);

(statearr_30182_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_30134){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_30134);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e30187){var ex__28969__auto__ = e30187;
var statearr_30188_32598 = state_30134;
(statearr_30188_32598[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_30134[(4)]))){
var statearr_30189_32599 = state_30134;
(statearr_30189_32599[(1)] = cljs.core.first((state_30134[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32602 = state_30134;
state_30134 = G__32602;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_30134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_30134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30191 = f__29175__auto__();
(statearr_30191[(6)] = c__29174__auto__);

return statearr_30191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30197 = arguments.length;
switch (G__30197) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32612 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32612(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32613 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32613(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32616 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32616(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32618 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32618(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30222 = (function (ch,cs,meta30223){
this.ch = ch;
this.cs = cs;
this.meta30223 = meta30223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30224,meta30223__$1){
var self__ = this;
var _30224__$1 = this;
return (new cljs.core.async.t_cljs$core$async30222(self__.ch,self__.cs,meta30223__$1));
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30224){
var self__ = this;
var _30224__$1 = this;
return self__.meta30223;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30223","meta30223",-1399346265,null)], null);
}));

(cljs.core.async.t_cljs$core$async30222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30222");

(cljs.core.async.t_cljs$core$async30222.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30222.
 */
cljs.core.async.__GT_t_cljs$core$async30222 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30222(ch__$1,cs__$1,meta30223){
return (new cljs.core.async.t_cljs$core$async30222(ch__$1,cs__$1,meta30223));
});

}

return (new cljs.core.async.t_cljs$core$async30222(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29174__auto___32634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_30376){
var state_val_30378 = (state_30376[(1)]);
if((state_val_30378 === (7))){
var inst_30371 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30380_32636 = state_30376__$1;
(statearr_30380_32636[(2)] = inst_30371);

(statearr_30380_32636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (20))){
var inst_30270 = (state_30376[(7)]);
var inst_30283 = cljs.core.first(inst_30270);
var inst_30288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30283,(0),null);
var inst_30289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30283,(1),null);
var state_30376__$1 = (function (){var statearr_30381 = state_30376;
(statearr_30381[(8)] = inst_30288);

return statearr_30381;
})();
if(cljs.core.truth_(inst_30289)){
var statearr_30382_32643 = state_30376__$1;
(statearr_30382_32643[(1)] = (22));

} else {
var statearr_30383_32644 = state_30376__$1;
(statearr_30383_32644[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (27))){
var inst_30317 = (state_30376[(9)]);
var inst_30324 = (state_30376[(10)]);
var inst_30237 = (state_30376[(11)]);
var inst_30319 = (state_30376[(12)]);
var inst_30324__$1 = cljs.core._nth(inst_30317,inst_30319);
var inst_30325 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30324__$1,inst_30237,done);
var state_30376__$1 = (function (){var statearr_30389 = state_30376;
(statearr_30389[(10)] = inst_30324__$1);

return statearr_30389;
})();
if(cljs.core.truth_(inst_30325)){
var statearr_30391_32649 = state_30376__$1;
(statearr_30391_32649[(1)] = (30));

} else {
var statearr_30393_32650 = state_30376__$1;
(statearr_30393_32650[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (1))){
var state_30376__$1 = state_30376;
var statearr_30401_32655 = state_30376__$1;
(statearr_30401_32655[(2)] = null);

(statearr_30401_32655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (24))){
var inst_30270 = (state_30376[(7)]);
var inst_30294 = (state_30376[(2)]);
var inst_30295 = cljs.core.next(inst_30270);
var inst_30246 = inst_30295;
var inst_30247 = null;
var inst_30248 = (0);
var inst_30249 = (0);
var state_30376__$1 = (function (){var statearr_30412 = state_30376;
(statearr_30412[(13)] = inst_30249);

(statearr_30412[(14)] = inst_30294);

(statearr_30412[(15)] = inst_30247);

(statearr_30412[(16)] = inst_30248);

(statearr_30412[(17)] = inst_30246);

return statearr_30412;
})();
var statearr_30413_32659 = state_30376__$1;
(statearr_30413_32659[(2)] = null);

(statearr_30413_32659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (39))){
var state_30376__$1 = state_30376;
var statearr_30417_32662 = state_30376__$1;
(statearr_30417_32662[(2)] = null);

(statearr_30417_32662[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (4))){
var inst_30237 = (state_30376[(11)]);
var inst_30237__$1 = (state_30376[(2)]);
var inst_30238 = (inst_30237__$1 == null);
var state_30376__$1 = (function (){var statearr_30418 = state_30376;
(statearr_30418[(11)] = inst_30237__$1);

return statearr_30418;
})();
if(cljs.core.truth_(inst_30238)){
var statearr_30419_32668 = state_30376__$1;
(statearr_30419_32668[(1)] = (5));

} else {
var statearr_30420_32670 = state_30376__$1;
(statearr_30420_32670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (15))){
var inst_30249 = (state_30376[(13)]);
var inst_30247 = (state_30376[(15)]);
var inst_30248 = (state_30376[(16)]);
var inst_30246 = (state_30376[(17)]);
var inst_30266 = (state_30376[(2)]);
var inst_30267 = (inst_30249 + (1));
var tmp30414 = inst_30247;
var tmp30415 = inst_30248;
var tmp30416 = inst_30246;
var inst_30246__$1 = tmp30416;
var inst_30247__$1 = tmp30414;
var inst_30248__$1 = tmp30415;
var inst_30249__$1 = inst_30267;
var state_30376__$1 = (function (){var statearr_30428 = state_30376;
(statearr_30428[(13)] = inst_30249__$1);

(statearr_30428[(18)] = inst_30266);

(statearr_30428[(15)] = inst_30247__$1);

(statearr_30428[(16)] = inst_30248__$1);

(statearr_30428[(17)] = inst_30246__$1);

return statearr_30428;
})();
var statearr_30429_32674 = state_30376__$1;
(statearr_30429_32674[(2)] = null);

(statearr_30429_32674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (21))){
var inst_30298 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30439_32675 = state_30376__$1;
(statearr_30439_32675[(2)] = inst_30298);

(statearr_30439_32675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (31))){
var inst_30324 = (state_30376[(10)]);
var inst_30329 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30324);
var state_30376__$1 = state_30376;
var statearr_30440_32685 = state_30376__$1;
(statearr_30440_32685[(2)] = inst_30329);

(statearr_30440_32685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (32))){
var inst_30317 = (state_30376[(9)]);
var inst_30316 = (state_30376[(19)]);
var inst_30318 = (state_30376[(20)]);
var inst_30319 = (state_30376[(12)]);
var inst_30331 = (state_30376[(2)]);
var inst_30332 = (inst_30319 + (1));
var tmp30432 = inst_30317;
var tmp30433 = inst_30316;
var tmp30434 = inst_30318;
var inst_30316__$1 = tmp30433;
var inst_30317__$1 = tmp30432;
var inst_30318__$1 = tmp30434;
var inst_30319__$1 = inst_30332;
var state_30376__$1 = (function (){var statearr_30442 = state_30376;
(statearr_30442[(9)] = inst_30317__$1);

(statearr_30442[(19)] = inst_30316__$1);

(statearr_30442[(20)] = inst_30318__$1);

(statearr_30442[(12)] = inst_30319__$1);

(statearr_30442[(21)] = inst_30331);

return statearr_30442;
})();
var statearr_30443_32711 = state_30376__$1;
(statearr_30443_32711[(2)] = null);

(statearr_30443_32711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (40))){
var inst_30344 = (state_30376[(22)]);
var inst_30348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30344);
var state_30376__$1 = state_30376;
var statearr_30447_32716 = state_30376__$1;
(statearr_30447_32716[(2)] = inst_30348);

(statearr_30447_32716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (33))){
var inst_30335 = (state_30376[(23)]);
var inst_30337 = cljs.core.chunked_seq_QMARK_(inst_30335);
var state_30376__$1 = state_30376;
if(inst_30337){
var statearr_30473_32723 = state_30376__$1;
(statearr_30473_32723[(1)] = (36));

} else {
var statearr_30479_32725 = state_30376__$1;
(statearr_30479_32725[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (13))){
var inst_30259 = (state_30376[(24)]);
var inst_30263 = cljs.core.async.close_BANG_(inst_30259);
var state_30376__$1 = state_30376;
var statearr_30483_32733 = state_30376__$1;
(statearr_30483_32733[(2)] = inst_30263);

(statearr_30483_32733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (22))){
var inst_30288 = (state_30376[(8)]);
var inst_30291 = cljs.core.async.close_BANG_(inst_30288);
var state_30376__$1 = state_30376;
var statearr_30490_32742 = state_30376__$1;
(statearr_30490_32742[(2)] = inst_30291);

(statearr_30490_32742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (36))){
var inst_30335 = (state_30376[(23)]);
var inst_30339 = cljs.core.chunk_first(inst_30335);
var inst_30340 = cljs.core.chunk_rest(inst_30335);
var inst_30341 = cljs.core.count(inst_30339);
var inst_30316 = inst_30340;
var inst_30317 = inst_30339;
var inst_30318 = inst_30341;
var inst_30319 = (0);
var state_30376__$1 = (function (){var statearr_30508 = state_30376;
(statearr_30508[(9)] = inst_30317);

(statearr_30508[(19)] = inst_30316);

(statearr_30508[(20)] = inst_30318);

(statearr_30508[(12)] = inst_30319);

return statearr_30508;
})();
var statearr_30509_32749 = state_30376__$1;
(statearr_30509_32749[(2)] = null);

(statearr_30509_32749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (41))){
var inst_30335 = (state_30376[(23)]);
var inst_30350 = (state_30376[(2)]);
var inst_30351 = cljs.core.next(inst_30335);
var inst_30316 = inst_30351;
var inst_30317 = null;
var inst_30318 = (0);
var inst_30319 = (0);
var state_30376__$1 = (function (){var statearr_30515 = state_30376;
(statearr_30515[(25)] = inst_30350);

(statearr_30515[(9)] = inst_30317);

(statearr_30515[(19)] = inst_30316);

(statearr_30515[(20)] = inst_30318);

(statearr_30515[(12)] = inst_30319);

return statearr_30515;
})();
var statearr_30527_32756 = state_30376__$1;
(statearr_30527_32756[(2)] = null);

(statearr_30527_32756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (43))){
var state_30376__$1 = state_30376;
var statearr_30533_32757 = state_30376__$1;
(statearr_30533_32757[(2)] = null);

(statearr_30533_32757[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (29))){
var inst_30359 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30534_32759 = state_30376__$1;
(statearr_30534_32759[(2)] = inst_30359);

(statearr_30534_32759[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (44))){
var inst_30368 = (state_30376[(2)]);
var state_30376__$1 = (function (){var statearr_30535 = state_30376;
(statearr_30535[(26)] = inst_30368);

return statearr_30535;
})();
var statearr_30537_32762 = state_30376__$1;
(statearr_30537_32762[(2)] = null);

(statearr_30537_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (6))){
var inst_30308 = (state_30376[(27)]);
var inst_30307 = cljs.core.deref(cs);
var inst_30308__$1 = cljs.core.keys(inst_30307);
var inst_30309 = cljs.core.count(inst_30308__$1);
var inst_30310 = cljs.core.reset_BANG_(dctr,inst_30309);
var inst_30315 = cljs.core.seq(inst_30308__$1);
var inst_30316 = inst_30315;
var inst_30317 = null;
var inst_30318 = (0);
var inst_30319 = (0);
var state_30376__$1 = (function (){var statearr_30548 = state_30376;
(statearr_30548[(28)] = inst_30310);

(statearr_30548[(27)] = inst_30308__$1);

(statearr_30548[(9)] = inst_30317);

(statearr_30548[(19)] = inst_30316);

(statearr_30548[(20)] = inst_30318);

(statearr_30548[(12)] = inst_30319);

return statearr_30548;
})();
var statearr_30549_32767 = state_30376__$1;
(statearr_30549_32767[(2)] = null);

(statearr_30549_32767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (28))){
var inst_30335 = (state_30376[(23)]);
var inst_30316 = (state_30376[(19)]);
var inst_30335__$1 = cljs.core.seq(inst_30316);
var state_30376__$1 = (function (){var statearr_30554 = state_30376;
(statearr_30554[(23)] = inst_30335__$1);

return statearr_30554;
})();
if(inst_30335__$1){
var statearr_30555_32769 = state_30376__$1;
(statearr_30555_32769[(1)] = (33));

} else {
var statearr_30556_32770 = state_30376__$1;
(statearr_30556_32770[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (25))){
var inst_30318 = (state_30376[(20)]);
var inst_30319 = (state_30376[(12)]);
var inst_30321 = (inst_30319 < inst_30318);
var inst_30322 = inst_30321;
var state_30376__$1 = state_30376;
if(cljs.core.truth_(inst_30322)){
var statearr_30557_32771 = state_30376__$1;
(statearr_30557_32771[(1)] = (27));

} else {
var statearr_30562_32772 = state_30376__$1;
(statearr_30562_32772[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (34))){
var state_30376__$1 = state_30376;
var statearr_30567_32773 = state_30376__$1;
(statearr_30567_32773[(2)] = null);

(statearr_30567_32773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (17))){
var state_30376__$1 = state_30376;
var statearr_30572_32774 = state_30376__$1;
(statearr_30572_32774[(2)] = null);

(statearr_30572_32774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (3))){
var inst_30373 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30376__$1,inst_30373);
} else {
if((state_val_30378 === (12))){
var inst_30303 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30574_32775 = state_30376__$1;
(statearr_30574_32775[(2)] = inst_30303);

(statearr_30574_32775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (2))){
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30376__$1,(4),ch);
} else {
if((state_val_30378 === (23))){
var state_30376__$1 = state_30376;
var statearr_30577_32776 = state_30376__$1;
(statearr_30577_32776[(2)] = null);

(statearr_30577_32776[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (35))){
var inst_30357 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30579_32777 = state_30376__$1;
(statearr_30579_32777[(2)] = inst_30357);

(statearr_30579_32777[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (19))){
var inst_30270 = (state_30376[(7)]);
var inst_30275 = cljs.core.chunk_first(inst_30270);
var inst_30276 = cljs.core.chunk_rest(inst_30270);
var inst_30277 = cljs.core.count(inst_30275);
var inst_30246 = inst_30276;
var inst_30247 = inst_30275;
var inst_30248 = inst_30277;
var inst_30249 = (0);
var state_30376__$1 = (function (){var statearr_30582 = state_30376;
(statearr_30582[(13)] = inst_30249);

(statearr_30582[(15)] = inst_30247);

(statearr_30582[(16)] = inst_30248);

(statearr_30582[(17)] = inst_30246);

return statearr_30582;
})();
var statearr_30583_32783 = state_30376__$1;
(statearr_30583_32783[(2)] = null);

(statearr_30583_32783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (11))){
var inst_30270 = (state_30376[(7)]);
var inst_30246 = (state_30376[(17)]);
var inst_30270__$1 = cljs.core.seq(inst_30246);
var state_30376__$1 = (function (){var statearr_30584 = state_30376;
(statearr_30584[(7)] = inst_30270__$1);

return statearr_30584;
})();
if(inst_30270__$1){
var statearr_30586_32792 = state_30376__$1;
(statearr_30586_32792[(1)] = (16));

} else {
var statearr_30588_32793 = state_30376__$1;
(statearr_30588_32793[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (9))){
var inst_30305 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30590_32797 = state_30376__$1;
(statearr_30590_32797[(2)] = inst_30305);

(statearr_30590_32797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (5))){
var inst_30244 = cljs.core.deref(cs);
var inst_30245 = cljs.core.seq(inst_30244);
var inst_30246 = inst_30245;
var inst_30247 = null;
var inst_30248 = (0);
var inst_30249 = (0);
var state_30376__$1 = (function (){var statearr_30593 = state_30376;
(statearr_30593[(13)] = inst_30249);

(statearr_30593[(15)] = inst_30247);

(statearr_30593[(16)] = inst_30248);

(statearr_30593[(17)] = inst_30246);

return statearr_30593;
})();
var statearr_30594_32811 = state_30376__$1;
(statearr_30594_32811[(2)] = null);

(statearr_30594_32811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (14))){
var state_30376__$1 = state_30376;
var statearr_30595_32816 = state_30376__$1;
(statearr_30595_32816[(2)] = null);

(statearr_30595_32816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (45))){
var inst_30365 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30596_32818 = state_30376__$1;
(statearr_30596_32818[(2)] = inst_30365);

(statearr_30596_32818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (26))){
var inst_30308 = (state_30376[(27)]);
var inst_30361 = (state_30376[(2)]);
var inst_30362 = cljs.core.seq(inst_30308);
var state_30376__$1 = (function (){var statearr_30597 = state_30376;
(statearr_30597[(29)] = inst_30361);

return statearr_30597;
})();
if(inst_30362){
var statearr_30598_32823 = state_30376__$1;
(statearr_30598_32823[(1)] = (42));

} else {
var statearr_30599_32824 = state_30376__$1;
(statearr_30599_32824[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (16))){
var inst_30270 = (state_30376[(7)]);
var inst_30272 = cljs.core.chunked_seq_QMARK_(inst_30270);
var state_30376__$1 = state_30376;
if(inst_30272){
var statearr_30600_32826 = state_30376__$1;
(statearr_30600_32826[(1)] = (19));

} else {
var statearr_30601_32827 = state_30376__$1;
(statearr_30601_32827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (38))){
var inst_30354 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30602_32830 = state_30376__$1;
(statearr_30602_32830[(2)] = inst_30354);

(statearr_30602_32830[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (30))){
var state_30376__$1 = state_30376;
var statearr_30603_32832 = state_30376__$1;
(statearr_30603_32832[(2)] = null);

(statearr_30603_32832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (10))){
var inst_30249 = (state_30376[(13)]);
var inst_30247 = (state_30376[(15)]);
var inst_30258 = cljs.core._nth(inst_30247,inst_30249);
var inst_30259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30258,(0),null);
var inst_30260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30258,(1),null);
var state_30376__$1 = (function (){var statearr_30614 = state_30376;
(statearr_30614[(24)] = inst_30259);

return statearr_30614;
})();
if(cljs.core.truth_(inst_30260)){
var statearr_30615_32835 = state_30376__$1;
(statearr_30615_32835[(1)] = (13));

} else {
var statearr_30616_32837 = state_30376__$1;
(statearr_30616_32837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (18))){
var inst_30301 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30617_32839 = state_30376__$1;
(statearr_30617_32839[(2)] = inst_30301);

(statearr_30617_32839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (42))){
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30376__$1,(45),dchan);
} else {
if((state_val_30378 === (37))){
var inst_30335 = (state_30376[(23)]);
var inst_30344 = (state_30376[(22)]);
var inst_30237 = (state_30376[(11)]);
var inst_30344__$1 = cljs.core.first(inst_30335);
var inst_30345 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30344__$1,inst_30237,done);
var state_30376__$1 = (function (){var statearr_30623 = state_30376;
(statearr_30623[(22)] = inst_30344__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30345)){
var statearr_30624_32853 = state_30376__$1;
(statearr_30624_32853[(1)] = (39));

} else {
var statearr_30626_32856 = state_30376__$1;
(statearr_30626_32856[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (8))){
var inst_30249 = (state_30376[(13)]);
var inst_30248 = (state_30376[(16)]);
var inst_30252 = (inst_30249 < inst_30248);
var inst_30253 = inst_30252;
var state_30376__$1 = state_30376;
if(cljs.core.truth_(inst_30253)){
var statearr_30627_32858 = state_30376__$1;
(statearr_30627_32858[(1)] = (10));

} else {
var statearr_30628_32860 = state_30376__$1;
(statearr_30628_32860[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28966__auto__ = null;
var cljs$core$async$mult_$_state_machine__28966__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = cljs$core$async$mult_$_state_machine__28966__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var cljs$core$async$mult_$_state_machine__28966__auto____1 = (function (state_30376){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_30376);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e30630){var ex__28969__auto__ = e30630;
var statearr_30631_32868 = state_30376;
(statearr_30631_32868[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_30376[(4)]))){
var statearr_30632_32872 = state_30376;
(statearr_30632_32872[(1)] = cljs.core.first((state_30376[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32875 = state_30376;
state_30376 = G__32875;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28966__auto__ = function(state_30376){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28966__auto____1.call(this,state_30376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28966__auto____0;
cljs$core$async$mult_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28966__auto____1;
return cljs$core$async$mult_$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30633 = f__29175__auto__();
(statearr_30633[(6)] = c__29174__auto___32634);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30644 = arguments.length;
switch (G__30644) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32890 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32890(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32899 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32899(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32904 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32904(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32910 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32910(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32914 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32914(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32920 = arguments.length;
var i__4830__auto___32921 = (0);
while(true){
if((i__4830__auto___32921 < len__4829__auto___32920)){
args__4835__auto__.push((arguments[i__4830__auto___32921]));

var G__32923 = (i__4830__auto___32921 + (1));
i__4830__auto___32921 = G__32923;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30694){
var map__30698 = p__30694;
var map__30698__$1 = cljs.core.__destructure_map(map__30698);
var opts = map__30698__$1;
var statearr_30699_32928 = state;
(statearr_30699_32928[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30705_32932 = state;
(statearr_30705_32932[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30709_32933 = state;
(statearr_30709_32933[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30684){
var G__30685 = cljs.core.first(seq30684);
var seq30684__$1 = cljs.core.next(seq30684);
var G__30686 = cljs.core.first(seq30684__$1);
var seq30684__$2 = cljs.core.next(seq30684__$1);
var G__30687 = cljs.core.first(seq30684__$2);
var seq30684__$3 = cljs.core.next(seq30684__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30685,G__30686,G__30687,seq30684__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30728 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30729){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30729 = meta30729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30730,meta30729__$1){
var self__ = this;
var _30730__$1 = this;
return (new cljs.core.async.t_cljs$core$async30728(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30729__$1));
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30730){
var self__ = this;
var _30730__$1 = this;
return self__.meta30729;
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30729","meta30729",1353977215,null)], null);
}));

(cljs.core.async.t_cljs$core$async30728.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30728");

(cljs.core.async.t_cljs$core$async30728.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30728");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30728.
 */
cljs.core.async.__GT_t_cljs$core$async30728 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30728(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30729){
return (new cljs.core.async.t_cljs$core$async30728(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30729));
});

}

return (new cljs.core.async.t_cljs$core$async30728(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29174__auto___32974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_30812){
var state_val_30813 = (state_30812[(1)]);
if((state_val_30813 === (7))){
var inst_30772 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30772)){
var statearr_30815_32978 = state_30812__$1;
(statearr_30815_32978[(1)] = (8));

} else {
var statearr_30816_32983 = state_30812__$1;
(statearr_30816_32983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (20))){
var inst_30765 = (state_30812[(7)]);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30812__$1,(23),out,inst_30765);
} else {
if((state_val_30813 === (1))){
var inst_30748 = calc_state();
var inst_30749 = cljs.core.__destructure_map(inst_30748);
var inst_30750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30749,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30749,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30749,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30753 = inst_30748;
var state_30812__$1 = (function (){var statearr_30817 = state_30812;
(statearr_30817[(8)] = inst_30753);

(statearr_30817[(9)] = inst_30752);

(statearr_30817[(10)] = inst_30751);

(statearr_30817[(11)] = inst_30750);

return statearr_30817;
})();
var statearr_30818_32988 = state_30812__$1;
(statearr_30818_32988[(2)] = null);

(statearr_30818_32988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (24))){
var inst_30756 = (state_30812[(12)]);
var inst_30753 = inst_30756;
var state_30812__$1 = (function (){var statearr_30819 = state_30812;
(statearr_30819[(8)] = inst_30753);

return statearr_30819;
})();
var statearr_30820_32993 = state_30812__$1;
(statearr_30820_32993[(2)] = null);

(statearr_30820_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (4))){
var inst_30767 = (state_30812[(13)]);
var inst_30765 = (state_30812[(7)]);
var inst_30764 = (state_30812[(2)]);
var inst_30765__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(0),null);
var inst_30766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30764,(1),null);
var inst_30767__$1 = (inst_30765__$1 == null);
var state_30812__$1 = (function (){var statearr_30824 = state_30812;
(statearr_30824[(14)] = inst_30766);

(statearr_30824[(13)] = inst_30767__$1);

(statearr_30824[(7)] = inst_30765__$1);

return statearr_30824;
})();
if(cljs.core.truth_(inst_30767__$1)){
var statearr_30826_32997 = state_30812__$1;
(statearr_30826_32997[(1)] = (5));

} else {
var statearr_30828_33000 = state_30812__$1;
(statearr_30828_33000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (15))){
var inst_30786 = (state_30812[(15)]);
var inst_30757 = (state_30812[(16)]);
var inst_30786__$1 = cljs.core.empty_QMARK_(inst_30757);
var state_30812__$1 = (function (){var statearr_30829 = state_30812;
(statearr_30829[(15)] = inst_30786__$1);

return statearr_30829;
})();
if(inst_30786__$1){
var statearr_30830_33005 = state_30812__$1;
(statearr_30830_33005[(1)] = (17));

} else {
var statearr_30831_33006 = state_30812__$1;
(statearr_30831_33006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (21))){
var inst_30756 = (state_30812[(12)]);
var inst_30753 = inst_30756;
var state_30812__$1 = (function (){var statearr_30832 = state_30812;
(statearr_30832[(8)] = inst_30753);

return statearr_30832;
})();
var statearr_30833_33007 = state_30812__$1;
(statearr_30833_33007[(2)] = null);

(statearr_30833_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (13))){
var inst_30779 = (state_30812[(2)]);
var inst_30780 = calc_state();
var inst_30753 = inst_30780;
var state_30812__$1 = (function (){var statearr_30838 = state_30812;
(statearr_30838[(8)] = inst_30753);

(statearr_30838[(17)] = inst_30779);

return statearr_30838;
})();
var statearr_30841_33010 = state_30812__$1;
(statearr_30841_33010[(2)] = null);

(statearr_30841_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (22))){
var inst_30806 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30847_33012 = state_30812__$1;
(statearr_30847_33012[(2)] = inst_30806);

(statearr_30847_33012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (6))){
var inst_30766 = (state_30812[(14)]);
var inst_30770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30766,change);
var state_30812__$1 = state_30812;
var statearr_30850_33021 = state_30812__$1;
(statearr_30850_33021[(2)] = inst_30770);

(statearr_30850_33021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (25))){
var state_30812__$1 = state_30812;
var statearr_30854_33022 = state_30812__$1;
(statearr_30854_33022[(2)] = null);

(statearr_30854_33022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (17))){
var inst_30766 = (state_30812[(14)]);
var inst_30758 = (state_30812[(18)]);
var inst_30788 = (inst_30758.cljs$core$IFn$_invoke$arity$1 ? inst_30758.cljs$core$IFn$_invoke$arity$1(inst_30766) : inst_30758.call(null,inst_30766));
var inst_30789 = cljs.core.not(inst_30788);
var state_30812__$1 = state_30812;
var statearr_30855_33024 = state_30812__$1;
(statearr_30855_33024[(2)] = inst_30789);

(statearr_30855_33024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (3))){
var inst_30810 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30812__$1,inst_30810);
} else {
if((state_val_30813 === (12))){
var state_30812__$1 = state_30812;
var statearr_30860_33025 = state_30812__$1;
(statearr_30860_33025[(2)] = null);

(statearr_30860_33025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (2))){
var inst_30753 = (state_30812[(8)]);
var inst_30756 = (state_30812[(12)]);
var inst_30756__$1 = cljs.core.__destructure_map(inst_30753);
var inst_30757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30756__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30756__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30756__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30812__$1 = (function (){var statearr_30864 = state_30812;
(statearr_30864[(16)] = inst_30757);

(statearr_30864[(18)] = inst_30758);

(statearr_30864[(12)] = inst_30756__$1);

return statearr_30864;
})();
return cljs.core.async.ioc_alts_BANG_(state_30812__$1,(4),inst_30759);
} else {
if((state_val_30813 === (23))){
var inst_30797 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30797)){
var statearr_30865_33029 = state_30812__$1;
(statearr_30865_33029[(1)] = (24));

} else {
var statearr_30869_33031 = state_30812__$1;
(statearr_30869_33031[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (19))){
var inst_30792 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30872_33036 = state_30812__$1;
(statearr_30872_33036[(2)] = inst_30792);

(statearr_30872_33036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (11))){
var inst_30766 = (state_30812[(14)]);
var inst_30776 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30766);
var state_30812__$1 = state_30812;
var statearr_30877_33037 = state_30812__$1;
(statearr_30877_33037[(2)] = inst_30776);

(statearr_30877_33037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (9))){
var inst_30766 = (state_30812[(14)]);
var inst_30757 = (state_30812[(16)]);
var inst_30783 = (state_30812[(19)]);
var inst_30783__$1 = (inst_30757.cljs$core$IFn$_invoke$arity$1 ? inst_30757.cljs$core$IFn$_invoke$arity$1(inst_30766) : inst_30757.call(null,inst_30766));
var state_30812__$1 = (function (){var statearr_30882 = state_30812;
(statearr_30882[(19)] = inst_30783__$1);

return statearr_30882;
})();
if(cljs.core.truth_(inst_30783__$1)){
var statearr_30883_33040 = state_30812__$1;
(statearr_30883_33040[(1)] = (14));

} else {
var statearr_30884_33043 = state_30812__$1;
(statearr_30884_33043[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (5))){
var inst_30767 = (state_30812[(13)]);
var state_30812__$1 = state_30812;
var statearr_30885_33046 = state_30812__$1;
(statearr_30885_33046[(2)] = inst_30767);

(statearr_30885_33046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (14))){
var inst_30783 = (state_30812[(19)]);
var state_30812__$1 = state_30812;
var statearr_30886_33051 = state_30812__$1;
(statearr_30886_33051[(2)] = inst_30783);

(statearr_30886_33051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (26))){
var inst_30802 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30887_33052 = state_30812__$1;
(statearr_30887_33052[(2)] = inst_30802);

(statearr_30887_33052[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (16))){
var inst_30794 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30794)){
var statearr_30888_33053 = state_30812__$1;
(statearr_30888_33053[(1)] = (20));

} else {
var statearr_30889_33055 = state_30812__$1;
(statearr_30889_33055[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (10))){
var inst_30808 = (state_30812[(2)]);
var state_30812__$1 = state_30812;
var statearr_30890_33059 = state_30812__$1;
(statearr_30890_33059[(2)] = inst_30808);

(statearr_30890_33059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (18))){
var inst_30786 = (state_30812[(15)]);
var state_30812__$1 = state_30812;
var statearr_30891_33060 = state_30812__$1;
(statearr_30891_33060[(2)] = inst_30786);

(statearr_30891_33060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30813 === (8))){
var inst_30765 = (state_30812[(7)]);
var inst_30774 = (inst_30765 == null);
var state_30812__$1 = state_30812;
if(cljs.core.truth_(inst_30774)){
var statearr_30892_33061 = state_30812__$1;
(statearr_30892_33061[(1)] = (11));

} else {
var statearr_30893_33062 = state_30812__$1;
(statearr_30893_33062[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28966__auto__ = null;
var cljs$core$async$mix_$_state_machine__28966__auto____0 = (function (){
var statearr_30894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30894[(0)] = cljs$core$async$mix_$_state_machine__28966__auto__);

(statearr_30894[(1)] = (1));

return statearr_30894;
});
var cljs$core$async$mix_$_state_machine__28966__auto____1 = (function (state_30812){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_30812);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e30895){var ex__28969__auto__ = e30895;
var statearr_30896_33064 = state_30812;
(statearr_30896_33064[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_30812[(4)]))){
var statearr_30897_33068 = state_30812;
(statearr_30897_33068[(1)] = cljs.core.first((state_30812[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33069 = state_30812;
state_30812 = G__33069;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28966__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28966__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28966__auto____0;
cljs$core$async$mix_$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28966__auto____1;
return cljs$core$async$mix_$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_30898 = f__29175__auto__();
(statearr_30898[(6)] = c__29174__auto___32974);

return statearr_30898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33079 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33079(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33085 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33085(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33086 = (function() {
var G__33087 = null;
var G__33087__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33087__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33087 = function(p,v){
switch(arguments.length){
case 1:
return G__33087__1.call(this,p);
case 2:
return G__33087__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33087.cljs$core$IFn$_invoke$arity$1 = G__33087__1;
G__33087.cljs$core$IFn$_invoke$arity$2 = G__33087__2;
return G__33087;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30911 = arguments.length;
switch (G__30911) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33086(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33086(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30916 = arguments.length;
switch (G__30916) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30912_SHARP_){
if(cljs.core.truth_((p1__30912_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30912_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30912_SHARP_.call(null,topic)))){
return p1__30912_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30912_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30930 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30931){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30931 = meta30931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30932,meta30931__$1){
var self__ = this;
var _30932__$1 = this;
return (new cljs.core.async.t_cljs$core$async30930(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30931__$1));
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30932){
var self__ = this;
var _30932__$1 = this;
return self__.meta30931;
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30930.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30931","meta30931",-1486396775,null)], null);
}));

(cljs.core.async.t_cljs$core$async30930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30930");

(cljs.core.async.t_cljs$core$async30930.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30930.
 */
cljs.core.async.__GT_t_cljs$core$async30930 = (function cljs$core$async$__GT_t_cljs$core$async30930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30931){
return (new cljs.core.async.t_cljs$core$async30930(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30931));
});

}

return (new cljs.core.async.t_cljs$core$async30930(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29174__auto___33100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31037){
var state_val_31038 = (state_31037[(1)]);
if((state_val_31038 === (7))){
var inst_31030 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31043_33103 = state_31037__$1;
(statearr_31043_33103[(2)] = inst_31030);

(statearr_31043_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (20))){
var state_31037__$1 = state_31037;
var statearr_31044_33104 = state_31037__$1;
(statearr_31044_33104[(2)] = null);

(statearr_31044_33104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (1))){
var state_31037__$1 = state_31037;
var statearr_31046_33109 = state_31037__$1;
(statearr_31046_33109[(2)] = null);

(statearr_31046_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (24))){
var inst_31013 = (state_31037[(7)]);
var inst_31022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31013);
var state_31037__$1 = state_31037;
var statearr_31051_33122 = state_31037__$1;
(statearr_31051_33122[(2)] = inst_31022);

(statearr_31051_33122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (4))){
var inst_30958 = (state_31037[(8)]);
var inst_30958__$1 = (state_31037[(2)]);
var inst_30959 = (inst_30958__$1 == null);
var state_31037__$1 = (function (){var statearr_31055 = state_31037;
(statearr_31055[(8)] = inst_30958__$1);

return statearr_31055;
})();
if(cljs.core.truth_(inst_30959)){
var statearr_31056_33123 = state_31037__$1;
(statearr_31056_33123[(1)] = (5));

} else {
var statearr_31058_33124 = state_31037__$1;
(statearr_31058_33124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (15))){
var inst_31006 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31059_33125 = state_31037__$1;
(statearr_31059_33125[(2)] = inst_31006);

(statearr_31059_33125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (21))){
var inst_31027 = (state_31037[(2)]);
var state_31037__$1 = (function (){var statearr_31060 = state_31037;
(statearr_31060[(9)] = inst_31027);

return statearr_31060;
})();
var statearr_31061_33126 = state_31037__$1;
(statearr_31061_33126[(2)] = null);

(statearr_31061_33126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (13))){
var inst_30982 = (state_31037[(10)]);
var inst_30985 = cljs.core.chunked_seq_QMARK_(inst_30982);
var state_31037__$1 = state_31037;
if(inst_30985){
var statearr_31062_33127 = state_31037__$1;
(statearr_31062_33127[(1)] = (16));

} else {
var statearr_31065_33129 = state_31037__$1;
(statearr_31065_33129[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (22))){
var inst_31019 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
if(cljs.core.truth_(inst_31019)){
var statearr_31067_33130 = state_31037__$1;
(statearr_31067_33130[(1)] = (23));

} else {
var statearr_31072_33131 = state_31037__$1;
(statearr_31072_33131[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (6))){
var inst_31013 = (state_31037[(7)]);
var inst_31015 = (state_31037[(11)]);
var inst_30958 = (state_31037[(8)]);
var inst_31013__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30958) : topic_fn.call(null,inst_30958));
var inst_31014 = cljs.core.deref(mults);
var inst_31015__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31014,inst_31013__$1);
var state_31037__$1 = (function (){var statearr_31073 = state_31037;
(statearr_31073[(7)] = inst_31013__$1);

(statearr_31073[(11)] = inst_31015__$1);

return statearr_31073;
})();
if(cljs.core.truth_(inst_31015__$1)){
var statearr_31074_33132 = state_31037__$1;
(statearr_31074_33132[(1)] = (19));

} else {
var statearr_31075_33133 = state_31037__$1;
(statearr_31075_33133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (25))){
var inst_31024 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31076_33134 = state_31037__$1;
(statearr_31076_33134[(2)] = inst_31024);

(statearr_31076_33134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (17))){
var inst_30982 = (state_31037[(10)]);
var inst_30996 = cljs.core.first(inst_30982);
var inst_30997 = cljs.core.async.muxch_STAR_(inst_30996);
var inst_30998 = cljs.core.async.close_BANG_(inst_30997);
var inst_30999 = cljs.core.next(inst_30982);
var inst_30968 = inst_30999;
var inst_30969 = null;
var inst_30970 = (0);
var inst_30971 = (0);
var state_31037__$1 = (function (){var statearr_31078 = state_31037;
(statearr_31078[(12)] = inst_30968);

(statearr_31078[(13)] = inst_30969);

(statearr_31078[(14)] = inst_30970);

(statearr_31078[(15)] = inst_30998);

(statearr_31078[(16)] = inst_30971);

return statearr_31078;
})();
var statearr_31079_33135 = state_31037__$1;
(statearr_31079_33135[(2)] = null);

(statearr_31079_33135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (3))){
var inst_31032 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31037__$1,inst_31032);
} else {
if((state_val_31038 === (12))){
var inst_31008 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31082_33136 = state_31037__$1;
(statearr_31082_33136[(2)] = inst_31008);

(statearr_31082_33136[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (2))){
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31037__$1,(4),ch);
} else {
if((state_val_31038 === (23))){
var state_31037__$1 = state_31037;
var statearr_31086_33138 = state_31037__$1;
(statearr_31086_33138[(2)] = null);

(statearr_31086_33138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (19))){
var inst_31015 = (state_31037[(11)]);
var inst_30958 = (state_31037[(8)]);
var inst_31017 = cljs.core.async.muxch_STAR_(inst_31015);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31037__$1,(22),inst_31017,inst_30958);
} else {
if((state_val_31038 === (11))){
var inst_30968 = (state_31037[(12)]);
var inst_30982 = (state_31037[(10)]);
var inst_30982__$1 = cljs.core.seq(inst_30968);
var state_31037__$1 = (function (){var statearr_31087 = state_31037;
(statearr_31087[(10)] = inst_30982__$1);

return statearr_31087;
})();
if(inst_30982__$1){
var statearr_31088_33140 = state_31037__$1;
(statearr_31088_33140[(1)] = (13));

} else {
var statearr_31089_33141 = state_31037__$1;
(statearr_31089_33141[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (9))){
var inst_31010 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31092_33145 = state_31037__$1;
(statearr_31092_33145[(2)] = inst_31010);

(statearr_31092_33145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (5))){
var inst_30965 = cljs.core.deref(mults);
var inst_30966 = cljs.core.vals(inst_30965);
var inst_30967 = cljs.core.seq(inst_30966);
var inst_30968 = inst_30967;
var inst_30969 = null;
var inst_30970 = (0);
var inst_30971 = (0);
var state_31037__$1 = (function (){var statearr_31095 = state_31037;
(statearr_31095[(12)] = inst_30968);

(statearr_31095[(13)] = inst_30969);

(statearr_31095[(14)] = inst_30970);

(statearr_31095[(16)] = inst_30971);

return statearr_31095;
})();
var statearr_31096_33146 = state_31037__$1;
(statearr_31096_33146[(2)] = null);

(statearr_31096_33146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (14))){
var state_31037__$1 = state_31037;
var statearr_31100_33147 = state_31037__$1;
(statearr_31100_33147[(2)] = null);

(statearr_31100_33147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (16))){
var inst_30982 = (state_31037[(10)]);
var inst_30988 = cljs.core.chunk_first(inst_30982);
var inst_30989 = cljs.core.chunk_rest(inst_30982);
var inst_30993 = cljs.core.count(inst_30988);
var inst_30968 = inst_30989;
var inst_30969 = inst_30988;
var inst_30970 = inst_30993;
var inst_30971 = (0);
var state_31037__$1 = (function (){var statearr_31111 = state_31037;
(statearr_31111[(12)] = inst_30968);

(statearr_31111[(13)] = inst_30969);

(statearr_31111[(14)] = inst_30970);

(statearr_31111[(16)] = inst_30971);

return statearr_31111;
})();
var statearr_31113_33148 = state_31037__$1;
(statearr_31113_33148[(2)] = null);

(statearr_31113_33148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (10))){
var inst_30968 = (state_31037[(12)]);
var inst_30969 = (state_31037[(13)]);
var inst_30970 = (state_31037[(14)]);
var inst_30971 = (state_31037[(16)]);
var inst_30976 = cljs.core._nth(inst_30969,inst_30971);
var inst_30977 = cljs.core.async.muxch_STAR_(inst_30976);
var inst_30978 = cljs.core.async.close_BANG_(inst_30977);
var inst_30979 = (inst_30971 + (1));
var tmp31097 = inst_30968;
var tmp31098 = inst_30969;
var tmp31099 = inst_30970;
var inst_30968__$1 = tmp31097;
var inst_30969__$1 = tmp31098;
var inst_30970__$1 = tmp31099;
var inst_30971__$1 = inst_30979;
var state_31037__$1 = (function (){var statearr_31119 = state_31037;
(statearr_31119[(17)] = inst_30978);

(statearr_31119[(12)] = inst_30968__$1);

(statearr_31119[(13)] = inst_30969__$1);

(statearr_31119[(14)] = inst_30970__$1);

(statearr_31119[(16)] = inst_30971__$1);

return statearr_31119;
})();
var statearr_31120_33150 = state_31037__$1;
(statearr_31120_33150[(2)] = null);

(statearr_31120_33150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (18))){
var inst_31003 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31122_33151 = state_31037__$1;
(statearr_31122_33151[(2)] = inst_31003);

(statearr_31122_33151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (8))){
var inst_30970 = (state_31037[(14)]);
var inst_30971 = (state_31037[(16)]);
var inst_30973 = (inst_30971 < inst_30970);
var inst_30974 = inst_30973;
var state_31037__$1 = state_31037;
if(cljs.core.truth_(inst_30974)){
var statearr_31125_33152 = state_31037__$1;
(statearr_31125_33152[(1)] = (10));

} else {
var statearr_31126_33153 = state_31037__$1;
(statearr_31126_33153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31137[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31137[(1)] = (1));

return statearr_31137;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31037){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31037);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31139){var ex__28969__auto__ = e31139;
var statearr_31140_33155 = state_31037;
(statearr_31140_33155[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31037[(4)]))){
var statearr_31141_33156 = state_31037;
(statearr_31141_33156[(1)] = cljs.core.first((state_31037[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_31037;
state_31037 = G__33157;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31142 = f__29175__auto__();
(statearr_31142[(6)] = c__29174__auto___33100);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31148 = arguments.length;
switch (G__31148) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31153 = arguments.length;
switch (G__31153) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31162 = arguments.length;
switch (G__31162) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29174__auto___33162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var state_31215__$1 = state_31215;
var statearr_31218_33164 = state_31215__$1;
(statearr_31218_33164[(2)] = null);

(statearr_31218_33164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31219_33165 = state_31215__$1;
(statearr_31219_33165[(2)] = null);

(statearr_31219_33165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31171 = (state_31215[(7)]);
var inst_31172 = (state_31215[(8)]);
var inst_31174 = (inst_31172 < inst_31171);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31174)){
var statearr_31221_33166 = state_31215__$1;
(statearr_31221_33166[(1)] = (6));

} else {
var statearr_31222_33167 = state_31215__$1;
(statearr_31222_33167[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (15))){
var inst_31199 = (state_31215[(9)]);
var inst_31205 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31199);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31215__$1,(17),out,inst_31205);
} else {
if((state_val_31216 === (13))){
var inst_31199 = (state_31215[(9)]);
var inst_31199__$1 = (state_31215[(2)]);
var inst_31201 = cljs.core.some(cljs.core.nil_QMARK_,inst_31199__$1);
var state_31215__$1 = (function (){var statearr_31229 = state_31215;
(statearr_31229[(9)] = inst_31199__$1);

return statearr_31229;
})();
if(cljs.core.truth_(inst_31201)){
var statearr_31231_33168 = state_31215__$1;
(statearr_31231_33168[(1)] = (14));

} else {
var statearr_31233_33169 = state_31215__$1;
(statearr_31233_33169[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var state_31215__$1 = state_31215;
var statearr_31234_33170 = state_31215__$1;
(statearr_31234_33170[(2)] = null);

(statearr_31234_33170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (17))){
var inst_31207 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31237 = state_31215;
(statearr_31237[(10)] = inst_31207);

return statearr_31237;
})();
var statearr_31238_33171 = state_31215__$1;
(statearr_31238_33171[(2)] = null);

(statearr_31238_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (3))){
var inst_31212 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31215__$1,inst_31212);
} else {
if((state_val_31216 === (12))){
var _ = (function (){var statearr_31239 = state_31215;
(statearr_31239[(4)] = cljs.core.rest((state_31215[(4)])));

return statearr_31239;
})();
var state_31215__$1 = state_31215;
var ex31236 = (state_31215__$1[(2)]);
var statearr_31241_33176 = state_31215__$1;
(statearr_31241_33176[(5)] = ex31236);


if((ex31236 instanceof Object)){
var statearr_31242_33177 = state_31215__$1;
(statearr_31242_33177[(1)] = (11));

(statearr_31242_33177[(5)] = null);

} else {
throw ex31236;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var inst_31170 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31171 = cnt;
var inst_31172 = (0);
var state_31215__$1 = (function (){var statearr_31243 = state_31215;
(statearr_31243[(7)] = inst_31171);

(statearr_31243[(8)] = inst_31172);

(statearr_31243[(11)] = inst_31170);

return statearr_31243;
})();
var statearr_31244_33183 = state_31215__$1;
(statearr_31244_33183[(2)] = null);

(statearr_31244_33183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (11))){
var inst_31177 = (state_31215[(2)]);
var inst_31178 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31215__$1 = (function (){var statearr_31245 = state_31215;
(statearr_31245[(12)] = inst_31177);

return statearr_31245;
})();
var statearr_31246_33184 = state_31215__$1;
(statearr_31246_33184[(2)] = inst_31178);

(statearr_31246_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var inst_31172 = (state_31215[(8)]);
var _ = (function (){var statearr_31251 = state_31215;
(statearr_31251[(4)] = cljs.core.cons((12),(state_31215[(4)])));

return statearr_31251;
})();
var inst_31185 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31172) : chs__$1.call(null,inst_31172));
var inst_31186 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31172) : done.call(null,inst_31172));
var inst_31187 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31185,inst_31186);
var ___$1 = (function (){var statearr_31257 = state_31215;
(statearr_31257[(4)] = cljs.core.rest((state_31215[(4)])));

return statearr_31257;
})();
var state_31215__$1 = state_31215;
var statearr_31262_33187 = state_31215__$1;
(statearr_31262_33187[(2)] = inst_31187);

(statearr_31262_33187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var inst_31197 = (state_31215[(2)]);
var state_31215__$1 = (function (){var statearr_31263 = state_31215;
(statearr_31263[(13)] = inst_31197);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31215__$1,(13),dchan);
} else {
if((state_val_31216 === (14))){
var inst_31203 = cljs.core.async.close_BANG_(out);
var state_31215__$1 = state_31215;
var statearr_31264_33188 = state_31215__$1;
(statearr_31264_33188[(2)] = inst_31203);

(statearr_31264_33188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (16))){
var inst_31210 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31265_33189 = state_31215__$1;
(statearr_31265_33189[(2)] = inst_31210);

(statearr_31265_33189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31172 = (state_31215[(8)]);
var inst_31190 = (state_31215[(2)]);
var inst_31191 = (inst_31172 + (1));
var inst_31172__$1 = inst_31191;
var state_31215__$1 = (function (){var statearr_31266 = state_31215;
(statearr_31266[(8)] = inst_31172__$1);

(statearr_31266[(14)] = inst_31190);

return statearr_31266;
})();
var statearr_31268_33190 = state_31215__$1;
(statearr_31268_33190[(2)] = null);

(statearr_31268_33190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31195 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31270_33192 = state_31215__$1;
(statearr_31270_33192[(2)] = inst_31195);

(statearr_31270_33192[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31215){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31215);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31273){var ex__28969__auto__ = e31273;
var statearr_31274_33193 = state_31215;
(statearr_31274_33193[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31215[(4)]))){
var statearr_31275_33194 = state_31215;
(statearr_31275_33194[(1)] = cljs.core.first((state_31215[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33195 = state_31215;
state_31215 = G__33195;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31276 = f__29175__auto__();
(statearr_31276[(6)] = c__29174__auto___33162);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31286 = arguments.length;
switch (G__31286) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31318){
var state_val_31319 = (state_31318[(1)]);
if((state_val_31319 === (7))){
var inst_31297 = (state_31318[(7)]);
var inst_31298 = (state_31318[(8)]);
var inst_31297__$1 = (state_31318[(2)]);
var inst_31298__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31297__$1,(0),null);
var inst_31299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31297__$1,(1),null);
var inst_31300 = (inst_31298__$1 == null);
var state_31318__$1 = (function (){var statearr_31322 = state_31318;
(statearr_31322[(7)] = inst_31297__$1);

(statearr_31322[(9)] = inst_31299);

(statearr_31322[(8)] = inst_31298__$1);

return statearr_31322;
})();
if(cljs.core.truth_(inst_31300)){
var statearr_31323_33199 = state_31318__$1;
(statearr_31323_33199[(1)] = (8));

} else {
var statearr_31324_33200 = state_31318__$1;
(statearr_31324_33200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (1))){
var inst_31287 = cljs.core.vec(chs);
var inst_31288 = inst_31287;
var state_31318__$1 = (function (){var statearr_31325 = state_31318;
(statearr_31325[(10)] = inst_31288);

return statearr_31325;
})();
var statearr_31326_33201 = state_31318__$1;
(statearr_31326_33201[(2)] = null);

(statearr_31326_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (4))){
var inst_31288 = (state_31318[(10)]);
var state_31318__$1 = state_31318;
return cljs.core.async.ioc_alts_BANG_(state_31318__$1,(7),inst_31288);
} else {
if((state_val_31319 === (6))){
var inst_31314 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31328_33202 = state_31318__$1;
(statearr_31328_33202[(2)] = inst_31314);

(statearr_31328_33202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (3))){
var inst_31316 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31318__$1,inst_31316);
} else {
if((state_val_31319 === (2))){
var inst_31288 = (state_31318[(10)]);
var inst_31290 = cljs.core.count(inst_31288);
var inst_31291 = (inst_31290 > (0));
var state_31318__$1 = state_31318;
if(cljs.core.truth_(inst_31291)){
var statearr_31332_33204 = state_31318__$1;
(statearr_31332_33204[(1)] = (4));

} else {
var statearr_31333_33205 = state_31318__$1;
(statearr_31333_33205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (11))){
var inst_31288 = (state_31318[(10)]);
var inst_31307 = (state_31318[(2)]);
var tmp31330 = inst_31288;
var inst_31288__$1 = tmp31330;
var state_31318__$1 = (function (){var statearr_31334 = state_31318;
(statearr_31334[(10)] = inst_31288__$1);

(statearr_31334[(11)] = inst_31307);

return statearr_31334;
})();
var statearr_31335_33206 = state_31318__$1;
(statearr_31335_33206[(2)] = null);

(statearr_31335_33206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (9))){
var inst_31298 = (state_31318[(8)]);
var state_31318__$1 = state_31318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31318__$1,(11),out,inst_31298);
} else {
if((state_val_31319 === (5))){
var inst_31312 = cljs.core.async.close_BANG_(out);
var state_31318__$1 = state_31318;
var statearr_31337_33208 = state_31318__$1;
(statearr_31337_33208[(2)] = inst_31312);

(statearr_31337_33208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (10))){
var inst_31310 = (state_31318[(2)]);
var state_31318__$1 = state_31318;
var statearr_31338_33209 = state_31318__$1;
(statearr_31338_33209[(2)] = inst_31310);

(statearr_31338_33209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31319 === (8))){
var inst_31288 = (state_31318[(10)]);
var inst_31297 = (state_31318[(7)]);
var inst_31299 = (state_31318[(9)]);
var inst_31298 = (state_31318[(8)]);
var inst_31302 = (function (){var cs = inst_31288;
var vec__31293 = inst_31297;
var v = inst_31298;
var c = inst_31299;
return (function (p1__31284_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31284_SHARP_);
});
})();
var inst_31303 = cljs.core.filterv(inst_31302,inst_31288);
var inst_31288__$1 = inst_31303;
var state_31318__$1 = (function (){var statearr_31339 = state_31318;
(statearr_31339[(10)] = inst_31288__$1);

return statearr_31339;
})();
var statearr_31340_33210 = state_31318__$1;
(statearr_31340_33210[(2)] = null);

(statearr_31340_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31341[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31341[(1)] = (1));

return statearr_31341;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31318){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31318);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31342){var ex__28969__auto__ = e31342;
var statearr_31343_33211 = state_31318;
(statearr_31343_33211[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31318[(4)]))){
var statearr_31344_33212 = state_31318;
(statearr_31344_33212[(1)] = cljs.core.first((state_31318[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33214 = state_31318;
state_31318 = G__33214;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31346 = f__29175__auto__();
(statearr_31346[(6)] = c__29174__auto___33197);

return statearr_31346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31349 = arguments.length;
switch (G__31349) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31374){
var state_val_31375 = (state_31374[(1)]);
if((state_val_31375 === (7))){
var inst_31355 = (state_31374[(7)]);
var inst_31355__$1 = (state_31374[(2)]);
var inst_31356 = (inst_31355__$1 == null);
var inst_31357 = cljs.core.not(inst_31356);
var state_31374__$1 = (function (){var statearr_31376 = state_31374;
(statearr_31376[(7)] = inst_31355__$1);

return statearr_31376;
})();
if(inst_31357){
var statearr_31377_33226 = state_31374__$1;
(statearr_31377_33226[(1)] = (8));

} else {
var statearr_31378_33230 = state_31374__$1;
(statearr_31378_33230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (1))){
var inst_31350 = (0);
var state_31374__$1 = (function (){var statearr_31379 = state_31374;
(statearr_31379[(8)] = inst_31350);

return statearr_31379;
})();
var statearr_31380_33231 = state_31374__$1;
(statearr_31380_33231[(2)] = null);

(statearr_31380_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (4))){
var state_31374__$1 = state_31374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31374__$1,(7),ch);
} else {
if((state_val_31375 === (6))){
var inst_31369 = (state_31374[(2)]);
var state_31374__$1 = state_31374;
var statearr_31381_33232 = state_31374__$1;
(statearr_31381_33232[(2)] = inst_31369);

(statearr_31381_33232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (3))){
var inst_31371 = (state_31374[(2)]);
var inst_31372 = cljs.core.async.close_BANG_(out);
var state_31374__$1 = (function (){var statearr_31382 = state_31374;
(statearr_31382[(9)] = inst_31371);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31374__$1,inst_31372);
} else {
if((state_val_31375 === (2))){
var inst_31350 = (state_31374[(8)]);
var inst_31352 = (inst_31350 < n);
var state_31374__$1 = state_31374;
if(cljs.core.truth_(inst_31352)){
var statearr_31383_33235 = state_31374__$1;
(statearr_31383_33235[(1)] = (4));

} else {
var statearr_31384_33236 = state_31374__$1;
(statearr_31384_33236[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (11))){
var inst_31350 = (state_31374[(8)]);
var inst_31360 = (state_31374[(2)]);
var inst_31362 = (inst_31350 + (1));
var inst_31350__$1 = inst_31362;
var state_31374__$1 = (function (){var statearr_31385 = state_31374;
(statearr_31385[(10)] = inst_31360);

(statearr_31385[(8)] = inst_31350__$1);

return statearr_31385;
})();
var statearr_31386_33243 = state_31374__$1;
(statearr_31386_33243[(2)] = null);

(statearr_31386_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (9))){
var state_31374__$1 = state_31374;
var statearr_31387_33245 = state_31374__$1;
(statearr_31387_33245[(2)] = null);

(statearr_31387_33245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (5))){
var state_31374__$1 = state_31374;
var statearr_31389_33247 = state_31374__$1;
(statearr_31389_33247[(2)] = null);

(statearr_31389_33247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (10))){
var inst_31366 = (state_31374[(2)]);
var state_31374__$1 = state_31374;
var statearr_31390_33248 = state_31374__$1;
(statearr_31390_33248[(2)] = inst_31366);

(statearr_31390_33248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31375 === (8))){
var inst_31355 = (state_31374[(7)]);
var state_31374__$1 = state_31374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31374__$1,(11),out,inst_31355);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31391[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31391[(1)] = (1));

return statearr_31391;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31374){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31374);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31392){var ex__28969__auto__ = e31392;
var statearr_31393_33252 = state_31374;
(statearr_31393_33252[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31374[(4)]))){
var statearr_31394_33253 = state_31374;
(statearr_31394_33253[(1)] = cljs.core.first((state_31374[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33254 = state_31374;
state_31374 = G__33254;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31395 = f__29175__auto__();
(statearr_31395[(6)] = c__29174__auto___33220);

return statearr_31395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31397 = (function (f,ch,meta31398){
this.f = f;
this.ch = ch;
this.meta31398 = meta31398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31399,meta31398__$1){
var self__ = this;
var _31399__$1 = this;
return (new cljs.core.async.t_cljs$core$async31397(self__.f,self__.ch,meta31398__$1));
}));

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31399){
var self__ = this;
var _31399__$1 = this;
return self__.meta31398;
}));

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31412 = (function (f,ch,meta31398,_,fn1,meta31413){
this.f = f;
this.ch = ch;
this.meta31398 = meta31398;
this._ = _;
this.fn1 = fn1;
this.meta31413 = meta31413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31414,meta31413__$1){
var self__ = this;
var _31414__$1 = this;
return (new cljs.core.async.t_cljs$core$async31412(self__.f,self__.ch,self__.meta31398,self__._,self__.fn1,meta31413__$1));
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31414){
var self__ = this;
var _31414__$1 = this;
return self__.meta31413;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31396_SHARP_){
var G__31418 = (((p1__31396_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31396_SHARP_) : self__.f.call(null,p1__31396_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31418) : f1.call(null,G__31418));
});
}));

(cljs.core.async.t_cljs$core$async31412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31398","meta31398",1951616065,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31397","cljs.core.async/t_cljs$core$async31397",1129574309,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31413","meta31413",-576419831,null)], null);
}));

(cljs.core.async.t_cljs$core$async31412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31412");

(cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31412.
 */
cljs.core.async.__GT_t_cljs$core$async31412 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31412(f__$1,ch__$1,meta31398__$1,___$2,fn1__$1,meta31413){
return (new cljs.core.async.t_cljs$core$async31412(f__$1,ch__$1,meta31398__$1,___$2,fn1__$1,meta31413));
});

}

return (new cljs.core.async.t_cljs$core$async31412(self__.f,self__.ch,self__.meta31398,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31424 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31424) : self__.f.call(null,G__31424));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31398","meta31398",1951616065,null)], null);
}));

(cljs.core.async.t_cljs$core$async31397.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31397");

(cljs.core.async.t_cljs$core$async31397.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31397");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31397.
 */
cljs.core.async.__GT_t_cljs$core$async31397 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31397(f__$1,ch__$1,meta31398){
return (new cljs.core.async.t_cljs$core$async31397(f__$1,ch__$1,meta31398));
});

}

return (new cljs.core.async.t_cljs$core$async31397(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31432 = (function (f,ch,meta31433){
this.f = f;
this.ch = ch;
this.meta31433 = meta31433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31434,meta31433__$1){
var self__ = this;
var _31434__$1 = this;
return (new cljs.core.async.t_cljs$core$async31432(self__.f,self__.ch,meta31433__$1));
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31434){
var self__ = this;
var _31434__$1 = this;
return self__.meta31433;
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31433","meta31433",-295340531,null)], null);
}));

(cljs.core.async.t_cljs$core$async31432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31432");

(cljs.core.async.t_cljs$core$async31432.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31432.
 */
cljs.core.async.__GT_t_cljs$core$async31432 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31432(f__$1,ch__$1,meta31433){
return (new cljs.core.async.t_cljs$core$async31432(f__$1,ch__$1,meta31433));
});

}

return (new cljs.core.async.t_cljs$core$async31432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31472 = (function (p,ch,meta31473){
this.p = p;
this.ch = ch;
this.meta31473 = meta31473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31474,meta31473__$1){
var self__ = this;
var _31474__$1 = this;
return (new cljs.core.async.t_cljs$core$async31472(self__.p,self__.ch,meta31473__$1));
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31474){
var self__ = this;
var _31474__$1 = this;
return self__.meta31473;
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31473","meta31473",-962739630,null)], null);
}));

(cljs.core.async.t_cljs$core$async31472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31472");

(cljs.core.async.t_cljs$core$async31472.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31472.
 */
cljs.core.async.__GT_t_cljs$core$async31472 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31472(p__$1,ch__$1,meta31473){
return (new cljs.core.async.t_cljs$core$async31472(p__$1,ch__$1,meta31473));
});

}

return (new cljs.core.async.t_cljs$core$async31472(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31492 = arguments.length;
switch (G__31492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31519){
var state_val_31520 = (state_31519[(1)]);
if((state_val_31520 === (7))){
var inst_31511 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31534_33305 = state_31519__$1;
(statearr_31534_33305[(2)] = inst_31511);

(statearr_31534_33305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (1))){
var state_31519__$1 = state_31519;
var statearr_31537_33306 = state_31519__$1;
(statearr_31537_33306[(2)] = null);

(statearr_31537_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (4))){
var inst_31497 = (state_31519[(7)]);
var inst_31497__$1 = (state_31519[(2)]);
var inst_31498 = (inst_31497__$1 == null);
var state_31519__$1 = (function (){var statearr_31542 = state_31519;
(statearr_31542[(7)] = inst_31497__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31498)){
var statearr_31543_33308 = state_31519__$1;
(statearr_31543_33308[(1)] = (5));

} else {
var statearr_31544_33309 = state_31519__$1;
(statearr_31544_33309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (6))){
var inst_31497 = (state_31519[(7)]);
var inst_31502 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31497) : p.call(null,inst_31497));
var state_31519__$1 = state_31519;
if(cljs.core.truth_(inst_31502)){
var statearr_31545_33310 = state_31519__$1;
(statearr_31545_33310[(1)] = (8));

} else {
var statearr_31546_33311 = state_31519__$1;
(statearr_31546_33311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (3))){
var inst_31513 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31519__$1,inst_31513);
} else {
if((state_val_31520 === (2))){
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31519__$1,(4),ch);
} else {
if((state_val_31520 === (11))){
var inst_31505 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31547_33312 = state_31519__$1;
(statearr_31547_33312[(2)] = inst_31505);

(statearr_31547_33312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (9))){
var state_31519__$1 = state_31519;
var statearr_31548_33313 = state_31519__$1;
(statearr_31548_33313[(2)] = null);

(statearr_31548_33313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (5))){
var inst_31500 = cljs.core.async.close_BANG_(out);
var state_31519__$1 = state_31519;
var statearr_31549_33314 = state_31519__$1;
(statearr_31549_33314[(2)] = inst_31500);

(statearr_31549_33314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (10))){
var inst_31508 = (state_31519[(2)]);
var state_31519__$1 = (function (){var statearr_31550 = state_31519;
(statearr_31550[(8)] = inst_31508);

return statearr_31550;
})();
var statearr_31551_33316 = state_31519__$1;
(statearr_31551_33316[(2)] = null);

(statearr_31551_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (8))){
var inst_31497 = (state_31519[(7)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31519__$1,(11),out,inst_31497);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31552 = [null,null,null,null,null,null,null,null,null];
(statearr_31552[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31552[(1)] = (1));

return statearr_31552;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31519){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31519);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31555){var ex__28969__auto__ = e31555;
var statearr_31557_33323 = state_31519;
(statearr_31557_33323[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31519[(4)]))){
var statearr_31558_33324 = state_31519;
(statearr_31558_33324[(1)] = cljs.core.first((state_31519[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33326 = state_31519;
state_31519 = G__33326;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31559 = f__29175__auto__();
(statearr_31559[(6)] = c__29174__auto___33304);

return statearr_31559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31566 = arguments.length;
switch (G__31566) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29174__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31634){
var state_val_31635 = (state_31634[(1)]);
if((state_val_31635 === (7))){
var inst_31630 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31648_33329 = state_31634__$1;
(statearr_31648_33329[(2)] = inst_31630);

(statearr_31648_33329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (20))){
var inst_31600 = (state_31634[(7)]);
var inst_31611 = (state_31634[(2)]);
var inst_31612 = cljs.core.next(inst_31600);
var inst_31586 = inst_31612;
var inst_31587 = null;
var inst_31588 = (0);
var inst_31589 = (0);
var state_31634__$1 = (function (){var statearr_31649 = state_31634;
(statearr_31649[(8)] = inst_31586);

(statearr_31649[(9)] = inst_31587);

(statearr_31649[(10)] = inst_31611);

(statearr_31649[(11)] = inst_31588);

(statearr_31649[(12)] = inst_31589);

return statearr_31649;
})();
var statearr_31650_33330 = state_31634__$1;
(statearr_31650_33330[(2)] = null);

(statearr_31650_33330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (1))){
var state_31634__$1 = state_31634;
var statearr_31651_33331 = state_31634__$1;
(statearr_31651_33331[(2)] = null);

(statearr_31651_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (4))){
var inst_31575 = (state_31634[(13)]);
var inst_31575__$1 = (state_31634[(2)]);
var inst_31576 = (inst_31575__$1 == null);
var state_31634__$1 = (function (){var statearr_31654 = state_31634;
(statearr_31654[(13)] = inst_31575__$1);

return statearr_31654;
})();
if(cljs.core.truth_(inst_31576)){
var statearr_31656_33332 = state_31634__$1;
(statearr_31656_33332[(1)] = (5));

} else {
var statearr_31657_33333 = state_31634__$1;
(statearr_31657_33333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (15))){
var state_31634__$1 = state_31634;
var statearr_31661_33334 = state_31634__$1;
(statearr_31661_33334[(2)] = null);

(statearr_31661_33334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (21))){
var state_31634__$1 = state_31634;
var statearr_31662_33335 = state_31634__$1;
(statearr_31662_33335[(2)] = null);

(statearr_31662_33335[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (13))){
var inst_31586 = (state_31634[(8)]);
var inst_31587 = (state_31634[(9)]);
var inst_31588 = (state_31634[(11)]);
var inst_31589 = (state_31634[(12)]);
var inst_31596 = (state_31634[(2)]);
var inst_31597 = (inst_31589 + (1));
var tmp31658 = inst_31586;
var tmp31659 = inst_31587;
var tmp31660 = inst_31588;
var inst_31586__$1 = tmp31658;
var inst_31587__$1 = tmp31659;
var inst_31588__$1 = tmp31660;
var inst_31589__$1 = inst_31597;
var state_31634__$1 = (function (){var statearr_31663 = state_31634;
(statearr_31663[(8)] = inst_31586__$1);

(statearr_31663[(9)] = inst_31587__$1);

(statearr_31663[(14)] = inst_31596);

(statearr_31663[(11)] = inst_31588__$1);

(statearr_31663[(12)] = inst_31589__$1);

return statearr_31663;
})();
var statearr_31667_33338 = state_31634__$1;
(statearr_31667_33338[(2)] = null);

(statearr_31667_33338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (22))){
var state_31634__$1 = state_31634;
var statearr_31671_33339 = state_31634__$1;
(statearr_31671_33339[(2)] = null);

(statearr_31671_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (6))){
var inst_31575 = (state_31634[(13)]);
var inst_31584 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31575) : f.call(null,inst_31575));
var inst_31585 = cljs.core.seq(inst_31584);
var inst_31586 = inst_31585;
var inst_31587 = null;
var inst_31588 = (0);
var inst_31589 = (0);
var state_31634__$1 = (function (){var statearr_31674 = state_31634;
(statearr_31674[(8)] = inst_31586);

(statearr_31674[(9)] = inst_31587);

(statearr_31674[(11)] = inst_31588);

(statearr_31674[(12)] = inst_31589);

return statearr_31674;
})();
var statearr_31675_33346 = state_31634__$1;
(statearr_31675_33346[(2)] = null);

(statearr_31675_33346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (17))){
var inst_31600 = (state_31634[(7)]);
var inst_31604 = cljs.core.chunk_first(inst_31600);
var inst_31605 = cljs.core.chunk_rest(inst_31600);
var inst_31606 = cljs.core.count(inst_31604);
var inst_31586 = inst_31605;
var inst_31587 = inst_31604;
var inst_31588 = inst_31606;
var inst_31589 = (0);
var state_31634__$1 = (function (){var statearr_31679 = state_31634;
(statearr_31679[(8)] = inst_31586);

(statearr_31679[(9)] = inst_31587);

(statearr_31679[(11)] = inst_31588);

(statearr_31679[(12)] = inst_31589);

return statearr_31679;
})();
var statearr_31682_33347 = state_31634__$1;
(statearr_31682_33347[(2)] = null);

(statearr_31682_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (3))){
var inst_31632 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31634__$1,inst_31632);
} else {
if((state_val_31635 === (12))){
var inst_31620 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31688_33348 = state_31634__$1;
(statearr_31688_33348[(2)] = inst_31620);

(statearr_31688_33348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (2))){
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31634__$1,(4),in$);
} else {
if((state_val_31635 === (23))){
var inst_31628 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31692_33349 = state_31634__$1;
(statearr_31692_33349[(2)] = inst_31628);

(statearr_31692_33349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (19))){
var inst_31615 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31693_33350 = state_31634__$1;
(statearr_31693_33350[(2)] = inst_31615);

(statearr_31693_33350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (11))){
var inst_31586 = (state_31634[(8)]);
var inst_31600 = (state_31634[(7)]);
var inst_31600__$1 = cljs.core.seq(inst_31586);
var state_31634__$1 = (function (){var statearr_31694 = state_31634;
(statearr_31694[(7)] = inst_31600__$1);

return statearr_31694;
})();
if(inst_31600__$1){
var statearr_31695_33351 = state_31634__$1;
(statearr_31695_33351[(1)] = (14));

} else {
var statearr_31697_33352 = state_31634__$1;
(statearr_31697_33352[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (9))){
var inst_31622 = (state_31634[(2)]);
var inst_31623 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31634__$1 = (function (){var statearr_31698 = state_31634;
(statearr_31698[(15)] = inst_31622);

return statearr_31698;
})();
if(cljs.core.truth_(inst_31623)){
var statearr_31701_33353 = state_31634__$1;
(statearr_31701_33353[(1)] = (21));

} else {
var statearr_31703_33354 = state_31634__$1;
(statearr_31703_33354[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (5))){
var inst_31578 = cljs.core.async.close_BANG_(out);
var state_31634__$1 = state_31634;
var statearr_31704_33355 = state_31634__$1;
(statearr_31704_33355[(2)] = inst_31578);

(statearr_31704_33355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (14))){
var inst_31600 = (state_31634[(7)]);
var inst_31602 = cljs.core.chunked_seq_QMARK_(inst_31600);
var state_31634__$1 = state_31634;
if(inst_31602){
var statearr_31705_33356 = state_31634__$1;
(statearr_31705_33356[(1)] = (17));

} else {
var statearr_31706_33357 = state_31634__$1;
(statearr_31706_33357[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (16))){
var inst_31618 = (state_31634[(2)]);
var state_31634__$1 = state_31634;
var statearr_31707_33358 = state_31634__$1;
(statearr_31707_33358[(2)] = inst_31618);

(statearr_31707_33358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31635 === (10))){
var inst_31587 = (state_31634[(9)]);
var inst_31589 = (state_31634[(12)]);
var inst_31594 = cljs.core._nth(inst_31587,inst_31589);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31634__$1,(13),out,inst_31594);
} else {
if((state_val_31635 === (18))){
var inst_31600 = (state_31634[(7)]);
var inst_31609 = cljs.core.first(inst_31600);
var state_31634__$1 = state_31634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31634__$1,(20),out,inst_31609);
} else {
if((state_val_31635 === (8))){
var inst_31588 = (state_31634[(11)]);
var inst_31589 = (state_31634[(12)]);
var inst_31591 = (inst_31589 < inst_31588);
var inst_31592 = inst_31591;
var state_31634__$1 = state_31634;
if(cljs.core.truth_(inst_31592)){
var statearr_31717_33359 = state_31634__$1;
(statearr_31717_33359[(1)] = (10));

} else {
var statearr_31718_33360 = state_31634__$1;
(statearr_31718_33360[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____0 = (function (){
var statearr_31723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31723[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__);

(statearr_31723[(1)] = (1));

return statearr_31723;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____1 = (function (state_31634){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31634);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31724){var ex__28969__auto__ = e31724;
var statearr_31725_33363 = state_31634;
(statearr_31725_33363[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31634[(4)]))){
var statearr_31726_33364 = state_31634;
(statearr_31726_33364[(1)] = cljs.core.first((state_31634[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_31634;
state_31634 = G__33365;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__ = function(state_31634){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____1.call(this,state_31634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28966__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31727 = f__29175__auto__();
(statearr_31727[(6)] = c__29174__auto__);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));

return c__29174__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31729 = arguments.length;
switch (G__31729) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31733 = arguments.length;
switch (G__31733) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31743 = arguments.length;
switch (G__31743) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31775){
var state_val_31776 = (state_31775[(1)]);
if((state_val_31776 === (7))){
var inst_31770 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31778_33372 = state_31775__$1;
(statearr_31778_33372[(2)] = inst_31770);

(statearr_31778_33372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (1))){
var inst_31748 = null;
var state_31775__$1 = (function (){var statearr_31779 = state_31775;
(statearr_31779[(7)] = inst_31748);

return statearr_31779;
})();
var statearr_31780_33373 = state_31775__$1;
(statearr_31780_33373[(2)] = null);

(statearr_31780_33373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (4))){
var inst_31751 = (state_31775[(8)]);
var inst_31751__$1 = (state_31775[(2)]);
var inst_31754 = (inst_31751__$1 == null);
var inst_31755 = cljs.core.not(inst_31754);
var state_31775__$1 = (function (){var statearr_31781 = state_31775;
(statearr_31781[(8)] = inst_31751__$1);

return statearr_31781;
})();
if(inst_31755){
var statearr_31782_33374 = state_31775__$1;
(statearr_31782_33374[(1)] = (5));

} else {
var statearr_31783_33375 = state_31775__$1;
(statearr_31783_33375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (6))){
var state_31775__$1 = state_31775;
var statearr_31785_33376 = state_31775__$1;
(statearr_31785_33376[(2)] = null);

(statearr_31785_33376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (3))){
var inst_31772 = (state_31775[(2)]);
var inst_31773 = cljs.core.async.close_BANG_(out);
var state_31775__$1 = (function (){var statearr_31787 = state_31775;
(statearr_31787[(9)] = inst_31772);

return statearr_31787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31775__$1,inst_31773);
} else {
if((state_val_31776 === (2))){
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31775__$1,(4),ch);
} else {
if((state_val_31776 === (11))){
var inst_31751 = (state_31775[(8)]);
var inst_31764 = (state_31775[(2)]);
var inst_31748 = inst_31751;
var state_31775__$1 = (function (){var statearr_31790 = state_31775;
(statearr_31790[(10)] = inst_31764);

(statearr_31790[(7)] = inst_31748);

return statearr_31790;
})();
var statearr_31791_33382 = state_31775__$1;
(statearr_31791_33382[(2)] = null);

(statearr_31791_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (9))){
var inst_31751 = (state_31775[(8)]);
var state_31775__$1 = state_31775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31775__$1,(11),out,inst_31751);
} else {
if((state_val_31776 === (5))){
var inst_31751 = (state_31775[(8)]);
var inst_31748 = (state_31775[(7)]);
var inst_31757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31751,inst_31748);
var state_31775__$1 = state_31775;
if(inst_31757){
var statearr_31796_33383 = state_31775__$1;
(statearr_31796_33383[(1)] = (8));

} else {
var statearr_31797_33384 = state_31775__$1;
(statearr_31797_33384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (10))){
var inst_31767 = (state_31775[(2)]);
var state_31775__$1 = state_31775;
var statearr_31801_33388 = state_31775__$1;
(statearr_31801_33388[(2)] = inst_31767);

(statearr_31801_33388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31776 === (8))){
var inst_31748 = (state_31775[(7)]);
var tmp31795 = inst_31748;
var inst_31748__$1 = tmp31795;
var state_31775__$1 = (function (){var statearr_31802 = state_31775;
(statearr_31802[(7)] = inst_31748__$1);

return statearr_31802;
})();
var statearr_31804_33389 = state_31775__$1;
(statearr_31804_33389[(2)] = null);

(statearr_31804_33389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31775){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31775);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31809){var ex__28969__auto__ = e31809;
var statearr_31810_33393 = state_31775;
(statearr_31810_33393[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31775[(4)]))){
var statearr_31811_33394 = state_31775;
(statearr_31811_33394[(1)] = cljs.core.first((state_31775[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33395 = state_31775;
state_31775 = G__33395;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31812 = f__29175__auto__();
(statearr_31812[(6)] = c__29174__auto___33371);

return statearr_31812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31818 = arguments.length;
switch (G__31818) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31856){
var state_val_31857 = (state_31856[(1)]);
if((state_val_31857 === (7))){
var inst_31852 = (state_31856[(2)]);
var state_31856__$1 = state_31856;
var statearr_31860_33408 = state_31856__$1;
(statearr_31860_33408[(2)] = inst_31852);

(statearr_31860_33408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (1))){
var inst_31819 = (new Array(n));
var inst_31820 = inst_31819;
var inst_31821 = (0);
var state_31856__$1 = (function (){var statearr_31867 = state_31856;
(statearr_31867[(7)] = inst_31820);

(statearr_31867[(8)] = inst_31821);

return statearr_31867;
})();
var statearr_31868_33411 = state_31856__$1;
(statearr_31868_33411[(2)] = null);

(statearr_31868_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (4))){
var inst_31824 = (state_31856[(9)]);
var inst_31824__$1 = (state_31856[(2)]);
var inst_31825 = (inst_31824__$1 == null);
var inst_31826 = cljs.core.not(inst_31825);
var state_31856__$1 = (function (){var statearr_31869 = state_31856;
(statearr_31869[(9)] = inst_31824__$1);

return statearr_31869;
})();
if(inst_31826){
var statearr_31871_33412 = state_31856__$1;
(statearr_31871_33412[(1)] = (5));

} else {
var statearr_31872_33413 = state_31856__$1;
(statearr_31872_33413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (15))){
var inst_31846 = (state_31856[(2)]);
var state_31856__$1 = state_31856;
var statearr_31874_33417 = state_31856__$1;
(statearr_31874_33417[(2)] = inst_31846);

(statearr_31874_33417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (13))){
var state_31856__$1 = state_31856;
var statearr_31875_33420 = state_31856__$1;
(statearr_31875_33420[(2)] = null);

(statearr_31875_33420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (6))){
var inst_31821 = (state_31856[(8)]);
var inst_31842 = (inst_31821 > (0));
var state_31856__$1 = state_31856;
if(cljs.core.truth_(inst_31842)){
var statearr_31878_33422 = state_31856__$1;
(statearr_31878_33422[(1)] = (12));

} else {
var statearr_31879_33424 = state_31856__$1;
(statearr_31879_33424[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (3))){
var inst_31854 = (state_31856[(2)]);
var state_31856__$1 = state_31856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31856__$1,inst_31854);
} else {
if((state_val_31857 === (12))){
var inst_31820 = (state_31856[(7)]);
var inst_31844 = cljs.core.vec(inst_31820);
var state_31856__$1 = state_31856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31856__$1,(15),out,inst_31844);
} else {
if((state_val_31857 === (2))){
var state_31856__$1 = state_31856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31856__$1,(4),ch);
} else {
if((state_val_31857 === (11))){
var inst_31836 = (state_31856[(2)]);
var inst_31837 = (new Array(n));
var inst_31820 = inst_31837;
var inst_31821 = (0);
var state_31856__$1 = (function (){var statearr_31883 = state_31856;
(statearr_31883[(7)] = inst_31820);

(statearr_31883[(10)] = inst_31836);

(statearr_31883[(8)] = inst_31821);

return statearr_31883;
})();
var statearr_31885_33430 = state_31856__$1;
(statearr_31885_33430[(2)] = null);

(statearr_31885_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (9))){
var inst_31820 = (state_31856[(7)]);
var inst_31834 = cljs.core.vec(inst_31820);
var state_31856__$1 = state_31856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31856__$1,(11),out,inst_31834);
} else {
if((state_val_31857 === (5))){
var inst_31829 = (state_31856[(11)]);
var inst_31824 = (state_31856[(9)]);
var inst_31820 = (state_31856[(7)]);
var inst_31821 = (state_31856[(8)]);
var inst_31828 = (inst_31820[inst_31821] = inst_31824);
var inst_31829__$1 = (inst_31821 + (1));
var inst_31830 = (inst_31829__$1 < n);
var state_31856__$1 = (function (){var statearr_31891 = state_31856;
(statearr_31891[(12)] = inst_31828);

(statearr_31891[(11)] = inst_31829__$1);

return statearr_31891;
})();
if(cljs.core.truth_(inst_31830)){
var statearr_31893_33435 = state_31856__$1;
(statearr_31893_33435[(1)] = (8));

} else {
var statearr_31895_33436 = state_31856__$1;
(statearr_31895_33436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (14))){
var inst_31849 = (state_31856[(2)]);
var inst_31850 = cljs.core.async.close_BANG_(out);
var state_31856__$1 = (function (){var statearr_31901 = state_31856;
(statearr_31901[(13)] = inst_31849);

return statearr_31901;
})();
var statearr_31902_33440 = state_31856__$1;
(statearr_31902_33440[(2)] = inst_31850);

(statearr_31902_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (10))){
var inst_31840 = (state_31856[(2)]);
var state_31856__$1 = state_31856;
var statearr_31903_33442 = state_31856__$1;
(statearr_31903_33442[(2)] = inst_31840);

(statearr_31903_33442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31857 === (8))){
var inst_31829 = (state_31856[(11)]);
var inst_31820 = (state_31856[(7)]);
var tmp31898 = inst_31820;
var inst_31820__$1 = tmp31898;
var inst_31821 = inst_31829;
var state_31856__$1 = (function (){var statearr_31904 = state_31856;
(statearr_31904[(7)] = inst_31820__$1);

(statearr_31904[(8)] = inst_31821);

return statearr_31904;
})();
var statearr_31908_33446 = state_31856__$1;
(statearr_31908_33446[(2)] = null);

(statearr_31908_33446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_31909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31909[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_31909[(1)] = (1));

return statearr_31909;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31856){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31856);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e31910){var ex__28969__auto__ = e31910;
var statearr_31911_33449 = state_31856;
(statearr_31911_33449[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31856[(4)]))){
var statearr_31912_33450 = state_31856;
(statearr_31912_33450[(1)] = cljs.core.first((state_31856[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33452 = state_31856;
state_31856 = G__33452;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_31925 = f__29175__auto__();
(statearr_31925[(6)] = c__29174__auto___33407);

return statearr_31925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31934 = arguments.length;
switch (G__31934) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29174__auto___33457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29175__auto__ = (function (){var switch__28965__auto__ = (function (state_31988){
var state_val_31989 = (state_31988[(1)]);
if((state_val_31989 === (7))){
var inst_31984 = (state_31988[(2)]);
var state_31988__$1 = state_31988;
var statearr_31992_33460 = state_31988__$1;
(statearr_31992_33460[(2)] = inst_31984);

(statearr_31992_33460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (1))){
var inst_31936 = [];
var inst_31938 = inst_31936;
var inst_31939 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31988__$1 = (function (){var statearr_31995 = state_31988;
(statearr_31995[(7)] = inst_31939);

(statearr_31995[(8)] = inst_31938);

return statearr_31995;
})();
var statearr_31997_33463 = state_31988__$1;
(statearr_31997_33463[(2)] = null);

(statearr_31997_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (4))){
var inst_31945 = (state_31988[(9)]);
var inst_31945__$1 = (state_31988[(2)]);
var inst_31946 = (inst_31945__$1 == null);
var inst_31947 = cljs.core.not(inst_31946);
var state_31988__$1 = (function (){var statearr_32002 = state_31988;
(statearr_32002[(9)] = inst_31945__$1);

return statearr_32002;
})();
if(inst_31947){
var statearr_32003_33466 = state_31988__$1;
(statearr_32003_33466[(1)] = (5));

} else {
var statearr_32004_33469 = state_31988__$1;
(statearr_32004_33469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (15))){
var inst_31938 = (state_31988[(8)]);
var inst_31976 = cljs.core.vec(inst_31938);
var state_31988__$1 = state_31988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31988__$1,(18),out,inst_31976);
} else {
if((state_val_31989 === (13))){
var inst_31971 = (state_31988[(2)]);
var state_31988__$1 = state_31988;
var statearr_32007_33471 = state_31988__$1;
(statearr_32007_33471[(2)] = inst_31971);

(statearr_32007_33471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (6))){
var inst_31938 = (state_31988[(8)]);
var inst_31973 = inst_31938.length;
var inst_31974 = (inst_31973 > (0));
var state_31988__$1 = state_31988;
if(cljs.core.truth_(inst_31974)){
var statearr_32008_33473 = state_31988__$1;
(statearr_32008_33473[(1)] = (15));

} else {
var statearr_32009_33474 = state_31988__$1;
(statearr_32009_33474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (17))){
var inst_31981 = (state_31988[(2)]);
var inst_31982 = cljs.core.async.close_BANG_(out);
var state_31988__$1 = (function (){var statearr_32012 = state_31988;
(statearr_32012[(10)] = inst_31981);

return statearr_32012;
})();
var statearr_32013_33477 = state_31988__$1;
(statearr_32013_33477[(2)] = inst_31982);

(statearr_32013_33477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (3))){
var inst_31986 = (state_31988[(2)]);
var state_31988__$1 = state_31988;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31988__$1,inst_31986);
} else {
if((state_val_31989 === (12))){
var inst_31938 = (state_31988[(8)]);
var inst_31964 = cljs.core.vec(inst_31938);
var state_31988__$1 = state_31988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31988__$1,(14),out,inst_31964);
} else {
if((state_val_31989 === (2))){
var state_31988__$1 = state_31988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31988__$1,(4),ch);
} else {
if((state_val_31989 === (11))){
var inst_31945 = (state_31988[(9)]);
var inst_31938 = (state_31988[(8)]);
var inst_31949 = (state_31988[(11)]);
var inst_31961 = inst_31938.push(inst_31945);
var tmp32015 = inst_31938;
var inst_31938__$1 = tmp32015;
var inst_31939 = inst_31949;
var state_31988__$1 = (function (){var statearr_32018 = state_31988;
(statearr_32018[(7)] = inst_31939);

(statearr_32018[(8)] = inst_31938__$1);

(statearr_32018[(12)] = inst_31961);

return statearr_32018;
})();
var statearr_32021_33483 = state_31988__$1;
(statearr_32021_33483[(2)] = null);

(statearr_32021_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (9))){
var inst_31939 = (state_31988[(7)]);
var inst_31957 = cljs.core.keyword_identical_QMARK_(inst_31939,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_31988__$1 = state_31988;
var statearr_32024_33486 = state_31988__$1;
(statearr_32024_33486[(2)] = inst_31957);

(statearr_32024_33486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (5))){
var inst_31945 = (state_31988[(9)]);
var inst_31939 = (state_31988[(7)]);
var inst_31949 = (state_31988[(11)]);
var inst_31951 = (state_31988[(13)]);
var inst_31949__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31945) : f.call(null,inst_31945));
var inst_31951__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31949__$1,inst_31939);
var state_31988__$1 = (function (){var statearr_32027 = state_31988;
(statearr_32027[(11)] = inst_31949__$1);

(statearr_32027[(13)] = inst_31951__$1);

return statearr_32027;
})();
if(inst_31951__$1){
var statearr_32029_33489 = state_31988__$1;
(statearr_32029_33489[(1)] = (8));

} else {
var statearr_32030_33490 = state_31988__$1;
(statearr_32030_33490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (14))){
var inst_31945 = (state_31988[(9)]);
var inst_31949 = (state_31988[(11)]);
var inst_31966 = (state_31988[(2)]);
var inst_31967 = [];
var inst_31968 = inst_31967.push(inst_31945);
var inst_31938 = inst_31967;
var inst_31939 = inst_31949;
var state_31988__$1 = (function (){var statearr_32033 = state_31988;
(statearr_32033[(14)] = inst_31966);

(statearr_32033[(7)] = inst_31939);

(statearr_32033[(8)] = inst_31938);

(statearr_32033[(15)] = inst_31968);

return statearr_32033;
})();
var statearr_32039_33496 = state_31988__$1;
(statearr_32039_33496[(2)] = null);

(statearr_32039_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (16))){
var state_31988__$1 = state_31988;
var statearr_32040_33499 = state_31988__$1;
(statearr_32040_33499[(2)] = null);

(statearr_32040_33499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (10))){
var inst_31959 = (state_31988[(2)]);
var state_31988__$1 = state_31988;
if(cljs.core.truth_(inst_31959)){
var statearr_32041_33500 = state_31988__$1;
(statearr_32041_33500[(1)] = (11));

} else {
var statearr_32042_33503 = state_31988__$1;
(statearr_32042_33503[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (18))){
var inst_31978 = (state_31988[(2)]);
var state_31988__$1 = state_31988;
var statearr_32043_33505 = state_31988__$1;
(statearr_32043_33505[(2)] = inst_31978);

(statearr_32043_33505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31989 === (8))){
var inst_31951 = (state_31988[(13)]);
var state_31988__$1 = state_31988;
var statearr_32044_33506 = state_31988__$1;
(statearr_32044_33506[(2)] = inst_31951);

(statearr_32044_33506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28966__auto__ = null;
var cljs$core$async$state_machine__28966__auto____0 = (function (){
var statearr_32049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32049[(0)] = cljs$core$async$state_machine__28966__auto__);

(statearr_32049[(1)] = (1));

return statearr_32049;
});
var cljs$core$async$state_machine__28966__auto____1 = (function (state_31988){
while(true){
var ret_value__28967__auto__ = (function (){try{while(true){
var result__28968__auto__ = switch__28965__auto__(state_31988);
if(cljs.core.keyword_identical_QMARK_(result__28968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28968__auto__;
}
break;
}
}catch (e32050){var ex__28969__auto__ = e32050;
var statearr_32051_33510 = state_31988;
(statearr_32051_33510[(2)] = ex__28969__auto__);


if(cljs.core.seq((state_31988[(4)]))){
var statearr_32052_33513 = state_31988;
(statearr_32052_33513[(1)] = cljs.core.first((state_31988[(4)])));

} else {
throw ex__28969__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_31988;
state_31988 = G__33516;
continue;
} else {
return ret_value__28967__auto__;
}
break;
}
});
cljs$core$async$state_machine__28966__auto__ = function(state_31988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28966__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28966__auto____1.call(this,state_31988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28966__auto____0;
cljs$core$async$state_machine__28966__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28966__auto____1;
return cljs$core$async$state_machine__28966__auto__;
})()
})();
var state__29176__auto__ = (function (){var statearr_32055 = f__29175__auto__();
(statearr_32055[(6)] = c__29174__auto___33457);

return statearr_32055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29176__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
