(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(14),n(6)),i=n(1),l=n(2),u=n(4),p=n(3),m=n(5),h=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{onClick:function(){return e.props.changeScore(e.props.id,"decrement")},className:"counter-action decrement"},"-"),r.a.createElement("span",{className:"counter-score"},this.props.score),r.a.createElement("button",{onClick:function(){return e.props.changeScore(e.props.id,"increment")},className:"counter-action increment"},"+"))}}]),t}(a.Component)),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("svg",{viewBox:"0 0 44 35",className:this.props.myfunc},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.isHighScore()),r.a.createElement("div",{className:"player"},r.a.createElement("span",{className:"player-name"},r.a.createElement(d,{myfunc:function(){if(1==e.props.isHighScore)return"is-high-score"}}),r.a.createElement("button",{onClick:function(){return e.props.myMeth(e.props.id)},className:"remove-player"},"\u2716"),this.props.playerName),r.a.createElement(h,{score:this.props.score,id:this.props.id,changeScore:this.props.changeScore}))}}]),t}(a.Component),y=[{id:0,name:"Andrei",score:0},{id:1,name:"Valentin",score:0},{id:2,name:"Ionut",score:0},{id:3,name:"David",score:0}],b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0;return this.props.playersTot.forEach(function(t){e+=t.score}),r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,this.props.players)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,e))))}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={totalTime:0,isRunning:!1},n.handleStart=function(){!1===n.state.isRunning?n.setState({isRunning:!1}):!0===n.state.isRunning&&n.setState({isRunning:!0})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"tick",value:function(){this.setState({totalTime:this.state.totalTime+1})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},"0"),r.a.createElement("button",{onClick:this.handleStart},this.state.isRunning?"Stop":"Start"),r.a.createElement("button",null,"Reset"))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={name:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(b,{players:this.props.players,playersTot:this.props.playersTot}),r.a.createElement("h1",null,"Scoreboard"),r.a.createElement(v,null))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange2=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.addPlayer(n.state.value),n.setState({value:""})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleChange2,name:"ddd",value:this.state.value}),r.a.createElement("input",{type:"submit",value:"Add Player"}))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).removePlayer=function(e){n.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},n.handleScoreChange=function(e,t){"decrement"===t?(n.setState({players:n.state.players.map(function(t){return t.id===e&&(t.score-=1),t})}),console.log("decr")):"increment"===t&&(n.setState({players:n.state.players.map(function(t){return t.id===e&&(t.score+=1),t})}),console.log("incr"))},n.addPlayer=function(e){n.setState(function(t){return{players:Object(s.a)(t.players).concat([{name:e,id:1+Math.max.apply(Math,Object(s.a)(n.state.players.map(function(e){return e.id}))),score:0}])}})},n.state={players:y},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.players,n=Math.max.apply(Math,t.map(function(e){return e.score}));return console.log(n),r.a.createElement("div",{className:"App"},r.a.createElement(j,{players:this.state.players.length,playersTot:this.state.players}),this.state.players.map(function(t,a){return r.a.createElement(f,{key:t.id.toString(),playerName:t.name,id:t.id,score:t.score,idx:a,changeScore:e.handleScoreChange,myMeth:e.removePlayer,isHighScore:function(){if(t.score===n&&t.score<0)return!0}})}),r.a.createElement(O,{addPlayer:this.addPlayer}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.62819b27.chunk.js.map