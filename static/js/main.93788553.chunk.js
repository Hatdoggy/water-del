(this.webpackJsonpwater_delivery=this.webpackJsonpwater_delivery||[]).push([[0],{78:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s(17),i=s.n(n);function l(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"circle circle1"}),Object(c.jsx)("div",{className:"circle circle2"}),Object(c.jsx)("div",{className:"circle circle3"})]})}var r=s(15);function d(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"main_land",children:[Object(c.jsxs)("div",{className:"text",children:[Object(c.jsx)("h1",{children:"Pure Water Delivery"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor dui, luctus vitae sollicitudin ut, egestas id est. Nam vel fringilla mi. Sed vel accumsan metus, eu rhoncus neque. Fusce eget justo ipsum. Cras viverra, justo nec ornare lobortis, erat augue pretium tortor, sit amet imperdiet justo est nec tellus."}),Object(c.jsx)("h3",{children:"How it Works"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor dui, luctus vitae sollicitudin ut, egestas id est. Nam vel fringilla mi. Sed vel accumsan metus, eu rhoncus neque. Fusce eget justo ipsum. Cras viverra, justo nec ornare lobortis, erat augue pretium tortor, sit amet imperdiet justo est nec tellus."}),Object(c.jsxs)("div",{className:"landing_btn",children:[Object(c.jsx)("button",{className:"dark",children:"Learn More..."}),Object(c.jsx)(r.b,{to:"/register",children:Object(c.jsx)("button",{className:"light",children:"Register"})})]})]}),Object(c.jsx)("div",{className:"landingImg",children:Object(c.jsx)("img",{src:"/images/main_img.svg",alt:"delivery"})})]})]})}var j=s(14),o=s(8),b=s(4);function u(e){var t=e.name;return Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsx)("label",{for:e.for,children:e.label}),Object(c.jsx)("input",{type:e.type,id:e.id,name:e.name,value:e.values[t],onChange:e.change,required:!0})]})}var m=[{label:"First Name",for:"fname",id:"fname",type:"text",name:"fname"},{label:"Last Name",for:"lname",id:"lname",type:"text",name:"lname"},{label:"Full Address",for:"address",id:"address",type:"text",name:"address"},{label:"Cell number",for:"num",id:"num",type:"text",name:"num"},{label:"Username",for:"uname",id:"uname",type:"text",name:"uname"},{label:"Password",for:"pass",id:"pass",type:"password",name:"pass"}];function O(e){var t=Object(a.useState)(!1),s=Object(b.a)(t,2),n=(s[0],s[1],Object(a.useState)({fname:"",lname:"",address:"",num:"",uname:"",pass:""})),i=Object(b.a)(n,2),r=i[0],d=i[1];function O(e){d(Object(o.a)(Object(o.a)({},r),{},Object(j.a)({},e.target.name,e.target.value))),console.log(r)}return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsxs)("div",{className:"reg_main",children:[Object(c.jsxs)("div",{className:"registration",children:[Object(c.jsx)("h2",{children:"Register Account"}),Object(c.jsx)("div",{className:"form-reg",children:Object(c.jsxs)("form",{action:"/custM",onSubmit:function(t){t.preventDefault(),e.history.push({pathname:"/custM",values:r})},children:[m.map((function(e,t){return Object(c.jsx)(u,{for:e.for,label:e.label,name:e.name,values:r,change:O,id:e.id,type:e.type},t)})),Object(c.jsx)("button",{className:"dark",type:"submit",children:"Register"})]})}),Object(c.jsx)("a",{href:"/login",children:"Already have an account"})]}),Object(c.jsxs)("div",{className:"reg_image",children:[Object(c.jsx)("img",{src:"../images/Register.svg"}),Object(c.jsxs)("div",{className:"reg_text",children:[Object(c.jsx)("h3",{children:"Note"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]})]})}function h(e){var t=Object(a.useState)({uname:"",pass:""}),s=Object(b.a)(t,2),n=s[0],i=s[1];function r(e){i(Object(o.a)(Object(o.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"main_Login",children:Object(c.jsxs)("div",{className:"registration",children:[Object(c.jsx)("h1",{children:"Login Account"}),Object(c.jsxs)("div",{className:"form-reg",children:[Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.history.push({pathname:"/custM",values:n})},children:[Object(c.jsxs)("div",{className:"userInput",id:"unameLogin",children:[Object(c.jsx)("label",{for:"uname",children:"Username"}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"text",id:"uname",name:"uname",value:n.uname,onChange:r,required:!0})})]}),Object(c.jsxs)("div",{className:"userInput",id:"passLogin",children:[Object(c.jsx)("label",{for:"pass",children:"Password"}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"password",id:"pass",name:"pass",value:n.pass,onChange:r,required:!0})})]}),Object(c.jsx)("button",{className:"dark",type:"submit",children:"Test"})]}),Object(c.jsx)("a",{href:"/register",children:"Don't have an account"})]}),Object(c.jsx)("a",{href:"#",children:"Forgot your password?"}),Object(c.jsx)("div",{className:"reg_image",children:Object(c.jsx)("img",{src:"../images/login.svg"})})]})})]})}var x=s(57),p=s(92),f=s(94),v={fname:"John",lname:"Dalisay",address:"Cebu,Philippines",num:"092122384"};function g(e){var t=Object(a.useState)(!1),s=Object(b.a)(t,2),n=s[0],i=s[1],l=Object(a.useState)("main"),r=Object(b.a)(l,2),d=r[0],j=r[1],u=Object(a.useState)(!1),m=Object(b.a)(u,2),O=m[0],h=m[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),k=y[0],D=y[1],I=Object(a.useState)(!1),A=Object(b.a)(I,2),w=A[0],L=A[1],B=Object(a.useState)({btn:!1,arr:!1}),M=Object(b.a)(B,2),F=M[0],E=M[1],R=Object(a.useState)([]),U=Object(b.a)(R,2),_=U[0],T=U[1],z=e.location&&e.location.values||{},J=z.uname,H=z.address,Y=z.pass,V=z.num,K=z.fname,Q=z.lname;"undefined"===typeof H&&(H=v.address,V=v.num,K=v.fname,Q=v.lname);var X=Object(a.useState)({uname:J,add:H,pass:Y,num:V,fname:K,lname:Q}),Z=Object(b.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)({dateOfdelivery:"",name:"",gal:"",map:"",contact:""}),se=Object(b.a)(te,2),ce=se[0],ae=se[1];document.querySelector("#landing").style.display="block",document.querySelector("#landing").style.background="white",window.onclick=function(e){e.target==document.getElementById("myModal")&&(document.getElementById("myModal").style.display="none",D(!1))};return"admin"===$.uname&&"admin123"===$.pass&&!1===O&&h(!0),F.arr&&(console.log(_),console.log(ce),T((function(e){return[].concat(Object(x.a)(e),[ce])})),E(Object(o.a)(Object(o.a)({},F),{},{arr:!1}))),Object(c.jsxs)("div",{children:[Object(c.jsx)(q,{click:function(e){i(!e)},button:n,user:$.uname,update:j,list:_,admin:O,dash:function(t){console.log(inf),e.history.push({pathname:"/adminDash",deli:ce})}}),Object(c.jsx)(p.a,{in:n,children:Object(c.jsx)(N,{uname:$.uname,update:j})}),"main"===d&&Object(c.jsx)(W,{btn:n,update:j}),"deliv"===d&&Object(c.jsx)(S,{btn:n,deli:ce,upd:ae,mod:L,modal:w,fin:F,finUpd:E,list:_}),"acc"===d&&Object(c.jsx)(C,{btn:n,info:$,upd:ee}),Object(c.jsx)(f.a,{in:k,children:Object(c.jsx)("div",{id:"myModal",className:"modal",style:{display:k?"block":"none"},children:Object(c.jsx)(G,{shop:D,data:w,deli:ce,mod:L,fin:F,updFunc:E})})}),Object(c.jsx)(P,{shop:D,mod:w})]})}var y=s(28);function N(e){return Object(c.jsxs)("div",{className:"dropdown",children:[Object(c.jsx)("a",{onClick:function(){return e.update("acc")},children:e.uname}),Object(c.jsx)("a",{a:!0,onClick:function(){return e.update("deliv")},children:"Book Delivery"}),Object(c.jsx)("a",{href:"/AdminDash",children:"Admin Page"}),Object(c.jsx)("a",{href:"/login",children:"Logout"})]})}function S(e){var t=new Date,s=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getFullYear());t=i+"-"+n+"-"+s;document.getElementById("dod");var l=Object(a.useState)(!1),r=Object(b.a)(l,2),d=(r[0],r[1],Object(a.useState)({dateOfdelivery:"",name:"",gal:"",map:"",contact:""})),u=Object(b.a)(d,2),m=u[0],O=u[1],h=Object(a.useState)(!1),x=Object(b.a)(h,2),p=x[0],v=x[1];document.querySelector("#landing").style.display="block",document.querySelector("#landing").style.background="white";var g=function(e){O(Object(o.a)(Object(o.a)({},m),{},Object(j.a)({},e.target.name,e.target.value)))};if(e.modal){var N,S=document.getElementsByClassName("inpDel"),k=Object(y.a)(S);try{for(k.s();!(N=k.n()).done;){var C=N.value;C.setAttribute("disabled","true"),C.style.background="rgba(0,0,0,0.1"}}catch(w){k.e(w)}finally{k.f()}}else{var D,q=document.getElementsByClassName("inpDel"),I=Object(y.a)(q);try{for(I.s();!(D=I.n()).done;){var A=D.value;A.removeAttribute("disabled"),A.style.background="none"}}catch(w){I.e(w)}finally{I.f()}}return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"mainContent",children:[Object(c.jsx)("div",{className:"delivery-reg",children:Object(c.jsxs)("form",{onSubmit:e.fin.btn?function(t){t.preventDefault(),e.finUpd(Object(o.a)(Object(o.a)({},e.fin),{},{btn:!1})),e.mod(!1)}:function(t){t.preventDefault(),console.log(m.dateOfdelivery),e.upd({dateOfdelivery:m.dateOfdelivery,name:m.name,gal:m.gal,map:m.map,contact:m.contact}),e.mod(!0),v(!0),setTimeout((function(){return v(!1)}),2e3)},children:[Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"dod",children:[Object(c.jsx)("i",{class:"fa fa-calendar-o"}),"Date of Delivery"]}),Object(c.jsx)("input",{type:"date",className:"inpDel",name:"dateOfdelivery",value:m.dateOfdelivery,id:"dod",onChange:g,min:t,max:"2022-01-01",required:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"name",children:[Object(c.jsx)("i",{class:"fa fa-user"}),"Receiver Name"]}),Object(c.jsx)("input",{type:"test",name:"name",className:"inpDel",id:"name",value:m.name,placeholder:"Name of Receiver",onChange:g,required:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"nog",children:[Object(c.jsx)("i",{class:"fa fa-tint"}),"Number of Gallons"]}),Object(c.jsx)("input",{type:"test",name:"gal",className:"inpDel",value:m.gal,onChange:g,id:"nog",placeholder:"minimum of 10 Gallons",required:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"map",children:[Object(c.jsx)("i",{class:"fa fa-map-o"}),"Drop-off Address"]}),Object(c.jsx)("input",{type:"test",name:"map",className:"inpDel",value:m.map,onChange:g,id:"map",placeholder:"Fleurdeville Mactan",required:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"contact",children:[Object(c.jsx)("i",{class:"fa fa-address-book-o"}),"Backup Contact"]}),Object(c.jsx)("input",{type:"test",name:"contact",className:"inpDel",value:m.contact,onChange:g,id:"contact",placeholder:"091231231",required:!0})]}),Object(c.jsx)("button",{type:"submit",className:"dark",children:e.fin.btn?"Book Another Delivery":"Book Delivery"})]})}),Object(c.jsxs)("div",{className:"delivery-img",children:[Object(c.jsx)(f.a,{in:p,children:Object(c.jsx)("h3",{className:"alert",children:"Delivery Successfully Entered"})}),Object(c.jsx)("img",{src:"../images/Sitting.svg"})]})]}),e.list.length>0&&Object(c.jsxs)("section",{className:"deli-history",style:{marginTop:"20px!important"},children:[Object(c.jsx)("h3",{style:{display:"flex",color:"#3c4a61",width:"100%",bottom:"0",top:"20px",justifyContent:"center"},children:"Recent Delivery History"}),e.list.map((function(e){return Object(c.jsx)(z,{list:e})}))]})]})}function k(e){var t=Object(a.useState)({name:e.info.fname+" "+e.info.lname,address:e.info.add,num:e.info.num,pass:e.info.pass,uname:e.info.uname}),s=Object(b.a)(t,2),n=s[0],i=s[1],l=Object(a.useState)(!0),r=Object(b.a)(l,2),d=r[0],u=r[1];function m(e){i(Object(o.a)(Object(o.a)({},n),{},Object(j.a)({},e.target.name,e.target.value)))}return Object(c.jsxs)("div",{className:"accDet",children:[Object(c.jsxs)("section",{children:[Object(c.jsx)("p",{children:"Welcome to your account page, displayed here are your information. To update your account, make changes then click the update button"}),Object(c.jsx)("img",{src:"../images/updates.svg",alt:"updateImg"})]}),Object(c.jsxs)("form",{onSubmit:d?function(e){e.preventDefault();var t=document.getElementsByClassName("get");u(!1);var s,c=Object(y.a)(t);try{for(c.s();!(s=c.n()).done;){s.value.removeAttribute("disabled")}}catch(a){c.e(a)}finally{c.f()}}:function(t){t.preventDefault();var s=document.getElementsByClassName("get"),c=n.name.split(" "),a=Object(b.a)(c,2),i=a[0],l=a[1];console.log(n.address),u(!0);var r,d=Object(y.a)(s);try{for(d.s();!(r=d.n()).done;){r.value.setAttribute("disabled","true")}}catch(j){d.e(j)}finally{d.f()}e.func({uname:n.uname,add:n.address,pass:n.pass,num:n.num,fname:i,lname:l})},children:[Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"name",children:[Object(c.jsx)("i",{class:"fa fa-user"}),"Full name"]}),Object(c.jsx)("input",{type:"text",className:"get",name:"name",id:"name",value:n.name,onChange:m,disabled:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"number",children:[Object(c.jsx)("i",{class:"fa fa-address-book-o"}),"Phone Number"]}),Object(c.jsx)("input",{type:"text",className:"get",name:"num",id:"number",value:n.num,onChange:m,disabled:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"address",children:[Object(c.jsx)("i",{class:"fa fa-address-card-o"}),"Full Address"]}),Object(c.jsx)("input",{type:"text",className:"get",name:"address",id:"address",value:n.address,onChange:m,disabled:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"uname",children:[Object(c.jsx)("i",{class:"fa fa-user-circle-o"}),"Username"]}),Object(c.jsx)("input",{type:"text",className:"get",name:"uname",id:"uname",value:n.uname,onChange:m,disabled:!0})]}),Object(c.jsxs)("div",{className:"userInput",children:[Object(c.jsxs)("label",{for:"pass",children:[Object(c.jsx)("i",{class:"fa fa-key"}),"Password"]}),Object(c.jsx)("input",{type:"text",className:"get",name:"pass",id:"pass",value:n.pass,onChange:m,disabled:!0})]}),Object(c.jsx)("button",{className:"dark",type:"submit",children:d?"Change":"Update"})]})]})}function C(e){var t=Object(a.useState)(!1),s=Object(b.a)(t,2);s[0],s[1];return document.querySelector("#landing").style.display="block",document.querySelector("#landing").style.background="white",console.log(e.info.add),Object(c.jsx)("div",{className:"custAcc",children:Object(c.jsx)(k,{info:e.info,func:e.upd})})}var D=s(95);function q(e){return Object(c.jsxs)("header",{children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"head-middle",children:Object(c.jsx)("h2",{onClick:function(){e.update("main")},children:"Pure Water Delivery"})}),Object(c.jsx)("nav",{className:"header-btn",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return e.update("acc")},children:e.user})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return e.update("deliv")},children:"Book Delivery"})}),!0===e.admin&&Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return e.dash()},children:"Admin Page"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/login",children:"Logout"})})]})}),Object(c.jsx)("div",{className:"hidden-icon",children:e.button?Object(c.jsx)(D.a,{onClick:function(){return e.click(e.button)}}):Object(c.jsx)("i",{className:"fa fa-navicon",onClick:function(){return e.click(e.button)}})})]})}var I=s(97),A=s(98),w=s(99),L=s(100),B=s(96);function P(e){return Object(c.jsx)("aside",{children:Object(c.jsxs)("div",{className:"footContent",children:[Object(c.jsx)("a",{children:Object(c.jsx)(B.a,{variant:e.mod?"dot":"",color:"secondary",children:Object(c.jsx)(I.a,{onClick:function(){return e.shop(!0)}})})}),Object(c.jsx)("a",{children:Object(c.jsx)(A.a,{style:{marginLeft:"4px"}})}),Object(c.jsx)("a",{children:Object(c.jsx)(w.a,{style:{marginLeft:"4px"}})}),Object(c.jsx)("a",{children:Object(c.jsx)(L.a,{style:{marginLeft:"4px"}})})]})})}function M(e){var t=e.location&&e.location.deli||{},s=t.dateOfdelivery,n=t.name,i=t.gal,l=t.map,r=t.contact,d=Object(a.useState)({delivery:s,name:n,gal:i,map:l,contact:r}),j=Object(b.a)(d,2),o=j[0];j[1];console.log(e.location.deli);return document.querySelector("#landing").style.display="block",document.querySelector("#landing").style.background="white",Object(c.jsxs)("div",{class:"adminDash",children:[Object(c.jsx)(J,{sub:function(){e.history.push({pathname:"/custM",del:o})}}),Object(c.jsx)(K,{})]})}var F=s(53),E=s.n(F),R=s(54),U=s.n(R),_=s(55),T=s.n(_);function W(e){return Object(c.jsxs)("div",{className:"mainContent",children:[Object(c.jsxs)("div",{className:"stepContainer",children:[Object(c.jsxs)("div",{className:"step",children:[Object(c.jsx)("h4",{children:"Step 1"}),Object(c.jsx)(E.a,{style:{color:"#3c4a61",fontSize:"64px"}}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus."})]}),Object(c.jsxs)("div",{className:"step",children:[Object(c.jsx)("h4",{children:"Step 2"}),Object(c.jsx)(U.a,{style:{color:"#3c4a61",fontSize:"64px"}}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus."})]}),Object(c.jsxs)("div",{className:"step",children:[Object(c.jsx)("h4",{children:"Step 3"}),Object(c.jsx)(T.a,{style:{color:"#3c4a61",fontSize:"64px"}}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus."})]})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"mainImg",children:Object(c.jsx)("img",{src:"../images/Bicycle.svg",alt:"test"})}),Object(c.jsxs)("div",{className:"mainImgText",children:[Object(c.jsx)("h4",{children:"Test"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur augue quis tellus dapibus, vitae egestas metus cursus."}),Object(c.jsx)("button",{onClick:function(){return e.update("deliv")},className:"dark",children:"Book Delivery"})]})]})]})}function G(e){console.log(document.querySelector("#myModal"));var t=30*e.deli.gal,s=Object(a.useState)(!1),n=Object(b.a)(s,2),i=n[0],l=n[1];return Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h3",{children:"Delivery Info"}),Object(c.jsx)(D.a,{onClick:function(){return e.shop(!1)},className:"close"})]}),e.data&&Object(c.jsxs)("section",{children:[Object(c.jsxs)("p",{children:["Delivery Date ",Object(c.jsx)("span",{children:e.deli.dateOfdelivery})]}),Object(c.jsxs)("p",{children:["Receiver Name ",Object(c.jsx)("span",{children:e.deli.name})]}),Object(c.jsxs)("p",{children:["Number of Gallons ",Object(c.jsx)("span",{children:e.deli.gal})]}),Object(c.jsxs)("p",{children:["Drop-off Address ",Object(c.jsx)("span",{children:e.deli.map})]}),Object(c.jsxs)("p",{children:["Backup Contact",Object(c.jsx)("span",{children:e.deli.contact})]}),Object(c.jsxs)("p",{style:{fontWeight:"bold"},children:[i||e.fin.btn?"Are you Sure?":"Total:",Object(c.jsx)("span",{children:"Php "+t+".00"})]}),!i&&Object(c.jsxs)("div",{className:"modal-button",children:[Object(c.jsx)("button",{className:"dark",onClick:function(){e.mod(!1),e.shop(!1)},children:"Edit"}),Object(c.jsx)("button",{className:"green",onClick:function(){return l(!0)},children:" Checkout"})]}),i&&!e.fin.btn&&Object(c.jsxs)("div",{className:"modal-button",children:[Object(c.jsx)("button",{className:"dark",onClick:function(){return l(!1)},children:"No"}),Object(c.jsx)("button",{className:"green",onClick:function(){e.updFunc({arr:!0,btn:!0}),console.log(e.fin)},children:"Yes"})]})]}),!e.data&&Object(c.jsx)("article",{children:Object(c.jsx)("h1",{children:"No Delivery Info to be shown"})})]})}function z(e){var t=30*e.list.gal;return Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsxs)("p",{style:{fontWeight:"bold"},children:["Date ",Object(c.jsx)("span",{children:e.list.dateOfdelivery})]}),Object(c.jsxs)("p",{children:["Receiver Name ",Object(c.jsx)("span",{children:e.list.name})]}),Object(c.jsxs)("p",{children:["Number of Gallons ",Object(c.jsx)("span",{children:e.list.gal})]}),Object(c.jsxs)("p",{children:["Drop-off Address ",Object(c.jsx)("span",{children:e.list.map})]}),Object(c.jsxs)("p",{children:["Backup Contact",Object(c.jsx)("span",{children:e.list.contact})]}),Object(c.jsxs)("p",{id:"total",children:["Total: ",Object(c.jsx)("span",{style:{fontWeight:"bold"},children:"Php "+t+".00"})]})]})}function J(e){return Object(c.jsxs)("aside",{className:"adminSide",children:[Object(c.jsxs)("div",{className:"welcome",children:[Object(c.jsx)("h4",{children:"Welcome"}),Object(c.jsx)("h1",{children:"User"})]}),Object(c.jsx)("p",{children:Object(c.jsx)("nav",{className:"adminNav",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{children:"Customer List"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{children:"Delivery List"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{children:"Delete Customer"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{children:"Update Customer"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{children:"Update Delivery"})})]})})}),Object(c.jsx)("p",{style:{marginBottom:"5%"},children:Object(c.jsx)("nav",{className:"adminNav",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{onClick:function(){return e.sub()},children:"Customer Page"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/login",children:"Logout"})})]})})})]})}function H(){return Object(c.jsxs)("table",{className:"styled-table cust",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Customer ID"}),Object(c.jsx)("th",{children:"Customer Fullname"}),Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("th",{children:"Cellnumber"}),Object(c.jsx)("th",{children:"Username"}),Object(c.jsx)("th",{children:"Password"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"})]})})]})}function Y(){return Object(c.jsxs)("table",{className:"styled-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Delivery ID"}),Object(c.jsx)("th",{children:"Customer Name"}),Object(c.jsx)("th",{children:"Receiver Name"}),Object(c.jsx)("th",{children:"Drop-off Address"}),Object(c.jsx)("th",{children:"Number of Gallons"}),Object(c.jsx)("th",{children:"Backup Contact"}),Object(c.jsx)("th",{children:"Total Price"}),Object(c.jsx)("th",{children:"Status"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"}),Object(c.jsx)("td",{children:"Sample"})]})]})]})}var V=s(56);function K(){return Object(c.jsxs)("section",{className:"admin-main",children:[Object(c.jsx)("div",{className:"box-container",children:[{icons:"Earnings",desc:"coins"},{icons:"Most Active Day",desc:"calendar-alt"},{icons:"Gallons Sold",desc:"hand-holding-usd"},{icons:"Number of Deliveries",desc:"truck"},{icons:"Number of Customers",desc:"user"},{icons:"Stock",desc:"boxes"}].map((function(e,t){return Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("div",{className:"icontainer",children:Object(c.jsx)(V.a,{icon:e.desc,size:"3x"})}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("h1",{children:"Value"}),Object(c.jsx)("h4",{children:e.icons})]})]})}))}),Object(c.jsx)(H,{}),Object(c.jsx)(Y,{})]})}var Q=s(6),X=s(21),Z=s(23);function $(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)(Q.c,{children:[Object(c.jsx)(Q.a,{path:"/",exact:!0,component:d}),Object(c.jsx)(Q.a,{path:"/register",component:O}),Object(c.jsx)(Q.a,{path:"/login",component:h}),Object(c.jsx)(Q.a,{path:"/custM",component:g}),Object(c.jsx)(Q.a,{path:"/deliv",component:S}),Object(c.jsx)(Q.a,{path:"/custAcc",component:C}),Object(c.jsx)(Q.a,{path:"/adminDash",component:M})]})})}X.b.add(Z.e,Z.c,Z.d,Z.b,Z.f,Z.a),i.a.render(Object(c.jsx)($,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.93788553.chunk.js.map