"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[378],{9378:function(t,n,e){e.r(n),e.d(n,{default:function(){return K}});var r=e(2791),a=e(9434),i=e(4270),o=function(t){return t.contacts.items},s=function(t){return t.contacts.isLoading},c=function(t){return t.filter},u=e(3329),l=function(){return(0,u.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:(0,u.jsx)("p",{className:"my-3",children:"We don't find anything \ud83d\ude22"})})},d=e(5861),x=e(4687),m=e.n(x),h=e(8792),f=e(5218),v=e(7371),g=e(4852),p=e(653),j=e(6259),b=e(3044),y=e(3400),Z=e(7247),C=function(t){var n=t.contact,e=(0,a.I0)(),r=(0,a.v9)(s),i=n.id,o=n.name,c=n.number,l=function(){var t=(0,d.Z)(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e((0,h.GK)(i)).unwrap();case 3:f.Am.success("Successfully delete",{autoClose:1500}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),f.Am.error("Ooops, try again",{autoClose:1500});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(g.ZP,{secondaryAction:(0,u.jsx)(y.Z,{edge:"end","aria-label":"delete",type:"button",onClick:l,disabled:r,children:(0,u.jsx)(Z.Z,{})}),sx:{borderBottom:"1px solid gray"},children:[(0,u.jsx)(p.Z,{children:(0,u.jsx)(b.Z,{children:(0,u.jsx)(v.Z,{})})}),(0,u.jsx)(j.Z,{primary:o,secondary:c})]})})},w=e(493),k=function(){var t=(0,a.v9)(o),n=(0,a.v9)(c).toLowerCase(),e=t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)}));return(0,u.jsx)(w.Z,{children:e.length?e.map((function(t){return(0,u.jsx)(C,{contact:t},t.id)})):(0,u.jsx)(l,{})})},_=e(9439),A=e(9012),B=e(6355),T=e(4554),F=e(890),L=e(2069),I=e(5984),S=function(){var t=(0,a.I0)(),n=(0,a.v9)(o),e=(0,r.useState)(""),i=(0,_.Z)(e,2),s=i[0],c=i[1],l=(0,r.useState)(""),d=(0,_.Z)(l,2),x=d[0],m=d[1];return(0,u.jsxs)(T.Z,{sx:{width:"100%"},children:[(0,u.jsx)(F.Z,{variant:"h4",gutterBottom:!0,children:"Add contact"}),(0,u.jsx)("form",{onSubmit:function(e){e.preventDefault();var r={id:(0,I.x0)(),name:s,number:x};n.find((function(t){return t.name===r.name}))?f.Am.error("".concat(s," is already in contacts"),{autoClose:1500}):(t((0,h.uK)(r)),f.Am.success("".concat(s," add to your contacts"),{autoClose:1500}),c(" "),m(" "))},children:(0,u.jsxs)(A.Z,{sx:{marginRight:"auto",marginLeft:"auto"},children:[(0,u.jsx)(B.Z,{id:"outlined-basic",label:"Contact name",variant:"outlined",type:"text",name:"name",value:s,onChange:function(t){return c(t.currentTarget.value)},required:!0,sx:{marginBottom:"20px"}}),(0,u.jsx)(B.Z,{id:"outlined-basic",label:"Number",variant:"outlined",type:"tel",name:"number",value:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:function(t){return m(t.currentTarget.value)},required:!0,sx:{marginBottom:"20px"}}),(0,u.jsx)(L.E,{variant:"contained",type:"submit",children:"Add contact"})]})})]})},q=e(1210),N=function(){var t=(0,a.I0)(),n=(0,a.v9)(c);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(A.Z,{sx:{marginTop:"20px",marginRight:"auto",marginLeft:"auto"},children:(0,u.jsx)(B.Z,{id:"outlined-basic",label:"Filter",variant:"outlined",type:"text",value:n,onChange:function(n){var e=n.target.value;try{(0,q.Tv)(e)}catch(r){console.log("-> set filter dont work")}try{t((0,q.Tv)(e))}catch(a){console.log("-> filter dispatch dont work")}}})})})},E=e(854);function K(){var t=(0,a.I0)(),n=(0,a.v9)(s);return(0,r.useEffect)((function(){t((0,h.yF)())}),[t]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.q,{children:(0,u.jsx)(F.Z,{variant:"h4",gutterBottom:!0,children:"Your contacts"})}),(0,u.jsx)(S,{}),(0,u.jsx)(F.Z,{variant:"h4",gutterBottom:!0,sx:{marginTop:"15px"},children:"Contacts list"}),(0,u.jsx)(N,{}),(0,u.jsx)("div",{children:n&&(0,u.jsx)(E.a,{})}),(0,u.jsx)(k,{})]})}}}]);
//# sourceMappingURL=378.2e7c9cfb.chunk.js.map