(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,a,t){e.exports=t(66)},58:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},60:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),s=t.n(c),o=(t(58),t(43)),i=t(31),l=t(32),d=t(45),u=t(33),m=t(46),k=t(67),p=t(102),E=t(101),f=t(25),h=(t(59),t(60),t(44)),v=t(95),T=t(105),g=t(93),b=t(39),w=t.n(b),y=t(40),O=t.n(y),j=t(103),C=t(96),x=t(98),A=t(97),S=t(99),N=t(104),W=t(38),B=t.n(W),J=t(41),L=t.n(J),F=t(100),I=t(42),M=t.n(I),P=Object(g.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}),$=function(e){var a=e.tasks,t=e.deleteTask,n=P(),c=r.a.useState(!1),s=Object(h.a)(c,2),o=s[0],i=s[1];console.log(o);var l=a.length?r.a.createElement(v.a,null,a.map(function(e){return r.a.createElement("div",null,r.a.createElement(T.a,{button:!0,onClick:function(){return alert("Feature under development"),void i(!o)},key:e.id},r.a.createElement(C.a,null,r.a.createElement(N.a,null,r.a.createElement(B.a,null))),r.a.createElement(A.a,{primary:e.name}),o?r.a.createElement(w.a,null):r.a.createElement(O.a,null),r.a.createElement(x.a,null,r.a.createElement(S.a,{edge:"end","aria-label":"delete"},r.a.createElement(L.a,{onClick:function(){return t(e.id)}})))),r.a.createElement(j.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,{component:"div",disablePadding:!0},r.a.createElement(T.a,{className:n.nested},r.a.createElement(F.a,null,r.a.createElement(M.a,null)),r.a.createElement(A.a,{primary:e.desc})))))})):r.a.createElement("p",null,"Add a task to the Todo-List");return r.a.createElement("div",{className:"tasks"},l)},q=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={tasks:[{id:1,name:"Task 1",desc:"This is a description of Task 1"},{id:2,name:"Task 2",desc:"This is a description of Task 2"},{id:3,name:"Task 3",desc:"This is a description of Task 3"}]},t.deleteTask=function(e){var a=t.state.tasks.filter(function(a){return a.id!==e});t.setState({tasks:a})},t.addTask=function(){var e=t.state.tasks.length+1;t.setState(function(a){return{tasks:[].concat(Object(o.a)(a.tasks),[{id:e,name:"Task "+e,desc:"This is a description of Task "+e}])}})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{elevation:3},r.a.createElement(E.a,{position:"static"},r.a.createElement(f.a,{variant:"h4"},"To-do Tracker")),r.a.createElement($,{tasks:this.state.tasks,deleteTask:this.deleteTask}),r.a.createElement(p.a,{color:"primary",onClick:function(){e.addTask()}},"Add new Task")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[53,1,2]]]);
//# sourceMappingURL=main.54ad64ea.chunk.js.map