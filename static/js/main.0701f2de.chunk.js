(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,a){e.exports=a(82)},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},77:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),s=(a(75),a(59)),i=a(32),o=a(33),u=a(40),d=a(34),m=a(41),k=a(83),h=a(133),E=a(42),f=(a(76),a(77),a(60)),p=a(123),v=a(125),b=a(120),T=a(55),g=a.n(T),w=a(56),O=a.n(w),j=a(130),y=a(126),S=a(128),C=a(127),A=a(129),x=a(135),N=a(54),W=a.n(N),B=a(57),D=a.n(B),J=a(131),L=a(58),M=a.n(L),F=Object(b.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}}),I=function(e){var t=e.tasks,a=e.deleteTask,n=F(),c=r.a.useState(!1),l=Object(f.a)(c,2),s=l[0],i=l[1],o=t.length?r.a.createElement(p.a,null,t.map(function(e){return r.a.createElement("div",null,r.a.createElement(v.a,{button:!0,onClick:function(){return alert("Feature under development"),void i(!s)},key:e.id},r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(W.a,null))),r.a.createElement(C.a,{primary:e.name}),s?r.a.createElement(g.a,null):r.a.createElement(O.a,null),r.a.createElement(S.a,null,r.a.createElement(A.a,{edge:"end","aria-label":"delete"},r.a.createElement(D.a,{onClick:function(){return a(e.id)}})))),r.a.createElement(j.a,{in:s,timeout:"auto",unmountOnExit:!0},r.a.createElement(p.a,{component:"div",disablePadding:!0},r.a.createElement(v.a,{className:n.nested},r.a.createElement(J.a,null,r.a.createElement(M.a,null)),r.a.createElement(C.a,{primary:e.desc})))))})):r.a.createElement("p",null,"Add a task to the Todo-List");return r.a.createElement("div",{className:"tasks"},o)},P=a(134),$=a(132),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",desc:""},a.handleChange=function(e){a.setState({name:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),""===a.state.name&&""===a.state.desc?alert("Enter all the task details"):(a.props.addTask(a.state),a.setState({name:"",desc:""}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(P.a,{label:"Task Name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}}),r.a.createElement("br",null),r.a.createElement(P.a,{label:"Task Desc",value:this.state.desc,onChange:function(t){e.setState({desc:t.target.value})}}),r.a.createElement("br",null),r.a.createElement($.a,{color:"primary",onClick:function(t){e.handleSubmit(t)}},"Add new Task")))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[{id:1,name:"Task 1",desc:"This is a description of Task 1"},{id:2,name:"Task 2",desc:"This is a description of Task 2"},{id:3,name:"Task 3",desc:"This is a description of Task 3"}]},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.id!==e});a.setState({tasks:t})},a.addTask=function(e){e.id=Math.random(),a.setState(function(t){return{tasks:[].concat(Object(s.a)(t.tasks),[e])}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{elevation:3},r.a.createElement(h.a,{position:"static"},r.a.createElement(E.a,{variant:"h4"},"To-do Tracker")),r.a.createElement(I,{tasks:this.state.tasks,deleteTask:this.deleteTask}),r.a.createElement(q,{addTask:this.addTask})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[70,1,2]]]);
//# sourceMappingURL=main.0701f2de.chunk.js.map