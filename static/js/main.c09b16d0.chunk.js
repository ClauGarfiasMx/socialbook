(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(63)},48:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),o=n.n(l),u=(n(48),n(33)),c=n(9),i=n(15),s=r.a.createContext(null),m=function(e){return function(t){return r.a.createElement(s.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},h=s,p=n(4),d=n(21),E=n.n(d),f=(n(51),n(53),{apiKey:"AIzaSyDVEPVaF1oAiTShFBU0Xz7GX_e9Y-OV8Zk",authDomain:"social-react-elec01.firebaseapp.com",databaseURL:"https://social-react-elec01.firebaseio.com",projectId:"social-react-elec01",storageBucket:"social-react-elec01.appspot.com",messagingSenderId:"578372926394",appId:"578372926394"}),b=function e(){var t=this;Object(p.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.doc("users/".concat(e))},this.users=function(){return t.db.collection("users")},E.a.initializeApp(f),this.fieldValue=E.a.firestore.FieldValue,this.auth=E.a.auth(),this.db=E.a.firestore()},v=function(e){return r.a.createElement("button",{className:"Button Button-primary ".concat(e.extraClassName?e.extraClassName:""),onClick:e.action},e.name)},g=m(function(e){var t=e.firebase;return r.a.createElement(v,{name:"Cerrar Sesi\xf3n",action:t.doSignOut})}),O="/home",C=r.a.createContext(null),w=n(5),j=n(7),S=n(6),y=n(8),k=function(e){var t=function(t){function n(e){var t;return Object(p.a)(this,n),(t=Object(j.a)(this,Object(S.a)(n).call(this,e))).state={authUser:null},t}return Object(y.a)(n,t),Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return m(t)},U=n(16),x=function(e){return function(t){var n=function(n){function a(){return Object(p.a)(this,a),Object(j.a)(this,Object(S.a)(a).apply(this,arguments))}return Object(y.a)(a,n),Object(w.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(n){e(n)||t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(C.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(U.a)(i.e,m)(n)}},D=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:O},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/account"},"Mi cuenta")),r.a.createElement("li",null,r.a.createElement(g,null)))},I=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"\xa1Bienvenido!")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/signin"},"Iniciar Sesi\xf3n")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/signup"},"Crear una cuenta")))},A=function(){return r.a.createElement("nav",{className:"main-menu"},r.a.createElement(C.Consumer,null,function(e){return e?r.a.createElement(D,null):r.a.createElement(I,null)}))},P=n(13),W=n(11),B={username:"",email:"",passwordOne:"",passwordTwo:"",error:null},N=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r},{merge:!0})}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}).then(function(e){n.setState(Object(W.a)({},B)),n.props.history.push(O)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},B),n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,l=e.passwordTwo,o=e.error,u=a!==l||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"sign-up-form"},r.a.createElement("label",null,"Nombre Completo"),r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Nombre Completo"}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Contrase\xf1a"}),r.a.createElement("label",null,"Confirmar Contrase\xf1a"),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirmar Contrase\xf1a"}),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),o&&r.a.createElement("p",null,o.message))}}]),t}(a.Component),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/signup"}," Crear una Cuenta "))},F=Object(U.a)(i.e,m)(N),T=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Registrar Nuevo Usuario "),r.a.createElement(F,null))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Landing "),r.a.createElement("h2",null,"Bienvenido a Socialbook, \xbfpor qu\xe9 no ",r.a.createElement(R,null),"?"),r.a.createElement(v,{name:"A Button",action:function(){console.log("a button"),window.location.href="https://google.com"}}),r.a.createElement(v,{name:"Another Button",action:function(){console.log("another button")},extraClassName:"other-btn"}),r.a.createElement(h.Consumer,null,function(e){return r.a.createElement("div",null,"I ' ve access to Firebase and render something .")}))},V={email:"",error:null},z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(W.a)({},V))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},V),n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("button",{disabled:a,type:"submit"},"Resetear Contrase\xf1a"),n&&r.a.createElement("p",null," ",n.message," "))}}]),t}(a.Component),H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/pw-forget"}," Olvid\xe9 mi contrase\xf1a")," ")},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(J,null))},J=m(z),Q={email:"",password:"",error:null},X=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(W.a)({},Q)),n.props.history.push(O)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},Q),n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,l=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Email Registrado"),r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("label",null,"Constrase\xf1a"),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Contrase\xf1a"}),r.a.createElement("button",{disabled:l,type:"submit"},"Iniciar Sesi\xf3n"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),q=Object(U.a)(i.e,m)(X),G=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Iniciar Sesi\xf3n"),r.a.createElement(q,null),r.a.createElement("p",null,"Quiero ",r.a.createElement(R,null)),r.a.createElement("p",null,r.a.createElement(H,null)))},K=x(function(e){return!!e})(function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Home "),r.a.createElement("p",null,"La p\xe1gina Home est\xe1 visible para todos los usuarios logueados"),r.a.createElement("p",null,"Currently using React ",r.a.version))}),Y={passwordOne:"",passwordTwo:"",error:null},Z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(W.a)({},Y))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(P.a)({},e.target.name,e.target.value))},n.state=Object(W.a)({},Y),n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,l=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"Nueva contrase\xf1a"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirmar contrase\xf1a"}),r.a.createElement("button",{disabled:l,type:"submit"},"Cambiar mi Contrase\xf1a"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),$=m(Z),_=x(function(e){return!!e})(function(){return r.a.createElement(C.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null," Mi Cuenta "),r.a.createElement("h2",null,"Hola: ",e.email,"!"),r.a.createElement("p",null,r.a.createElement("strong",null,"ID USUARIO:")," ",e.uid),r.a.createElement("div",null,r.a.createElement("h3",null,"Olvid\xe9 mi contrase\xf1a:"),r.a.createElement(J,null)),r.a.createElement("div",null,r.a.createElement("h3",null,"Quiero cambiar mi contrase\xf1a:"),r.a.createElement($,null)))})}),ee=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(j.a)(this,Object(S.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(y.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.unsubscribe=this.props.firebase.users().onSnapshot(function(t){var n=[];t.docs.map(function(e){var t={userID:e.id,userData:e.data()};return n.push(t),n}),e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(te,{users:t}))}}]),t}(a.Component),te=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.userID},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.userID),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.userData.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.userData.username))}))},ne=m(ee);function ae(){var e=Object(u.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n"]);return ae=function(){return e},e}var re=n(38).a.h1(ae()),le=k(function(){return r.a.createElement("div",null,r.a.createElement(re,null,"App"),r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement(i.a,{exact:!0,path:"/",component:M}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:T}),r.a.createElement(i.a,{exact:!0,path:"/signin",component:G}),r.a.createElement(i.a,{exact:!0,path:"/pw-forget",component:L}),r.a.createElement(i.a,{exact:!0,path:O,component:K}),r.a.createElement(i.a,{exact:!0,path:"/account",component:_}),r.a.createElement(i.a,{exact:!0,path:"/admin",component:ne}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.Provider,{value:new b},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.c09b16d0.chunk.js.map