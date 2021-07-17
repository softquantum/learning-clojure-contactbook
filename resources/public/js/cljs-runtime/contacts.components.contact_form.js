goog.provide('contacts.components.contact_form');

contacts.components.contact_form.contact_display_item = (function (){var G__36061 = (function contacts$components$contact_form$contact_display_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36062 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__36065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);
var map__36065__$1 = cljs.core.__destructure_map(map__36065);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36065__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36065__$1,new cljs.core.Keyword(null,"value","value",305978217));

return helix.core.get_react().createElement("p",null,helix.core.get_react().createElement("strong",null,contacts.utils.make_label_str(label)),value);
});
if(goog.DEBUG === true){
var G__36066 = G__36061;
goog.object.set(G__36066,"displayName","contacts.components.contact-form/contact-display-item");

return G__36066;
} else {
return G__36061;
}
})();




contacts.components.contact_form.contact_display = (function (){var G__36069 = (function contacts$components$contact_form$contact_display(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__36073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36070,(0),null);
var map__36073__$1 = cljs.core.__destructure_map(map__36073);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

return helix.core.get_react().createElement(helix.core.Fragment,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_display_item,(function (){var obj36075 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(contact,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i});
return obj36075;
})());
}),contacts.utils.contact_form_fields));
});
if(goog.DEBUG === true){
var G__36076 = G__36069;
goog.object.set(G__36076,"displayName","contacts.components.contact-form/contact-display");

return G__36076;
} else {
return G__36069;
}
})();




contacts.components.contact_form.contact_edit_item = (function (){var G__36079 = (function contacts$components$contact_form$contact_edit_item(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36080 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__36083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36080,(0),null);
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("label",(function (){var obj36085 = ({"htmlFor":label,"className":"font-bold"});
return obj36085;
})(),contacts.utils.make_label_str(label)),helix.core.get_react().createElement("input",(function (){var obj36087 = ({"id":label,"className":"shadow border rounded w-full py-2 px-3 mb-3","value":helix.impl.props.or_undefined(value),"onChange":on_change});
return obj36087;
})()));
});
if(goog.DEBUG === true){
var G__36088 = G__36079;
goog.object.set(G__36088,"displayName","contacts.components.contact-form/contact-edit-item");

return G__36088;
} else {
return G__36079;
}
})();




contacts.components.contact_form.contact_edit = (function (){var G__36092 = (function contacts$components$contact_form$contact_edit(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36093 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);
var map__36096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093,(0),null);
var map__36096__$1 = cljs.core.__destructure_map(map__36096);
var contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"contact","contact",609093372));

var vec__36097 = helix.hooks.use_state(contact);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36097,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36097,(1),null);
var vec__36100 = contacts.state.use_app_state();
var app_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36100,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36100,(1),null);
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(app_state);
var map__36103 = actions;
var map__36103__$1 = cljs.core.__destructure_map(map__36103);
var add_contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"add-contact","add-contact",711092342));
var update_contact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"update-contact","update-contact",-1253870740));
return helix.core.get_react().createElement("form",(function (){var obj36105 = ({"onSubmit":(function (e){
e.preventDefault();

if(cljs.core.truth_(selected)){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic([contacts.utils.api_host,"/contacts/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected))].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__36106 = state;
var map__36106__$1 = cljs.core.__destructure_map(map__36106);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),first_name,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),last_name,new cljs.core.Keyword(null,"email","email",1415816706),email], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var G__36107 = cljs.core.first(new cljs.core.Keyword(null,"contact","contact",609093372).cljs$core$IFn$_invoke$arity$1(response));
return (update_contact.cljs$core$IFn$_invoke$arity$1 ? update_contact.cljs$core$IFn$_invoke$arity$1(G__36107) : update_contact.call(null,G__36107));
})], null);
})()], 0));
} else {
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([contacts.utils.api_host,"/contacts"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__36108 = state;
var map__36108__$1 = cljs.core.__destructure_map(map__36108);
var first_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"first_name","first_name",-1744629757));
var last_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"last_name","last_name",44937527));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"email","email",1415816706));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),first_name,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),last_name,new cljs.core.Keyword(null,"email","email",1415816706),email], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var G__36109 = cljs.core.first(response);
return (add_contact.cljs$core$IFn$_invoke$arity$1 ? add_contact.cljs$core$IFn$_invoke$arity$1(G__36109) : add_contact.call(null,G__36109));
})], null);
})()], 0));
}
})});
return obj36105;
})(),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return helix.core.get_react().createElement(contacts.components.contact_form.contact_edit_item,(function (){var obj36111 = ({"label":v,"value":cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v)),"key":i,"on-change":(function (p1__36089_SHARP_){
var G__36112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v),p1__36089_SHARP_.target.value);
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__36112) : set_state.call(null,G__36112));
})});
return obj36111;
})());
}),contacts.utils.contact_form_fields),helix.core.get_react().createElement("button",(function (){var obj36114 = ({"type":"submit","className":"bg-green-500 py-2 px-4 w-full text-white"});
return obj36114;
})(),"Submit"));
});
if(goog.DEBUG === true){
var G__36115 = G__36092;
goog.object.set(G__36115,"displayName","contacts.components.contact-form/contact-edit");

return G__36115;
} else {
return G__36092;
}
})();




contacts.components.contact_form.contact_form = (function (){var G__36118 = (function contacts$components$contact_form$contact_form(props__26563__auto__,maybe_ref__26564__auto__){
var vec__36119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__26563__auto__),maybe_ref__26564__auto__], null);

var vec__36122 = helix.hooks.use_state(false);
var edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36122,(0),null);
var set_edit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36122,(1),null);
var vec__36125 = contacts.state.use_app_state();
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36125,(1),null);
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state);
var new_contact = new cljs.core.Keyword(null,"new-contact","new-contact",-1319881990).cljs$core$IFn$_invoke$arity$1(actions);
var G__36128_36151 = helix.hooks.wrap_fx((function (){
if(cljs.core.not(selected)){
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(true) : set_edit.call(null,true));
} else {
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(false) : set_edit.call(null,false));
}
}));
var G__36129_36152 = [selected];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__36128_36151,G__36129_36152) : helix.hooks.raw_use_effect.call(null,G__36128_36151,G__36129_36152));

return helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("div",(function (){var obj36131 = ({"className":"mb-2 flex"});
return obj36131;
})(),helix.core.get_react().createElement("button",(function (){var obj36133 = ({"className":"bg-green-500 py-1 px-4 rounded text-white","onClick":(function (){
return (new_contact.cljs$core$IFn$_invoke$arity$0 ? new_contact.cljs$core$IFn$_invoke$arity$0() : new_contact.call(null));
})});
return obj36133;
})(),"New contact"),(cljs.core.truth_(selected)?helix.core.get_react().createElement("button",(function (){var obj36135 = ({"className":"bg-green-500 ml-2 py-1 px-4 rounded text-white","onClick":(function (){
var G__36136 = cljs.core.not(edit);
return (set_edit.cljs$core$IFn$_invoke$arity$1 ? set_edit.cljs$core$IFn$_invoke$arity$1(G__36136) : set_edit.call(null,G__36136));
})});
return obj36135;
})(),(cljs.core.truth_(edit)?"Cancel":"Edit Contact")):null)),(cljs.core.truth_(edit)?helix.core.get_react().createElement(contacts.components.contact_form.contact_edit,(function (){var obj36138 = ({"contact":selected});
return obj36138;
})()):helix.core.get_react().createElement(contacts.components.contact_form.contact_display,(function (){var obj36140 = ({"contact":selected});
return obj36140;
})())));
});
if(goog.DEBUG === true){
var G__36141 = G__36118;
goog.object.set(G__36141,"displayName","contacts.components.contact-form/contact-form");

return G__36141;
} else {
return G__36118;
}
})();




//# sourceMappingURL=contacts.components.contact_form.js.map
