(this["webpackJsonpmim-hosts"]=this["webpackJsonpmim-hosts"]||[]).push([[0],{114:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),i=o(12),c=o.n(i),s=(o(86),o(10)),a=o(136),l=o(138),d=o(139),m=o(115),h=o(141),u=o(69),p=o(3),j=Object(a.a)((function(){return{header:{backgroundColor:"#343a40",height:"56px"},logo:{fontFamily:"Titillium Web, sans-serif",fontWeight:600,color:"#fff",paddingBottom:".5125rem",fontSize:"1.25rem"}}})),b=function(e){var t=e.isDark,o=e.onChange,n=j(),r=n.header,i=n.logo,c=Object(p.jsx)("div",{style:{paddingBottom:"2px"},children:Object(p.jsx)(u.DarkModeSwitch,{sunColor:"white",checked:t,onChange:o,size:35})}),s=Object(p.jsx)(d.a,{href:"https://mim-hosts.github.io",style:{textDecoration:"none"},children:Object(p.jsx)(m.a,{className:i,children:"mim-hosts.github.io"})});return Object(p.jsx)(h.a,{className:r,children:Object(p.jsxs)(l.a,{style:{justifyContent:"space-between"},children:[s,c]})})},x=o(20),g=o.n(x),f=o(30);o(94);var w,y=function(){return Object(p.jsx)("thead",{className:"thead-dark",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",style:{width:"105px"},children:"Nazwa kodowa"}),Object(p.jsx)("th",{scope:"col",style:{width:"175px"},children:"Typ komputera"}),Object(p.jsx)("th",{scope:"col",style:{width:"155px"},children:"Procesor"}),Object(p.jsx)("th",{scope:"col",style:{width:"90px"},children:"Pami\u0119\u0107 RAM"}),Object(p.jsx)("th",{scope:"col",style:{width:"320px"},children:"Grafika"}),Object(p.jsx)("th",{scope:"col",style:{width:"500px"},children:Object(p.jsx)("div",{style:{paddingLeft:"14px"},children:"Hosty"})})]})})},O=(o(95),o(96),o(140)),v=o(49),G=function(e){var t,o=e.staticInfo,n=e.hosts,r=Object(v.b)().enqueueSnackbar,i=["brown","white","blue"];n?t=Object.entries(n).map((function(e){return{number:e[0],up:Boolean(e[1].up),os:e[1].os||""}})).sort((function(e,t){return e.number>t.number?1:t.number>e.number?-1:0})).map((function(e){var t,n="".concat(o.codename.toLowerCase()).concat(e.number),c=e.up?"windows"===e.os?(t=i.includes(o.codename.toLowerCase()),Object(p.jsx)("img",{width:"20px",style:{filter:t?"invert(100%)":void 0,marginLeft:"6px"},src:"/windows.svg",alt:"windows"})):"red"===o.codename.toLowerCase()?function(e){return Object(p.jsxs)("div",{style:{marginRight:"-12px",marginBottom:"6px"},children:[Object(p.jsx)("img",{width:"16px",style:{filter:e?"invert(100%)":void 0,marginBottom:"-2px"},src:"/macos.svg",alt:"macos"}),"/",Object(p.jsx)("img",{width:"16px",style:{filter:e?"invert(100%)":void 0,marginBottom:"-2px"},src:"/linux.svg",alt:"linux"})]})}(i.includes(o.codename.toLowerCase())):function(e){return Object(p.jsx)("img",{width:"20px",style:{filter:e?"invert(100%)":void 0,marginLeft:"6px"},src:"/linux.svg",alt:"linux"})}(i.includes(o.codename.toLowerCase())):Object(p.jsx)("div",{style:{width:"26px"}});return Object(p.jsxs)(O.a,{variant:"contained",style:{backgroundColor:e.up?o.color:void 0,textTransform:"none",width:"112px",margin:"2px",fontFamily:"Titillium Web, sans-serif",fontWeight:600,color:i.includes(o.codename.toLowerCase())&&e.up?"white":void 0,cursor:e.up?void 0:"initial"},onClick:e.up?function(){navigator.clipboard.writeText(n),r('Hostname "'.concat(n,'" copied to clipboard'),{variant:"success"})}:void 0,children:[n,Object(p.jsx)("div",{style:{marginLeft:"4px",marginBottom:"-6px"},children:c})]},n)})):t="Loading...";return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{color:o.color},children:o.codename}),Object(p.jsx)("td",{children:o.type}),Object(p.jsx)("td",{children:o.processor}),Object(p.jsx)("td",{children:o.memory}),Object(p.jsx)("td",{children:o.graphics}),Object(p.jsx)("td",{children:Object(p.jsx)("div",{style:{paddingLeft:"12px"},children:t})})]})},P=o(74),k=o.n(P),C=function(e){var t=[{codename:"Red",type:"Apple iMac Late 2013",processor:"Intel Core i5-4570",memory:"8GB",graphics:"nVidia GeForce GT755M Mac Edition [GK107M]",color:"red"},{codename:"Pink",type:"Dell Precision Tower 3620",processor:"Intel Xeon E3-1240 v6",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"rgb(255, 102, 255)"},{codename:"Orange",type:"Dell Precision Tower 3620",processor:"Intel Xeon E3-1240 v6",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"orange"},{codename:"Brown",type:"Dell Precision Tower 3620",processor:"Intel Xeon E3-1240 v6",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"brown"},{codename:"Green",type:"Dell Precision Tower 1700",processor:"Intel Xeon E3-1220 v3",memory:"8GB",graphics:"nVidia NVS 315 [GF119]",color:"green"},{codename:"Khaki",type:"Dell Precision Tower 3630",processor:"Intel Core i5-8500",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"rgb(173, 169, 110)"},{codename:"White",type:"Dell Precision Tower 3630",processor:"Intel Core i5-8500",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:e.isDark?"white":"#212529"},{codename:"Cyan",type:"Dell Precision Tower 3630",processor:"Intel Core i5-8500",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"cyan"},{codename:"Blue",type:"Dell Precision Tower 3630",processor:"Intel Core i5-8500",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"blue"},{codename:"Violet",type:"Dell Precision Tower 3630",processor:"Intel Core i5-8500",memory:"16GB",graphics:"nVidia Quadro P400 [GP107GL]",color:"violet"}],o=Object(n.useState)(),r=Object(s.a)(o,2),i=r[0],c=r[1],a=function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{k.a.get("https://students.mimuw.edu.pl/~kr394714/mim-hosts/").then((function(e){c(e.data)}))}catch(t){console.error(t.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a();var e=setInterval((function(){a()}),6e4);return function(){return clearInterval(e)}}),[]),Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsxs)("table",{className:"table-bordered",children:[Object(p.jsx)(y,{}),Object(p.jsx)("tbody",{children:t.map((function(e){var t=void 0;return i&&(t=i[e.codename.toLowerCase()]),Object(p.jsx)(G,{staticInfo:e,hosts:t},e.codename.toLowerCase())}))})]})})},L=o(48),B={body:"white",text:"#212529",thBorderColor:"#454d55"},I={body:"#2c2c2c",text:"white",thBorderColor:"#dee2e6"},T=o(75),D=Object(L.b)(w||(w=Object(T.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n  body {\n    font-family: 'Titillium Web', sans-serif;\n    background: ",";\n    color: ",";\n  }\n\n  .thead-dark th {\n    color: #fff;\n    background-color: #343a40;\n    border: 1px solid ",";\n    padding: .75rem;\n  }\n\n  .App {\n    text-align: center;\n  }\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.thBorderColor}));var S=function(){var e=function(){var e=Object(n.useState)(window.localStorage.getItem("theme")||"dark"),t=Object(s.a)(e,2),o=t[0],r=t[1];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e)}),[]),[o,function(){"light"===o?(window.localStorage.setItem("theme","dark"),r("dark")):(window.localStorage.setItem("theme","light"),r("light"))}]}(),t=Object(s.a)(e,2),o=t[0],r=t[1],i="light"===o?B:I;return Object(p.jsx)(v.a,{maxSnack:2,children:Object(p.jsx)(L.a,{theme:i,children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{isDark:"dark"===o,onChange:r}),Object(p.jsx)(C,{isDark:"dark"===o})]})]})})})},V=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,143)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;o(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),V()},86:function(e,t,o){},94:function(e,t,o){},95:function(e,t,o){},96:function(e,t,o){}},[[114,1,2]]]);
//# sourceMappingURL=main.194f4129.chunk.js.map