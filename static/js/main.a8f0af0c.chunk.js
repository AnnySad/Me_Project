(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){e.exports={superInput:"Input_superInput__G3A1J",errorInput:"Input_errorInput__fBHzp",error:"Input_error__2HYec",input:"Input_input__1y8M5"}},17:function(e,n,t){e.exports={checkbox:"Checkbox_checkbox__jujru",spanClassName:"Checkbox_spanClassName__2t1yF"}},18:function(e,n,t){e.exports={default:"Button_default__2Ue5X",red:"Button_red__2Ap5-",button:"Button_button__2wQgV",blink:"Button_blink__3AWt1"}},23:function(e,n,t){e.exports={content:"404_content__1PmPX"}},29:function(e,n,t){},30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(22),s=t.n(a),i=(t(29),t(30),t(8)),o=t(2),j=t.p+"static/media/cat404.8fcdbb21.png",u=t(23),b=t.n(u),d=t(0);var l=function(){return Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(d.jsx)("img",{src:j})]})};var p=function(){return Object(d.jsx)("div",{children:"Login"})};var h=function(){return Object(d.jsx)("div",{children:"CheckIn"})};var x=function(){return Object(d.jsx)("div",{children:"PasswordRecovery"})},O=t(10);var _=function(){var e=Object(c.useState)(!1),n=Object(O.a)(e,2);return n[0],n[1],Object(d.jsx)("div",{children:"Profile"})};var f=function(){return Object(d.jsx)("div",{children:"EnteringNewPassword"})},m=t(11),v=t(12),g=t(14),k=t.n(g),N=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(k.a.error," ").concat(i||""),u="".concat(k.a.input," ").concat(a?k.a.errorInput:k.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(m.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),a&&Object(d.jsx)("span",{className:j,children:a})]})},C=t(6),y=t.n(C),w=t(17),I=t.n(w),M=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(I.a.checkbox," ").concat(c||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(m.a)({type:"checkbox",onChange:function(e){n&&n(e),t&&t(e.currentTarget.checked)},className:s},a)),r&&Object(d.jsx)("span",{className:I.a.spanClassName,children:r})]})},H=t(18),P=t.n(H),L=function(e){var n=e.red,t=e.className,c=Object(v.a)(e,["red","className"]),r="".concat(n?P.a.red:P.a.default," ").concat(t);return Object(d.jsx)("button",Object(m.a)({className:r},c))};var B=function(){var e=Object(c.useState)(!1),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{className:y.a.blue}),Object(d.jsx)("div",{children:Object(d.jsx)(M,{checked:t,onChangeChecked:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(L,{children:"click"})})]})},F="/login",S="/check-in",T="/profile",A="/testing",E="/password-recovery",W="/entering-new-password";var z=function(){return Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(o.a,{to:F})}}),Object(d.jsx)(o.b,{path:F,render:function(){return Object(d.jsx)(p,{})}}),Object(d.jsx)(o.b,{path:S,render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(o.b,{path:T,render:function(){return Object(d.jsx)(_,{})}}),Object(d.jsx)(o.b,{path:A,render:function(){return Object(d.jsx)(B,{})}}),Object(d.jsx)(o.b,{path:E,render:function(){return Object(d.jsx)(x,{})}}),Object(d.jsx)(o.b,{path:W,render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(o.b,{render:function(){return Object(d.jsx)(l,{})}})]})};var J=function(){var e=Object(c.useState)(!1),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(d.jsxs)("div",{className:y.a.menuWrapper,children:[Object(d.jsx)("div",{className:y.a.burgerMenu,onClick:function(){r(!t)},children:"\u2630"}),Object(d.jsxs)("div",{className:"".concat(y.a.containerMenuLinks," ").concat(t&&y.a.activeMenu),children:[Object(d.jsx)(i.b,{to:F,className:y.a.link,children:"login"}),Object(d.jsx)(i.b,{to:S,className:y.a.link,children:"check-in"}),Object(d.jsx)(i.b,{to:T,className:y.a.link,children:"profile"}),Object(d.jsx)(i.b,{to:A,className:y.a.link,children:"testing"}),Object(d.jsx)(i.b,{to:E,className:y.a.link,children:"password-recovery"}),Object(d.jsx)(i.b,{to:W,className:y.a.link,children:"entering-new-password"})]})]})};var K=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(J,{}),Object(d.jsx)(z,{})]})})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),X()},6:function(e,n,t){e.exports={link:"Header_link__2Vmwu",header:"Header_header__1Xwyi",blue:"Header_blue__2u6ZM",menuWrapper:"Header_menuWrapper__29xMj",burgerMenu:"Header_burgerMenu__3nzj-",containerMenuLinks:"Header_containerMenuLinks__2tkqZ",activeMenu:"Header_activeMenu__iqZdg",menuLinks:"Header_menuLinks__2vQzs",active:"Header_active__AS62N"}}},[[37,1,2]]]);
//# sourceMappingURL=main.a8f0af0c.chunk.js.map