(this.webpackJsonpproj1=this.webpackJsonpproj1||[]).push([[0],[,,,function(e,t,n){e.exports=n(17)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),r=n.n(l);n(12),n(13);var o=e=>{let{onContentChange:t,activeContent:n}=e;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("h2",{className:"sidebar-title"},"Menu"),c.a.createElement("div",{className:"sidebar-list-container"},c.a.createElement("ul",{className:"sidebar-list"},["Introduction","About","Services","Contact"].map(e=>c.a.createElement("li",{key:e,className:"sidebar-item "+(e===n?"active":""),onClick:()=>t(e)},e)))))};n(14),n(15);var s=()=>c.a.createElement("div",{className:"introduction"},c.a.createElement("h2",null,"Using Computer Vision to Enhance Walkway Accessibility for the Visually Impaired"),c.a.createElement("p",null,"This tutorial explores the challenges visually impaired individuals face with walkways and introduces our proposed computer vision solutions."),c.a.createElement("p",null,"Some of the issues faced are",c.a.createElement("li",null,"Assesing Walkways Quality (smooth/damaged)")));var i=e=>{let{content:t}=e;return c.a.createElement("div",{className:"main-content"},c.a.createElement("h1",null,t),(()=>{switch(t){case"Introduction":return c.a.createElement(s,null);case"About":return c.a.createElement("p",null,"Learn more About us here.");case"Services":return c.a.createElement("p",null,"These are our Services.");case"Contact":return c.a.createElement("p",null,"Get in touch with us on the Contact page.");default:return c.a.createElement("p",null,"Select a menu item.")}})())};n(16);var u=function(){const e=["Introduction","About","Services","Contact"],[t,n]=Object(a.useState)("Home");return c.a.createElement("div",{className:"app"},c.a.createElement(o,{onContentChange:e=>{n(e)},activeContent:t}),c.a.createElement(i,{content:t}),c.a.createElement("div",{className:"navigation-buttons"},c.a.createElement("button",{onClick:()=>{const a=(e.indexOf(t)-1+e.length)%e.length;n(e[a])},className:"nav-button"},"Previous"),c.a.createElement("button",{onClick:()=>{const a=(e.indexOf(t)+1)%e.length;n(e[a])},className:"nav-button"},"Next")))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(u,null))}],[[3,1,2]]]);
//# sourceMappingURL=main.95e04fea.chunk.js.map