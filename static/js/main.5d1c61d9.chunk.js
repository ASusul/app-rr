(this["webpackJsonpprojekt2-react-router"]=this["webpackJsonpprojekt2-react-router"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/mountain_canion.77f4e3eb.jpg"},function(e,t,a){e.exports=a.p+"static/media/mountain_winter.e8338c26.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/mountain_car.85fe770c.jpg"},,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),i=(a(28),a(9)),o=a(10),u=a(12),m=a(11),s=a(3),p=(a(29),a(14)),E=a.n(p),d=a(21),h=a.n(d),f=a(15),g=a.n(f),v=(a(30),a(1)),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}})," ",r.a.createElement(v.c,{path:"/products",render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(v.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:g.a,alt:"city"})}}),r.a.createElement(v.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:g.a,alt:"city"})}}),r.a.createElement(v.c,{render:function(){return r.a.createElement("img",{src:E.a,alt:"city"})}})))},b=(a(36),[{name:"start",path:"/",excact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"pandel admina",path:"/admin"}]),j=function(){var e=b.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(s.c,{to:e.path,exact:!!e.excact&&e.excact}," ",e.name))}));return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},k=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",null,t),r.a.createElement("span",null,a),r.a.createElement("p",null,n))},x=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."},{id:2,title:"Czym jest paradok femiego",author:"Jan Nowaczewski",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."},{id:3,title:"Ciemna strona mocy",author:"Lord Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse deleniti, quas dolor architecto, eaque corporis ipsa quidem aliquid optio mollitia exercitationem pariatur maiores, odit non reprehenderit sapiente eum autem."}],w=function(){var e=x.map((function(e){return r.a.createElement(k,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},N=(a(37),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSumbit=function(t){t.preventDefault(),e.setState({value:""})},e.handelChange=function(t){e.setState({value:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSumbit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handelChange}),r.a.createElement("button",null,"Wyslij")),r.a.createElement(v.a,{when:this.state.value,message:"Masz nie wypelniony formularz. Czy na pewno chcesz opuscic strone"}))}}]),a}(r.a.Component)),q=function(){return r.a.createElement(v.c,{render:function(){return r.a.createElement(v.b,{to:"/login"})}})},J=function(){return r.a.createElement("div",null,"NIe ma takiej strony")},C=(a(38),["car","bike","motocycle"]),O=function(){var e=C.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{to:"/product/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista pordukt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},z=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},F=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(z,{id:t.params.id}),r.a.createElement(s.b,{to:"/products"}," Powr\xf3t do listy produkt\xf3w"))},S=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Pogdaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Pogdaj has\u0142o",r.a.createElement("input",{type:"pass"})),r.a.createElement("button",null,"Zalogouj"))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.e,null,r.a.createElement(v.c,{path:"/",exact:!0,component:w}),r.a.createElement(v.c,{path:"/contact",component:N}),r.a.createElement(v.c,{path:"/products",component:O}),r.a.createElement(v.c,{path:"/product/:id",component:F}),r.a.createElement(v.c,{path:"/admin",component:q}),r.a.createElement(v.c,{path:"/login",component:S}),r.a.createElement(v.c,{component:J})))},P=(a(39),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(v.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(v.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(v.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}))}),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{basename:"/app-rr"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(L,null))),r.a.createElement("footer",null,r.a.createElement(P,null))))," ")}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5d1c61d9.chunk.js.map