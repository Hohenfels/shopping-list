(this.webpackJsonpfriendslist=this.webpackJsonpfriendslist||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(12),s=n.n(a),r=n(8),l=n(11),o=(n(17),n(3)),j=n(4),d=n(0),u=function(){var e=localStorage.getItem("shoppingList"),t=Object(c.useState)(e?JSON.parse(e):[]),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(""),u=Object(l.a)(s,2),m=u[0],b=u[1];Object(c.useEffect)((function(){document.title="My shopping list",localStorage.setItem("shoppingList",JSON.stringify(i))}));var O=i.reduce((function(e,t){return e+t.quantity}),0),f=function(){if(m)if(i.find((function(e){return e.itemName===m})))alert("Cette \xe9l\xe9ment existe d\xe9j\xe0 dans la liste :-)");else{var e={itemName:m,isSelected:!1,quantity:1};a([].concat(Object(r.a)(i),[e]))}},h=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(r.a)(i);if(t)n[e].quantity++;else{if(n[e].quantity-1<=0){var c=i.filter((function(t){return t.itemName!==n[e].itemName}));return void a(c)}n[e].quantity--}a(n)};return Object(d.jsx)("div",{className:"app-background",children:Object(d.jsxs)("div",{className:"main-container",children:[Object(d.jsxs)("div",{className:"add-item-box",children:[Object(d.jsx)("input",{onChange:function(e){return b(e.target.value)},onKeyPress:function(e){return function(e){"Enter"===e.key&&f()}(e)},className:"add-item-input",placeholder:"Truc a acheter",maxLength:"15"}),Object(d.jsx)("button",{onClick:f,children:Object(d.jsx)(o.a,{icon:j.e})})]}),Object(d.jsx)("div",{className:"item-list",children:i.map((function(e,t){return Object(d.jsxs)("div",{className:"item-container",children:[Object(d.jsx)("div",{className:"item-name",onClick:function(){return function(e){var t=Object(r.a)(i);t[e].isSelected?t[e].isSelected=!1:t[e].isSelected=!0,a(t)}(t)},children:e.isSelected?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{icon:j.a}),Object(d.jsx)("span",{className:"completed",children:e.itemName})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{icon:j.d}),Object(d.jsx)("span",{children:e.itemName})]})}),Object(d.jsxs)("div",{className:"quantity",children:[Object(d.jsx)("button",{children:Object(d.jsx)(o.a,{onClick:function(){return h(t,!1)},icon:j.b})}),Object(d.jsx)("span",{children:e.quantity}),Object(d.jsx)("button",{children:Object(d.jsx)(o.a,{onClick:function(){return h(t)},icon:j.c})})]})]},"".concat(e.itemName,"-").concat(t))}))}),Object(d.jsxs)("div",{className:"total",children:["Total: ",O]})]})})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.179a61fc.chunk.js.map