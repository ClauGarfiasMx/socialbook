(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n.p+"static/media/book.74d14921.png"},36:function(e,t,n){e.exports=n.p+"static/media/chair-chat-conversation.48eabd59.jpg"},48:function(e,t,n){e.exports=n(89)},53:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),i=n.n(o),l=(n(53),n(2)),c=n(13),s=n(20),u=n(3),m=n(17),d=n(10),p=n(4),f=n(6),h=n(8),b=n(7),g=n(9),E=n(15),v=n(12),O=r.a.createContext(null),j=function(e){return function(t){return r.a.createElement(O.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},x=O,y=n(24),w=n.n(y),k=(n(57),n(59),{apiKey:"AIzaSyDVEPVaF1oAiTShFBU0Xz7GX_e9Y-OV8Zk",authDomain:"social-react-elec01.firebaseapp.com",databaseURL:"https://social-react-elec01.firebaseio.com",projectId:"social-react-elec01",storageBucket:"social-react-elec01.appspot.com",messagingSenderId:"578372926394",appId:"578372926394"}),C=function e(){var t=this;Object(p.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:"http://localhost:3000"})},this.activeUser={},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).get().then(function(n){var r=n.data();r.roles||(r.roles={}),a=Object(d.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData},r),t.activeUser=a,e(a)}):n()})},this.user=function(e){return t.db.doc("users/".concat(e))},this.users=function(){return t.db.collection("users")},this.message=function(e){return t.db.doc("messages/".concat(e))},this.messages=function(){return t.db.collection("messages")},this.post=function(e){return t.db.doc("posts/".concat(e))},this.posts=function(){return t.db.collection("posts")},w.a.initializeApp(k),this.fieldValue=w.a.firestore.FieldValue,this.auth=w.a.auth(),this.db=w.a.firestore()},S="/home",P="ADMIN";function I(){var e=Object(l.a)(["\n  display: flex;\n"]);return I=function(){return e},e}function U(){var e=Object(l.a)(["\n  cursor: pointer;\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  margin: 0;\n"]);return U=function(){return e},e}function D(){var e=Object(l.a)(["\n  color: #ff0000;\n"]);return D=function(){return e},e}function z(){var e=Object(l.a)(["\n  max-width: 30%;\n"]);return z=function(){return e},e}function A(){var e=Object(l.a)(["\n      background: gray;\n      border: none !important;\n      color: white;\n    "]);return A=function(){return e},e}function M(){var e=Object(l.a)(["\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n  font-size: 14px;\n  color: gray;\n  margin: 0.25rem 0.5rem 0.25rem 0;\n  padding: 0.25rem 1.25rem;\n  cursor: pointer;\n  ","\n"]);return M=function(){return e},e}function T(){var e=Object(l.a)(["\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n"]);return T=function(){return e},e}var L=u.b.div(T()),N=u.b.button(M(),function(e){return e.delete&&Object(u.a)(A())}),F=u.b.img(z()),W=u.b.p(D()),R=u.b.input(U()),V=u.b.div(I()),B={error:null,images:{}},J=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state=Object(d.a)({},B),n.handleImageChange=n.handleImageChange.bind(Object(v.a)(n)),n.deleteImage=n.deleteImage.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"uploadImageToParent",value:function(){this.props.uploadImage(this.state.images)}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var n=new FileReader,a=e.target.files[0];if(a){var r=a.name.split(".").pop().toLowerCase(),o=["jpg","jpeg","png","gif"].indexOf(r)>-1,i=a.size<1048487;o?i?(this.setState({error:null}),n.onloadend=function(){t.setState({error:null,images:{imageName:a.name,imageUrl:n.result}}),t.uploadImageToParent()},n.readAsDataURL(a)):this.setState({error:"Sorry, the file is too big",images:{imageUrl:""}}):this.setState({error:"Sorry, the file is not an image",images:{imageUrl:""}})}}},{key:"deleteImage",value:function(){this.setState({images:{}}),this.uploadImageToParent()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null,r.a.createElement(L,null,r.a.createElement(N,null,this.props.buttonLabel),r.a.createElement(R,{type:"file",accept:"image/*",onChange:this.handleImageChange})),this.props.editMode&&r.a.createElement(N,{delete:!0,onClick:this.deleteImage},"Delete Image")),r.a.createElement("div",null,r.a.createElement(F,{src:this.props.imageUrl})),r.a.createElement("div",null,r.a.createElement(W,null,this.state.error)))}}]),t}(a.Component);function q(){var e=Object(l.a)(["\n  display: flex;\n  max-width: 20rem;\n  margin: auto;\n  padding: 0.5rem;\n  "," > * {\n    flex: 1;\n\n    &:not(:first-child) {\n      ",": 0.5rem;\n    }\n  }\n\n  input {\n    padding: 0.5rem;\n    border-radius: 5px;\n    border: 1px solid #b6b6b6;\n  }\n\n  input::placeholder {\n    color: #ff00cb;\n  }\n\n  button {\n    padding: 0.75rem;\n    border-radius: 0.5rem;\n    border: none;\n  }\n"]);return q=function(){return e},e}var H=u.b.form(q(),function(e){return e.vertical&&"flex-direction: column;"},function(e){return e.vertical?"margin-top":"margin-left"}),X={username:"",email:"",error:null,isAdmin:!1,passwordOne:"",passwordTwo:"",profilePic:{imageName:"",imageUrl:"https://claudiagarfias.works/laboratoria/visitors/assets/kisspng-computer-icons.png"}},G=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,l=t.profilePic,c={};i&&(c[P]=P),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,profilePic:l,roles:c},{merge:!0})}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)}).then(function(){return n.props.firebase.doSendEmailVerification()}).then(function(e){n.setState(Object(d.a)({},X)),n.props.history.push(S)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(m.a)({},e.target.name,e.target.checked))},n.state=Object(d.a)({},X),n.uploadProfilePic=n.uploadProfilePic.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"uploadProfilePic",value:function(e){this.setState({profilePic:e})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,i=e.isAdmin,l=e.error,c=a!==o||""===a||""===n||""===t;return r.a.createElement(H,{vertical:!0,onSubmit:this.onSubmit,className:"sign-up-form"},r.a.createElement(J,{uploadImage:this.uploadProfilePic,buttonLabel:"Upload Profile Picture",imageUrl:this.state.profilePic.imageUrl}),r.a.createElement("label",null,"User Name"),r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"User Name"}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirmar Contrase\xf1a"}),r.a.createElement("label",null,"I am an administrator user:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:i,onChange:this.onChangeCheckbox})),r.a.createElement("button",{disabled:c,type:"submit"},"Sign Up"),l&&r.a.createElement("p",null,l.message))}}]),t}(a.Component),K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/signup"}," Sign Up "))},Y=Object(E.a)(s.f,j)(G),Z=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Sign Up "),r.a.createElement(Y,null))},$={email:"",error:null},_=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(d.a)({},$))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state=Object(d.a)({},$),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset Password"),n&&r.a.createElement("p",null," ",n.message," "))}}]),t}(a.Component),Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/pw-forget"}," Forgot Password?"))},ee=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(te,null))},te=j(_);function ne(){var e=Object(l.a)(["\n  color: #ff0000;\n"]);return ne=function(){return e},e}var ae=u.b.p(ne()),re={email:"",password:"",error:null},oe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(d.a)({},re)),n.props.history.push(S)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state=Object(d.a)({},re),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"codeMessageMapper",value:function(e){var t="";switch(e){case"auth/invalid-email":t="Invalid Email";break;case"auth/user-not-found":t="User not found";break;case"auth/wrong-password":t="Wrong Pasword";break;case"auth/email-already-in-use":t="Email already in use";break;case"auth/weak-password":t="Password must have at least 6 characters"}return t}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Email: "),r.a.createElement("input",{autoComplete:"off",name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email"}),r.a.createElement("label",null," Password: "),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),a&&r.a.createElement(ae,null,this.codeMessageMapper(a.code)),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"))}}]),t}(a.Component),ie=Object(E.a)(s.f,j)(oe),le=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Sign In"),r.a.createElement(ie,null),r.a.createElement("p",null,"I would like to ",r.a.createElement(K,null)),r.a.createElement("p",null,r.a.createElement(Q,null)))},ce=r.a.createContext(null),se=function(e){var t=function(t){function n(e){var t;return Object(p.a)(this,n),(t=Object(h.a)(this,Object(b.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(g.a)(n,t),Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(ce.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return j(t)},ue=function(e){return function(t){var n=function(n){function a(){return Object(p.a)(this,a),Object(h.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,n),Object(f.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(ce.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(E.a)(s.f,j)(n)}},me=function(e){var t=function(t){function n(e){var t;return Object(p.a)(this,n),(t=Object(h.a)(this,Object(b.a)(n).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(g.a)(n,t),Object(f.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(ce.Consumer,null,function(n){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(n)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),n}(r.a.Component);return j(t)},de=function(e){return r.a.createElement("button",{className:"Button Button-primary ".concat(e.extraClassName?e.extraClassName:""),onClick:e.action},e.name)},pe=j(function(e){var t=e.firebase;return r.a.createElement(de,{name:"Sign Out",action:t.doSignOut})});function fe(){var e=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  padding: 2rem 0;\n  justify-content: space-between;\n  max-width: 90%;\n  position: fixed;\n  width: 100%;\n  z-index: 1000;\n  span {\n    margin: 0.5rem;\n  }\n  a {\n    color: #000;\n    text-decoration: none;\n  }\n  p {\n    margin-left: 10%;\n  }\n"]);return fe=function(){return e},e}var he=u.b.nav(fe()),be=function(e){var t=e.authUser;return r.a.createElement(he,null,r.a.createElement("p",null,"Socialbook"),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(c.b,{to:S},"Home")),r.a.createElement("span",null,r.a.createElement(c.b,{to:"/account"},"Account")),!!t.roles[P]&&r.a.createElement("span",null,r.a.createElement(c.b,{to:"/admin"},"Admin Page")),r.a.createElement("span",null,r.a.createElement(pe,null))))},ge=function(){return r.a.createElement(he,null,r.a.createElement("p",null,"Socialbook"),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(c.b,{to:"/"},"Welcome")),r.a.createElement("span",null,r.a.createElement(c.b,{to:"#signin-section"},"Sign In")),r.a.createElement("span",null,r.a.createElement(c.b,{to:"/signup"},"Sign Up"))))},Ee=function(){return r.a.createElement(ce.Consumer,null,function(e){return e?r.a.createElement(be,{authUser:e}):r.a.createElement(ge,null)})},ve=n(35),Oe=n.n(ve),je=n(36),xe=n.n(je),ye="375px",we="425px",ke="768px",Ce="1024px",Se="1440px",Pe="2560px",Ie={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(ye,")"),mobileL:"(max-width: ".concat(we,")"),tablet:"(max-width: ".concat(ke,")"),laptop:"(max-width: ".concat(Ce,")"),laptopL:"(max-width: ".concat(Se,")"),desktop:"(max-width: ".concat(Pe,")"),desktopL:"(max-width: ".concat(Pe,")")};function Ue(){var e=Object(l.a)(["\n  height: 50vh;\n  background-color: transparent;\n"]);return Ue=function(){return e},e}function De(){var e=Object(l.a)(["\n  height: 60vh;\n  background-image: url(",');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  padding: 5rem 0;\n  a {\n    color: #000;\n  }\n  div {\n    background-color: #ffffffb5;\n    height: 25rem;\n    margin: 1rem;\n    padding: 1rem;\n  }\n  button {\n    padding: 0.5rem;\n    font-family: "Thasadith", sans-serif;\n    font-size: 1rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    width: 15.65rem !important;\n    background-color: #000;\n    color: #ffff;\n    border: none;\n    margin-top: 0.75rem !important;\n  }\n  button:disabled,\n  button[disabled] {\n    background-color: #00000026;\n    color: #0000002e;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n  }\n  form * {\n    margin: 0rem auto 0.5rem auto;\n    width: 15rem;\n  }\n  input {\n    border: none;\n    padding: 0.25rem;\n    font-family: "Thasadith", sans-serif;\n    font-size: 1.35rem;\n    text-align: center;\n  }\n']);return De=function(){return e},e}function ze(){var e=Object(l.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    #ffdabd,\n    #ffceb4,\n    #ffc2ae,\n    #ffb6aa,\n    #ffaaaa\n  );\n  display: flex;\n  height: 50vh;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    #fffa89,\n    #ffef94,\n    #ffe6a1,\n    #ffdfaf,\n    #ffdabd\n  );\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n\n  a {\n    color: #000;\n    text-decoration: none;\n    border-bottom: 1px solid #000;\n  }\n  button {\n    margin-top: 1rem !important;\n    padding: 0.5rem;\n  }\n  p {\n    font-size: 1.25rem;\n    max-width: 50%;\n    margin: auto;\n    @media "," {\n      max-width: 80%;\n    }\n  }\n"]);return Ae=function(){return e},e}function Me(){var e=Object(l.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    #f0e0ca,\n    #fbe4ba,\n    #ffeaa9,\n    #fff299,\n    #fffa89\n  );\n  height: 125vh;\n  @media "," {\n    height: 100vh;\n  }\n  div {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 30vh;\n  }\n\n  h1 {\n    margin: 0 auto;\n    font-size: 7rem;\n    @media "," {\n      font-size: 5rem;\n    }\n\n    @media "," {\n      font-size: 3rem;\n    }\n  }\n  h2 {\n    margin-top: 0;\n    @media "," {\n      font-size: 2.5rem;\n    }\n    @media "," {\n      font-size: 1.5rem;\n    }\n  }\n  img {\n    margin: 28vh auto 0 auto;\n    width: 40%;\n    z-index: 1;\n    position: relative;\n    @media "," {\n      width: 60%;\n    }\n    @media "," {\n      width: 80%;\n    }\n  }\n"]);return Me=function(){return e},e}var Te=u.b.header(Me(),Ie.tablet,Ie.tablet,Ie.mobileL,Ie.desktop,Ie.tablet,Ie.laptop,Ie.mobileL),Le=u.b.section(Ae(),Ie.laptop),Ne=u.b.footer(ze()),Fe=u.b.div(De(),xe.a),We=(u.b.section(Ue()),function(){return r.a.createElement("div",null,r.a.createElement(Te,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Socialbook"),r.a.createElement("h2",null,"Share ","&"," Read")),r.a.createElement("img",{src:Oe.a})),r.a.createElement(Le,null,r.a.createElement("p",null,"Socialbook is the site to share your reading picks.",r.a.createElement("br",null),"Use our ",r.a.createElement("a",{href:"#"},"explorer")," to discover new exciting readings based on your taste.",r.a.createElement("br",null),"Save your favorite readings, share them with friends and find out what they are reading.")),r.a.createElement(Fe,{id:"signin-section"}," ",r.a.createElement("div",null,r.a.createElement("h2",null,"Sign In"),r.a.createElement(ie,null),r.a.createElement("p",null,r.a.createElement(Q,null)),r.a.createElement("p",null,r.a.createElement(K,null)))),r.a.createElement(Ne,null))}),Re=n(44);function Ve(){var e=Object(l.a)(["\n  display: flex;\n"]);return Ve=function(){return e},e}function Be(){var e=Object(l.a)(["\n  cursor: pointer;\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  margin: 0;\n"]);return Be=function(){return e},e}function Je(){var e=Object(l.a)(["\n  color: #ff0000;\n"]);return Je=function(){return e},e}function qe(){var e=Object(l.a)(["\n  max-width: 30%;\n"]);return qe=function(){return e},e}function He(){var e=Object(l.a)(["\n      background: gray;\n      border: none !important;\n      color: white;\n    "]);return He=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 5px;\n  font-size: 14px;\n  color: gray;\n  margin: 0.25rem 0.5rem 0.25rem 0;\n  padding: 0.25rem 1.25rem;\n  cursor: pointer;\n  ","\n"]);return Xe=function(){return e},e}function Ge(){var e=Object(l.a)(["\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n"]);return Ge=function(){return e},e}var Ke=u.b.div(Ge()),Ye=u.b.button(Xe(),function(e){return e.delete&&Object(u.a)(He())}),Ze=u.b.img(qe()),$e=u.b.p(Je()),_e=u.b.input(Be()),Qe=u.b.div(Ve()),et={error:null,images:{}},tt=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state=Object(d.a)({},et),n.handleImageChange=n.handleImageChange.bind(Object(v.a)(n)),n.deleteImage=n.deleteImage.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"uploadImageToParent",value:function(){this.props.uploadImage(this.state.images)}},{key:"handleImageChange",value:function(e){var t=this;e.preventDefault();var n=new FileReader,a=e.target.files[0];if(a){var r=a.name.split(".").pop().toLowerCase(),o=["jpg","jpeg","png","gif"].indexOf(r)>-1,i=a.size<1048487;o?i?(this.setState({error:null}),n.onloadend=function(){t.setState({error:null,images:{imageName:a.name,imageUrl:n.result}}),t.uploadImageToParent()},n.readAsDataURL(a)):this.setState({error:"Sorry, the file is too big",images:{imageUrl:""}}):this.setState({error:"Sorry, the file is not an image",images:{imageUrl:""}})}}},{key:"deleteImage",value:function(){this.setState({images:{}}),this.uploadImageToParent()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Ze,{src:this.props.imageUrl})),r.a.createElement("div",null,r.a.createElement($e,null,this.state.error)),r.a.createElement(Qe,null,r.a.createElement(Ke,null,r.a.createElement(Ye,null,this.props.buttonLabel),r.a.createElement(_e,{type:"file",accept:"image/*",onChange:this.handleImageChange})),this.props.editMode&&r.a.createElement(Ye,{delete:!0,onClick:this.deleteImage},"Delete Image")))}}]),t}(a.Component),nt={authorOfCommentID:"",authorOfCommentName:"",text:""},at=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state=Object(d.a)({},nt),n.onChangeComment=n.onChangeComment.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"onChangeComment",value:function(e){this.setState({authorOfCommentID:this.props.authUser.uid,authorOfCommentName:this.props.authUser.username,commentedAt:new Date,text:e.target.value}),console.log(this.state)}},{key:"onPostComment",value:function(e){this.props.commentPost(e,this.state),this.setState(Object(d.a)({},nt))}},{key:"render",value:function(){var e=this;return r.a.createElement("article",null,"What do you think?",r.a.createElement("input",{onChange:this.onChangeComment,value:this.state.text}),r.a.createElement("button",{onClick:function(){e.onPostComment(e.props.post)}},"Comment"))}}]),t}(a.Component);function rt(){var e=Object(l.a)(["\n  background-color: #fff !important;\n  border: 1px solid #b6b6b6;\n  -moz-border-radius: 1px solid #b6b6b6\n  -webkit-border-radius:1px solid #b6b6b6\n  border-radius: 5px;\n  font-family: Open Sans, Arial, sans-serif;\n  font-size: 15px;\n  color: #404b56 !important;\n  padding: 16px !important;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return rt=function(){return e},e}function ot(){var e=Object(l.a)(["\n  max-width: 15rem;\n"]);return ot=function(){return e},e}var it=u.b.img(ot()),lt=u.b.textarea(rt()),ct=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onChangeEditText=function(e){n.setState({editText:e.target.value})},n.saveEdit=function(){n.props.editPost(n.props.post,n.state.images,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.post.text,error:null,images:n.props.post.images},n.uploadImage=n.uploadImage.bind(Object(v.a)(n)),n.editPost=n.editPost.bind(Object(v.a)(n)),n.cancelEdit=n.cancelEdit.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"editPost",value:function(){this.setState({editMode:!0})}},{key:"cancelEdit",value:function(){var e=this;this.setState(function(t){return{editMode:!t.editMode,editText:e.props.post.text}})}},{key:"uploadImage",value:function(e){this.setState({images:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.authUser,a=t.bookIt,o=t.deletePost,i=t.incomingPosts,l=t.post,c=t.commentPost,s=this.state,u=s.editMode,m=s.editText;return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",null,r.a.createElement(lt,{type:"text",value:m,onChange:this.onChangeEditText,cols:"40",rows:"6","aria-required":!0,"aria-invalid":!1}),l.images.imageUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tt,{uploadImage:this.uploadImage,buttonLabel:"Change Image",editMode:this.state.editMode,deleteImage:this.deleteImage,imageUrl:this.state.images.imageUrl})),!l.images.imageUrl&&r.a.createElement(r.a.Fragment,null,r.a.createElement(tt,{uploadImage:this.uploadImage,buttonLabel:"Upload Image",editMode:this.state.editMode,deleteImage:this.deleteImage,imageUrl:this.state.images.imageUrl})),r.a.createElement("button",{onClick:function(){console.log(e.state),e.saveEdit()}},"Update Post"),r.a.createElement("button",{onClick:this.cancelEdit},"Cancel"),r.a.createElement("hr",null)):i&&r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,l.username)," shared on"," ",r.a.createElement("i",null,l.createdAt.toDate().toString().slice(0,10)," "),"at",r.a.createElement("i",null,l.createdAt.toDate().toLocaleString().slice(-9,-1)),l.editedAt&&r.a.createElement("i",null," (Edited) "),":"),r.a.createElement("p",null,r.a.createElement("i",null,l.text," ")),r.a.createElement(it,{src:l.images.imageUrl}),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"Books"},"\ud83d\udcda")," ","Bookits: ",l.bookIt),r.a.createElement("button",{onClick:function(){return a(l)}},"I"," ",r.a.createElement("span",{role:"img","aria-label":"Book"},"\ud83d\udcd6")," ","it!"),n.uid===l.authorID&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.editPost},"Edit Post"),r.a.createElement("button",{onClick:function(){return o(l)}},"Delete Post")),l.comments&&r.a.createElement("article",null,r.a.createElement("p",null,"Comments:"),r.a.createElement("div",null,l.comments.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,e.authorOfCommentName," commented:",r.a.createElement("i",null," ",e.text)))}))),r.a.createElement(at,{authUser:n,post:l,commentPost:c}),r.a.createElement("hr",null)))}}]),t}(a.Component),st=n(45),ut=n.n(st),mt=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onListenForPosts=function(){n.setState({loading:!0}),n.unsubscribe=n.props.firebase.posts().orderBy("createdAt","desc").limit(n.state.limit).onSnapshot(function(e){if(e.size){var t=[];e.forEach(function(e){return t.push(Object(d.a)({},e.data(),{uid:e.id}))}),n.setState({incomingPosts:t,loading:!1})}else n.setState({incomingPosts:null,loading:!1})})},n.editPost=function(e,t,a){e.uid;var r=Object(Re.a)(e,["uid"]);n.props.firebase.post(e.uid).update(Object(d.a)({},r,{editedAt:new Date,images:t,text:a}))},n.bookIt=function(e){n.props.firebase.post(e.uid).set({bookIt:e.bookIt+1},{merge:!0}).catch(function(e){console.error("Error writing document: ",e)})},n.commentPost=function(e,t){n.props.firebase.db.runTransaction(function(a){return a.get(n.props.firebase.post(e.uid)).then(function(r){if(r.data().comments){var o=r.data().comments;o.push(t),a.update(n.props.firebase.post(e.uid),{comments:o})}else a.set({comments:[t]})})}).then(function(){console.log("Transaction successfully committed!")}).catch(function(e){console.log("Transaction failed: ",e)})},n.deletePost=function(e){n.props.firebase.post(e.uid).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)})},n.onNextPage=function(){n.setState(function(e){return{limit:e.limit+5}},n.onListenForPosts)},n.state={loading:!1,incomingPosts:[],limit:5},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.onListenForPosts()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this,t=this.state,n=t.incomingPosts,a=t.loading;return r.a.createElement(ce.Consumer,null,function(t){return r.a.createElement("div",null,r.a.createElement("h2",null,"Recent Posts"),a&&r.a.createElement("div",null,r.a.createElement(ut.a,{type:"CradleLoader"})),!a&&n&&r.a.createElement("div",null,e.state.incomingPosts.map(function(n){return r.a.createElement(ct,{authUser:t,bookIt:e.bookIt,commentPost:e.commentPost,deletePost:e.deletePost,editPost:e.editPost,incomingPosts:e.state.incomingPosts,post:n,key:n.uid})}),r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More Posts")),!n&&r.a.createElement("div",null,"Sorry, there are no posts... yet."))})}}]),t}(a.Component),dt=j(mt);function pt(){var e=Object(l.a)(["\n  background-color: #fff !important;\n  border: 1px solid #b6b6b6;\n  width: 50% !important;\n  -moz-border-radius: 1px solid #b6b6b6\n  -webkit-border-radius:1px solid #b6b6b6\n  border-radius: 5px;\n  font-family: Open Sans, Arial, sans-serif;\n  font-size: 15px;\n  color: #404b56 !important;\n  padding: 16px !important;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return pt=function(){return e},e}var ft=u.b.textarea(pt()),ht={authorID:"",bookIt:0,comments:[],error:null,images:{imageName:"",imageUrl:""},isPublic:!1,text:""},bt=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onChangeText=function(e){n.setState({authorID:n.props.firebase.activeUser.uid,text:e.target.value})},n.onChangeCheckbox=function(e){n.setState({isPublic:e.target.checked}),console.log("Public: "+n.state.isPublic)},n.state=Object(d.a)({},ht),n.createPost=n.createPost.bind(Object(v.a)(n)),n.uploadImage=n.uploadImage.bind(Object(v.a)(n)),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"uploadImage",value:function(e){this.setState({images:e})}},{key:"createPost",value:function(e){var t=this;this.props.firebase.posts().add(Object(d.a)({username:e,createdAt:new Date},this.state)).then(function(){console.log(t.state),t.setState(Object(d.a)({},ht)),console.log("Document successfully written!"),console.log(t.state)}).catch(function(e){console.error("Error writing document: ",e)})}},{key:"render",value:function(){var e=this,t=null!=this.state.error||""===this.state.text;return r.a.createElement("div",null,r.a.createElement(ce.Consumer,null,function(e){return r.a.createElement("h2",null,"Hello",r.a.createElement("label",null," ",e.username,"!"))}),r.a.createElement("h3",null,"What are you reading?"),r.a.createElement(ft,{type:"text",onChange:this.onChangeText,value:this.state.text,rows:"10","aria-required":!0,"aria-invalid":!1}),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{name:"isPublic",type:"checkbox",checked:this.state.isPublic,value:!1,onChange:this.onChangeCheckbox}),"Private (visible only in my club):")),r.a.createElement(J,{uploadImage:this.uploadImage,buttonLabel:"Upload Image",imageUrl:this.state.images.imageUrl}),r.a.createElement(ce.Consumer,null,function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{disabled:t,type:"submit",onClick:function(){e.createPost(n.username)}},"Share"),r.a.createElement("button",{onClick:function(){e.setState(Object(d.a)({},ht))}},"Cancel"))}),r.a.createElement(dt,null))}}]),t}(a.Component),gt=j(bt),Et=Object(E.a)(me,ue(function(e){return!!e}))(function(){return r.a.createElement("main",null,r.a.createElement(gt,null))});function vt(){var e=Object(l.a)(["\n  max-width: 10rem;\n"]);return vt=function(){return e},e}var Ot=u.b.img(vt()),jt=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.authUser;return r.a.createElement("div",null,r.a.createElement("h2",null,"Account belongs to ",e.username,"."),r.a.createElement(Ot,{src:e.profilePic.imageUrl,alt:"Profile"}),r.a.createElement("p",null,r.a.createElement("strong",null,"USER ID:")," ",e.uid))}}]),t}(a.Component),xt={passwordOne:"",passwordTwo:"",error:null},yt=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(d.a)({},xt))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.state=Object(d.a)({},xt),n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"Nueva contrase\xf1a"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirmar contrase\xf1a"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),wt=j(yt),kt=Object(E.a)(me,ue(function(e){return e&&!!e}))(function(){return r.a.createElement(ce.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(jt,{authUser:e}),r.a.createElement("div",null,r.a.createElement("h3",null,"I forgot my Password:"),r.a.createElement(te,null)),r.a.createElement("div",null,r.a.createElement("h3",null,"I want to reset my Password:"),r.a.createElement(wt,null)))})}),Ct=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.unsubscribe=this.props.firebase.users().onSnapshot(function(t){var n=[];t.docs.map(function(e){var t={userID:e.id,userData:e.data()};return n.push(t),n}),e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.userID},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.userID),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.userData.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.userData.username),r.a.createElement("span",null))})))}}]),t}(a.Component),St=j(Ct),Pt=Object(E.a)(me,ue(function(e){return e&&!!e.roles[P]}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"Esta p\xe1gina es visible a todos los usuarios logueados como administradores."),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/admin",component:St})))});function It(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  background-color: #ffaaaa;\n  justify-content: center;\n  height: 5rem;\n  p {\n    font-size: 0.85rem;\n  }\n"]);return It=function(){return e},e}var Ut=u.b.footer(It()),Dt=se(function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(s.a,{exact:!0,path:"/",component:We}),r.a.createElement(s.a,{exact:!0,path:"/signup",component:Z}),r.a.createElement(s.a,{exact:!0,path:"/signin",component:le}),r.a.createElement(s.a,{exact:!0,path:"/pw-forget",component:ee}),r.a.createElement(s.a,{exact:!0,path:S,component:Et}),r.a.createElement(s.a,{exact:!0,path:"/account",component:kt}),r.a.createElement(s.a,{exact:!0,path:"/admin",component:Pt}),r.a.createElement(s.a,{exact:!0,path:"/post",component:gt}))),r.a.createElement(Ut,null,r.a.createElement("p",null,"Currently using React ",r.a.version)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x.Provider,{value:new C},r.a.createElement(Dt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.6f56fe2d.chunk.js.map