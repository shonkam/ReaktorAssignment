(this["webpackJsonpwarehouse-product-listing-app"]=this["webpackJsonpwarehouse-product-listing-app"]||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(14),s=n.n(i),r=n(5),o=n(3),l=n.n(o),a=function(){return l.a.get("/products/gloves",{timeout:999999}).then((function(t){return t.data}))},u=function(){return l.a.get("/products/facemasks",{timeout:999999}).then((function(t){return t.data}))},j=function(){return l.a.get("/products/beanies",{timeout:999999}).then((function(t){return t.data}))},h=n(0),d=function(t){var e=t.product;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.type}),Object(h.jsx)("td",{children:e.color}),Object(h.jsx)("td",{children:e.price}),Object(h.jsx)("td",{children:e.manufacturer}),Object(h.jsx)("td",{children:e.availability})]})},b=function(){var t=Object(c.useState)(null),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(null),o=Object(r.a)(s,2),l=o[0],b=o[1],f=function(t){if(b(null),"gloves"===t)try{i("gloves"),a().then((function(t){0!==t.length&&b(t)}))}catch(e){console.log(e)}if("facemasks"===t)try{i("facemasks"),u().then((function(t){0!==t.length&&b(t)}))}catch(e){console.log(e)}if("beanies"===t)try{i("beanies"),j().then((function(t){0!==t.length&&b(t)}))}catch(e){console.log(e)}};return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return f("gloves")},children:"List gloves"}),Object(h.jsx)("button",{onClick:function(){return f("facemasks")},children:"List facemasks"}),Object(h.jsx)("button",{onClick:function(){return f("beanies")},children:"List beanies"}),null===l?null===n?Object(h.jsx)("h1",{children:"Please select the type of items you want to list"}):Object(h.jsxs)("h1",{children:["Loading a list of ",n,"... Hang on!"]}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["List of ",n]}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Type"}),Object(h.jsx)("th",{children:"Color"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Manufacturer"}),Object(h.jsx)("th",{children:"Availability"})]}),l.map((function(t){return Object(h.jsx)(d,{product:t},t.id)}))]})})]})]})};s.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.46cf3bb0.chunk.js.map