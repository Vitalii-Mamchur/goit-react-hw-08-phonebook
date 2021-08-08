(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{11:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return O}));var r=n(3),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),u=Object(r.b)("contacts/fetchContactError"),o=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/changeFilter")},116:function(t,e,n){"use strict";n.r(e);var r,c,a=n(0),u=n.n(a),o=n(21),s=n.n(o),i=(n(68),n(69),n(39)),b=n(40),j=n(42),l=n(41),O=n(10),d=n(6),f={home:"/",register:"/register",login:"/login",contacts:"/contacts"},h=(n(73),n(17)),g=n(16),p=(n(93),n(2)),v=Object(O.b)((function(t){return{isAuthenticated:g.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"Navbar",children:[Object(p.jsx)("li",{children:Object(p.jsx)(h.b,{exact:!0,to:f.home,className:"NavLink",activeClassName:"NavLink--active",children:"Home"})}),e&&Object(p.jsx)("li",{children:Object(p.jsx)(h.b,{to:f.contacts,className:"NavLink",activeClassName:"NavLink--active",children:"Contacts"})})]})})})),x=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"Navbar",children:[Object(p.jsx)("li",{children:Object(p.jsx)(h.b,{to:"/register",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Create account"})}),Object(p.jsx)("li",{children:Object(p.jsx)(h.b,{to:"/login",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Login"})})]})})},m=n.p+"static/media/default-avatar.e582e4ba.png",C=n(35),k=n.n(C),S=n(131),y={onLogout:g.a.logOut},N=Object(O.b)((function(t){return{name:g.c.getUserName(t),avatar:m}}),y)((function(t){var e=t.name,n=t.avatar,r=t.onLogout;return Object(p.jsxs)("div",{className:k.a.container,children:[Object(p.jsx)("img",{src:n,alt:"Avatar",className:k.a.avatar}),Object(p.jsxs)("span",{className:k.a.name,children:["Welcome, ",e]}),Object(p.jsx)(S.a,{type:"button",onClick:r,variant:"outlined",color:"primary",children:"Logout"})]})})),E=n(57),U=n.n(E),A=Object(O.b)((function(t){return{isAuthenticated:g.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("header",{className:U.a.Header,children:[Object(p.jsx)(v,{}),e?Object(p.jsx)(N,{}):Object(p.jsx)(x,{})]})})),q=n(58),w=n.n(q),R=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(w.a,{type:"Circles",color:"#00BFFF",height:100,width:100})})},_=n(52),L=n(23),I=n(34),T=n(26),z=["component","isAuthenticated","redirectTo"],B=Object(O.b)((function(t){return{isAuthenticated:T.a.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(I.a)(t,z);return Object(p.jsx)(d.b,Object(L.a)(Object(L.a)({},c),{},{render:function(t){return n?Object(p.jsx)(e,Object(L.a)({},t)):Object(p.jsx)(d.a,{to:r})}}))})),F=["component","isAuthenticated","redirectTo"],M=Object(O.b)((function(t){return{isAuthenticated:T.a.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(I.a)(t,F);return Object(p.jsx)(d.b,Object(L.a)(Object(L.a)({},c),{},{render:function(t){return n&&c.restricted?Object(p.jsx)(d.a,{to:r}):Object(p.jsx)(e,Object(L.a)({},t))}}))})),G=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,137))})),H=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,138))})),J=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,139))})),D=Object(a.lazy)((function(){return n.e(0).then(n.bind(null,140))})),W=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(A,{}),Object(p.jsx)(_.a,{children:Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)(R,{}),children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(M,{exact:!0,path:f.home,component:G}),Object(p.jsx)(M,{path:f.register,restricted:!0,redirectTo:f.home,component:H}),Object(p.jsx)(M,{path:f.login,restricted:!0,redirectTo:f.home,component:J}),Object(p.jsx)(B,{path:f.contacts,component:D,redirectTo:f.login})]})})})]})}}]),n}(a.Component),Y={onGetCurrentUser:g.a.getCurrentUser},K=Object(O.b)(null,Y)(W),P=n(33),Q=n(3),V=n(60),X=n.n(V),Z=n(20),$=n(4),tt=n(8),et=n(11),nt=Object(Q.c)([],(r={},Object($.a)(r,et.j,(function(t,e){return e.payload})),Object($.a)(r,et.c,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object($.a)(r,et.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),rt=Object(Q.c)(!1,(c={},Object($.a)(c,et.i,(function(){return!0})),Object($.a)(c,et.j,(function(){return!1})),Object($.a)(c,et.h,(function(){return!1})),Object($.a)(c,et.b,(function(){return!0})),Object($.a)(c,et.c,(function(){return!1})),Object($.a)(c,et.a,(function(){return!1})),Object($.a)(c,et.f,(function(){return!0})),Object($.a)(c,et.g,(function(){return!1})),Object($.a)(c,et.e,(function(){return!1})),c)),ct=Object(Q.c)("",Object($.a)({},et.d,(function(t,e){return e.payload}))),at=Object(tt.b)({items:nt,filter:ct,loading:rt}),ut=n(61),ot=n.n(ut),st=[].concat(Object(P.a)(Object(Q.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[X.a]),it={key:"auth",storage:ot.a,whitelist:["token"]},bt=Object(Q.a)({reducer:{auth:Object(Z.g)(it,g.b),contacts:at},middleware:st,devTools:!1}),jt={store:bt,persistor:Object(Z.h)(bt)},lt=n(62);s.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(O.a,{store:jt.store,children:Object(p.jsx)(lt.a,{loading:null,persistor:jt.persistor,children:Object(p.jsx)(h.a,{children:Object(p.jsx)(K,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return N.a}));var r,c,a,u,o=n(3),s={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},i=n(4),b=n(8),j={name:null,email:null},l=Object(o.c)(j,(r={},Object(i.a)(r,s.registerSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.loginSuccess,(function(t,e){return e.payload.user})),Object(i.a)(r,s.logoutSuccess,(function(){return j})),Object(i.a)(r,s.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),O=Object(o.c)(null,(c={},Object(i.a)(c,s.registerSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.loginSuccess,(function(t,e){return e.payload.token})),Object(i.a)(c,s.logoutSuccess,(function(){return null})),c)),d=function(t,e){return e.payload},f=Object(o.c)(null,(a={},Object(i.a)(a,s.registerError,d),Object(i.a)(a,s.loginError,d),Object(i.a)(a,s.logoutError,d),Object(i.a)(a,s.getCurrentUserError,d),a)),h=Object(o.c)(!1,(u={},Object(i.a)(u,s.registerSuccess,(function(){return!0})),Object(i.a)(u,s.loginSuccess,(function(){return!0})),Object(i.a)(u,s.getCurrentUserSuccess,(function(){return!0})),Object(i.a)(u,s.registerError,(function(){return!1})),Object(i.a)(u,s.loginError,(function(){return!1})),Object(i.a)(u,s.getCurrentUserError,(function(){return!1})),Object(i.a)(u,s.logoutSuccess,(function(){return!1})),u)),g=Object(b.b)({user:l,isAuthenticated:h,token:O,error:f}),p=n(19),v=n.n(p),x=n(29),m=n(22),C=n.n(m);C.a.defaults.baseURL="https://connections-api.herokuapp.com/";var k=function(t){C.a.defaults.headers.common.Authorization="Bearer ".concat(t)},S=function(){C.a.defaults.headers.common.Authorization=""},y={register:function(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.registerRequest()),e.prev=1,e.next=4,C.a.post("/users/signup",t);case 4:r=e.sent,k(r.data.token),n(s.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(x.a)(v.a.mark((function e(n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(s.loginRequest()),e.prev=1,e.next=4,C.a.post("/users/login",t);case 4:r=e.sent,k(r.data.token),n(s.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(s.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(x.a)(v.a.mark((function t(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(s.logoutRequest()),t.prev=1,t.next=4,C.a.post("/users/logout");case 4:S(),e(s.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(s.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(x.a)(v.a.mark((function t(e,n){var r,c,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return k(c),e(s.getCurrentUserRequest()),t.prev=5,t.next=8,C.a.get("users/current");case 8:a=t.sent,e(s.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(s.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},N=n(26)},26:function(t,e,n){"use strict";e.a={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}}},35:function(t,e,n){t.exports={container:"UserMenu_container__868co",avatar:"UserMenu_avatar__3YqSG",name:"UserMenu_name__2hBJw"}},52:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n(0);var r=n(59),c=n.n(r),a=n(2),u=function(t){var e=t.children;return Object(a.jsx)("div",{className:c.a.Container,children:e})}},57:function(t,e,n){t.exports={Header:"AppNavBar_Header__3yIny"}},59:function(t,e,n){t.exports={Container:"Container_Container__3kpiG"}},69:function(t,e,n){},73:function(t,e,n){},93:function(t,e,n){}},[[116,5,6]]]);
//# sourceMappingURL=main.630f97be.chunk.js.map