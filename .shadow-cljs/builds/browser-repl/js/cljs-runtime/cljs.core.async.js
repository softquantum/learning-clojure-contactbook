goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29694 = arguments.length;
switch (G__29694) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29701 = (function (f,blockable,meta29702){
this.f = f;
this.blockable = blockable;
this.meta29702 = meta29702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29703,meta29702__$1){
var self__ = this;
var _29703__$1 = this;
return (new cljs.core.async.t_cljs$core$async29701(self__.f,self__.blockable,meta29702__$1));
}));

(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29703){
var self__ = this;
var _29703__$1 = this;
return self__.meta29702;
}));

(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29702","meta29702",-133518323,null)], null);
}));

(cljs.core.async.t_cljs$core$async29701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29701");

(cljs.core.async.t_cljs$core$async29701.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29701.
 */
cljs.core.async.__GT_t_cljs$core$async29701 = (function cljs$core$async$__GT_t_cljs$core$async29701(f__$1,blockable__$1,meta29702){
return (new cljs.core.async.t_cljs$core$async29701(f__$1,blockable__$1,meta29702));
});

}

return (new cljs.core.async.t_cljs$core$async29701(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29717 = arguments.length;
switch (G__29717) {
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
var G__29721 = arguments.length;
switch (G__29721) {
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
var G__29754 = arguments.length;
switch (G__29754) {
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
var val_32517 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32517) : fn1.call(null,val_32517));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32517) : fn1.call(null,val_32517));
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
var G__29770 = arguments.length;
switch (G__29770) {
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
var n__4706__auto___32543 = n;
var x_32544 = (0);
while(true){
if((x_32544 < n__4706__auto___32543)){
(a[x_32544] = x_32544);

var G__32545 = (x_32544 + (1));
x_32544 = G__32545;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29775 = (function (flag,meta29776){
this.flag = flag;
this.meta29776 = meta29776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29777,meta29776__$1){
var self__ = this;
var _29777__$1 = this;
return (new cljs.core.async.t_cljs$core$async29775(self__.flag,meta29776__$1));
}));

(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29777){
var self__ = this;
var _29777__$1 = this;
return self__.meta29776;
}));

(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29776","meta29776",1594169312,null)], null);
}));

(cljs.core.async.t_cljs$core$async29775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29775");

(cljs.core.async.t_cljs$core$async29775.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29775.
 */
cljs.core.async.__GT_t_cljs$core$async29775 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29775(flag__$1,meta29776){
return (new cljs.core.async.t_cljs$core$async29775(flag__$1,meta29776));
});

}

return (new cljs.core.async.t_cljs$core$async29775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29799 = (function (flag,cb,meta29800){
this.flag = flag;
this.cb = cb;
this.meta29800 = meta29800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29801,meta29800__$1){
var self__ = this;
var _29801__$1 = this;
return (new cljs.core.async.t_cljs$core$async29799(self__.flag,self__.cb,meta29800__$1));
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29801){
var self__ = this;
var _29801__$1 = this;
return self__.meta29800;
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29800","meta29800",734077687,null)], null);
}));

(cljs.core.async.t_cljs$core$async29799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29799");

(cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29799.
 */
cljs.core.async.__GT_t_cljs$core$async29799 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29799(flag__$1,cb__$1,meta29800){
return (new cljs.core.async.t_cljs$core$async29799(flag__$1,cb__$1,meta29800));
});

}

return (new cljs.core.async.t_cljs$core$async29799(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29814_SHARP_){
var G__29824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29814_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29824) : fret.call(null,G__29824));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29815_SHARP_){
var G__29825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29815_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29825) : fret.call(null,G__29825));
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
var G__32551 = (i + (1));
i = G__32551;
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
var len__4829__auto___32552 = arguments.length;
var i__4830__auto___32555 = (0);
while(true){
if((i__4830__auto___32555 < len__4829__auto___32552)){
args__4835__auto__.push((arguments[i__4830__auto___32555]));

var G__32556 = (i__4830__auto___32555 + (1));
i__4830__auto___32555 = G__32556;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29843){
var map__29844 = p__29843;
var map__29844__$1 = cljs.core.__destructure_map(map__29844);
var opts = map__29844__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29829){
var G__29830 = cljs.core.first(seq29829);
var seq29829__$1 = cljs.core.next(seq29829);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29830,seq29829__$1);
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
var G__29852 = arguments.length;
switch (G__29852) {
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
var c__26215__auto___32561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_29912){
var state_val_29914 = (state_29912[(1)]);
if((state_val_29914 === (7))){
var inst_29905 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29919_32563 = state_29912__$1;
(statearr_29919_32563[(2)] = inst_29905);

(statearr_29919_32563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (1))){
var state_29912__$1 = state_29912;
var statearr_29920_32565 = state_29912__$1;
(statearr_29920_32565[(2)] = null);

(statearr_29920_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (4))){
var inst_29886 = (state_29912[(7)]);
var inst_29886__$1 = (state_29912[(2)]);
var inst_29889 = (inst_29886__$1 == null);
var state_29912__$1 = (function (){var statearr_29926 = state_29912;
(statearr_29926[(7)] = inst_29886__$1);

return statearr_29926;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29928_32566 = state_29912__$1;
(statearr_29928_32566[(1)] = (5));

} else {
var statearr_29930_32567 = state_29912__$1;
(statearr_29930_32567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (13))){
var state_29912__$1 = state_29912;
var statearr_29935_32568 = state_29912__$1;
(statearr_29935_32568[(2)] = null);

(statearr_29935_32568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (6))){
var inst_29886 = (state_29912[(7)]);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29912__$1,(11),to,inst_29886);
} else {
if((state_val_29914 === (3))){
var inst_29908 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29912__$1,inst_29908);
} else {
if((state_val_29914 === (12))){
var state_29912__$1 = state_29912;
var statearr_29937_32570 = state_29912__$1;
(statearr_29937_32570[(2)] = null);

(statearr_29937_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (2))){
var state_29912__$1 = state_29912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29912__$1,(4),from);
} else {
if((state_val_29914 === (11))){
var inst_29898 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
if(cljs.core.truth_(inst_29898)){
var statearr_29940_32571 = state_29912__$1;
(statearr_29940_32571[(1)] = (12));

} else {
var statearr_29941_32572 = state_29912__$1;
(statearr_29941_32572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (9))){
var state_29912__$1 = state_29912;
var statearr_29942_32574 = state_29912__$1;
(statearr_29942_32574[(2)] = null);

(statearr_29942_32574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (5))){
var state_29912__$1 = state_29912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29943_32576 = state_29912__$1;
(statearr_29943_32576[(1)] = (8));

} else {
var statearr_29944_32577 = state_29912__$1;
(statearr_29944_32577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (14))){
var inst_29903 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29946_32578 = state_29912__$1;
(statearr_29946_32578[(2)] = inst_29903);

(statearr_29946_32578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (10))){
var inst_29895 = (state_29912[(2)]);
var state_29912__$1 = state_29912;
var statearr_29958_32581 = state_29912__$1;
(statearr_29958_32581[(2)] = inst_29895);

(statearr_29958_32581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29914 === (8))){
var inst_29892 = cljs.core.async.close_BANG_(to);
var state_29912__$1 = state_29912;
var statearr_29963_32582 = state_29912__$1;
(statearr_29963_32582[(2)] = inst_29892);

(statearr_29963_32582[(1)] = (10));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_29964 = [null,null,null,null,null,null,null,null];
(statearr_29964[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_29964[(1)] = (1));

return statearr_29964;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_29912){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_29912);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e29965){var ex__26134__auto__ = e29965;
var statearr_29966_32583 = state_29912;
(statearr_29966_32583[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_29912[(4)]))){
var statearr_29967_32585 = state_29912;
(statearr_29967_32585[(1)] = cljs.core.first((state_29912[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32587 = state_29912;
state_29912 = G__32587;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_29912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_29912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_29971 = f__26216__auto__();
(statearr_29971[(6)] = c__26215__auto___32561);

return statearr_29971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var process = (function (p__29981){
var vec__29984 = p__29981;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29984,(1),null);
var job = vec__29984;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26215__auto___32588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_29994){
var state_val_29995 = (state_29994[(1)]);
if((state_val_29995 === (1))){
var state_29994__$1 = state_29994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29994__$1,(2),res,v);
} else {
if((state_val_29995 === (2))){
var inst_29990 = (state_29994[(2)]);
var inst_29992 = cljs.core.async.close_BANG_(res);
var state_29994__$1 = (function (){var statearr_30005 = state_29994;
(statearr_30005[(7)] = inst_29990);

return statearr_30005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29994__$1,inst_29992);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_30007 = [null,null,null,null,null,null,null,null];
(statearr_30007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_30007[(1)] = (1));

return statearr_30007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_29994){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_29994);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30009){var ex__26134__auto__ = e30009;
var statearr_30010_32589 = state_29994;
(statearr_30010_32589[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_29994[(4)]))){
var statearr_30011_32591 = state_29994;
(statearr_30011_32591[(1)] = cljs.core.first((state_29994[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32593 = state_29994;
state_29994 = G__32593;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_29994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_29994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30014 = f__26216__auto__();
(statearr_30014[(6)] = c__26215__auto___32588);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30016){
var vec__30017 = p__30016;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30017,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30017,(1),null);
var job = vec__30017;
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
var n__4706__auto___32594 = n;
var __32595 = (0);
while(true){
if((__32595 < n__4706__auto___32594)){
var G__30026_32596 = type;
var G__30026_32597__$1 = (((G__30026_32596 instanceof cljs.core.Keyword))?G__30026_32596.fqn:null);
switch (G__30026_32597__$1) {
case "compute":
var c__26215__auto___32599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32595,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = ((function (__32595,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function (state_30044){
var state_val_30045 = (state_30044[(1)]);
if((state_val_30045 === (1))){
var state_30044__$1 = state_30044;
var statearr_30049_32600 = state_30044__$1;
(statearr_30049_32600[(2)] = null);

(statearr_30049_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (2))){
var state_30044__$1 = state_30044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30044__$1,(4),jobs);
} else {
if((state_val_30045 === (3))){
var inst_30042 = (state_30044[(2)]);
var state_30044__$1 = state_30044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30044__$1,inst_30042);
} else {
if((state_val_30045 === (4))){
var inst_30034 = (state_30044[(2)]);
var inst_30035 = process(inst_30034);
var state_30044__$1 = state_30044;
if(cljs.core.truth_(inst_30035)){
var statearr_30052_32604 = state_30044__$1;
(statearr_30052_32604[(1)] = (5));

} else {
var statearr_30054_32605 = state_30044__$1;
(statearr_30054_32605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (5))){
var state_30044__$1 = state_30044;
var statearr_30055_32606 = state_30044__$1;
(statearr_30055_32606[(2)] = null);

(statearr_30055_32606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (6))){
var state_30044__$1 = state_30044;
var statearr_30059_32607 = state_30044__$1;
(statearr_30059_32607[(2)] = null);

(statearr_30059_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30045 === (7))){
var inst_30040 = (state_30044[(2)]);
var state_30044__$1 = state_30044;
var statearr_30060_32609 = state_30044__$1;
(statearr_30060_32609[(2)] = inst_30040);

(statearr_30060_32609[(1)] = (3));


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
});})(__32595,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
;
return ((function (__32595,switch__26130__auto__,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_30063 = [null,null,null,null,null,null,null];
(statearr_30063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_30063[(1)] = (1));

return statearr_30063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_30044){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30044);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30065){var ex__26134__auto__ = e30065;
var statearr_30066_32614 = state_30044;
(statearr_30066_32614[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30044[(4)]))){
var statearr_30067_32615 = state_30044;
(statearr_30067_32615[(1)] = cljs.core.first((state_30044[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32620 = state_30044;
state_30044 = G__32620;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_30044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_30044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
;})(__32595,switch__26130__auto__,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
})();
var state__26217__auto__ = (function (){var statearr_30070 = f__26216__auto__();
(statearr_30070[(6)] = c__26215__auto___32599);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});})(__32595,c__26215__auto___32599,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
);


break;
case "async":
var c__26215__auto___32623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32595,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = ((function (__32595,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function (state_30089){
var state_val_30091 = (state_30089[(1)]);
if((state_val_30091 === (1))){
var state_30089__$1 = state_30089;
var statearr_30096_32624 = state_30089__$1;
(statearr_30096_32624[(2)] = null);

(statearr_30096_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (2))){
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30089__$1,(4),jobs);
} else {
if((state_val_30091 === (3))){
var inst_30087 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30089__$1,inst_30087);
} else {
if((state_val_30091 === (4))){
var inst_30076 = (state_30089[(2)]);
var inst_30079 = async(inst_30076);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30079)){
var statearr_30107_32628 = state_30089__$1;
(statearr_30107_32628[(1)] = (5));

} else {
var statearr_30109_32629 = state_30089__$1;
(statearr_30109_32629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (5))){
var state_30089__$1 = state_30089;
var statearr_30118_32631 = state_30089__$1;
(statearr_30118_32631[(2)] = null);

(statearr_30118_32631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (6))){
var state_30089__$1 = state_30089;
var statearr_30125_32632 = state_30089__$1;
(statearr_30125_32632[(2)] = null);

(statearr_30125_32632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30091 === (7))){
var inst_30084 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30129_32634 = state_30089__$1;
(statearr_30129_32634[(2)] = inst_30084);

(statearr_30129_32634[(1)] = (3));


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
});})(__32595,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
;
return ((function (__32595,switch__26130__auto__,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_30135 = [null,null,null,null,null,null,null];
(statearr_30135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_30135[(1)] = (1));

return statearr_30135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_30089){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30089);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30136){var ex__26134__auto__ = e30136;
var statearr_30139_32637 = state_30089;
(statearr_30139_32637[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30089[(4)]))){
var statearr_30140_32639 = state_30089;
(statearr_30140_32639[(1)] = cljs.core.first((state_30089[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32640 = state_30089;
state_30089 = G__32640;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_30089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_30089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
;})(__32595,switch__26130__auto__,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
})();
var state__26217__auto__ = (function (){var statearr_30144 = f__26216__auto__();
(statearr_30144[(6)] = c__26215__auto___32623);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});})(__32595,c__26215__auto___32623,G__30026_32596,G__30026_32597__$1,n__4706__auto___32594,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30026_32597__$1)].join('')));

}

var G__32641 = (__32595 + (1));
__32595 = G__32641;
continue;
} else {
}
break;
}

var c__26215__auto___32642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30167){
var state_val_30168 = (state_30167[(1)]);
if((state_val_30168 === (7))){
var inst_30163 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
var statearr_30176_32649 = state_30167__$1;
(statearr_30176_32649[(2)] = inst_30163);

(statearr_30176_32649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (1))){
var state_30167__$1 = state_30167;
var statearr_30180_32656 = state_30167__$1;
(statearr_30180_32656[(2)] = null);

(statearr_30180_32656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (4))){
var inst_30147 = (state_30167[(7)]);
var inst_30147__$1 = (state_30167[(2)]);
var inst_30148 = (inst_30147__$1 == null);
var state_30167__$1 = (function (){var statearr_30182 = state_30167;
(statearr_30182[(7)] = inst_30147__$1);

return statearr_30182;
})();
if(cljs.core.truth_(inst_30148)){
var statearr_30183_32663 = state_30167__$1;
(statearr_30183_32663[(1)] = (5));

} else {
var statearr_30185_32664 = state_30167__$1;
(statearr_30185_32664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (6))){
var inst_30147 = (state_30167[(7)]);
var inst_30152 = (state_30167[(8)]);
var inst_30152__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30155 = [inst_30147,inst_30152__$1];
var inst_30156 = (new cljs.core.PersistentVector(null,2,(5),inst_30154,inst_30155,null));
var state_30167__$1 = (function (){var statearr_30187 = state_30167;
(statearr_30187[(8)] = inst_30152__$1);

return statearr_30187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30167__$1,(8),jobs,inst_30156);
} else {
if((state_val_30168 === (3))){
var inst_30165 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30167__$1,inst_30165);
} else {
if((state_val_30168 === (2))){
var state_30167__$1 = state_30167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30167__$1,(4),from);
} else {
if((state_val_30168 === (9))){
var inst_30160 = (state_30167[(2)]);
var state_30167__$1 = (function (){var statearr_30188 = state_30167;
(statearr_30188[(9)] = inst_30160);

return statearr_30188;
})();
var statearr_30190_32674 = state_30167__$1;
(statearr_30190_32674[(2)] = null);

(statearr_30190_32674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (5))){
var inst_30150 = cljs.core.async.close_BANG_(jobs);
var state_30167__$1 = state_30167;
var statearr_30191_32675 = state_30167__$1;
(statearr_30191_32675[(2)] = inst_30150);

(statearr_30191_32675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (8))){
var inst_30152 = (state_30167[(8)]);
var inst_30158 = (state_30167[(2)]);
var state_30167__$1 = (function (){var statearr_30193 = state_30167;
(statearr_30193[(10)] = inst_30158);

return statearr_30193;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30167__$1,(9),results,inst_30152);
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
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_30167){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30167);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30195){var ex__26134__auto__ = e30195;
var statearr_30196_32677 = state_30167;
(statearr_30196_32677[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30167[(4)]))){
var statearr_30197_32678 = state_30167;
(statearr_30197_32678[(1)] = cljs.core.first((state_30167[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32679 = state_30167;
state_30167 = G__32679;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_30167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_30167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30199 = f__26216__auto__();
(statearr_30199[(6)] = c__26215__auto___32642);

return statearr_30199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30245){
var state_val_30246 = (state_30245[(1)]);
if((state_val_30246 === (7))){
var inst_30238 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
var statearr_30250_32680 = state_30245__$1;
(statearr_30250_32680[(2)] = inst_30238);

(statearr_30250_32680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (20))){
var state_30245__$1 = state_30245;
var statearr_30251_32682 = state_30245__$1;
(statearr_30251_32682[(2)] = null);

(statearr_30251_32682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (1))){
var state_30245__$1 = state_30245;
var statearr_30252_32684 = state_30245__$1;
(statearr_30252_32684[(2)] = null);

(statearr_30252_32684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (4))){
var inst_30204 = (state_30245[(7)]);
var inst_30204__$1 = (state_30245[(2)]);
var inst_30205 = (inst_30204__$1 == null);
var state_30245__$1 = (function (){var statearr_30253 = state_30245;
(statearr_30253[(7)] = inst_30204__$1);

return statearr_30253;
})();
if(cljs.core.truth_(inst_30205)){
var statearr_30254_32686 = state_30245__$1;
(statearr_30254_32686[(1)] = (5));

} else {
var statearr_30255_32687 = state_30245__$1;
(statearr_30255_32687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (15))){
var inst_30217 = (state_30245[(8)]);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30245__$1,(18),to,inst_30217);
} else {
if((state_val_30246 === (21))){
var inst_30233 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
var statearr_30256_32688 = state_30245__$1;
(statearr_30256_32688[(2)] = inst_30233);

(statearr_30256_32688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (13))){
var inst_30235 = (state_30245[(2)]);
var state_30245__$1 = (function (){var statearr_30260 = state_30245;
(statearr_30260[(9)] = inst_30235);

return statearr_30260;
})();
var statearr_30261_32689 = state_30245__$1;
(statearr_30261_32689[(2)] = null);

(statearr_30261_32689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (6))){
var inst_30204 = (state_30245[(7)]);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30245__$1,(11),inst_30204);
} else {
if((state_val_30246 === (17))){
var inst_30228 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
if(cljs.core.truth_(inst_30228)){
var statearr_30262_32691 = state_30245__$1;
(statearr_30262_32691[(1)] = (19));

} else {
var statearr_30263_32692 = state_30245__$1;
(statearr_30263_32692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (3))){
var inst_30243 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30245__$1,inst_30243);
} else {
if((state_val_30246 === (12))){
var inst_30214 = (state_30245[(10)]);
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30245__$1,(14),inst_30214);
} else {
if((state_val_30246 === (2))){
var state_30245__$1 = state_30245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30245__$1,(4),results);
} else {
if((state_val_30246 === (19))){
var state_30245__$1 = state_30245;
var statearr_30264_32694 = state_30245__$1;
(statearr_30264_32694[(2)] = null);

(statearr_30264_32694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (11))){
var inst_30214 = (state_30245[(2)]);
var state_30245__$1 = (function (){var statearr_30266 = state_30245;
(statearr_30266[(10)] = inst_30214);

return statearr_30266;
})();
var statearr_30268_32702 = state_30245__$1;
(statearr_30268_32702[(2)] = null);

(statearr_30268_32702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (9))){
var state_30245__$1 = state_30245;
var statearr_30269_32703 = state_30245__$1;
(statearr_30269_32703[(2)] = null);

(statearr_30269_32703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (5))){
var state_30245__$1 = state_30245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30271_32705 = state_30245__$1;
(statearr_30271_32705[(1)] = (8));

} else {
var statearr_30272_32706 = state_30245__$1;
(statearr_30272_32706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (14))){
var inst_30217 = (state_30245[(8)]);
var inst_30220 = (state_30245[(11)]);
var inst_30217__$1 = (state_30245[(2)]);
var inst_30219 = (inst_30217__$1 == null);
var inst_30220__$1 = cljs.core.not(inst_30219);
var state_30245__$1 = (function (){var statearr_30273 = state_30245;
(statearr_30273[(8)] = inst_30217__$1);

(statearr_30273[(11)] = inst_30220__$1);

return statearr_30273;
})();
if(inst_30220__$1){
var statearr_30274_32720 = state_30245__$1;
(statearr_30274_32720[(1)] = (15));

} else {
var statearr_30275_32721 = state_30245__$1;
(statearr_30275_32721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (16))){
var inst_30220 = (state_30245[(11)]);
var state_30245__$1 = state_30245;
var statearr_30276_32722 = state_30245__$1;
(statearr_30276_32722[(2)] = inst_30220);

(statearr_30276_32722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (10))){
var inst_30211 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
var statearr_30277_32723 = state_30245__$1;
(statearr_30277_32723[(2)] = inst_30211);

(statearr_30277_32723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (18))){
var inst_30225 = (state_30245[(2)]);
var state_30245__$1 = state_30245;
var statearr_30278_32724 = state_30245__$1;
(statearr_30278_32724[(2)] = inst_30225);

(statearr_30278_32724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30246 === (8))){
var inst_30208 = cljs.core.async.close_BANG_(to);
var state_30245__$1 = state_30245;
var statearr_30279_32725 = state_30245__$1;
(statearr_30279_32725[(2)] = inst_30208);

(statearr_30279_32725[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_30280 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_30280[(1)] = (1));

return statearr_30280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_30245){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30245);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30282){var ex__26134__auto__ = e30282;
var statearr_30283_32729 = state_30245;
(statearr_30283_32729[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30245[(4)]))){
var statearr_30284_32733 = state_30245;
(statearr_30284_32733[(1)] = cljs.core.first((state_30245[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32734 = state_30245;
state_30245 = G__32734;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_30245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_30245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30288 = f__26216__auto__();
(statearr_30288[(6)] = c__26215__auto__);

return statearr_30288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
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
var G__30291 = arguments.length;
switch (G__30291) {
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
var G__30295 = arguments.length;
switch (G__30295) {
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
var G__30298 = arguments.length;
switch (G__30298) {
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
var c__26215__auto___32756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30324){
var state_val_30325 = (state_30324[(1)]);
if((state_val_30325 === (7))){
var inst_30320 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30326_32757 = state_30324__$1;
(statearr_30326_32757[(2)] = inst_30320);

(statearr_30326_32757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (1))){
var state_30324__$1 = state_30324;
var statearr_30327_32761 = state_30324__$1;
(statearr_30327_32761[(2)] = null);

(statearr_30327_32761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (4))){
var inst_30301 = (state_30324[(7)]);
var inst_30301__$1 = (state_30324[(2)]);
var inst_30302 = (inst_30301__$1 == null);
var state_30324__$1 = (function (){var statearr_30328 = state_30324;
(statearr_30328[(7)] = inst_30301__$1);

return statearr_30328;
})();
if(cljs.core.truth_(inst_30302)){
var statearr_30329_32762 = state_30324__$1;
(statearr_30329_32762[(1)] = (5));

} else {
var statearr_30330_32763 = state_30324__$1;
(statearr_30330_32763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (13))){
var state_30324__$1 = state_30324;
var statearr_30332_32764 = state_30324__$1;
(statearr_30332_32764[(2)] = null);

(statearr_30332_32764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (6))){
var inst_30301 = (state_30324[(7)]);
var inst_30307 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30301) : p.call(null,inst_30301));
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30307)){
var statearr_30333_32768 = state_30324__$1;
(statearr_30333_32768[(1)] = (9));

} else {
var statearr_30334_32769 = state_30324__$1;
(statearr_30334_32769[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (3))){
var inst_30322 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30324__$1,inst_30322);
} else {
if((state_val_30325 === (12))){
var state_30324__$1 = state_30324;
var statearr_30336_32771 = state_30324__$1;
(statearr_30336_32771[(2)] = null);

(statearr_30336_32771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (2))){
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(4),ch);
} else {
if((state_val_30325 === (11))){
var inst_30301 = (state_30324[(7)]);
var inst_30311 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30324__$1,(8),inst_30311,inst_30301);
} else {
if((state_val_30325 === (9))){
var state_30324__$1 = state_30324;
var statearr_30338_32773 = state_30324__$1;
(statearr_30338_32773[(2)] = tc);

(statearr_30338_32773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (5))){
var inst_30304 = cljs.core.async.close_BANG_(tc);
var inst_30305 = cljs.core.async.close_BANG_(fc);
var state_30324__$1 = (function (){var statearr_30339 = state_30324;
(statearr_30339[(8)] = inst_30304);

return statearr_30339;
})();
var statearr_30340_32775 = state_30324__$1;
(statearr_30340_32775[(2)] = inst_30305);

(statearr_30340_32775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (14))){
var inst_30318 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30341_32777 = state_30324__$1;
(statearr_30341_32777[(2)] = inst_30318);

(statearr_30341_32777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (10))){
var state_30324__$1 = state_30324;
var statearr_30342_32778 = state_30324__$1;
(statearr_30342_32778[(2)] = fc);

(statearr_30342_32778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (8))){
var inst_30313 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30313)){
var statearr_30343_32779 = state_30324__$1;
(statearr_30343_32779[(1)] = (12));

} else {
var statearr_30344_32780 = state_30324__$1;
(statearr_30344_32780[(1)] = (13));

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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_30348 = [null,null,null,null,null,null,null,null,null];
(statearr_30348[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_30348[(1)] = (1));

return statearr_30348;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_30324){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30324);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30349){var ex__26134__auto__ = e30349;
var statearr_30350_32785 = state_30324;
(statearr_30350_32785[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30324[(4)]))){
var statearr_30351_32787 = state_30324;
(statearr_30351_32787[(1)] = cljs.core.first((state_30324[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32789 = state_30324;
state_30324 = G__32789;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30352 = f__26216__auto__();
(statearr_30352[(6)] = c__26215__auto___32756);

return statearr_30352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30389){
var state_val_30390 = (state_30389[(1)]);
if((state_val_30390 === (7))){
var inst_30385 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30397_32793 = state_30389__$1;
(statearr_30397_32793[(2)] = inst_30385);

(statearr_30397_32793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (1))){
var inst_30365 = init;
var inst_30366 = inst_30365;
var state_30389__$1 = (function (){var statearr_30398 = state_30389;
(statearr_30398[(7)] = inst_30366);

return statearr_30398;
})();
var statearr_30399_32794 = state_30389__$1;
(statearr_30399_32794[(2)] = null);

(statearr_30399_32794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (4))){
var inst_30372 = (state_30389[(8)]);
var inst_30372__$1 = (state_30389[(2)]);
var inst_30373 = (inst_30372__$1 == null);
var state_30389__$1 = (function (){var statearr_30400 = state_30389;
(statearr_30400[(8)] = inst_30372__$1);

return statearr_30400;
})();
if(cljs.core.truth_(inst_30373)){
var statearr_30401_32795 = state_30389__$1;
(statearr_30401_32795[(1)] = (5));

} else {
var statearr_30402_32796 = state_30389__$1;
(statearr_30402_32796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (6))){
var inst_30376 = (state_30389[(9)]);
var inst_30372 = (state_30389[(8)]);
var inst_30366 = (state_30389[(7)]);
var inst_30376__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30366,inst_30372) : f.call(null,inst_30366,inst_30372));
var inst_30377 = cljs.core.reduced_QMARK_(inst_30376__$1);
var state_30389__$1 = (function (){var statearr_30403 = state_30389;
(statearr_30403[(9)] = inst_30376__$1);

return statearr_30403;
})();
if(inst_30377){
var statearr_30404_32797 = state_30389__$1;
(statearr_30404_32797[(1)] = (8));

} else {
var statearr_30405_32799 = state_30389__$1;
(statearr_30405_32799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (3))){
var inst_30387 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30389__$1,inst_30387);
} else {
if((state_val_30390 === (2))){
var state_30389__$1 = state_30389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30389__$1,(4),ch);
} else {
if((state_val_30390 === (9))){
var inst_30376 = (state_30389[(9)]);
var inst_30366 = inst_30376;
var state_30389__$1 = (function (){var statearr_30411 = state_30389;
(statearr_30411[(7)] = inst_30366);

return statearr_30411;
})();
var statearr_30413_32800 = state_30389__$1;
(statearr_30413_32800[(2)] = null);

(statearr_30413_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (5))){
var inst_30366 = (state_30389[(7)]);
var state_30389__$1 = state_30389;
var statearr_30414_32801 = state_30389__$1;
(statearr_30414_32801[(2)] = inst_30366);

(statearr_30414_32801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (10))){
var inst_30383 = (state_30389[(2)]);
var state_30389__$1 = state_30389;
var statearr_30415_32803 = state_30389__$1;
(statearr_30415_32803[(2)] = inst_30383);

(statearr_30415_32803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30390 === (8))){
var inst_30376 = (state_30389[(9)]);
var inst_30379 = cljs.core.deref(inst_30376);
var state_30389__$1 = state_30389;
var statearr_30416_32804 = state_30389__$1;
(statearr_30416_32804[(2)] = inst_30379);

(statearr_30416_32804[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__26131__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26131__auto____0 = (function (){
var statearr_30428 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30428[(0)] = cljs$core$async$reduce_$_state_machine__26131__auto__);

(statearr_30428[(1)] = (1));

return statearr_30428;
});
var cljs$core$async$reduce_$_state_machine__26131__auto____1 = (function (state_30389){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30389);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30429){var ex__26134__auto__ = e30429;
var statearr_30430_32806 = state_30389;
(statearr_30430_32806[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30389[(4)]))){
var statearr_30431_32808 = state_30389;
(statearr_30431_32808[(1)] = cljs.core.first((state_30389[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32809 = state_30389;
state_30389 = G__32809;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26131__auto__ = function(state_30389){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26131__auto____1.call(this,state_30389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26131__auto____0;
cljs$core$async$reduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26131__auto____1;
return cljs$core$async$reduce_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30432 = f__26216__auto__();
(statearr_30432[(6)] = c__26215__auto__);

return statearr_30432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30439){
var state_val_30441 = (state_30439[(1)]);
if((state_val_30441 === (1))){
var inst_30434 = cljs.core.async.reduce(f__$1,init,ch);
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30439__$1,(2),inst_30434);
} else {
if((state_val_30441 === (2))){
var inst_30436 = (state_30439[(2)]);
var inst_30437 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30436) : f__$1.call(null,inst_30436));
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30439__$1,inst_30437);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26131__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26131__auto____0 = (function (){
var statearr_30444 = [null,null,null,null,null,null,null];
(statearr_30444[(0)] = cljs$core$async$transduce_$_state_machine__26131__auto__);

(statearr_30444[(1)] = (1));

return statearr_30444;
});
var cljs$core$async$transduce_$_state_machine__26131__auto____1 = (function (state_30439){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30439);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30445){var ex__26134__auto__ = e30445;
var statearr_30446_32817 = state_30439;
(statearr_30446_32817[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30439[(4)]))){
var statearr_30451_32819 = state_30439;
(statearr_30451_32819[(1)] = cljs.core.first((state_30439[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32823 = state_30439;
state_30439 = G__32823;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26131__auto__ = function(state_30439){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26131__auto____1.call(this,state_30439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26131__auto____0;
cljs$core$async$transduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26131__auto____1;
return cljs$core$async$transduce_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30452 = f__26216__auto__();
(statearr_30452[(6)] = c__26215__auto__);

return statearr_30452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
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
var G__30454 = arguments.length;
switch (G__30454) {
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
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30481){
var state_val_30482 = (state_30481[(1)]);
if((state_val_30482 === (7))){
var inst_30463 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30483_32831 = state_30481__$1;
(statearr_30483_32831[(2)] = inst_30463);

(statearr_30483_32831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (1))){
var inst_30457 = cljs.core.seq(coll);
var inst_30458 = inst_30457;
var state_30481__$1 = (function (){var statearr_30484 = state_30481;
(statearr_30484[(7)] = inst_30458);

return statearr_30484;
})();
var statearr_30485_32832 = state_30481__$1;
(statearr_30485_32832[(2)] = null);

(statearr_30485_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (4))){
var inst_30458 = (state_30481[(7)]);
var inst_30461 = cljs.core.first(inst_30458);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30481__$1,(7),ch,inst_30461);
} else {
if((state_val_30482 === (13))){
var inst_30475 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30486_32833 = state_30481__$1;
(statearr_30486_32833[(2)] = inst_30475);

(statearr_30486_32833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (6))){
var inst_30466 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
if(cljs.core.truth_(inst_30466)){
var statearr_30487_32834 = state_30481__$1;
(statearr_30487_32834[(1)] = (8));

} else {
var statearr_30488_32835 = state_30481__$1;
(statearr_30488_32835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (3))){
var inst_30479 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30481__$1,inst_30479);
} else {
if((state_val_30482 === (12))){
var state_30481__$1 = state_30481;
var statearr_30489_32840 = state_30481__$1;
(statearr_30489_32840[(2)] = null);

(statearr_30489_32840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (2))){
var inst_30458 = (state_30481[(7)]);
var state_30481__$1 = state_30481;
if(cljs.core.truth_(inst_30458)){
var statearr_30490_32843 = state_30481__$1;
(statearr_30490_32843[(1)] = (4));

} else {
var statearr_30491_32844 = state_30481__$1;
(statearr_30491_32844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (11))){
var inst_30472 = cljs.core.async.close_BANG_(ch);
var state_30481__$1 = state_30481;
var statearr_30493_32845 = state_30481__$1;
(statearr_30493_32845[(2)] = inst_30472);

(statearr_30493_32845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (9))){
var state_30481__$1 = state_30481;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30494_32847 = state_30481__$1;
(statearr_30494_32847[(1)] = (11));

} else {
var statearr_30495_32848 = state_30481__$1;
(statearr_30495_32848[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (5))){
var inst_30458 = (state_30481[(7)]);
var state_30481__$1 = state_30481;
var statearr_30496_32849 = state_30481__$1;
(statearr_30496_32849[(2)] = inst_30458);

(statearr_30496_32849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (10))){
var inst_30477 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30497_32851 = state_30481__$1;
(statearr_30497_32851[(2)] = inst_30477);

(statearr_30497_32851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (8))){
var inst_30458 = (state_30481[(7)]);
var inst_30468 = cljs.core.next(inst_30458);
var inst_30458__$1 = inst_30468;
var state_30481__$1 = (function (){var statearr_30498 = state_30481;
(statearr_30498[(7)] = inst_30458__$1);

return statearr_30498;
})();
var statearr_30499_32855 = state_30481__$1;
(statearr_30499_32855[(2)] = null);

(statearr_30499_32855[(1)] = (2));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_30500 = [null,null,null,null,null,null,null,null];
(statearr_30500[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_30500[(1)] = (1));

return statearr_30500;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_30481){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30481);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30507){var ex__26134__auto__ = e30507;
var statearr_30508_32859 = state_30481;
(statearr_30508_32859[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30481[(4)]))){
var statearr_30527_32861 = state_30481;
(statearr_30527_32861[(1)] = cljs.core.first((state_30481[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32865 = state_30481;
state_30481 = G__32865;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_30481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_30481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30551 = f__26216__auto__();
(statearr_30551[(6)] = c__26215__auto__);

return statearr_30551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
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
var G__30556 = arguments.length;
switch (G__30556) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_32874 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_32874(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32881 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_32881(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32890 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_32890(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32891 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_32891(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30564 = (function (ch,cs,meta30565){
this.ch = ch;
this.cs = cs;
this.meta30565 = meta30565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30566,meta30565__$1){
var self__ = this;
var _30566__$1 = this;
return (new cljs.core.async.t_cljs$core$async30564(self__.ch,self__.cs,meta30565__$1));
}));

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30566){
var self__ = this;
var _30566__$1 = this;
return self__.meta30565;
}));

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30565","meta30565",1550165063,null)], null);
}));

(cljs.core.async.t_cljs$core$async30564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30564");

(cljs.core.async.t_cljs$core$async30564.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30564.
 */
cljs.core.async.__GT_t_cljs$core$async30564 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30564(ch__$1,cs__$1,meta30565){
return (new cljs.core.async.t_cljs$core$async30564(ch__$1,cs__$1,meta30565));
});

}

return (new cljs.core.async.t_cljs$core$async30564(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26215__auto___32917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_30717){
var state_val_30718 = (state_30717[(1)]);
if((state_val_30718 === (7))){
var inst_30713 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30720_32920 = state_30717__$1;
(statearr_30720_32920[(2)] = inst_30713);

(statearr_30720_32920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (20))){
var inst_30618 = (state_30717[(7)]);
var inst_30630 = cljs.core.first(inst_30618);
var inst_30631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30630,(0),null);
var inst_30632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30630,(1),null);
var state_30717__$1 = (function (){var statearr_30721 = state_30717;
(statearr_30721[(8)] = inst_30631);

return statearr_30721;
})();
if(cljs.core.truth_(inst_30632)){
var statearr_30722_32921 = state_30717__$1;
(statearr_30722_32921[(1)] = (22));

} else {
var statearr_30723_32922 = state_30717__$1;
(statearr_30723_32922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (27))){
var inst_30662 = (state_30717[(9)]);
var inst_30667 = (state_30717[(10)]);
var inst_30569 = (state_30717[(11)]);
var inst_30660 = (state_30717[(12)]);
var inst_30667__$1 = cljs.core._nth(inst_30660,inst_30662);
var inst_30668 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30667__$1,inst_30569,done);
var state_30717__$1 = (function (){var statearr_30734 = state_30717;
(statearr_30734[(10)] = inst_30667__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30668)){
var statearr_30735_32923 = state_30717__$1;
(statearr_30735_32923[(1)] = (30));

} else {
var statearr_30740_32924 = state_30717__$1;
(statearr_30740_32924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (1))){
var state_30717__$1 = state_30717;
var statearr_30743_32925 = state_30717__$1;
(statearr_30743_32925[(2)] = null);

(statearr_30743_32925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (24))){
var inst_30618 = (state_30717[(7)]);
var inst_30637 = (state_30717[(2)]);
var inst_30638 = cljs.core.next(inst_30618);
var inst_30592 = inst_30638;
var inst_30593 = null;
var inst_30594 = (0);
var inst_30595 = (0);
var state_30717__$1 = (function (){var statearr_30744 = state_30717;
(statearr_30744[(13)] = inst_30637);

(statearr_30744[(14)] = inst_30592);

(statearr_30744[(15)] = inst_30593);

(statearr_30744[(16)] = inst_30594);

(statearr_30744[(17)] = inst_30595);

return statearr_30744;
})();
var statearr_30748_32927 = state_30717__$1;
(statearr_30748_32927[(2)] = null);

(statearr_30748_32927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (39))){
var state_30717__$1 = state_30717;
var statearr_30752_32928 = state_30717__$1;
(statearr_30752_32928[(2)] = null);

(statearr_30752_32928[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (4))){
var inst_30569 = (state_30717[(11)]);
var inst_30569__$1 = (state_30717[(2)]);
var inst_30570 = (inst_30569__$1 == null);
var state_30717__$1 = (function (){var statearr_30753 = state_30717;
(statearr_30753[(11)] = inst_30569__$1);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30570)){
var statearr_30754_32935 = state_30717__$1;
(statearr_30754_32935[(1)] = (5));

} else {
var statearr_30755_32936 = state_30717__$1;
(statearr_30755_32936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (15))){
var inst_30592 = (state_30717[(14)]);
var inst_30593 = (state_30717[(15)]);
var inst_30594 = (state_30717[(16)]);
var inst_30595 = (state_30717[(17)]);
var inst_30613 = (state_30717[(2)]);
var inst_30615 = (inst_30595 + (1));
var tmp30749 = inst_30592;
var tmp30750 = inst_30593;
var tmp30751 = inst_30594;
var inst_30592__$1 = tmp30749;
var inst_30593__$1 = tmp30750;
var inst_30594__$1 = tmp30751;
var inst_30595__$1 = inst_30615;
var state_30717__$1 = (function (){var statearr_30756 = state_30717;
(statearr_30756[(14)] = inst_30592__$1);

(statearr_30756[(18)] = inst_30613);

(statearr_30756[(15)] = inst_30593__$1);

(statearr_30756[(16)] = inst_30594__$1);

(statearr_30756[(17)] = inst_30595__$1);

return statearr_30756;
})();
var statearr_30757_32937 = state_30717__$1;
(statearr_30757_32937[(2)] = null);

(statearr_30757_32937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (21))){
var inst_30641 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30761_32938 = state_30717__$1;
(statearr_30761_32938[(2)] = inst_30641);

(statearr_30761_32938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (31))){
var inst_30667 = (state_30717[(10)]);
var inst_30671 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30667);
var state_30717__$1 = state_30717;
var statearr_30762_32943 = state_30717__$1;
(statearr_30762_32943[(2)] = inst_30671);

(statearr_30762_32943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (32))){
var inst_30661 = (state_30717[(19)]);
var inst_30662 = (state_30717[(9)]);
var inst_30659 = (state_30717[(20)]);
var inst_30660 = (state_30717[(12)]);
var inst_30673 = (state_30717[(2)]);
var inst_30674 = (inst_30662 + (1));
var tmp30758 = inst_30661;
var tmp30759 = inst_30659;
var tmp30760 = inst_30660;
var inst_30659__$1 = tmp30759;
var inst_30660__$1 = tmp30760;
var inst_30661__$1 = tmp30758;
var inst_30662__$1 = inst_30674;
var state_30717__$1 = (function (){var statearr_30763 = state_30717;
(statearr_30763[(19)] = inst_30661__$1);

(statearr_30763[(9)] = inst_30662__$1);

(statearr_30763[(20)] = inst_30659__$1);

(statearr_30763[(12)] = inst_30660__$1);

(statearr_30763[(21)] = inst_30673);

return statearr_30763;
})();
var statearr_30765_32952 = state_30717__$1;
(statearr_30765_32952[(2)] = null);

(statearr_30765_32952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (40))){
var inst_30686 = (state_30717[(22)]);
var inst_30690 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30686);
var state_30717__$1 = state_30717;
var statearr_30769_32953 = state_30717__$1;
(statearr_30769_32953[(2)] = inst_30690);

(statearr_30769_32953[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (33))){
var inst_30677 = (state_30717[(23)]);
var inst_30679 = cljs.core.chunked_seq_QMARK_(inst_30677);
var state_30717__$1 = state_30717;
if(inst_30679){
var statearr_30770_32954 = state_30717__$1;
(statearr_30770_32954[(1)] = (36));

} else {
var statearr_30771_32955 = state_30717__$1;
(statearr_30771_32955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (13))){
var inst_30605 = (state_30717[(24)]);
var inst_30610 = cljs.core.async.close_BANG_(inst_30605);
var state_30717__$1 = state_30717;
var statearr_30772_32963 = state_30717__$1;
(statearr_30772_32963[(2)] = inst_30610);

(statearr_30772_32963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (22))){
var inst_30631 = (state_30717[(8)]);
var inst_30634 = cljs.core.async.close_BANG_(inst_30631);
var state_30717__$1 = state_30717;
var statearr_30773_32964 = state_30717__$1;
(statearr_30773_32964[(2)] = inst_30634);

(statearr_30773_32964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (36))){
var inst_30677 = (state_30717[(23)]);
var inst_30681 = cljs.core.chunk_first(inst_30677);
var inst_30682 = cljs.core.chunk_rest(inst_30677);
var inst_30683 = cljs.core.count(inst_30681);
var inst_30659 = inst_30682;
var inst_30660 = inst_30681;
var inst_30661 = inst_30683;
var inst_30662 = (0);
var state_30717__$1 = (function (){var statearr_30774 = state_30717;
(statearr_30774[(19)] = inst_30661);

(statearr_30774[(9)] = inst_30662);

(statearr_30774[(20)] = inst_30659);

(statearr_30774[(12)] = inst_30660);

return statearr_30774;
})();
var statearr_30775_32965 = state_30717__$1;
(statearr_30775_32965[(2)] = null);

(statearr_30775_32965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (41))){
var inst_30677 = (state_30717[(23)]);
var inst_30692 = (state_30717[(2)]);
var inst_30693 = cljs.core.next(inst_30677);
var inst_30659 = inst_30693;
var inst_30660 = null;
var inst_30661 = (0);
var inst_30662 = (0);
var state_30717__$1 = (function (){var statearr_30776 = state_30717;
(statearr_30776[(19)] = inst_30661);

(statearr_30776[(25)] = inst_30692);

(statearr_30776[(9)] = inst_30662);

(statearr_30776[(20)] = inst_30659);

(statearr_30776[(12)] = inst_30660);

return statearr_30776;
})();
var statearr_30780_32966 = state_30717__$1;
(statearr_30780_32966[(2)] = null);

(statearr_30780_32966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (43))){
var state_30717__$1 = state_30717;
var statearr_30784_32967 = state_30717__$1;
(statearr_30784_32967[(2)] = null);

(statearr_30784_32967[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (29))){
var inst_30701 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30785_32971 = state_30717__$1;
(statearr_30785_32971[(2)] = inst_30701);

(statearr_30785_32971[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (44))){
var inst_30710 = (state_30717[(2)]);
var state_30717__$1 = (function (){var statearr_30786 = state_30717;
(statearr_30786[(26)] = inst_30710);

return statearr_30786;
})();
var statearr_30787_32972 = state_30717__$1;
(statearr_30787_32972[(2)] = null);

(statearr_30787_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (6))){
var inst_30651 = (state_30717[(27)]);
var inst_30650 = cljs.core.deref(cs);
var inst_30651__$1 = cljs.core.keys(inst_30650);
var inst_30652 = cljs.core.count(inst_30651__$1);
var inst_30653 = cljs.core.reset_BANG_(dctr,inst_30652);
var inst_30658 = cljs.core.seq(inst_30651__$1);
var inst_30659 = inst_30658;
var inst_30660 = null;
var inst_30661 = (0);
var inst_30662 = (0);
var state_30717__$1 = (function (){var statearr_30788 = state_30717;
(statearr_30788[(28)] = inst_30653);

(statearr_30788[(27)] = inst_30651__$1);

(statearr_30788[(19)] = inst_30661);

(statearr_30788[(9)] = inst_30662);

(statearr_30788[(20)] = inst_30659);

(statearr_30788[(12)] = inst_30660);

return statearr_30788;
})();
var statearr_30789_32974 = state_30717__$1;
(statearr_30789_32974[(2)] = null);

(statearr_30789_32974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (28))){
var inst_30677 = (state_30717[(23)]);
var inst_30659 = (state_30717[(20)]);
var inst_30677__$1 = cljs.core.seq(inst_30659);
var state_30717__$1 = (function (){var statearr_30790 = state_30717;
(statearr_30790[(23)] = inst_30677__$1);

return statearr_30790;
})();
if(inst_30677__$1){
var statearr_30791_32979 = state_30717__$1;
(statearr_30791_32979[(1)] = (33));

} else {
var statearr_30792_32980 = state_30717__$1;
(statearr_30792_32980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (25))){
var inst_30661 = (state_30717[(19)]);
var inst_30662 = (state_30717[(9)]);
var inst_30664 = (inst_30662 < inst_30661);
var inst_30665 = inst_30664;
var state_30717__$1 = state_30717;
if(cljs.core.truth_(inst_30665)){
var statearr_30793_32982 = state_30717__$1;
(statearr_30793_32982[(1)] = (27));

} else {
var statearr_30794_32983 = state_30717__$1;
(statearr_30794_32983[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (34))){
var state_30717__$1 = state_30717;
var statearr_30795_32984 = state_30717__$1;
(statearr_30795_32984[(2)] = null);

(statearr_30795_32984[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (17))){
var state_30717__$1 = state_30717;
var statearr_30796_32990 = state_30717__$1;
(statearr_30796_32990[(2)] = null);

(statearr_30796_32990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (3))){
var inst_30715 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30717__$1,inst_30715);
} else {
if((state_val_30718 === (12))){
var inst_30646 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30816_33007 = state_30717__$1;
(statearr_30816_33007[(2)] = inst_30646);

(statearr_30816_33007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (2))){
var state_30717__$1 = state_30717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30717__$1,(4),ch);
} else {
if((state_val_30718 === (23))){
var state_30717__$1 = state_30717;
var statearr_30817_33008 = state_30717__$1;
(statearr_30817_33008[(2)] = null);

(statearr_30817_33008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (35))){
var inst_30699 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30818_33015 = state_30717__$1;
(statearr_30818_33015[(2)] = inst_30699);

(statearr_30818_33015[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (19))){
var inst_30618 = (state_30717[(7)]);
var inst_30622 = cljs.core.chunk_first(inst_30618);
var inst_30623 = cljs.core.chunk_rest(inst_30618);
var inst_30624 = cljs.core.count(inst_30622);
var inst_30592 = inst_30623;
var inst_30593 = inst_30622;
var inst_30594 = inst_30624;
var inst_30595 = (0);
var state_30717__$1 = (function (){var statearr_30824 = state_30717;
(statearr_30824[(14)] = inst_30592);

(statearr_30824[(15)] = inst_30593);

(statearr_30824[(16)] = inst_30594);

(statearr_30824[(17)] = inst_30595);

return statearr_30824;
})();
var statearr_30827_33018 = state_30717__$1;
(statearr_30827_33018[(2)] = null);

(statearr_30827_33018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (11))){
var inst_30592 = (state_30717[(14)]);
var inst_30618 = (state_30717[(7)]);
var inst_30618__$1 = cljs.core.seq(inst_30592);
var state_30717__$1 = (function (){var statearr_30828 = state_30717;
(statearr_30828[(7)] = inst_30618__$1);

return statearr_30828;
})();
if(inst_30618__$1){
var statearr_30830_33023 = state_30717__$1;
(statearr_30830_33023[(1)] = (16));

} else {
var statearr_30831_33024 = state_30717__$1;
(statearr_30831_33024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (9))){
var inst_30648 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30833_33026 = state_30717__$1;
(statearr_30833_33026[(2)] = inst_30648);

(statearr_30833_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (5))){
var inst_30589 = cljs.core.deref(cs);
var inst_30590 = cljs.core.seq(inst_30589);
var inst_30592 = inst_30590;
var inst_30593 = null;
var inst_30594 = (0);
var inst_30595 = (0);
var state_30717__$1 = (function (){var statearr_30838 = state_30717;
(statearr_30838[(14)] = inst_30592);

(statearr_30838[(15)] = inst_30593);

(statearr_30838[(16)] = inst_30594);

(statearr_30838[(17)] = inst_30595);

return statearr_30838;
})();
var statearr_30839_33028 = state_30717__$1;
(statearr_30839_33028[(2)] = null);

(statearr_30839_33028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (14))){
var state_30717__$1 = state_30717;
var statearr_30843_33029 = state_30717__$1;
(statearr_30843_33029[(2)] = null);

(statearr_30843_33029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (45))){
var inst_30707 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30844_33032 = state_30717__$1;
(statearr_30844_33032[(2)] = inst_30707);

(statearr_30844_33032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (26))){
var inst_30651 = (state_30717[(27)]);
var inst_30703 = (state_30717[(2)]);
var inst_30704 = cljs.core.seq(inst_30651);
var state_30717__$1 = (function (){var statearr_30848 = state_30717;
(statearr_30848[(29)] = inst_30703);

return statearr_30848;
})();
if(inst_30704){
var statearr_30850_33033 = state_30717__$1;
(statearr_30850_33033[(1)] = (42));

} else {
var statearr_30851_33034 = state_30717__$1;
(statearr_30851_33034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (16))){
var inst_30618 = (state_30717[(7)]);
var inst_30620 = cljs.core.chunked_seq_QMARK_(inst_30618);
var state_30717__$1 = state_30717;
if(inst_30620){
var statearr_30858_33035 = state_30717__$1;
(statearr_30858_33035[(1)] = (19));

} else {
var statearr_30859_33036 = state_30717__$1;
(statearr_30859_33036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (38))){
var inst_30696 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30860_33037 = state_30717__$1;
(statearr_30860_33037[(2)] = inst_30696);

(statearr_30860_33037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (30))){
var state_30717__$1 = state_30717;
var statearr_30868_33038 = state_30717__$1;
(statearr_30868_33038[(2)] = null);

(statearr_30868_33038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (10))){
var inst_30593 = (state_30717[(15)]);
var inst_30595 = (state_30717[(17)]);
var inst_30604 = cljs.core._nth(inst_30593,inst_30595);
var inst_30605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30604,(0),null);
var inst_30606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30604,(1),null);
var state_30717__$1 = (function (){var statearr_30869 = state_30717;
(statearr_30869[(24)] = inst_30605);

return statearr_30869;
})();
if(cljs.core.truth_(inst_30606)){
var statearr_30870_33040 = state_30717__$1;
(statearr_30870_33040[(1)] = (13));

} else {
var statearr_30871_33041 = state_30717__$1;
(statearr_30871_33041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (18))){
var inst_30644 = (state_30717[(2)]);
var state_30717__$1 = state_30717;
var statearr_30874_33042 = state_30717__$1;
(statearr_30874_33042[(2)] = inst_30644);

(statearr_30874_33042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (42))){
var state_30717__$1 = state_30717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30717__$1,(45),dchan);
} else {
if((state_val_30718 === (37))){
var inst_30677 = (state_30717[(23)]);
var inst_30569 = (state_30717[(11)]);
var inst_30686 = (state_30717[(22)]);
var inst_30686__$1 = cljs.core.first(inst_30677);
var inst_30687 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30686__$1,inst_30569,done);
var state_30717__$1 = (function (){var statearr_30879 = state_30717;
(statearr_30879[(22)] = inst_30686__$1);

return statearr_30879;
})();
if(cljs.core.truth_(inst_30687)){
var statearr_30880_33044 = state_30717__$1;
(statearr_30880_33044[(1)] = (39));

} else {
var statearr_30881_33045 = state_30717__$1;
(statearr_30881_33045[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30718 === (8))){
var inst_30594 = (state_30717[(16)]);
var inst_30595 = (state_30717[(17)]);
var inst_30597 = (inst_30595 < inst_30594);
var inst_30598 = inst_30597;
var state_30717__$1 = state_30717;
if(cljs.core.truth_(inst_30598)){
var statearr_30882_33046 = state_30717__$1;
(statearr_30882_33046[(1)] = (10));

} else {
var statearr_30883_33047 = state_30717__$1;
(statearr_30883_33047[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__26131__auto__ = null;
var cljs$core$async$mult_$_state_machine__26131__auto____0 = (function (){
var statearr_30885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30885[(0)] = cljs$core$async$mult_$_state_machine__26131__auto__);

(statearr_30885[(1)] = (1));

return statearr_30885;
});
var cljs$core$async$mult_$_state_machine__26131__auto____1 = (function (state_30717){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_30717);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e30887){var ex__26134__auto__ = e30887;
var statearr_30889_33053 = state_30717;
(statearr_30889_33053[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_30717[(4)]))){
var statearr_30890_33054 = state_30717;
(statearr_30890_33054[(1)] = cljs.core.first((state_30717[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33055 = state_30717;
state_30717 = G__33055;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26131__auto__ = function(state_30717){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26131__auto____1.call(this,state_30717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26131__auto____0;
cljs$core$async$mult_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26131__auto____1;
return cljs$core$async$mult_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_30894 = f__26216__auto__();
(statearr_30894[(6)] = c__26215__auto___32917);

return statearr_30894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var G__30906 = arguments.length;
switch (G__30906) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33069 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33069(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33073 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33073(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33077 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33077(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33081 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33081(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33086 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33086(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33087 = arguments.length;
var i__4830__auto___33088 = (0);
while(true){
if((i__4830__auto___33088 < len__4829__auto___33087)){
args__4835__auto__.push((arguments[i__4830__auto___33088]));

var G__33089 = (i__4830__auto___33088 + (1));
i__4830__auto___33088 = G__33089;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30950){
var map__30952 = p__30950;
var map__30952__$1 = cljs.core.__destructure_map(map__30952);
var opts = map__30952__$1;
var statearr_30954_33090 = state;
(statearr_30954_33090[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30955_33091 = state;
(statearr_30955_33091[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30957_33092 = state;
(statearr_30957_33092[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30937){
var G__30938 = cljs.core.first(seq30937);
var seq30937__$1 = cljs.core.next(seq30937);
var G__30939 = cljs.core.first(seq30937__$1);
var seq30937__$2 = cljs.core.next(seq30937__$1);
var G__30940 = cljs.core.first(seq30937__$2);
var seq30937__$3 = cljs.core.next(seq30937__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30938,G__30939,G__30940,seq30937__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31002 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31003){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31003 = meta31003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31004,meta31003__$1){
var self__ = this;
var _31004__$1 = this;
return (new cljs.core.async.t_cljs$core$async31002(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31003__$1));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31004){
var self__ = this;
var _31004__$1 = this;
return self__.meta31003;
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31003","meta31003",1177131177,null)], null);
}));

(cljs.core.async.t_cljs$core$async31002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31002");

(cljs.core.async.t_cljs$core$async31002.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31002.
 */
cljs.core.async.__GT_t_cljs$core$async31002 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31002(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31003){
return (new cljs.core.async.t_cljs$core$async31002(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31003));
});

}

return (new cljs.core.async.t_cljs$core$async31002(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26215__auto___33112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31101){
var state_val_31102 = (state_31101[(1)]);
if((state_val_31102 === (7))){
var inst_31060 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31060)){
var statearr_31103_33114 = state_31101__$1;
(statearr_31103_33114[(1)] = (8));

} else {
var statearr_31104_33119 = state_31101__$1;
(statearr_31104_33119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (20))){
var inst_31051 = (state_31101[(7)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31101__$1,(23),out,inst_31051);
} else {
if((state_val_31102 === (1))){
var inst_31033 = calc_state();
var inst_31034 = cljs.core.__destructure_map(inst_31033);
var inst_31035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31034,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31034,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31034,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31038 = inst_31033;
var state_31101__$1 = (function (){var statearr_31112 = state_31101;
(statearr_31112[(8)] = inst_31038);

(statearr_31112[(9)] = inst_31036);

(statearr_31112[(10)] = inst_31035);

(statearr_31112[(11)] = inst_31037);

return statearr_31112;
})();
var statearr_31113_33125 = state_31101__$1;
(statearr_31113_33125[(2)] = null);

(statearr_31113_33125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (24))){
var inst_31041 = (state_31101[(12)]);
var inst_31038 = inst_31041;
var state_31101__$1 = (function (){var statearr_31118 = state_31101;
(statearr_31118[(8)] = inst_31038);

return statearr_31118;
})();
var statearr_31119_33129 = state_31101__$1;
(statearr_31119_33129[(2)] = null);

(statearr_31119_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (4))){
var inst_31051 = (state_31101[(7)]);
var inst_31054 = (state_31101[(13)]);
var inst_31050 = (state_31101[(2)]);
var inst_31051__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31050,(0),null);
var inst_31052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31050,(1),null);
var inst_31054__$1 = (inst_31051__$1 == null);
var state_31101__$1 = (function (){var statearr_31123 = state_31101;
(statearr_31123[(7)] = inst_31051__$1);

(statearr_31123[(14)] = inst_31052);

(statearr_31123[(13)] = inst_31054__$1);

return statearr_31123;
})();
if(cljs.core.truth_(inst_31054__$1)){
var statearr_31124_33130 = state_31101__$1;
(statearr_31124_33130[(1)] = (5));

} else {
var statearr_31125_33131 = state_31101__$1;
(statearr_31125_33131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (15))){
var inst_31075 = (state_31101[(15)]);
var inst_31042 = (state_31101[(16)]);
var inst_31075__$1 = cljs.core.empty_QMARK_(inst_31042);
var state_31101__$1 = (function (){var statearr_31126 = state_31101;
(statearr_31126[(15)] = inst_31075__$1);

return statearr_31126;
})();
if(inst_31075__$1){
var statearr_31128_33132 = state_31101__$1;
(statearr_31128_33132[(1)] = (17));

} else {
var statearr_31129_33133 = state_31101__$1;
(statearr_31129_33133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (21))){
var inst_31041 = (state_31101[(12)]);
var inst_31038 = inst_31041;
var state_31101__$1 = (function (){var statearr_31130 = state_31101;
(statearr_31130[(8)] = inst_31038);

return statearr_31130;
})();
var statearr_31132_33134 = state_31101__$1;
(statearr_31132_33134[(2)] = null);

(statearr_31132_33134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (13))){
var inst_31068 = (state_31101[(2)]);
var inst_31069 = calc_state();
var inst_31038 = inst_31069;
var state_31101__$1 = (function (){var statearr_31135 = state_31101;
(statearr_31135[(8)] = inst_31038);

(statearr_31135[(17)] = inst_31068);

return statearr_31135;
})();
var statearr_31136_33137 = state_31101__$1;
(statearr_31136_33137[(2)] = null);

(statearr_31136_33137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (22))){
var inst_31095 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31137_33138 = state_31101__$1;
(statearr_31137_33138[(2)] = inst_31095);

(statearr_31137_33138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (6))){
var inst_31052 = (state_31101[(14)]);
var inst_31058 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31052,change);
var state_31101__$1 = state_31101;
var statearr_31141_33140 = state_31101__$1;
(statearr_31141_33140[(2)] = inst_31058);

(statearr_31141_33140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (25))){
var state_31101__$1 = state_31101;
var statearr_31142_33142 = state_31101__$1;
(statearr_31142_33142[(2)] = null);

(statearr_31142_33142[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (17))){
var inst_31043 = (state_31101[(18)]);
var inst_31052 = (state_31101[(14)]);
var inst_31077 = (inst_31043.cljs$core$IFn$_invoke$arity$1 ? inst_31043.cljs$core$IFn$_invoke$arity$1(inst_31052) : inst_31043.call(null,inst_31052));
var inst_31078 = cljs.core.not(inst_31077);
var state_31101__$1 = state_31101;
var statearr_31143_33144 = state_31101__$1;
(statearr_31143_33144[(2)] = inst_31078);

(statearr_31143_33144[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (3))){
var inst_31099 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31101__$1,inst_31099);
} else {
if((state_val_31102 === (12))){
var state_31101__$1 = state_31101;
var statearr_31149_33149 = state_31101__$1;
(statearr_31149_33149[(2)] = null);

(statearr_31149_33149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (2))){
var inst_31038 = (state_31101[(8)]);
var inst_31041 = (state_31101[(12)]);
var inst_31041__$1 = cljs.core.__destructure_map(inst_31038);
var inst_31042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31041__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31041__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31041__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31101__$1 = (function (){var statearr_31153 = state_31101;
(statearr_31153[(18)] = inst_31043);

(statearr_31153[(12)] = inst_31041__$1);

(statearr_31153[(16)] = inst_31042);

return statearr_31153;
})();
return cljs.core.async.ioc_alts_BANG_(state_31101__$1,(4),inst_31044);
} else {
if((state_val_31102 === (23))){
var inst_31086 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31086)){
var statearr_31155_33156 = state_31101__$1;
(statearr_31155_33156[(1)] = (24));

} else {
var statearr_31160_33157 = state_31101__$1;
(statearr_31160_33157[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (19))){
var inst_31081 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31162_33160 = state_31101__$1;
(statearr_31162_33160[(2)] = inst_31081);

(statearr_31162_33160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (11))){
var inst_31052 = (state_31101[(14)]);
var inst_31065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31052);
var state_31101__$1 = state_31101;
var statearr_31166_33165 = state_31101__$1;
(statearr_31166_33165[(2)] = inst_31065);

(statearr_31166_33165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (9))){
var inst_31072 = (state_31101[(19)]);
var inst_31052 = (state_31101[(14)]);
var inst_31042 = (state_31101[(16)]);
var inst_31072__$1 = (inst_31042.cljs$core$IFn$_invoke$arity$1 ? inst_31042.cljs$core$IFn$_invoke$arity$1(inst_31052) : inst_31042.call(null,inst_31052));
var state_31101__$1 = (function (){var statearr_31167 = state_31101;
(statearr_31167[(19)] = inst_31072__$1);

return statearr_31167;
})();
if(cljs.core.truth_(inst_31072__$1)){
var statearr_31168_33169 = state_31101__$1;
(statearr_31168_33169[(1)] = (14));

} else {
var statearr_31169_33170 = state_31101__$1;
(statearr_31169_33170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (5))){
var inst_31054 = (state_31101[(13)]);
var state_31101__$1 = state_31101;
var statearr_31170_33171 = state_31101__$1;
(statearr_31170_33171[(2)] = inst_31054);

(statearr_31170_33171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (14))){
var inst_31072 = (state_31101[(19)]);
var state_31101__$1 = state_31101;
var statearr_31171_33172 = state_31101__$1;
(statearr_31171_33172[(2)] = inst_31072);

(statearr_31171_33172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (26))){
var inst_31091 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31172_33173 = state_31101__$1;
(statearr_31172_33173[(2)] = inst_31091);

(statearr_31172_33173[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (16))){
var inst_31083 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31083)){
var statearr_31173_33174 = state_31101__$1;
(statearr_31173_33174[(1)] = (20));

} else {
var statearr_31174_33175 = state_31101__$1;
(statearr_31174_33175[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (10))){
var inst_31097 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31175_33177 = state_31101__$1;
(statearr_31175_33177[(2)] = inst_31097);

(statearr_31175_33177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (18))){
var inst_31075 = (state_31101[(15)]);
var state_31101__$1 = state_31101;
var statearr_31176_33178 = state_31101__$1;
(statearr_31176_33178[(2)] = inst_31075);

(statearr_31176_33178[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (8))){
var inst_31051 = (state_31101[(7)]);
var inst_31063 = (inst_31051 == null);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31063)){
var statearr_31179_33179 = state_31101__$1;
(statearr_31179_33179[(1)] = (11));

} else {
var statearr_31181_33180 = state_31101__$1;
(statearr_31181_33180[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__26131__auto__ = null;
var cljs$core$async$mix_$_state_machine__26131__auto____0 = (function (){
var statearr_31184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31184[(0)] = cljs$core$async$mix_$_state_machine__26131__auto__);

(statearr_31184[(1)] = (1));

return statearr_31184;
});
var cljs$core$async$mix_$_state_machine__26131__auto____1 = (function (state_31101){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31101);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e31185){var ex__26134__auto__ = e31185;
var statearr_31186_33181 = state_31101;
(statearr_31186_33181[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31101[(4)]))){
var statearr_31187_33182 = state_31101;
(statearr_31187_33182[(1)] = cljs.core.first((state_31101[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33183 = state_31101;
state_31101 = G__33183;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26131__auto__ = function(state_31101){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26131__auto____1.call(this,state_31101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26131__auto____0;
cljs$core$async$mix_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26131__auto____1;
return cljs$core$async$mix_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_31189 = f__26216__auto__();
(statearr_31189[(6)] = c__26215__auto___33112);

return statearr_31189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33185 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33185(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33188 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33188(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33189 = (function() {
var G__33190 = null;
var G__33190__1 = (function (p){
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
var G__33190__2 = (function (p,v){
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
G__33190 = function(p,v){
switch(arguments.length){
case 1:
return G__33190__1.call(this,p);
case 2:
return G__33190__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33190.cljs$core$IFn$_invoke$arity$1 = G__33190__1;
G__33190.cljs$core$IFn$_invoke$arity$2 = G__33190__2;
return G__33190;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31228 = arguments.length;
switch (G__31228) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33189(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33189(p,v);
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
var G__31249 = arguments.length;
switch (G__31249) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31244_SHARP_){
if(cljs.core.truth_((p1__31244_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31244_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31244_SHARP_.call(null,topic)))){
return p1__31244_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31244_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31256){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31256__$1));
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31256","meta31256",-38736745,null)], null);
}));

(cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255");

(cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31255.
 */
cljs.core.async.__GT_t_cljs$core$async31255 = (function cljs$core$async$__GT_t_cljs$core$async31255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31256));
});

}

return (new cljs.core.async.t_cljs$core$async31255(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26215__auto___33239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31367){
var state_val_31369 = (state_31367[(1)]);
if((state_val_31369 === (7))){
var inst_31363 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31386_33240 = state_31367__$1;
(statearr_31386_33240[(2)] = inst_31363);

(statearr_31386_33240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (20))){
var state_31367__$1 = state_31367;
var statearr_31403_33241 = state_31367__$1;
(statearr_31403_33241[(2)] = null);

(statearr_31403_33241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (1))){
var state_31367__$1 = state_31367;
var statearr_31404_33242 = state_31367__$1;
(statearr_31404_33242[(2)] = null);

(statearr_31404_33242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (24))){
var inst_31346 = (state_31367[(7)]);
var inst_31355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31346);
var state_31367__$1 = state_31367;
var statearr_31405_33243 = state_31367__$1;
(statearr_31405_33243[(2)] = inst_31355);

(statearr_31405_33243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (4))){
var inst_31294 = (state_31367[(8)]);
var inst_31294__$1 = (state_31367[(2)]);
var inst_31297 = (inst_31294__$1 == null);
var state_31367__$1 = (function (){var statearr_31406 = state_31367;
(statearr_31406[(8)] = inst_31294__$1);

return statearr_31406;
})();
if(cljs.core.truth_(inst_31297)){
var statearr_31408_33246 = state_31367__$1;
(statearr_31408_33246[(1)] = (5));

} else {
var statearr_31413_33247 = state_31367__$1;
(statearr_31413_33247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (15))){
var inst_31340 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31417_33248 = state_31367__$1;
(statearr_31417_33248[(2)] = inst_31340);

(statearr_31417_33248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (21))){
var inst_31360 = (state_31367[(2)]);
var state_31367__$1 = (function (){var statearr_31421 = state_31367;
(statearr_31421[(9)] = inst_31360);

return statearr_31421;
})();
var statearr_31422_33249 = state_31367__$1;
(statearr_31422_33249[(2)] = null);

(statearr_31422_33249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (13))){
var inst_31322 = (state_31367[(10)]);
var inst_31324 = cljs.core.chunked_seq_QMARK_(inst_31322);
var state_31367__$1 = state_31367;
if(inst_31324){
var statearr_31423_33250 = state_31367__$1;
(statearr_31423_33250[(1)] = (16));

} else {
var statearr_31424_33251 = state_31367__$1;
(statearr_31424_33251[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (22))){
var inst_31352 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
if(cljs.core.truth_(inst_31352)){
var statearr_31427_33252 = state_31367__$1;
(statearr_31427_33252[(1)] = (23));

} else {
var statearr_31428_33253 = state_31367__$1;
(statearr_31428_33253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (6))){
var inst_31294 = (state_31367[(8)]);
var inst_31348 = (state_31367[(11)]);
var inst_31346 = (state_31367[(7)]);
var inst_31346__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31294) : topic_fn.call(null,inst_31294));
var inst_31347 = cljs.core.deref(mults);
var inst_31348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31347,inst_31346__$1);
var state_31367__$1 = (function (){var statearr_31431 = state_31367;
(statearr_31431[(11)] = inst_31348__$1);

(statearr_31431[(7)] = inst_31346__$1);

return statearr_31431;
})();
if(cljs.core.truth_(inst_31348__$1)){
var statearr_31433_33254 = state_31367__$1;
(statearr_31433_33254[(1)] = (19));

} else {
var statearr_31434_33256 = state_31367__$1;
(statearr_31434_33256[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (25))){
var inst_31357 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31436_33257 = state_31367__$1;
(statearr_31436_33257[(2)] = inst_31357);

(statearr_31436_33257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (17))){
var inst_31322 = (state_31367[(10)]);
var inst_31331 = cljs.core.first(inst_31322);
var inst_31332 = cljs.core.async.muxch_STAR_(inst_31331);
var inst_31333 = cljs.core.async.close_BANG_(inst_31332);
var inst_31334 = cljs.core.next(inst_31322);
var inst_31308 = inst_31334;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31367__$1 = (function (){var statearr_31439 = state_31367;
(statearr_31439[(12)] = inst_31308);

(statearr_31439[(13)] = inst_31309);

(statearr_31439[(14)] = inst_31310);

(statearr_31439[(15)] = inst_31333);

(statearr_31439[(16)] = inst_31311);

return statearr_31439;
})();
var statearr_31440_33261 = state_31367__$1;
(statearr_31440_33261[(2)] = null);

(statearr_31440_33261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (3))){
var inst_31365 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31367__$1,inst_31365);
} else {
if((state_val_31369 === (12))){
var inst_31342 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31443_33262 = state_31367__$1;
(statearr_31443_33262[(2)] = inst_31342);

(statearr_31443_33262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (2))){
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31367__$1,(4),ch);
} else {
if((state_val_31369 === (23))){
var state_31367__$1 = state_31367;
var statearr_31444_33263 = state_31367__$1;
(statearr_31444_33263[(2)] = null);

(statearr_31444_33263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (19))){
var inst_31294 = (state_31367[(8)]);
var inst_31348 = (state_31367[(11)]);
var inst_31350 = cljs.core.async.muxch_STAR_(inst_31348);
var state_31367__$1 = state_31367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31367__$1,(22),inst_31350,inst_31294);
} else {
if((state_val_31369 === (11))){
var inst_31308 = (state_31367[(12)]);
var inst_31322 = (state_31367[(10)]);
var inst_31322__$1 = cljs.core.seq(inst_31308);
var state_31367__$1 = (function (){var statearr_31447 = state_31367;
(statearr_31447[(10)] = inst_31322__$1);

return statearr_31447;
})();
if(inst_31322__$1){
var statearr_31448_33264 = state_31367__$1;
(statearr_31448_33264[(1)] = (13));

} else {
var statearr_31450_33265 = state_31367__$1;
(statearr_31450_33265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (9))){
var inst_31344 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31452_33268 = state_31367__$1;
(statearr_31452_33268[(2)] = inst_31344);

(statearr_31452_33268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (5))){
var inst_31305 = cljs.core.deref(mults);
var inst_31306 = cljs.core.vals(inst_31305);
var inst_31307 = cljs.core.seq(inst_31306);
var inst_31308 = inst_31307;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31367__$1 = (function (){var statearr_31453 = state_31367;
(statearr_31453[(12)] = inst_31308);

(statearr_31453[(13)] = inst_31309);

(statearr_31453[(14)] = inst_31310);

(statearr_31453[(16)] = inst_31311);

return statearr_31453;
})();
var statearr_31456_33272 = state_31367__$1;
(statearr_31456_33272[(2)] = null);

(statearr_31456_33272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (14))){
var state_31367__$1 = state_31367;
var statearr_31462_33273 = state_31367__$1;
(statearr_31462_33273[(2)] = null);

(statearr_31462_33273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (16))){
var inst_31322 = (state_31367[(10)]);
var inst_31326 = cljs.core.chunk_first(inst_31322);
var inst_31327 = cljs.core.chunk_rest(inst_31322);
var inst_31328 = cljs.core.count(inst_31326);
var inst_31308 = inst_31327;
var inst_31309 = inst_31326;
var inst_31310 = inst_31328;
var inst_31311 = (0);
var state_31367__$1 = (function (){var statearr_31473 = state_31367;
(statearr_31473[(12)] = inst_31308);

(statearr_31473[(13)] = inst_31309);

(statearr_31473[(14)] = inst_31310);

(statearr_31473[(16)] = inst_31311);

return statearr_31473;
})();
var statearr_31479_33275 = state_31367__$1;
(statearr_31479_33275[(2)] = null);

(statearr_31479_33275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (10))){
var inst_31308 = (state_31367[(12)]);
var inst_31309 = (state_31367[(13)]);
var inst_31310 = (state_31367[(14)]);
var inst_31311 = (state_31367[(16)]);
var inst_31316 = cljs.core._nth(inst_31309,inst_31311);
var inst_31317 = cljs.core.async.muxch_STAR_(inst_31316);
var inst_31318 = cljs.core.async.close_BANG_(inst_31317);
var inst_31319 = (inst_31311 + (1));
var tmp31457 = inst_31308;
var tmp31458 = inst_31309;
var tmp31459 = inst_31310;
var inst_31308__$1 = tmp31457;
var inst_31309__$1 = tmp31458;
var inst_31310__$1 = tmp31459;
var inst_31311__$1 = inst_31319;
var state_31367__$1 = (function (){var statearr_31487 = state_31367;
(statearr_31487[(12)] = inst_31308__$1);

(statearr_31487[(13)] = inst_31309__$1);

(statearr_31487[(17)] = inst_31318);

(statearr_31487[(14)] = inst_31310__$1);

(statearr_31487[(16)] = inst_31311__$1);

return statearr_31487;
})();
var statearr_31492_33288 = state_31367__$1;
(statearr_31492_33288[(2)] = null);

(statearr_31492_33288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (18))){
var inst_31337 = (state_31367[(2)]);
var state_31367__$1 = state_31367;
var statearr_31493_33289 = state_31367__$1;
(statearr_31493_33289[(2)] = inst_31337);

(statearr_31493_33289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (8))){
var inst_31310 = (state_31367[(14)]);
var inst_31311 = (state_31367[(16)]);
var inst_31313 = (inst_31311 < inst_31310);
var inst_31314 = inst_31313;
var state_31367__$1 = state_31367;
if(cljs.core.truth_(inst_31314)){
var statearr_31494_33290 = state_31367__$1;
(statearr_31494_33290[(1)] = (10));

} else {
var statearr_31495_33291 = state_31367__$1;
(statearr_31495_33291[(1)] = (11));

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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_31498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31498[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_31498[(1)] = (1));

return statearr_31498;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_31367){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31367);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e31500){var ex__26134__auto__ = e31500;
var statearr_31501_33293 = state_31367;
(statearr_31501_33293[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31367[(4)]))){
var statearr_31502_33295 = state_31367;
(statearr_31502_33295[(1)] = cljs.core.first((state_31367[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33297 = state_31367;
state_31367 = G__33297;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_31367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_31367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_31505 = f__26216__auto__();
(statearr_31505[(6)] = c__26215__auto___33239);

return statearr_31505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var G__31510 = arguments.length;
switch (G__31510) {
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
var G__31532 = arguments.length;
switch (G__31532) {
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
var G__31561 = arguments.length;
switch (G__31561) {
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
var c__26215__auto___33327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var state_31638__$1 = state_31638;
var statearr_31645_33332 = state_31638__$1;
(statearr_31645_33332[(2)] = null);

(statearr_31645_33332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (1))){
var state_31638__$1 = state_31638;
var statearr_31646_33335 = state_31638__$1;
(statearr_31646_33335[(2)] = null);

(statearr_31646_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (4))){
var inst_31599 = (state_31638[(7)]);
var inst_31598 = (state_31638[(8)]);
var inst_31601 = (inst_31599 < inst_31598);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31601)){
var statearr_31647_33336 = state_31638__$1;
(statearr_31647_33336[(1)] = (6));

} else {
var statearr_31648_33337 = state_31638__$1;
(statearr_31648_33337[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (15))){
var inst_31624 = (state_31638[(9)]);
var inst_31629 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31624);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31638__$1,(17),out,inst_31629);
} else {
if((state_val_31639 === (13))){
var inst_31624 = (state_31638[(9)]);
var inst_31624__$1 = (state_31638[(2)]);
var inst_31625 = cljs.core.some(cljs.core.nil_QMARK_,inst_31624__$1);
var state_31638__$1 = (function (){var statearr_31649 = state_31638;
(statearr_31649[(9)] = inst_31624__$1);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31625)){
var statearr_31650_33346 = state_31638__$1;
(statearr_31650_33346[(1)] = (14));

} else {
var statearr_31651_33347 = state_31638__$1;
(statearr_31651_33347[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (6))){
var state_31638__$1 = state_31638;
var statearr_31653_33348 = state_31638__$1;
(statearr_31653_33348[(2)] = null);

(statearr_31653_33348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (17))){
var inst_31631 = (state_31638[(2)]);
var state_31638__$1 = (function (){var statearr_31667 = state_31638;
(statearr_31667[(10)] = inst_31631);

return statearr_31667;
})();
var statearr_31675_33351 = state_31638__$1;
(statearr_31675_33351[(2)] = null);

(statearr_31675_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (3))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (12))){
var _ = (function (){var statearr_31676 = state_31638;
(statearr_31676[(4)] = cljs.core.rest((state_31638[(4)])));

return statearr_31676;
})();
var state_31638__$1 = state_31638;
var ex31666 = (state_31638__$1[(2)]);
var statearr_31678_33353 = state_31638__$1;
(statearr_31678_33353[(5)] = ex31666);


if((ex31666 instanceof Object)){
var statearr_31679_33355 = state_31638__$1;
(statearr_31679_33355[(1)] = (11));

(statearr_31679_33355[(5)] = null);

} else {
throw ex31666;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (2))){
var inst_31597 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31598 = cnt;
var inst_31599 = (0);
var state_31638__$1 = (function (){var statearr_31685 = state_31638;
(statearr_31685[(7)] = inst_31599);

(statearr_31685[(11)] = inst_31597);

(statearr_31685[(8)] = inst_31598);

return statearr_31685;
})();
var statearr_31686_33365 = state_31638__$1;
(statearr_31686_33365[(2)] = null);

(statearr_31686_33365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (11))){
var inst_31603 = (state_31638[(2)]);
var inst_31604 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31638__$1 = (function (){var statearr_31692 = state_31638;
(statearr_31692[(12)] = inst_31603);

return statearr_31692;
})();
var statearr_31693_33367 = state_31638__$1;
(statearr_31693_33367[(2)] = inst_31604);

(statearr_31693_33367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (9))){
var inst_31599 = (state_31638[(7)]);
var _ = (function (){var statearr_31695 = state_31638;
(statearr_31695[(4)] = cljs.core.cons((12),(state_31638[(4)])));

return statearr_31695;
})();
var inst_31610 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31599) : chs__$1.call(null,inst_31599));
var inst_31611 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31599) : done.call(null,inst_31599));
var inst_31612 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31610,inst_31611);
var ___$1 = (function (){var statearr_31698 = state_31638;
(statearr_31698[(4)] = cljs.core.rest((state_31638[(4)])));

return statearr_31698;
})();
var state_31638__$1 = state_31638;
var statearr_31699_33368 = state_31638__$1;
(statearr_31699_33368[(2)] = inst_31612);

(statearr_31699_33368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (5))){
var inst_31622 = (state_31638[(2)]);
var state_31638__$1 = (function (){var statearr_31701 = state_31638;
(statearr_31701[(13)] = inst_31622);

return statearr_31701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31638__$1,(13),dchan);
} else {
if((state_val_31639 === (14))){
var inst_31627 = cljs.core.async.close_BANG_(out);
var state_31638__$1 = state_31638;
var statearr_31703_33369 = state_31638__$1;
(statearr_31703_33369[(2)] = inst_31627);

(statearr_31703_33369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (16))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31707_33370 = state_31638__$1;
(statearr_31707_33370[(2)] = inst_31634);

(statearr_31707_33370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (10))){
var inst_31599 = (state_31638[(7)]);
var inst_31615 = (state_31638[(2)]);
var inst_31616 = (inst_31599 + (1));
var inst_31599__$1 = inst_31616;
var state_31638__$1 = (function (){var statearr_31708 = state_31638;
(statearr_31708[(7)] = inst_31599__$1);

(statearr_31708[(14)] = inst_31615);

return statearr_31708;
})();
var statearr_31709_33371 = state_31638__$1;
(statearr_31709_33371[(2)] = null);

(statearr_31709_33371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (8))){
var inst_31620 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31711_33372 = state_31638__$1;
(statearr_31711_33372[(2)] = inst_31620);

(statearr_31711_33372[(1)] = (5));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_31712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31712[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_31712[(1)] = (1));

return statearr_31712;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_31638){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31638);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e31713){var ex__26134__auto__ = e31713;
var statearr_31714_33379 = state_31638;
(statearr_31714_33379[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31638[(4)]))){
var statearr_31716_33380 = state_31638;
(statearr_31716_33380[(1)] = cljs.core.first((state_31638[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_31638;
state_31638 = G__33381;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_31723 = f__26216__auto__();
(statearr_31723[(6)] = c__26215__auto___33327);

return statearr_31723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var G__31727 = arguments.length;
switch (G__31727) {
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
var c__26215__auto___33384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31765){
var state_val_31766 = (state_31765[(1)]);
if((state_val_31766 === (7))){
var inst_31739 = (state_31765[(7)]);
var inst_31740 = (state_31765[(8)]);
var inst_31739__$1 = (state_31765[(2)]);
var inst_31740__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31739__$1,(0),null);
var inst_31742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31739__$1,(1),null);
var inst_31744 = (inst_31740__$1 == null);
var state_31765__$1 = (function (){var statearr_31771 = state_31765;
(statearr_31771[(9)] = inst_31742);

(statearr_31771[(7)] = inst_31739__$1);

(statearr_31771[(8)] = inst_31740__$1);

return statearr_31771;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31772_33391 = state_31765__$1;
(statearr_31772_33391[(1)] = (8));

} else {
var statearr_31773_33392 = state_31765__$1;
(statearr_31773_33392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (1))){
var inst_31729 = cljs.core.vec(chs);
var inst_31730 = inst_31729;
var state_31765__$1 = (function (){var statearr_31775 = state_31765;
(statearr_31775[(10)] = inst_31730);

return statearr_31775;
})();
var statearr_31780_33394 = state_31765__$1;
(statearr_31780_33394[(2)] = null);

(statearr_31780_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (4))){
var inst_31730 = (state_31765[(10)]);
var state_31765__$1 = state_31765;
return cljs.core.async.ioc_alts_BANG_(state_31765__$1,(7),inst_31730);
} else {
if((state_val_31766 === (6))){
var inst_31761 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31784_33395 = state_31765__$1;
(statearr_31784_33395[(2)] = inst_31761);

(statearr_31784_33395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (3))){
var inst_31763 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31765__$1,inst_31763);
} else {
if((state_val_31766 === (2))){
var inst_31730 = (state_31765[(10)]);
var inst_31732 = cljs.core.count(inst_31730);
var inst_31733 = (inst_31732 > (0));
var state_31765__$1 = state_31765;
if(cljs.core.truth_(inst_31733)){
var statearr_31792_33397 = state_31765__$1;
(statearr_31792_33397[(1)] = (4));

} else {
var statearr_31793_33404 = state_31765__$1;
(statearr_31793_33404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (11))){
var inst_31730 = (state_31765[(10)]);
var inst_31754 = (state_31765[(2)]);
var tmp31785 = inst_31730;
var inst_31730__$1 = tmp31785;
var state_31765__$1 = (function (){var statearr_31794 = state_31765;
(statearr_31794[(11)] = inst_31754);

(statearr_31794[(10)] = inst_31730__$1);

return statearr_31794;
})();
var statearr_31795_33410 = state_31765__$1;
(statearr_31795_33410[(2)] = null);

(statearr_31795_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (9))){
var inst_31740 = (state_31765[(8)]);
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31765__$1,(11),out,inst_31740);
} else {
if((state_val_31766 === (5))){
var inst_31759 = cljs.core.async.close_BANG_(out);
var state_31765__$1 = state_31765;
var statearr_31802_33414 = state_31765__$1;
(statearr_31802_33414[(2)] = inst_31759);

(statearr_31802_33414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (10))){
var inst_31757 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31803_33423 = state_31765__$1;
(statearr_31803_33423[(2)] = inst_31757);

(statearr_31803_33423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (8))){
var inst_31742 = (state_31765[(9)]);
var inst_31739 = (state_31765[(7)]);
var inst_31730 = (state_31765[(10)]);
var inst_31740 = (state_31765[(8)]);
var inst_31749 = (function (){var cs = inst_31730;
var vec__31735 = inst_31739;
var v = inst_31740;
var c = inst_31742;
return (function (p1__31725_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31725_SHARP_);
});
})();
var inst_31750 = cljs.core.filterv(inst_31749,inst_31730);
var inst_31730__$1 = inst_31750;
var state_31765__$1 = (function (){var statearr_31804 = state_31765;
(statearr_31804[(10)] = inst_31730__$1);

return statearr_31804;
})();
var statearr_31805_33426 = state_31765__$1;
(statearr_31805_33426[(2)] = null);

(statearr_31805_33426[(1)] = (2));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_31818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31818[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_31818[(1)] = (1));

return statearr_31818;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_31765){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31765);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e31820){var ex__26134__auto__ = e31820;
var statearr_31821_33427 = state_31765;
(statearr_31821_33427[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31765[(4)]))){
var statearr_31822_33428 = state_31765;
(statearr_31822_33428[(1)] = cljs.core.first((state_31765[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_31765;
state_31765 = G__33429;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_31765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_31765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_31827 = f__26216__auto__();
(statearr_31827[(6)] = c__26215__auto___33384);

return statearr_31827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
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
var G__31829 = arguments.length;
switch (G__31829) {
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
var c__26215__auto___33436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (7))){
var inst_31835 = (state_31853[(7)]);
var inst_31835__$1 = (state_31853[(2)]);
var inst_31836 = (inst_31835__$1 == null);
var inst_31837 = cljs.core.not(inst_31836);
var state_31853__$1 = (function (){var statearr_31860 = state_31853;
(statearr_31860[(7)] = inst_31835__$1);

return statearr_31860;
})();
if(inst_31837){
var statearr_31861_33439 = state_31853__$1;
(statearr_31861_33439[(1)] = (8));

} else {
var statearr_31862_33440 = state_31853__$1;
(statearr_31862_33440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (1))){
var inst_31830 = (0);
var state_31853__$1 = (function (){var statearr_31863 = state_31853;
(statearr_31863[(8)] = inst_31830);

return statearr_31863;
})();
var statearr_31864_33443 = state_31853__$1;
(statearr_31864_33443[(2)] = null);

(statearr_31864_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (4))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31853__$1,(7),ch);
} else {
if((state_val_31854 === (6))){
var inst_31848 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31867_33444 = state_31853__$1;
(statearr_31867_33444[(2)] = inst_31848);

(statearr_31867_33444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (3))){
var inst_31850 = (state_31853[(2)]);
var inst_31851 = cljs.core.async.close_BANG_(out);
var state_31853__$1 = (function (){var statearr_31870 = state_31853;
(statearr_31870[(9)] = inst_31850);

return statearr_31870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31853__$1,inst_31851);
} else {
if((state_val_31854 === (2))){
var inst_31830 = (state_31853[(8)]);
var inst_31832 = (inst_31830 < n);
var state_31853__$1 = state_31853;
if(cljs.core.truth_(inst_31832)){
var statearr_31871_33445 = state_31853__$1;
(statearr_31871_33445[(1)] = (4));

} else {
var statearr_31872_33446 = state_31853__$1;
(statearr_31872_33446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (11))){
var inst_31830 = (state_31853[(8)]);
var inst_31840 = (state_31853[(2)]);
var inst_31841 = (inst_31830 + (1));
var inst_31830__$1 = inst_31841;
var state_31853__$1 = (function (){var statearr_31873 = state_31853;
(statearr_31873[(10)] = inst_31840);

(statearr_31873[(8)] = inst_31830__$1);

return statearr_31873;
})();
var statearr_31874_33447 = state_31853__$1;
(statearr_31874_33447[(2)] = null);

(statearr_31874_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (9))){
var state_31853__$1 = state_31853;
var statearr_31875_33450 = state_31853__$1;
(statearr_31875_33450[(2)] = null);

(statearr_31875_33450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (5))){
var state_31853__$1 = state_31853;
var statearr_31877_33451 = state_31853__$1;
(statearr_31877_33451[(2)] = null);

(statearr_31877_33451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (10))){
var inst_31845 = (state_31853[(2)]);
var state_31853__$1 = state_31853;
var statearr_31881_33452 = state_31853__$1;
(statearr_31881_33452[(2)] = inst_31845);

(statearr_31881_33452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31854 === (8))){
var inst_31835 = (state_31853[(7)]);
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31853__$1,(11),out,inst_31835);
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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_31888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31888[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_31888[(1)] = (1));

return statearr_31888;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_31853){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31853);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e31889){var ex__26134__auto__ = e31889;
var statearr_31890_33453 = state_31853;
(statearr_31890_33453[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31853[(4)]))){
var statearr_31891_33454 = state_31853;
(statearr_31891_33454[(1)] = cljs.core.first((state_31853[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33455 = state_31853;
state_31853 = G__33455;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_31893 = f__26216__auto__();
(statearr_31893[(6)] = c__26215__auto___33436);

return statearr_31893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31898 = (function (f,ch,meta31899){
this.f = f;
this.ch = ch;
this.meta31899 = meta31899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31900,meta31899__$1){
var self__ = this;
var _31900__$1 = this;
return (new cljs.core.async.t_cljs$core$async31898(self__.f,self__.ch,meta31899__$1));
}));

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31900){
var self__ = this;
var _31900__$1 = this;
return self__.meta31899;
}));

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31909 = (function (f,ch,meta31899,_,fn1,meta31910){
this.f = f;
this.ch = ch;
this.meta31899 = meta31899;
this._ = _;
this.fn1 = fn1;
this.meta31910 = meta31910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31911,meta31910__$1){
var self__ = this;
var _31911__$1 = this;
return (new cljs.core.async.t_cljs$core$async31909(self__.f,self__.ch,self__.meta31899,self__._,self__.fn1,meta31910__$1));
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31911){
var self__ = this;
var _31911__$1 = this;
return self__.meta31910;
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31894_SHARP_){
var G__31916 = (((p1__31894_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31894_SHARP_) : self__.f.call(null,p1__31894_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31916) : f1.call(null,G__31916));
});
}));

(cljs.core.async.t_cljs$core$async31909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31899","meta31899",-1471684907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31898","cljs.core.async/t_cljs$core$async31898",-178349274,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31910","meta31910",1480177616,null)], null);
}));

(cljs.core.async.t_cljs$core$async31909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31909");

(cljs.core.async.t_cljs$core$async31909.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31909.
 */
cljs.core.async.__GT_t_cljs$core$async31909 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31909(f__$1,ch__$1,meta31899__$1,___$2,fn1__$1,meta31910){
return (new cljs.core.async.t_cljs$core$async31909(f__$1,ch__$1,meta31899__$1,___$2,fn1__$1,meta31910));
});

}

return (new cljs.core.async.t_cljs$core$async31909(self__.f,self__.ch,self__.meta31899,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31919 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31919) : self__.f.call(null,G__31919));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31899","meta31899",-1471684907,null)], null);
}));

(cljs.core.async.t_cljs$core$async31898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31898");

(cljs.core.async.t_cljs$core$async31898.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31898.
 */
cljs.core.async.__GT_t_cljs$core$async31898 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31898(f__$1,ch__$1,meta31899){
return (new cljs.core.async.t_cljs$core$async31898(f__$1,ch__$1,meta31899));
});

}

return (new cljs.core.async.t_cljs$core$async31898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31922 = (function (f,ch,meta31923){
this.f = f;
this.ch = ch;
this.meta31923 = meta31923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31924,meta31923__$1){
var self__ = this;
var _31924__$1 = this;
return (new cljs.core.async.t_cljs$core$async31922(self__.f,self__.ch,meta31923__$1));
}));

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31924){
var self__ = this;
var _31924__$1 = this;
return self__.meta31923;
}));

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31923","meta31923",1831248531,null)], null);
}));

(cljs.core.async.t_cljs$core$async31922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31922");

(cljs.core.async.t_cljs$core$async31922.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31922.
 */
cljs.core.async.__GT_t_cljs$core$async31922 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31922(f__$1,ch__$1,meta31923){
return (new cljs.core.async.t_cljs$core$async31922(f__$1,ch__$1,meta31923));
});

}

return (new cljs.core.async.t_cljs$core$async31922(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31940 = (function (p,ch,meta31941){
this.p = p;
this.ch = ch;
this.meta31941 = meta31941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31942,meta31941__$1){
var self__ = this;
var _31942__$1 = this;
return (new cljs.core.async.t_cljs$core$async31940(self__.p,self__.ch,meta31941__$1));
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31942){
var self__ = this;
var _31942__$1 = this;
return self__.meta31941;
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31941","meta31941",938893104,null)], null);
}));

(cljs.core.async.t_cljs$core$async31940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31940");

(cljs.core.async.t_cljs$core$async31940.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async31940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31940.
 */
cljs.core.async.__GT_t_cljs$core$async31940 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31940(p__$1,ch__$1,meta31941){
return (new cljs.core.async.t_cljs$core$async31940(p__$1,ch__$1,meta31941));
});

}

return (new cljs.core.async.t_cljs$core$async31940(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31961 = arguments.length;
switch (G__31961) {
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
var c__26215__auto___33511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_31985){
var state_val_31986 = (state_31985[(1)]);
if((state_val_31986 === (7))){
var inst_31981 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31987_33513 = state_31985__$1;
(statearr_31987_33513[(2)] = inst_31981);

(statearr_31987_33513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (1))){
var state_31985__$1 = state_31985;
var statearr_31988_33548 = state_31985__$1;
(statearr_31988_33548[(2)] = null);

(statearr_31988_33548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (4))){
var inst_31964 = (state_31985[(7)]);
var inst_31964__$1 = (state_31985[(2)]);
var inst_31965 = (inst_31964__$1 == null);
var state_31985__$1 = (function (){var statearr_31990 = state_31985;
(statearr_31990[(7)] = inst_31964__$1);

return statearr_31990;
})();
if(cljs.core.truth_(inst_31965)){
var statearr_31991_33552 = state_31985__$1;
(statearr_31991_33552[(1)] = (5));

} else {
var statearr_31992_33559 = state_31985__$1;
(statearr_31992_33559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (6))){
var inst_31964 = (state_31985[(7)]);
var inst_31969 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31964) : p.call(null,inst_31964));
var state_31985__$1 = state_31985;
if(cljs.core.truth_(inst_31969)){
var statearr_31993_33561 = state_31985__$1;
(statearr_31993_33561[(1)] = (8));

} else {
var statearr_31998_33562 = state_31985__$1;
(statearr_31998_33562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (3))){
var inst_31983 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31985__$1,inst_31983);
} else {
if((state_val_31986 === (2))){
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31985__$1,(4),ch);
} else {
if((state_val_31986 === (11))){
var inst_31975 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_32001_33564 = state_31985__$1;
(statearr_32001_33564[(2)] = inst_31975);

(statearr_32001_33564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (9))){
var state_31985__$1 = state_31985;
var statearr_32006_33565 = state_31985__$1;
(statearr_32006_33565[(2)] = null);

(statearr_32006_33565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (5))){
var inst_31967 = cljs.core.async.close_BANG_(out);
var state_31985__$1 = state_31985;
var statearr_32007_33567 = state_31985__$1;
(statearr_32007_33567[(2)] = inst_31967);

(statearr_32007_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (10))){
var inst_31978 = (state_31985[(2)]);
var state_31985__$1 = (function (){var statearr_32008 = state_31985;
(statearr_32008[(8)] = inst_31978);

return statearr_32008;
})();
var statearr_32009_33568 = state_31985__$1;
(statearr_32009_33568[(2)] = null);

(statearr_32009_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (8))){
var inst_31964 = (state_31985[(7)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31985__$1,(11),out,inst_31964);
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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32012 = [null,null,null,null,null,null,null,null,null];
(statearr_32012[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32012[(1)] = (1));

return statearr_32012;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_31985){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_31985);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32013){var ex__26134__auto__ = e32013;
var statearr_32014_33576 = state_31985;
(statearr_32014_33576[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_31985[(4)]))){
var statearr_32015_33577 = state_31985;
(statearr_32015_33577[(1)] = cljs.core.first((state_31985[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33578 = state_31985;
state_31985 = G__33578;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_31985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_31985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32016 = f__26216__auto__();
(statearr_32016[(6)] = c__26215__auto___33511);

return statearr_32016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32021 = arguments.length;
switch (G__32021) {
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
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32088){
var state_val_32089 = (state_32088[(1)]);
if((state_val_32089 === (7))){
var inst_32084 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32090_33595 = state_32088__$1;
(statearr_32090_33595[(2)] = inst_32084);

(statearr_32090_33595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (20))){
var inst_32054 = (state_32088[(7)]);
var inst_32065 = (state_32088[(2)]);
var inst_32066 = cljs.core.next(inst_32054);
var inst_32039 = inst_32066;
var inst_32040 = null;
var inst_32041 = (0);
var inst_32042 = (0);
var state_32088__$1 = (function (){var statearr_32092 = state_32088;
(statearr_32092[(8)] = inst_32065);

(statearr_32092[(9)] = inst_32042);

(statearr_32092[(10)] = inst_32039);

(statearr_32092[(11)] = inst_32041);

(statearr_32092[(12)] = inst_32040);

return statearr_32092;
})();
var statearr_32093_33601 = state_32088__$1;
(statearr_32093_33601[(2)] = null);

(statearr_32093_33601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (1))){
var state_32088__$1 = state_32088;
var statearr_32095_33602 = state_32088__$1;
(statearr_32095_33602[(2)] = null);

(statearr_32095_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (4))){
var inst_32028 = (state_32088[(13)]);
var inst_32028__$1 = (state_32088[(2)]);
var inst_32029 = (inst_32028__$1 == null);
var state_32088__$1 = (function (){var statearr_32096 = state_32088;
(statearr_32096[(13)] = inst_32028__$1);

return statearr_32096;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32097_33608 = state_32088__$1;
(statearr_32097_33608[(1)] = (5));

} else {
var statearr_32098_33609 = state_32088__$1;
(statearr_32098_33609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (15))){
var state_32088__$1 = state_32088;
var statearr_32103_33610 = state_32088__$1;
(statearr_32103_33610[(2)] = null);

(statearr_32103_33610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (21))){
var state_32088__$1 = state_32088;
var statearr_32104_33611 = state_32088__$1;
(statearr_32104_33611[(2)] = null);

(statearr_32104_33611[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (13))){
var inst_32042 = (state_32088[(9)]);
var inst_32039 = (state_32088[(10)]);
var inst_32041 = (state_32088[(11)]);
var inst_32040 = (state_32088[(12)]);
var inst_32050 = (state_32088[(2)]);
var inst_32051 = (inst_32042 + (1));
var tmp32099 = inst_32039;
var tmp32100 = inst_32041;
var tmp32101 = inst_32040;
var inst_32039__$1 = tmp32099;
var inst_32040__$1 = tmp32101;
var inst_32041__$1 = tmp32100;
var inst_32042__$1 = inst_32051;
var state_32088__$1 = (function (){var statearr_32110 = state_32088;
(statearr_32110[(14)] = inst_32050);

(statearr_32110[(9)] = inst_32042__$1);

(statearr_32110[(10)] = inst_32039__$1);

(statearr_32110[(11)] = inst_32041__$1);

(statearr_32110[(12)] = inst_32040__$1);

return statearr_32110;
})();
var statearr_32112_33616 = state_32088__$1;
(statearr_32112_33616[(2)] = null);

(statearr_32112_33616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (22))){
var state_32088__$1 = state_32088;
var statearr_32113_33619 = state_32088__$1;
(statearr_32113_33619[(2)] = null);

(statearr_32113_33619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (6))){
var inst_32028 = (state_32088[(13)]);
var inst_32037 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32028) : f.call(null,inst_32028));
var inst_32038 = cljs.core.seq(inst_32037);
var inst_32039 = inst_32038;
var inst_32040 = null;
var inst_32041 = (0);
var inst_32042 = (0);
var state_32088__$1 = (function (){var statearr_32114 = state_32088;
(statearr_32114[(9)] = inst_32042);

(statearr_32114[(10)] = inst_32039);

(statearr_32114[(11)] = inst_32041);

(statearr_32114[(12)] = inst_32040);

return statearr_32114;
})();
var statearr_32115_33623 = state_32088__$1;
(statearr_32115_33623[(2)] = null);

(statearr_32115_33623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (17))){
var inst_32054 = (state_32088[(7)]);
var inst_32058 = cljs.core.chunk_first(inst_32054);
var inst_32059 = cljs.core.chunk_rest(inst_32054);
var inst_32060 = cljs.core.count(inst_32058);
var inst_32039 = inst_32059;
var inst_32040 = inst_32058;
var inst_32041 = inst_32060;
var inst_32042 = (0);
var state_32088__$1 = (function (){var statearr_32122 = state_32088;
(statearr_32122[(9)] = inst_32042);

(statearr_32122[(10)] = inst_32039);

(statearr_32122[(11)] = inst_32041);

(statearr_32122[(12)] = inst_32040);

return statearr_32122;
})();
var statearr_32123_33629 = state_32088__$1;
(statearr_32123_33629[(2)] = null);

(statearr_32123_33629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (3))){
var inst_32086 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32088__$1,inst_32086);
} else {
if((state_val_32089 === (12))){
var inst_32074 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32128_33643 = state_32088__$1;
(statearr_32128_33643[(2)] = inst_32074);

(statearr_32128_33643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (2))){
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32088__$1,(4),in$);
} else {
if((state_val_32089 === (23))){
var inst_32082 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32129_33645 = state_32088__$1;
(statearr_32129_33645[(2)] = inst_32082);

(statearr_32129_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (19))){
var inst_32069 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32130_33654 = state_32088__$1;
(statearr_32130_33654[(2)] = inst_32069);

(statearr_32130_33654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (11))){
var inst_32054 = (state_32088[(7)]);
var inst_32039 = (state_32088[(10)]);
var inst_32054__$1 = cljs.core.seq(inst_32039);
var state_32088__$1 = (function (){var statearr_32133 = state_32088;
(statearr_32133[(7)] = inst_32054__$1);

return statearr_32133;
})();
if(inst_32054__$1){
var statearr_32137_33667 = state_32088__$1;
(statearr_32137_33667[(1)] = (14));

} else {
var statearr_32138_33668 = state_32088__$1;
(statearr_32138_33668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (9))){
var inst_32076 = (state_32088[(2)]);
var inst_32077 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32088__$1 = (function (){var statearr_32143 = state_32088;
(statearr_32143[(15)] = inst_32076);

return statearr_32143;
})();
if(cljs.core.truth_(inst_32077)){
var statearr_32144_33672 = state_32088__$1;
(statearr_32144_33672[(1)] = (21));

} else {
var statearr_32145_33673 = state_32088__$1;
(statearr_32145_33673[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (5))){
var inst_32031 = cljs.core.async.close_BANG_(out);
var state_32088__$1 = state_32088;
var statearr_32146_33674 = state_32088__$1;
(statearr_32146_33674[(2)] = inst_32031);

(statearr_32146_33674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (14))){
var inst_32054 = (state_32088[(7)]);
var inst_32056 = cljs.core.chunked_seq_QMARK_(inst_32054);
var state_32088__$1 = state_32088;
if(inst_32056){
var statearr_32150_33675 = state_32088__$1;
(statearr_32150_33675[(1)] = (17));

} else {
var statearr_32151_33676 = state_32088__$1;
(statearr_32151_33676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (16))){
var inst_32072 = (state_32088[(2)]);
var state_32088__$1 = state_32088;
var statearr_32152_33677 = state_32088__$1;
(statearr_32152_33677[(2)] = inst_32072);

(statearr_32152_33677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32089 === (10))){
var inst_32042 = (state_32088[(9)]);
var inst_32040 = (state_32088[(12)]);
var inst_32048 = cljs.core._nth(inst_32040,inst_32042);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32088__$1,(13),out,inst_32048);
} else {
if((state_val_32089 === (18))){
var inst_32054 = (state_32088[(7)]);
var inst_32063 = cljs.core.first(inst_32054);
var state_32088__$1 = state_32088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32088__$1,(20),out,inst_32063);
} else {
if((state_val_32089 === (8))){
var inst_32042 = (state_32088[(9)]);
var inst_32041 = (state_32088[(11)]);
var inst_32044 = (inst_32042 < inst_32041);
var inst_32045 = inst_32044;
var state_32088__$1 = state_32088;
if(cljs.core.truth_(inst_32045)){
var statearr_32153_33678 = state_32088__$1;
(statearr_32153_33678[(1)] = (10));

} else {
var statearr_32154_33679 = state_32088__$1;
(statearr_32154_33679[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32155[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__);

(statearr_32155[(1)] = (1));

return statearr_32155;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1 = (function (state_32088){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32088);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32156){var ex__26134__auto__ = e32156;
var statearr_32157_33687 = state_32088;
(statearr_32157_33687[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32088[(4)]))){
var statearr_32158_33688 = state_32088;
(statearr_32158_33688[(1)] = cljs.core.first((state_32088[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33689 = state_32088;
state_32088 = G__33689;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__ = function(state_32088){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1.call(this,state_32088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32159 = f__26216__auto__();
(statearr_32159[(6)] = c__26215__auto__);

return statearr_32159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32161 = arguments.length;
switch (G__32161) {
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
var G__32177 = arguments.length;
switch (G__32177) {
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
var G__32180 = arguments.length;
switch (G__32180) {
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
var c__26215__auto___33736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32205){
var state_val_32206 = (state_32205[(1)]);
if((state_val_32206 === (7))){
var inst_32200 = (state_32205[(2)]);
var state_32205__$1 = state_32205;
var statearr_32207_33740 = state_32205__$1;
(statearr_32207_33740[(2)] = inst_32200);

(statearr_32207_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (1))){
var inst_32182 = null;
var state_32205__$1 = (function (){var statearr_32208 = state_32205;
(statearr_32208[(7)] = inst_32182);

return statearr_32208;
})();
var statearr_32209_33742 = state_32205__$1;
(statearr_32209_33742[(2)] = null);

(statearr_32209_33742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (4))){
var inst_32185 = (state_32205[(8)]);
var inst_32185__$1 = (state_32205[(2)]);
var inst_32186 = (inst_32185__$1 == null);
var inst_32187 = cljs.core.not(inst_32186);
var state_32205__$1 = (function (){var statearr_32210 = state_32205;
(statearr_32210[(8)] = inst_32185__$1);

return statearr_32210;
})();
if(inst_32187){
var statearr_32211_33755 = state_32205__$1;
(statearr_32211_33755[(1)] = (5));

} else {
var statearr_32212_33756 = state_32205__$1;
(statearr_32212_33756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (6))){
var state_32205__$1 = state_32205;
var statearr_32214_33758 = state_32205__$1;
(statearr_32214_33758[(2)] = null);

(statearr_32214_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (3))){
var inst_32202 = (state_32205[(2)]);
var inst_32203 = cljs.core.async.close_BANG_(out);
var state_32205__$1 = (function (){var statearr_32216 = state_32205;
(statearr_32216[(9)] = inst_32202);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32205__$1,inst_32203);
} else {
if((state_val_32206 === (2))){
var state_32205__$1 = state_32205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32205__$1,(4),ch);
} else {
if((state_val_32206 === (11))){
var inst_32185 = (state_32205[(8)]);
var inst_32194 = (state_32205[(2)]);
var inst_32182 = inst_32185;
var state_32205__$1 = (function (){var statearr_32217 = state_32205;
(statearr_32217[(7)] = inst_32182);

(statearr_32217[(10)] = inst_32194);

return statearr_32217;
})();
var statearr_32218_33759 = state_32205__$1;
(statearr_32218_33759[(2)] = null);

(statearr_32218_33759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (9))){
var inst_32185 = (state_32205[(8)]);
var state_32205__$1 = state_32205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32205__$1,(11),out,inst_32185);
} else {
if((state_val_32206 === (5))){
var inst_32182 = (state_32205[(7)]);
var inst_32185 = (state_32205[(8)]);
var inst_32189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32185,inst_32182);
var state_32205__$1 = state_32205;
if(inst_32189){
var statearr_32220_33761 = state_32205__$1;
(statearr_32220_33761[(1)] = (8));

} else {
var statearr_32221_33763 = state_32205__$1;
(statearr_32221_33763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (10))){
var inst_32197 = (state_32205[(2)]);
var state_32205__$1 = state_32205;
var statearr_32222_33764 = state_32205__$1;
(statearr_32222_33764[(2)] = inst_32197);

(statearr_32222_33764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (8))){
var inst_32182 = (state_32205[(7)]);
var tmp32219 = inst_32182;
var inst_32182__$1 = tmp32219;
var state_32205__$1 = (function (){var statearr_32232 = state_32205;
(statearr_32232[(7)] = inst_32182__$1);

return statearr_32232;
})();
var statearr_32233_33766 = state_32205__$1;
(statearr_32233_33766[(2)] = null);

(statearr_32233_33766[(1)] = (2));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32234[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32234[(1)] = (1));

return statearr_32234;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32205){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32205);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32235){var ex__26134__auto__ = e32235;
var statearr_32236_33767 = state_32205;
(statearr_32236_33767[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32205[(4)]))){
var statearr_32241_33768 = state_32205;
(statearr_32241_33768[(1)] = cljs.core.first((state_32205[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33769 = state_32205;
state_32205 = G__33769;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32242 = f__26216__auto__();
(statearr_32242[(6)] = c__26215__auto___33736);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32244 = arguments.length;
switch (G__32244) {
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
var c__26215__auto___33779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32297){
var state_val_32298 = (state_32297[(1)]);
if((state_val_32298 === (7))){
var inst_32293 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32299_33805 = state_32297__$1;
(statearr_32299_33805[(2)] = inst_32293);

(statearr_32299_33805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (1))){
var inst_32248 = (new Array(n));
var inst_32249 = inst_32248;
var inst_32250 = (0);
var state_32297__$1 = (function (){var statearr_32300 = state_32297;
(statearr_32300[(7)] = inst_32249);

(statearr_32300[(8)] = inst_32250);

return statearr_32300;
})();
var statearr_32301_33806 = state_32297__$1;
(statearr_32301_33806[(2)] = null);

(statearr_32301_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (4))){
var inst_32253 = (state_32297[(9)]);
var inst_32253__$1 = (state_32297[(2)]);
var inst_32256 = (inst_32253__$1 == null);
var inst_32259 = cljs.core.not(inst_32256);
var state_32297__$1 = (function (){var statearr_32302 = state_32297;
(statearr_32302[(9)] = inst_32253__$1);

return statearr_32302;
})();
if(inst_32259){
var statearr_32303_33808 = state_32297__$1;
(statearr_32303_33808[(1)] = (5));

} else {
var statearr_32306_33809 = state_32297__$1;
(statearr_32306_33809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (15))){
var inst_32287 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32307_33810 = state_32297__$1;
(statearr_32307_33810[(2)] = inst_32287);

(statearr_32307_33810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (13))){
var state_32297__$1 = state_32297;
var statearr_32310_33811 = state_32297__$1;
(statearr_32310_33811[(2)] = null);

(statearr_32310_33811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (6))){
var inst_32250 = (state_32297[(8)]);
var inst_32283 = (inst_32250 > (0));
var state_32297__$1 = state_32297;
if(cljs.core.truth_(inst_32283)){
var statearr_32313_33814 = state_32297__$1;
(statearr_32313_33814[(1)] = (12));

} else {
var statearr_32314_33815 = state_32297__$1;
(statearr_32314_33815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (3))){
var inst_32295 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32297__$1,inst_32295);
} else {
if((state_val_32298 === (12))){
var inst_32249 = (state_32297[(7)]);
var inst_32285 = cljs.core.vec(inst_32249);
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32297__$1,(15),out,inst_32285);
} else {
if((state_val_32298 === (2))){
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32297__$1,(4),ch);
} else {
if((state_val_32298 === (11))){
var inst_32272 = (state_32297[(2)]);
var inst_32277 = (new Array(n));
var inst_32249 = inst_32277;
var inst_32250 = (0);
var state_32297__$1 = (function (){var statearr_32315 = state_32297;
(statearr_32315[(7)] = inst_32249);

(statearr_32315[(8)] = inst_32250);

(statearr_32315[(10)] = inst_32272);

return statearr_32315;
})();
var statearr_32316_33822 = state_32297__$1;
(statearr_32316_33822[(2)] = null);

(statearr_32316_33822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (9))){
var inst_32249 = (state_32297[(7)]);
var inst_32270 = cljs.core.vec(inst_32249);
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32297__$1,(11),out,inst_32270);
} else {
if((state_val_32298 === (5))){
var inst_32253 = (state_32297[(9)]);
var inst_32263 = (state_32297[(11)]);
var inst_32249 = (state_32297[(7)]);
var inst_32250 = (state_32297[(8)]);
var inst_32261 = (inst_32249[inst_32250] = inst_32253);
var inst_32263__$1 = (inst_32250 + (1));
var inst_32264 = (inst_32263__$1 < n);
var state_32297__$1 = (function (){var statearr_32317 = state_32297;
(statearr_32317[(11)] = inst_32263__$1);

(statearr_32317[(12)] = inst_32261);

return statearr_32317;
})();
if(cljs.core.truth_(inst_32264)){
var statearr_32318_33824 = state_32297__$1;
(statearr_32318_33824[(1)] = (8));

} else {
var statearr_32319_33825 = state_32297__$1;
(statearr_32319_33825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (14))){
var inst_32290 = (state_32297[(2)]);
var inst_32291 = cljs.core.async.close_BANG_(out);
var state_32297__$1 = (function (){var statearr_32322 = state_32297;
(statearr_32322[(13)] = inst_32290);

return statearr_32322;
})();
var statearr_32327_33827 = state_32297__$1;
(statearr_32327_33827[(2)] = inst_32291);

(statearr_32327_33827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (10))){
var inst_32281 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32328_33828 = state_32297__$1;
(statearr_32328_33828[(2)] = inst_32281);

(statearr_32328_33828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (8))){
var inst_32263 = (state_32297[(11)]);
var inst_32249 = (state_32297[(7)]);
var tmp32321 = inst_32249;
var inst_32249__$1 = tmp32321;
var inst_32250 = inst_32263;
var state_32297__$1 = (function (){var statearr_32334 = state_32297;
(statearr_32334[(7)] = inst_32249__$1);

(statearr_32334[(8)] = inst_32250);

return statearr_32334;
})();
var statearr_32335_33829 = state_32297__$1;
(statearr_32335_33829[(2)] = null);

(statearr_32335_33829[(1)] = (2));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32338[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32338[(1)] = (1));

return statearr_32338;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32297){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32297);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32339){var ex__26134__auto__ = e32339;
var statearr_32340_33835 = state_32297;
(statearr_32340_33835[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32297[(4)]))){
var statearr_32341_33836 = state_32297;
(statearr_32341_33836[(1)] = cljs.core.first((state_32297[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33837 = state_32297;
state_32297 = G__33837;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32342 = f__26216__auto__();
(statearr_32342[(6)] = c__26215__auto___33779);

return statearr_32342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32350 = arguments.length;
switch (G__32350) {
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
var c__26215__auto___33848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32406){
var state_val_32408 = (state_32406[(1)]);
if((state_val_32408 === (7))){
var inst_32402 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32414_33850 = state_32406__$1;
(statearr_32414_33850[(2)] = inst_32402);

(statearr_32414_33850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (1))){
var inst_32358 = [];
var inst_32359 = inst_32358;
var inst_32360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32406__$1 = (function (){var statearr_32417 = state_32406;
(statearr_32417[(7)] = inst_32360);

(statearr_32417[(8)] = inst_32359);

return statearr_32417;
})();
var statearr_32419_33851 = state_32406__$1;
(statearr_32419_33851[(2)] = null);

(statearr_32419_33851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (4))){
var inst_32363 = (state_32406[(9)]);
var inst_32363__$1 = (state_32406[(2)]);
var inst_32366 = (inst_32363__$1 == null);
var inst_32367 = cljs.core.not(inst_32366);
var state_32406__$1 = (function (){var statearr_32422 = state_32406;
(statearr_32422[(9)] = inst_32363__$1);

return statearr_32422;
})();
if(inst_32367){
var statearr_32424_33852 = state_32406__$1;
(statearr_32424_33852[(1)] = (5));

} else {
var statearr_32425_33853 = state_32406__$1;
(statearr_32425_33853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (15))){
var inst_32359 = (state_32406[(8)]);
var inst_32394 = cljs.core.vec(inst_32359);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32406__$1,(18),out,inst_32394);
} else {
if((state_val_32408 === (13))){
var inst_32388 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32426_33854 = state_32406__$1;
(statearr_32426_33854[(2)] = inst_32388);

(statearr_32426_33854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (6))){
var inst_32359 = (state_32406[(8)]);
var inst_32391 = inst_32359.length;
var inst_32392 = (inst_32391 > (0));
var state_32406__$1 = state_32406;
if(cljs.core.truth_(inst_32392)){
var statearr_32427_33855 = state_32406__$1;
(statearr_32427_33855[(1)] = (15));

} else {
var statearr_32428_33856 = state_32406__$1;
(statearr_32428_33856[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (17))){
var inst_32399 = (state_32406[(2)]);
var inst_32400 = cljs.core.async.close_BANG_(out);
var state_32406__$1 = (function (){var statearr_32429 = state_32406;
(statearr_32429[(10)] = inst_32399);

return statearr_32429;
})();
var statearr_32430_33862 = state_32406__$1;
(statearr_32430_33862[(2)] = inst_32400);

(statearr_32430_33862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (3))){
var inst_32404 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32406__$1,inst_32404);
} else {
if((state_val_32408 === (12))){
var inst_32359 = (state_32406[(8)]);
var inst_32381 = cljs.core.vec(inst_32359);
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32406__$1,(14),out,inst_32381);
} else {
if((state_val_32408 === (2))){
var state_32406__$1 = state_32406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32406__$1,(4),ch);
} else {
if((state_val_32408 === (11))){
var inst_32369 = (state_32406[(11)]);
var inst_32363 = (state_32406[(9)]);
var inst_32359 = (state_32406[(8)]);
var inst_32377 = inst_32359.push(inst_32363);
var tmp32435 = inst_32359;
var inst_32359__$1 = tmp32435;
var inst_32360 = inst_32369;
var state_32406__$1 = (function (){var statearr_32437 = state_32406;
(statearr_32437[(12)] = inst_32377);

(statearr_32437[(7)] = inst_32360);

(statearr_32437[(8)] = inst_32359__$1);

return statearr_32437;
})();
var statearr_32438_33887 = state_32406__$1;
(statearr_32438_33887[(2)] = null);

(statearr_32438_33887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (9))){
var inst_32360 = (state_32406[(7)]);
var inst_32373 = cljs.core.keyword_identical_QMARK_(inst_32360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32406__$1 = state_32406;
var statearr_32439_33888 = state_32406__$1;
(statearr_32439_33888[(2)] = inst_32373);

(statearr_32439_33888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (5))){
var inst_32369 = (state_32406[(11)]);
var inst_32370 = (state_32406[(13)]);
var inst_32363 = (state_32406[(9)]);
var inst_32360 = (state_32406[(7)]);
var inst_32369__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32363) : f.call(null,inst_32363));
var inst_32370__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32369__$1,inst_32360);
var state_32406__$1 = (function (){var statearr_32440 = state_32406;
(statearr_32440[(11)] = inst_32369__$1);

(statearr_32440[(13)] = inst_32370__$1);

return statearr_32440;
})();
if(inst_32370__$1){
var statearr_32446_33889 = state_32406__$1;
(statearr_32446_33889[(1)] = (8));

} else {
var statearr_32447_33890 = state_32406__$1;
(statearr_32447_33890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (14))){
var inst_32369 = (state_32406[(11)]);
var inst_32363 = (state_32406[(9)]);
var inst_32383 = (state_32406[(2)]);
var inst_32384 = [];
var inst_32385 = inst_32384.push(inst_32363);
var inst_32359 = inst_32384;
var inst_32360 = inst_32369;
var state_32406__$1 = (function (){var statearr_32448 = state_32406;
(statearr_32448[(14)] = inst_32383);

(statearr_32448[(15)] = inst_32385);

(statearr_32448[(7)] = inst_32360);

(statearr_32448[(8)] = inst_32359);

return statearr_32448;
})();
var statearr_32449_33892 = state_32406__$1;
(statearr_32449_33892[(2)] = null);

(statearr_32449_33892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (16))){
var state_32406__$1 = state_32406;
var statearr_32450_33893 = state_32406__$1;
(statearr_32450_33893[(2)] = null);

(statearr_32450_33893[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (10))){
var inst_32375 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
if(cljs.core.truth_(inst_32375)){
var statearr_32451_33894 = state_32406__$1;
(statearr_32451_33894[(1)] = (11));

} else {
var statearr_32452_33895 = state_32406__$1;
(statearr_32452_33895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (18))){
var inst_32396 = (state_32406[(2)]);
var state_32406__$1 = state_32406;
var statearr_32454_33896 = state_32406__$1;
(statearr_32454_33896[(2)] = inst_32396);

(statearr_32454_33896[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (8))){
var inst_32370 = (state_32406[(13)]);
var state_32406__$1 = state_32406;
var statearr_32456_33897 = state_32406__$1;
(statearr_32456_33897[(2)] = inst_32370);

(statearr_32456_33897[(1)] = (10));


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
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32458[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32458[(1)] = (1));

return statearr_32458;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32406){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32406);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32462){var ex__26134__auto__ = e32462;
var statearr_32463_33900 = state_32406;
(statearr_32463_33900[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32406[(4)]))){
var statearr_32464_33901 = state_32406;
(statearr_32464_33901[(1)] = cljs.core.first((state_32406[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33902 = state_32406;
state_32406 = G__33902;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32465 = f__26216__auto__();
(statearr_32465[(6)] = c__26215__auto___33848);

return statearr_32465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
