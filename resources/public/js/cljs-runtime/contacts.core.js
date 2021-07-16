goog.provide('contacts.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

contacts.core.nav = (function (){var G__27716 = (function contacts$core$nav(props__26496__auto__,maybe_ref__26497__auto__){
var vec__27717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26496__auto__),maybe_ref__26497__auto__], null);

return helix.core.get_react().createElement("nav",(function (){var obj27721 = ({"className":"py-4 shadow"});
return obj27721;
})(),helix.core.get_react().createElement("div",(function (){var obj27725 = ({"className":"container"});
return obj27725;
})(),helix.core.get_react().createElement("h2",(function (){var obj27728 = ({"className":"text-xl"});
return obj27728;
})(),"Contact Book")));
});
if(goog.DEBUG === true){
var G__27729 = G__27716;
goog.object.set(G__27729,"displayName","contacts.core/nav");

return G__27729;
} else {
return G__27716;
}
})();




contacts.core.app = (function (){var G__27732 = (function contacts$core$app(props__26496__auto__,maybe_ref__26497__auto__){
var vec__27736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26496__auto__),maybe_ref__26497__auto__], null);

return helix.core.get_react().createElement(helix.core.Fragment,null,helix.core.get_react().createElement(contacts.core.nav,null));
});
if(goog.DEBUG === true){
var G__27739 = G__27732;
goog.object.set(G__27739,"displayName","contacts.core/app");

return G__27739;
} else {
return G__27732;
}
})();



contacts.core.init = (function contacts$core$init(){
return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(contacts.core.app,null),document.getElementById("app"));
});
goog.exportSymbol('contacts.core.init', contacts.core.init);

//# sourceMappingURL=contacts.core.js.map
