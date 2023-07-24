(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(7),r=c(17),i=c(6),o=c(15),l=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/setQuery",payload:e}},m=function(e){return{type:"filter/setStatus",payload:e}},f={query:"",status:"all"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/setQuery":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/setStatus":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=function(e){return{type:"todos/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},v=Object(i.combineReducers)({currentTodo:j,filter:O,todos:p}),y=Object(i.createStore)(v,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),N=c(9),g=c(5),T=c.n(g),w=c(0),k=(c(26),c(27),c(11)),S=c.n(k),E=s.b,C=s.c,M=c(1),_=function(e){var t=e.todos,c=e.selectedTodo,n=E(),a=function(e){n(d(e))};return Object(M.jsx)(M.Fragment,{children:t.length?Object(M.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"#"}),Object(M.jsx)("th",{children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("th",{children:"Title"}),Object(M.jsx)("th",{children:" "})]})}),Object(M.jsx)("tbody",{children:t.map((function(e){return Object(M.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(M.jsx)("td",{className:"is-vcentered",children:e.id}),Object(M.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(M.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("td",{className:"is-vcentered is-expanded",children:Object(M.jsx)("p",{className:S()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(M.jsx)("td",{className:"has-text-right is-vcentered",children:Object(M.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:a.bind(null,e),children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:S()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id},{"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]}):Object(M.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},V=c(3);var q=function(e){var t=e.selectValue,c=Object(w.useState)(""),n=Object(V.a)(c,2),a=n[0],s=n[1],r=E(),i=Object(w.useCallback)(function(e,t,c){var n;return function(a){clearTimeout(n),n=window.setTimeout((function(){e(t(a))}),c)}}(r,h,300),[]);return Object(M.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(M.jsx)("p",{className:"control",children:Object(M.jsx)("span",{className:"select",children:Object(M.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){var t=e.target.value;r(m(t))},children:[Object(M.jsx)("option",{value:"all",children:"All"}),Object(M.jsx)("option",{value:"active",children:"Active"}),Object(M.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(M.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(M.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){var t=e.target.value;s(t),i(t)}}),Object(M.jsx)("span",{className:"icon is-left",children:Object(M.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!a&&Object(M.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(M.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s(""),i("")}})})]})]})},B=(c(29),function(){return Object(M.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(M.jsx)("div",{className:"Loader__content"})})});function D(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var I=function(e){var t=e.todo,c=Object(w.useState)(null),n=Object(V.a)(c,2),a=n[0],s=n[1],r=E(),i=function(){var e=Object(N.a)(T.a.mark((function e(){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.userId,D("/users/".concat(n));case 2:c=e.sent,s(Object(b.a)(Object(b.a)({},t),{},{user:c}));case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();Object(w.useEffect)((function(){i()}),[]);return Object(M.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(M.jsx)("div",{className:"modal-background"}),a?Object(M.jsxs)("div",{className:"modal-card",children:[Object(M.jsxs)("header",{className:"modal-card-head",children:[Object(M.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a.id)}),Object(M.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){r(u())}})]}),Object(M.jsxs)("div",{className:"modal-card-body",children:[Object(M.jsx)("p",{className:"block","data-cy":"modal-title",children:a.title}),Object(M.jsxs)("p",{className:"block","data-cy":"modal-user",children:[a.completed?Object(M.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(M.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(M.jsx)("a",{href:"mailto:".concat(a.user.email),children:a.user.name})]})]})]}):Object(M.jsx)(B,{})]})},L=function(e){return e.toLowerCase()},R=function(){var e=C((function(e){return e.todos})),t=C((function(e){return e.currentTodo})),c=C((function(e){return e.filter})),n=c.query,a=c.status,s=E(),r=function(){var e=Object(N.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/todos");case 2:t=e.sent,s(x(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(w.useEffect)((function(){r()}),[]);var i=Object(w.useMemo)((function(){return e.filter((function(e){switch(a){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}))}),[a,e]),o=Object(w.useMemo)((function(){return i.filter((function(e){var t=L(e.title),c=L(n.trim());return t.includes(c)}))}),[i,n]);return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"section",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)("h1",{className:"title",children:"Todos:"}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(q,{selectValue:a})}),Object(M.jsx)("div",{className:"block",children:e.length?Object(M.jsx)(_,{todos:o,selectedTodo:t}):Object(M.jsx)(B,{})})]})})}),t&&Object(M.jsx)(I,{todo:t})]})},A=function(){return Object(M.jsx)(s.a,{store:y,children:Object(M.jsx)(r.a,{children:Object(M.jsx)(R,{})})})};a.a.render(Object(M.jsx)(A,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.16a5a521.chunk.js.map