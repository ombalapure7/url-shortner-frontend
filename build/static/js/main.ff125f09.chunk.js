(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(22),c=r.n(s),l=(r(27),r(4)),i=r.n(l),o=r(5),u=r(3),d=r(6),j=r.n(d),b=r(2),p=r(9),m=r(0);var h=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],n=t[1],s=Object(a.useRef)(),c=Object(a.useRef)(),l=Object(b.f)(),d=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==s.current.value&&""!==c.current.value){e.next=4;break}return n("Email and password are mandatory!"),e.abrupt("return");case 4:return n(""),r={email:s.current.value,password:c.current.value},e.prev=6,e.next=9,j.a.post("".concat("https://guvi-task-session-38.herokuapp.com/api/v1/auth/login"),r);case 9:a=e.sent,localStorage.setItem("url_shortner",JSON.stringify(a.data)),l("/urls",{replace:!0}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),n("User may not exist or the account has not been verified!");case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container d-flex justify-content-center flex-wrap flex-column",children:[Object(m.jsx)("div",{style:{border:"1px solid lightgray",padding:"1rem",margin:"2rem",borderRadius:"1rem"},children:Object(m.jsxs)("form",{className:"py-5",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label fw-bold",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",ref:s})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label fw-bold",children:"Password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",ref:c})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(p.b,{to:"/signup",children:Object(m.jsx)("button",{style:{color:"dodgerblue",fontWeight:"600",borderStyle:"none",backgroundColor:"#fff"},children:Object(m.jsx)("u",{children:"Create Account"})})}),"|",Object(m.jsx)(p.b,{to:"/forgot-password",children:Object(m.jsx)("button",{style:{color:"#f76865",fontWeight:"600",borderStyle:"none",backgroundColor:"#fff"},children:Object(m.jsx)("u",{children:"Forgot Password"})})})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success",onClick:d,children:"Login"})]})]})}),Object(m.jsx)("div",{children:r?Object(m.jsx)("p",{className:"d-flex justify-content-center alert alert-danger",role:"alert",children:r}):null})]})};var f=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)(""),c=Object(u.a)(s,2),l=c[0],d=c[1],b=Object(a.useRef)(),p=Object(a.useRef)(),h=Object(a.useRef)(),f=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),""===p.current.value||""===h.current.value?d("Username, Email and password are mandatory!"):d(""),r={name:b.current.value,email:p.current.value,password:h.current.value},e.prev=3,e.next=6,j.a.post("".concat("https://guvi-task-session-38.herokuapp.com/api/v1/auth/register"),r);case 6:a=e.sent,s={email:a.data.email,token:a.data.token,activated:a.data.activated},localStorage.setItem("url_shortner_user",JSON.stringify(s)),n(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),d("User registration failed, try again some time later...");case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container d-flex justify-content-center flex-column",children:[Object(m.jsx)("div",{style:{border:"1px solid lightgray",padding:"1rem",margin:"2rem",borderRadius:"1rem",boxSizing:"border-box"},children:Object(m.jsxs)("form",{className:"py-5",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form-label fw-bold",children:"Username"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"name",ref:b})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label fw-bold",children:"Email address"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",ref:p})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label fw-bold",children:"Password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",ref:h})]}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)("button",{className:"btn btn-primary",type:"button",onClick:f,children:"Register"})})]})}),Object(m.jsx)("div",{children:l?Object(m.jsx)("p",{className:"d-flex justify-content-center alert alert-danger",role:"alert",children:"Username, Email and Password are mandatory!"}):null}),Object(m.jsx)("div",{children:r?Object(m.jsxs)("p",{className:"d-flex justify-content-center alert alert-success",role:"alert",children:["An email has been sent to ",p.current.value,", to confirm your registration!"]}):null})]})};var x=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],n=t[1],s=Object(a.useRef)(),c=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(""),t.preventDefault(),!s){e.next=14;break}if(""!==s.current.value){e.next=6;break}return n("Please enter an email id!"),e.abrupt("return");case 6:return e.prev=6,e.next=9,j.a.patch("".concat("https://guvi-task-session-38.herokuapp.com/api/v1/auth/forgot-password"),{email:s.current.value});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),n("User does not exist...");case 14:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",style:{border:"1px solid lightgray",marginTop:"2rem",borderRadius:"1rem"},children:[Object(m.jsxs)("form",{className:"py-5",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label fw-bold",children:"Email"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"email",ref:s,placeholder:"Enter email to get password reset link"})]}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)("button",{className:"btn btn-warning",type:"button",onClick:c,style:{marginTop:"1rem"},children:"Send Password Reset Link"})})]}),Object(m.jsx)("div",{children:r?Object(m.jsx)("p",{className:"d-flex justify-content-center alert alert-danger",role:"alert",children:r}):null})]})};var O=function(){var e=Object(b.g)(),t=Object(a.useState)(""),r=Object(u.a)(t,2),n=r[0],s=r[1],c=Object(a.useRef)(),l=function(){var t=Object(o.a)(i.a.mark((function t(r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s(""),r.preventDefault(),!c){t.next=14;break}if(""!==c.current.value){t.next=6;break}return s("Please enter a password!"),t.abrupt("return");case 6:return t.prev=6,t.next=9,j.a.patch("".concat("https://guvi-task-session-38.herokuapp.com/api/v1/auth/reset-password"),{email:e.email,password:c.current.value});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(6),s("User does not exist...");case 14:case"end":return t.stop()}}),t,null,[[6,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",style:{border:"1px solid lightgray",marginTop:"2rem",borderRadius:"1rem"},children:[Object(m.jsxs)("form",{className:"py-5",children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsxs)("label",{htmlFor:"password",className:"form-label fw-bold",children:['Enter new password for "',e.email,'"']}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"password",ref:c,placeholder:"New password"})]}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)("button",{className:"btn btn-success",type:"button",onClick:l,style:{marginTop:"1rem"},children:"Reset Password"})})]}),Object(m.jsx)("div",{children:n?Object(m.jsx)("p",{className:"d-flex justify-content-center alert alert-danger",role:"alert",children:n}):null})]})},v="https://guvi-task-session-38.herokuapp.com/api/v1/url";var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),r=t[0],n=t[1],s=Object(a.useState)(""),c=Object(u.a)(s,2),l=c[0],d=c[1],p=Object(a.useState)(!1),h=Object(u.a)(p,2),f=h[0],x=h[1],O=Object(a.useRef)(),g=Object(a.useState)(""),y=Object(u.a)(g,2),N=y[0],w=y[1],k=Object(b.f)();function S(){return(S=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("url_shortner")||d("Somethings not rigth, login again to use the URL shortner!"),!O){e.next=10;break}if(""!==O.current.value){e.next=5;break}return d("Enter a valid URL!"),e.abrupt("return");case 5:return d(""),e.next=8,j.a.post("".concat(v),{long:O.current.value});case 8:O.current.value="",R();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return E.apply(this,arguments)}function E(){return E=Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(v);case 2:if(t=e.sent,!((r=t.data.urls).length<1)){e.next=7;break}return d("No Urls present in the database!"),e.abrupt("return");case 7:n(r);case 8:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function U(){return(U=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(!0),j.a.get("".concat(v,"/").concat(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){if(localStorage.getItem("url_shortner")){var e=JSON.parse(localStorage.getItem("url_shortner"));w(e.name)}}()}),[]),Object(a.useEffect)((function(){R()}),[]),Object(a.useEffect)((function(){R()}),[f]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"input-group mb-3 py-5",children:[Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter a long URL",ref:O}),Object(m.jsx)("button",{onClick:function(){return S.apply(this,arguments)},className:"input-group-text",children:"Create Short URL"})]}),Object(m.jsxs)("table",{className:"table table-striped",style:{textAlign:"center"},children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Long URL"}),Object(m.jsx)("th",{scope:"col",children:"Short URL"}),Object(m.jsx)("th",{scope:"col",children:"Clicks"})]})}),Object(m.jsx)("tbody",{children:r.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.long}),Object(m.jsx)("td",{children:Object(m.jsx)("a",{href:e.long,onClick:function(){return function(e){return U.apply(this,arguments)}(e.short)},children:e.short})}),Object(m.jsx)("td",{children:e.clicks})]},e._id)}))})]}),Object(m.jsx)("div",{children:l?Object(m.jsx)("p",{className:"d-flex justify-content-center alert alert-danger",role:"alert",children:l}):null}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"d-flex justify-content-around align-middle flex-wrap",children:[Object(m.jsx)("big",{children:Object(m.jsxs)("p",{className:"fw-bold",children:["Hello ",Object(m.jsx)("i",{children:N.split(" ")[0]})," !"]})}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){localStorage.getItem("url_shortner")&&localStorage.removeItem("url_shortner"),k("/",{replace:!0})},children:"Logout"})]})})]})};r(48);var y=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("nav",{className:"navbar navbar-dark bg-dark",style:{backgroundColor:"#e3f2fd"},children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("span",{style:{margin:"0 auto",fontSize:"2rem"},className:"navbar-text",children:Object(m.jsxs)("a",{href:"/",style:{textDecoration:"none"},children:["URL Shortner",Object(m.jsx)("span",{children:Object(m.jsx)("i",{className:"bi bi-link-45deg"})})]})})})})}),Object(m.jsx)(p.a,{children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/",element:Object(m.jsx)(h,{})}),Object(m.jsx)(b.a,{path:"/urls",element:Object(m.jsx)(g,{})}),Object(m.jsx)(b.a,{path:"/signup",element:Object(m.jsx)(f,{})}),Object(m.jsx)(b.a,{path:"/forgot-password",element:Object(m.jsx)(x,{})}),Object(m.jsx)(b.a,{path:"/reset-password/:email",element:Object(m.jsx)(O,{})})]})})]})},N="http://localhost:5000/api/v1/url",w=n.a.createContext(),k=function(e){var t=e.children,r=Object(a.useState)([]),s=Object(u.a)(r,2),c=s[0],l=s[1];function d(){return(d=Object(o.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(N);case 2:t=e.sent,r=t.data.urls,l(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return n.a.useEffect((function(){!function(){d.apply(this,arguments)}()}),[]),Object(m.jsx)(w.Provider,{value:c,children:t})};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{children:Object(m.jsx)(y,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ff125f09.chunk.js.map