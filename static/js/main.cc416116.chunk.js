(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{83:function(t,n,e){},84:function(t,n,e){"use strict";e.r(n);var i=e(3),a=e.n(i),s=e(28),r=e.n(s),c=e(14),o=e(46),d=e(11),l=e(5),x=e(6),b=e(25);e(56),e(57),e(58);b.a.initializeApp({apiKey:"AIzaSyBkrNJVNtt2mnqRF2ryOJEC-VANWFC_Wks",authDomain:"new-linkedin-720de.firebaseapp.com",projectId:"new-linkedin-720de",storageBucket:"new-linkedin-720de.appspot.com",messagingSenderId:"947389378674",appId:"1:947389378674:web:9a39cdab16bfb6db0252eb"});const p=b.a.firestore(),j=b.a.auth(),g=new b.a.auth.GoogleAuthProvider,h=b.a.storage();var m=p;const u="SET_USER",O="SET_LOADING_STATUS",f="GET_ARTICLES";function v(t){return{type:u,user:t}}function w(t){return{type:O,status:t}}function y(){return t=>{let n,e;t(w(!0)),m.collection("articles").orderBy("actor.date","desc").onSnapshot((i=>{n=i.docs.map((t=>t.data())),e=i.docs.map((t=>t.id)),t(function(t,n){return{type:f,payload:t,id:n}}(n,e))})),t(w(!1))}}var k,z,S,L,A,I,U,C,N=e(2);const R=x.a.div(k||(k=Object(l.a)([""]))),F=x.a.nav(z||(z=Object(l.a)(["\n\tmax-width: 1128px;\n\tmargin: auto;\n\tpadding: 12px 0 16px;\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\tposition: relative;\n\n\t& > a {\n\t\twidth: 130px;\n\t\theight: 35px;\n\t\t@media (max-width: 768px) {\n\t\t\tpadding: 0 5px;\n\t\t}\n\t}\n"]))),E=x.a.a(S||(S=Object(l.a)(["\n\tfont-size: 16px;\n\tpadding: 10px;\n\ttext-decoration: none;\n\tborder-radius: 5px;\n\tcolor: rgba(0, 0, 0, 0.6);\n\tmargin-right: 8px;\n\n\t&:hover {\n\t\tbackground-color: rgba(0, 0, 0, 0.08);\n\t\tcolor: rgba(0, 0, 0, 1);\n\t}\n"]))),H=x.a.a(L||(L=Object(l.a)(["\n\tbox-shadow: inset 0 0 0 1px #0a66c2;\n\tborder-radius: 25px;\n\tcolor: #0a66c2;\n\tfont-size: 16px;\n\tfont-weight: 600;\n\ttransition-duration: 167ms;\n\tline-height: 40px;\n\tpadding: 10px 25px;\n\ttext-align: center;\n\tbackground-color: transparent;\n\t&:hover {\n\t\tbackground-color: rgba(112, 181, 249, 0.15);\n\t\tbox-shadow: inset 0 0 0 2px #0a66c2;\n\t}\n"]))),T=x.a.section(A||(A=Object(l.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-content: start;\n\tmin-height: 700px;\n\tpadding-bottom: 138px;\n\tpadding-top: 40px;\n\tpadding: 60px 0;\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 1128px;\n\talign-items: center;\n\tmargin: auto;\n\t@media (max-width: 768px) {\n\t\tmin-height: 0;\n\t}\n"]))),_=x.a.div(I||(I=Object(l.a)(["\n\twidth: 100%;\n\th1 {\n\t\tpadding-bottom: 0;\n\t\twidth: 55%;\n\t\tfont-size: 56px;\n\t\tcolor: #2977c9;\n\t\tfont-weight: 200;\n\t\tline-height: 70px;\n\t\t@media (max-width: 768px) {\n\t\t\ttext-align: center;\n\t\t\twidth: 100%;\n\t\t\tfont-size: 20px;\n\t\t\tline-height: 2;\n\t\t}\n\t}\n\timg {\n\t\twidth: 700px;\n\t\theight: 670px;\n\t\tposition: absolute;\n\t\tbottom: -2px;\n\t\tright: -150px;\n\t\t@media (max-width: 768px) {\n\t\t\ttop: 230px;\n\t\t\tposition: initial;\n\t\t\twidth: initial;\n\t\t\theight: initial;\n\t\t}\n\t}\n"]))),M=x.a.div(U||(U=Object(l.a)(["\n\tmargin-top: 100px;\n\twidth: 408px;\n\t@media (max-width: 768px) {\n\t\tmargin: 20px auto 0;\n\t}\n"]))),D=x.a.button(C||(C=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #fff;\n\theight: 56px;\n\twidth: 100%;\n\tborder-radius: 30px;\n\tbox-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);\n\tborder: none;\n\tvertical-align: middle;\n\ttransition-duration: 167ms;\n\tfont-size: 20px;\n\tcolor: rgba(0, 0, 0, 0.6);\n\tz-index: 0;\n\t&:hover {\n\t\tbackground-color: rgba(207, 207, 207, 0.25);\n\t\tcolor: rgba(0, 0, 0, 0.75);\n\t\tbox-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%), inset 0 0 0 3px rgb(0 0 0 / 0%), inset 0 0 0 2px rgb(0 0 0 / 0);\n\t}\n\timg {\n\t\tmargin-right: 25px;\n\t}\n"])));var W,B,G,J,V,P,q,K,X,Y,Q,Z,$=Object(c.b)((t=>({user:t.userState.user})),(t=>({signIn:()=>t((t=>{j.signInWithPopup(g).then((n=>t(v(n.user)))).catch((t=>alert(t.message)))}))})))((function(t){return Object(N.jsxs)(R,{children:[t.user&&Object(N.jsx)(d.a,{to:"/feed"}),Object(N.jsxs)(F,{children:[Object(N.jsx)("a",{href:"/",children:Object(N.jsx)("img",{src:"/images/login-logo.svg",alt:""})}),Object(N.jsxs)("div",{children:[Object(N.jsx)(E,{children:"Join Now"}),Object(N.jsx)(H,{children:"Sign In"})]})]}),Object(N.jsxs)(T,{children:[Object(N.jsxs)(_,{children:[Object(N.jsx)("h1",{children:"Welcome to your professional community"}),Object(N.jsx)("img",{src:"/images/login-hero.svg",alt:""})]}),Object(N.jsx)(M,{children:Object(N.jsxs)(D,{onClick:()=>t.signIn(),children:[Object(N.jsx)("img",{src:"/images/google.svg",alt:""}),"Sign in with Google"]})})]})]})}));const tt=x.a.div(W||(W=Object(l.a)(["\n\tbackground-color: #fff;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.08);\n\tpadding: 0 24px;\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\t/* width: 100vw; */\n\tz-index: 10;\n"]))),nt=x.a.div(B||(B=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 auto;\n\theight: 100%;\n\tmax-width: 1128px;\n"]))),et=x.a.span(G||(G=Object(l.a)(["\n\tmargin-right: 8px;\n\tfont-size: 0;\n"]))),it=x.a.div(J||(J=Object(l.a)(["\n\topacity: 1;\n\tflex-grow: 1;\n\tposition: relative;\n\t@media (max-width: 768px) {\n\t\tflex-grow: unset;\n\t}\n\t& > div {\n\t\tmax-width: 280px;\n\t\tinput {\n\t\t\tborder: none;\n\t\t\tbox-shadow: none;\n\t\t\tbackground-color: #eef3f8;\n\t\t\tborder-radius: 2px;\n\t\t\tcolor: rgba(0, 0, 0, 0.9);\n\t\t\twidth: 218px;\n\t\t\tpadding: 0 8px 0 40px;\n\t\t\tline-height: 1.75;\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 14px;\n\t\t\theight: 34px;\n\t\t\tvertical-align: text-top;\n\t\t\tborder-color: #dce6f1;\n\t\t\t@media (max-width: 768px) {\n\t\t\t\twidth: 140px;\n\t\t\t}\n\t\t}\n\t}\n"]))),at=x.a.div(V||(V=Object(l.a)(["\n\twidth: 40px;\n\tz-index: 1;\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 5px;\n\tborder-radius: 0 2px 2px 0;\n\tmargin: 0;\n\tpointer-events: none;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),st=x.a.nav(P||(P=Object(l.a)(["\n\tmargin-left: auto;\n\tdisplay: block;\n\t@media (max-width: 768px) {\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tbackground: white;\n\t\twidth: 100%;\n\t}\n"]))),rt=x.a.ul(q||(q=Object(l.a)(['\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tlist-style-type: none;\n\tjustify-content: space-between;\n\t.active {\n\t\tspan::after {\n\t\t\tcontent: "";\n\t\t\ttransform: scaleX(1);\n\t\t\tborder-bottom: 2px solid var(--white, #fff);\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: 0;\n\t\t\ttransition: transform 0.2s ease-in-out;\n\t\t\twidth: 100%;\n\t\t\tborder-color: rgba(0, 0, 0, 0.9);\n\t\t}\n\t}\n']))),ct=x.a.li(K||(K=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\ta {\n\t\talign-items: center;\n\t\tbackground: transparent;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tfont-size: 12px;\n\t\tfont-weight: 400;\n\t\tjustify-content: center;\n\t\tline-height: 1.5;\n\t\tmin-height: 52px;\n\t\tmin-width: 80px;\n\t\tposition: relative;\n\t\ttext-decoration: none;\n\t\tspan {\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\ttext-align: center;\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\tmin-width: 50px;\n\t\t\tfont-size: 9px;\n\t\t\tspan > img {\n\t\t\t\twidth: 40%;\n\t\t\t}\n\t\t}\n\t}\n\t&:hover,\n\t&:active {\n\t\ta {\n\t\t\tspan {\n\t\t\t\tcolor: rgba(0, 0, 0, 0.9);\n\t\t\t}\n\t\t}\n\t}\n"]))),ot=x.a.div(X||(X=Object(l.a)(["\n\tposition: absolute;\n\ttop: 45px;\n\tbackground: white;\n\tborder-radius: 0 0 5px 5px;\n\twidth: 100px;\n\theight: 40px;\n\tfont-size: 16px;\n\ttext-align: center;\n\ttransition-duration: 167ms;\n\tdisplay: none;\n\tz-index: 15;\n"]))),dt=x.a.div(Y||(Y=Object(l.a)(["\n\tdisplay: none;\n\t@media (max-width: 768px) {\n\t\tdisplay: flex;\n\t\tpadding-left: 1rem;\n\t\tfont-size: 14px;\n\t}\n"]))),lt=Object(x.a)(ct)(Q||(Q=Object(l.a)(["\n\ta > img {\n\t\tborder-radius: 50%;\n\t\twidth: 25px;\n\t\theight: 25px;\n\t}\n\tspan {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t&:hover {\n\t\t"," {\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t}\n\t}\n"])),ot),xt=Object(x.a)(lt)(Z||(Z=Object(l.a)(["\n\tborder-left: 1px solid rgba(0, 0, 0, 0.08);\n"])));var bt,pt,jt,gt,ht,mt,ut,Ot,ft,vt,wt=Object(c.b)((t=>({user:t.userState.user})),(t=>({signOut:()=>t((t=>{j.signOut().then((()=>t(v(null)))).catch((t=>alert(t.message)))}))})))((function(t){return Object(N.jsx)(tt,{children:Object(N.jsxs)(nt,{children:[Object(N.jsx)(et,{children:Object(N.jsx)("a",{href:"/feed",children:Object(N.jsx)("img",{src:"/images/home-logo.svg",alt:""})})}),Object(N.jsxs)(it,{children:[Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",placeholder:"Search"})}),Object(N.jsx)(at,{children:Object(N.jsx)("img",{src:"/images/search-icon.svg",alt:""})})]}),Object(N.jsx)(dt,{onClick:()=>t.signOut(),children:Object(N.jsx)("a",{children:"Sign Out"})}),Object(N.jsx)(st,{children:Object(N.jsxs)(rt,{children:[Object(N.jsx)(ct,{className:"active",children:Object(N.jsxs)("a",{href:"/feed",children:[Object(N.jsx)("img",{src:"/images/nav-home.svg",alt:""}),Object(N.jsx)("span",{children:"Home"})]})}),Object(N.jsx)(ct,{children:Object(N.jsxs)("a",{href:"/feed",children:[Object(N.jsx)("img",{src:"/images/nav-network.svg",alt:""}),Object(N.jsx)("span",{children:"My Network"})]})}),Object(N.jsx)(ct,{children:Object(N.jsxs)("a",{href:"/feed",children:[Object(N.jsx)("img",{src:"/images/nav-jobs.svg",alt:""}),Object(N.jsx)("span",{children:"Jobs"})]})}),Object(N.jsx)(ct,{children:Object(N.jsxs)("a",{href:"/feed",children:[Object(N.jsx)("img",{src:"/images/nav-messaging.svg",alt:""}),Object(N.jsx)("span",{children:"Messaging"})]})}),Object(N.jsx)(ct,{children:Object(N.jsxs)("a",{href:"/feed",children:[Object(N.jsx)("img",{src:"/images/nav-notifications.svg",alt:""}),Object(N.jsx)("span",{children:"Notifications"})]})}),Object(N.jsxs)(lt,{children:[Object(N.jsxs)("a",{children:[t.user&&t.user.photoURL?Object(N.jsx)("img",{src:t.user.photoURL,alt:""}):Object(N.jsx)("img",{src:"/images/user.svg",alt:""}),Object(N.jsxs)("span",{children:["Me ",Object(N.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]}),Object(N.jsx)(ot,{onClick:()=>t.signOut(),children:Object(N.jsx)("a",{children:"Sign Out"})})]}),Object(N.jsx)(xt,{children:Object(N.jsxs)("a",{children:[Object(N.jsx)("img",{src:"/images/nav-work.svg",alt:""}),Object(N.jsxs)("span",{children:["Work ",Object(N.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]})})]})})]})})}));const yt=x.a.div(bt||(bt=Object(l.a)(["\n\tgrid-area: left;\n"]))),kt=x.a.div(pt||(pt=Object(l.a)(["\n\ttext-align: center;\n\toverflow: hidden;\n\tmargin-bottom: 8px;\n\tborder-radius: 5px;\n\tbackground-color: #fff;\n\ttransition: box-shadow 83ms;\n\tposition: relative;\n\tborder: none;\n\tbox-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),zt=x.a.div(jt||(jt=Object(l.a)(["\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.15);\n\tpadding: 12px 12px 16px;\n\tword-wrap: break-word;\n\tword-break: break-word;\n"]))),St=x.a.div(gt||(gt=Object(l.a)(['\n\tbackground: url("/images/card-bg.svg");\n\tbackground-position: center;\n\tbackground-size: 462px;\n\theight: 54px;\n\tmargin: -12px -12px 0;\n']))),Lt=x.a.div(ht||(ht=Object(l.a)(["\n\tbox-shadow: none;\n\tbackground: url(",");\n\twidth: 72px;\n\theight: 72px;\n\tbox-sizing: border-box;\n\tbackground-clip: content-box;\n\tbackground-color: #fff;\n\tbackground-position: center;\n\t/* background-size: 60%; */\n\tbackground-repeat: no-repeat;\n\tborder: 2px solid white;\n\tmargin: -38px auto 12px;\n\tborder-radius: 50%;\n"])),(t=>t.photoUrl)),At=x.a.div(mt||(mt=Object(l.a)(["\n\tfont-size: 16px;\n\tline-height: 1.5;\n\tcolor: rgba(0, 0, 0, 0.9);\n\tfont-weight: 600;\n"]))),It=x.a.div(ut||(ut=Object(l.a)(["\n\tcolor: #0a66c2;\n\tmargin-top: 4px;\n\tfont-size: 12px;\n\tline-height: 1.33;\n\tfont-weight: 400;\n"]))),Ut=x.a.div(Ot||(Ot=Object(l.a)(["\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.15);\n\tpadding: 12px 0;\n\t& > a {\n\t\ttext-decoration: none;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tpadding: 4px 12px;\n\t\t&:hover {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.08);\n\t\t}\n\t\tdiv {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\ttext-align: left;\n\t\t\tspan {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.333;\n\t\t\t\t&:first-child {\n\t\t\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\t\t}\n\t\t\t\t&:nth-child(2) {\n\t\t\t\t\tcolor: #000;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),Ct=x.a.a(ft||(ft=Object(l.a)(["\n\tdisplay: block;\n\tborder-color: rgba(0, 0, 0, 0.6);\n\ttext-align: left;\n\tpadding: 12px;\n\tfont-size: 12px;\n\tspan {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\t&:hover {\n\t\tbackground-color: rgba(0, 0, 0, 0.08);\n\t}\n"]))),Nt=Object(x.a)(kt)(vt||(vt=Object(l.a)(["\n\tpadding: 8px 0 0;\n\ttext-align: left;\n\tdisplay: flex;\n\tflex-direction: column;\n\ta {\n\t\tcolor: #000;\n\t\tpadding: 4px 12px;\n\t\tfont-size: 12px;\n\t\t&:hover {\n\t\t\tcolor: #0a66c2;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\t&:last-child {\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tborder-top: 1px solid #d6cec2;\n\t\t\tpadding: 12px;\n\t\t\t&:hover {\n\t\t\t\tbackground-color: rgba(0, 0, 0, 0.08);\n\t\t\t}\n\t\t}\n\t}\n"])));var Rt,Ft,Et,Ht,Tt,_t,Mt,Dt,Wt,Bt,Gt,Jt,Vt=Object(c.b)((t=>({user:t.userState.user})))((function(t){let n=t.user.photoURL?t.user.photoURL:"/images/photo.svg";return Object(N.jsxs)(yt,{children:[Object(N.jsxs)(kt,{children:[Object(N.jsxs)(zt,{children:[Object(N.jsx)(St,{}),Object(N.jsxs)("a",{children:[Object(N.jsx)(Lt,{photoUrl:n}),Object(N.jsxs)(At,{children:["Welcome, ",t.user?t.user.displayName:"there","!"]})]}),Object(N.jsx)("a",{children:Object(N.jsx)(It,{children:"Add a photo"})})]}),Object(N.jsx)(Ut,{children:Object(N.jsxs)("a",{children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Connections"}),Object(N.jsx)("span",{children:"Grow Your Network"})]}),Object(N.jsx)("img",{src:"/images/widget-icon.svg",alt:""})]})}),Object(N.jsx)(Ct,{children:Object(N.jsxs)("span",{children:[Object(N.jsx)("img",{src:"/images/item-icon.svg",alt:""}),"My Items"]})})]}),Object(N.jsxs)(Nt,{children:[Object(N.jsx)("a",{children:Object(N.jsx)("span",{children:"Groups"})}),Object(N.jsx)("a",{children:Object(N.jsxs)("span",{children:["Events",Object(N.jsx)("img",{src:"/images/plus-icon.svg",alt:""})]})}),Object(N.jsx)("a",{children:Object(N.jsx)("span",{children:"Follow Hashtags"})}),Object(N.jsx)("a",{children:Object(N.jsx)("span",{children:"Discover More"})})]})]})})),Pt=e(29),qt=e.n(Pt),Kt=e(48);const Xt=x.a.div(Rt||(Rt=Object(l.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tz-index: 11;\n\tbackground-color: rgba(0, 0, 0, 0.8);\n\tanimation: fadeIn 0.3s ease;\n"]))),Yt=x.a.div(Ft||(Ft=Object(l.a)(["\n\twidth: 100%;\n\tmax-width: 552px;\n\tmax-height: 90%;\n\tbackground-color: #fff;\n\toverflow: initial;\n\tborder-radius: 5px;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttop: 32px;\n\tmargin: 0 auto;\n"]))),Qt=x.a.div(Et||(Et=Object(l.a)(["\n\tdisplay: block;\n\tpadding: 10px 20px;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.15);\n\tfont-size: 20px;\n\tline-height: 1.5;\n\tcolor: rgba(0, 0, 0, 0.9);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\th2 {\n\t\tfont-weight: 400;\n\t}\n\tbutton {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tmin-width: auto;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbackground: transparent;\n\t\timg,\n\t\tsvg {\n\t\t\tpointer-events: none;\n\t\t}\n\t}\n"]))),Zt=x.a.div(Ht||(Ht=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\toverflow-y: auto;\n\tvertical-align: baseline;\n\tbackground: transparent;\n\tpadding: 5px 12px;\n"]))),$t=x.a.div(Tt||(Tt=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 10px 24px;\n\timg {\n\t\twidth: 48px;\n\t\theight: 48px;\n\t\tbackground-clip: content-box;\n\t\tborder-radius: 50%;\n\t\tborder: 2px solid transparent;\n\t}\n\tspan {\n\t\tfont-weight: 600;\n\t\tfont-size: 16px;\n\t\tline-height: 1.5;\n\t\tmargin-left: 5px;\n\t}\n"]))),tn=x.a.div(_t||(_t=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 10px 24px 10px 16px;\n"]))),nn=x.a.div(Mt||(Mt=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]))),en=x.a.button(Dt||(Dt=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\theight: 40px;\n\tmin-width: auto;\n\tmargin-right: 8px;\n\tborder-radius: 50%;\n\tborder: none;\n\toutline: none;\n\tjustify-content: center;\n\tbackground: transparent;\n\t&:hover {\n\t\tbackground: rgba(0, 0, 0, 0.08);\n\t}\n"]))),an=x.a.div(Wt||(Wt=Object(l.a)(["\n\tpadding-left: 8px;\n\tmargin-right: auto;\n\tborder-left: 1px solid rgba(0, 0, 0, 0.08);\n\t"," {\n\t\tborder-radius: 50px;\n\t\tpadding: 5px 10px;\n\t\tspan {\n\t\t\tfont-size: 16px;\n\t\t\tfont-weight: 600;\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tpadding: 0 5px;\n\t\t}\n\t}\n"])),en),sn=x.a.button(Bt||(Bt=Object(l.a)(["\n\tmin-width: 60px;\n\tpadding: 0 16px;\n\tborder-radius: 20px;\n\tbackground: ",";\n\tcolor: ",";\n\tfont-size: 16px;\n\tletter-spacing: 1.1px;\n\tborder: none;\n\toutline: none;\n\t&:hover {\n\t\tbackground: ",";\n\t}\n"])),(t=>t.disabled?"#b8b8b8":"#0a66c2"),(t=>t.disabled?"#5a5a5a":"#fff"),(t=>t.disabled?"#b8b8b8":"#004182")),rn=x.a.div(Gt||(Gt=Object(l.a)(["\n\tpadding: 12px 24px;\n\ttextarea {\n\t\twidth: 100%;\n\t\tmin-height: 100px;\n\t\tresize: none;\n\t}\n\tinput {\n\t\twidth: 100%;\n\t\theight: 35px;\n\t\tfont-size: 16px;\n\t\tmargin-bottom: 20px;\n\t}\n"]))),cn=x.a.div(Jt||(Jt=Object(l.a)(["\n\ttext-align: center;\n\timg {\n\t\twidth: 100%;\n\t}\n"])));var on,dn,ln,xn,bn,pn,jn,gn,hn,mn,un=Object(c.b)((t=>({user:t.userState.user})),(t=>({postArticle:n=>t(function(t){return n=>{if(""!==t.image){n(w(!0));const e=h.ref("images/".concat(t.image.name)).put(t.image);e.on("state_changed",(t=>{t.bytesTransferred,t.totalBytes}),(t=>alert(t)),(async()=>{const i=await e.snapshot.ref.getDownloadURL();m.collection("articles").add({actor:{description:t.user.email,title:t.user.displayName,date:t.timestamp,image:t.user.photoURL},video:t.video,sharedImg:i,likes:{count:0,whoLiked:[]},comments:0,description:t.description}),n(w(!1))}))}else t.video?(n(w(!0)),m.collection("articles").add({actor:{description:t.user.email,title:t.user.displayName,date:t.timestamp,image:t.user.photoURL},video:t.video,sharedImg:"",likes:{count:0,whoLiked:[]},comments:0,description:t.description}),n(w(!1))):""===t.image&&""===t.video&&(n(w(!0)),m.collection("articles").add({actor:{description:t.user.email,title:t.user.displayName,date:t.timestamp,image:t.user.photoURL},video:"",sharedImg:"",likes:{count:0,whoLiked:[]},comments:0,description:t.description}),n(w(!1)))}}(n))})))((function(t){const[n,e]=Object(i.useState)(""),[a,s]=Object(i.useState)(""),[r,c]=Object(i.useState)(""),[o,d]=Object(i.useState)(""),l=n=>{e(""),s(""),c(""),d(""),t.clickHandler(n)};function x(t){s(""),c(""),d(t)}return Object(N.jsx)(N.Fragment,{children:"open"===t.showModal&&Object(N.jsx)(Xt,{children:Object(N.jsxs)(Yt,{children:[Object(N.jsxs)(Qt,{children:[Object(N.jsx)("h2",{children:"Create a post"}),Object(N.jsx)("button",{onClick:t=>l(t),children:Object(N.jsx)("img",{src:"/images/close-icon.svg",alt:""})})]}),Object(N.jsxs)(Zt,{children:[Object(N.jsxs)($t,{children:[t.user.photoURL?Object(N.jsx)("img",{src:t.user.photoURL,alt:""}):Object(N.jsx)("img",{src:"/images/user.svg",alt:""}),Object(N.jsx)("span",{children:t.user.displayName?t.user.displayName:"Name"})]}),Object(N.jsxs)(rn,{children:[Object(N.jsx)("textarea",{value:n,onChange:t=>e(t.target.value),placeholder:"What do you want to talk about?",autoFocus:!0}),"image"===o?Object(N.jsxs)(cn,{children:[Object(N.jsx)("input",{type:"file",accept:"image/gif, image/jpeg, image/png",name:"image",id:"imageFile",onChange:function(t){let n=t.target.files[0];""!==n&&void 0!==n?s(n):alert("Not an image. This file is: ".concat(typeof a))},style:{display:"none"}}),Object(N.jsx)("p",{children:Object(N.jsx)("label",{htmlFor:"imageFile",children:"Select an image to share"})}),a&&Object(N.jsx)("img",{src:URL.createObjectURL(a),alt:""})]}):"video"===o&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{type:"text",name:"video",id:"videoFile",value:r,placeholder:"Enter the video link",onChange:t=>c(t.target.value)}),r&&Object(N.jsx)(qt.a,{width:"100%",url:r})]})]})]}),Object(N.jsxs)(tn,{children:[Object(N.jsxs)(nn,{children:[Object(N.jsx)(en,{onClick:()=>x("image"),children:Object(N.jsx)("img",{src:"/images/share-image.svg",alt:""})}),Object(N.jsx)(en,{onClick:()=>x("video"),children:Object(N.jsx)("img",{src:"/images/share-video.svg",alt:""})})]}),Object(N.jsx)(an,{children:Object(N.jsxs)(en,{children:[Object(N.jsx)("img",{src:"/images/share-comment.svg",alt:""}),Object(N.jsx)("span",{children:"Anyone"})]})}),Object(N.jsx)(sn,{disabled:!n,onClick:e=>function(e){if(e.preventDefault(),e.target!==e.currentTarget)return;const i={image:a,video:r,description:n,user:t.user,timestamp:Kt.a.firestore.Timestamp.now()};t.postArticle(i),l(e)}(e),children:"Post"})]})]})})})}));const On=x.a.div(on||(on=Object(l.a)(["\n\tgrid-area: main;\n"]))),fn=x.a.div(dn||(dn=Object(l.a)(["\n\ttext-align: center;\n\toverflow: hidden;\n\tmargin-bottom: 8px;\n\tbackground-color: #fff;\n\tborder-radius: 5px;\n\tposition: relative;\n\tborder: none;\n\tbox-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),vn=Object(x.a)(fn)(ln||(ln=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 0 0 8px;\n\tcolor: #958b7b;\n\tdiv {\n\t\tbutton {\n\t\t\toutline: none;\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 1.5;\n\t\t\tmin-height: 48px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tfont-weight: 600;\n\t\t}\n\t\t&:first-child {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tpadding: 8px 16px;\n\t\t\timg {\n\t\t\t\twidth: 48px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tmargin-right: 8px;\n\t\t\t}\n\t\t\tbutton {\n\t\t\t\tmargin: 4px 0;\n\t\t\t\tflex-grow: 1;\n\t\t\t\tpadding-left: 16px;\n\t\t\t\tborder: 1px solid rgba(0, 0, 0, 0.15);\n\t\t\t\tborder-radius: 35px;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t}\n\t\t&:nth-child(2) {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: space-around;\n\t\t\tpadding-bottom: 4px;\n\t\t\tbutton {\n\t\t\t\timg {\n\t\t\t\t\tmargin: 0 4px 0 -2px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),wn=Object(x.a)(fn)(xn||(xn=Object(l.a)(["\n\tpadding: 0;\n\tmargin: 0 0 8px;\n\toverflow: visible;\n"]))),yn=x.a.div(bn||(bn=Object(l.a)(["\n\tpadding-right: 40px;\n\tflex-wrap: nowrap;\n\tpadding: 12px 16px 0;\n\tmargin-bottom: 8px;\n\tdisplay: flex;\n\talign-items: center;\n\ta {\n\t\tmargin-right: 12px;\n\t\tflex-grow: 1;\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\timg {\n\t\t\twidth: 48px;\n\t\t\theight: 48px;\n\t\t\tborder-radius: 50%;\n\t\t}\n\t\t& > div {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tflex-grow: 1;\n\t\t\tflex-basis: 0;\n\t\t\tmargin-left: 8px;\n\t\t\toverflow: hidden;\n\t\t\tspan {\n\t\t\t\ttext-align: left;\n\t\t\t\t&:first-child {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\tcolor: #000;\n\t\t\t\t}\n\t\t\t\t&:nth-child(n + 2) {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tbutton {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 12px;\n\t\tborder: none;\n\t\toutline: none;\n\t\tbackground: transparent;\n\t}\n"]))),kn=x.a.div(pn||(pn=Object(l.a)(["\n\tpadding: 0 16px;\n\toverflow: hidden;\n\tfont-size: 14px;\n\ttext-align: left;\n"]))),zn=x.a.div(jn||(jn=Object(l.a)(["\n\tmargin: 8px 16px 0;\n\tbackground-color: #f9fafb;\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"]))),Sn=x.a.ul(gn||(gn=Object(l.a)(["\n\tline-height: 1.3;\n\tdisplay: flex;\n\talign-items: flex-start;\n\toverflow: auto;\n\tmargin: 0 16px;\n\tpadding: 8px 0;\n\tborder-bottom: 1px solid #e9efdf;\n\tcolor: rgba(0, 0, 0, 0.6);\n\tlist-style: none;\n\tli {\n\t\tmargin-right: 5px;\n\t\tfont-size: 12px;\n\t\tbutton {\n\t\t\tdisplay: flex;\n\t\t\tborder: none;\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tbackground: transparent;\n\t\t\tspan {\n\t\t\t\tpadding-left: 5px;\n\t\t\t}\n\t\t}\n\t}\n"]))),Ln=x.a.div(hn||(hn=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tmargin: 4px 12px;\n\tmin-height: 40px;\n\tpadding-bottom: 5px;\n\tbutton {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tpadding: 8px;\n\t\tborder: none;\n\t\tbackground: transparent;\n\t\tspan {\n\t\t\tmargin-left: 4px;\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tfont-size: 14px;\n\t\t}\n\t}\n\tbutton.active {\n\t\tspan {\n\t\t\tcolor: #0a66c2;\n\t\t\tfont-weight: 600;\n\t\t}\n\t\tsvg {\n\t\t\tfill: #0a66c2;\n\t\t}\n\t}\n"]))),An=x.a.div(mn||(mn=Object(l.a)(["\n\ttext-align: center;\n\t& > img {\n\t\twidth: 30px;\n\t}\n"])));var In,Un,Cn,Nn,Rn,Fn,En,Hn=Object(c.b)((t=>({user:t.userState.user,loading:t.articleState.loading,articles:t.articleState.articles,ids:t.articleState.ids})),(t=>({getArticles:()=>t(y()),likeHandler:n=>t(function(t){return n=>{m.collection("articles").doc(t.id).update(t.update)}}(n))})))((function(t){const[n,e]=Object(i.useState)("close");Object(i.useEffect)((()=>{t.getArticles()}),[]);const a=t=>{if(t.preventDefault(),t.target===t.currentTarget)switch(n){case"open":e("close");break;case"close":e("open");break;default:e("close")}};return Object(N.jsxs)(On,{children:[Object(N.jsxs)(vn,{children:[Object(N.jsxs)("div",{children:[t.user.photoURL?Object(N.jsx)("img",{src:t.user.photoURL,alt:""}):Object(N.jsx)("img",{src:"/images/user.svg",alt:""}),Object(N.jsx)("button",{onClick:a,disabled:!!t.loading,children:"Start a post"})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/photo-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Photo"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/video-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Video"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/event-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Event"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/article-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Write article"})]})]})]}),Object(N.jsxs)(An,{children:[t.loading&&Object(N.jsx)("img",{src:"/images/spin-loader.gif",alt:""}),t.articles.length>0&&t.articles.map(((n,e)=>Object(N.jsxs)(wn,{children:[Object(N.jsxs)(yn,{children:[Object(N.jsxs)("a",{children:[n.actor.image?Object(N.jsx)("img",{src:n.actor.image,alt:""}):Object(N.jsx)("img",{src:"/images/user.svg",alt:""}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:n.actor.title}),Object(N.jsx)("span",{children:n.actor.description}),Object(N.jsx)("span",{children:n.actor.date.toDate().toLocaleDateString()})]})]}),Object(N.jsx)("button",{children:Object(N.jsx)("img",{src:"/images/ellipses.svg",alt:""})})]}),Object(N.jsx)(kn,{children:n.description}),Object(N.jsx)(zn,{children:Object(N.jsx)("a",{children:!n.sharedImg&&n.video?Object(N.jsx)(qt.a,{width:"100%",url:n.video}):n.sharedImg&&Object(N.jsx)("img",{src:n.sharedImg,alt:""})})}),Object(N.jsx)(Sn,{children:t.articles[e].likes.count>0&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{children:Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb",alt:""}),Object(N.jsx)("span",{children:t.articles[e].likes.count})]})}),Object(N.jsx)("li",{children:Object(N.jsxs)("a",{children:[n.comments," comments (currently not working)"]})})]})}),Object(N.jsxs)(Ln,{children:[Object(N.jsxs)("button",{onClick:n=>function(n,e,i){n.preventDefault();let a=t.articles[e].likes.count,s=t.articles[e].likes.whoLiked,r=t.user.email,c=s.indexOf(r);c>=0?(a--,s.splice(c,1)):-1===c&&(a++,s.push(r));const o={update:{likes:{count:a,whoLiked:s}},id:i};t.likeHandler(o)}(n,e,t.ids[e]),className:t.articles[e].likes.whoLiked.indexOf(t.user.email)>=0?"active":null,children:[Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-supported-dps":"24x24",fill:"rgba(0, 0, 0, 0.6)",width:"24",height:"24",focusable:"false",children:Object(N.jsx)("path",{d:"M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"})}),Object(N.jsx)("span",{children:"Like"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/comment-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Comment"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/share-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Share"})]}),Object(N.jsxs)("button",{children:[Object(N.jsx)("img",{src:"/images/send-icon.svg",alt:""}),Object(N.jsx)("span",{children:"Send"})]})]})]},e)))]}),Object(N.jsx)(un,{showModal:n,clickHandler:a})]})}));const Tn=x.a.div(In||(In=Object(l.a)(["\n\tgrid-area: right;\n\t@media (max-width: 768px) {\n\t\tmargin-bottom: 35px;\n\t}\n"]))),_n=x.a.div(Un||(Un=Object(l.a)(["\n\ttext-align: center;\n\toverflow: hidden;\n\tmargin-bottom: 8px;\n\tbackground-color: #fff;\n\tborder-radius: 5px;\n\tborder: none;\n\tposition: relative;\n\tbox-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n\tpadding: 12px;\n"]))),Mn=x.a.div(Cn||(Cn=Object(l.a)(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: 16px;\n\twidth: 100%;\n\tcolor: rgba(0, 0, 0, 0.6);\n"]))),Dn=x.a.ul(Nn||(Nn=Object(l.a)(["\n\tmargin-top: 16px;\n\tli {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 12px 0;\n\t\tposition: relative;\n\t\tfont-size: 14px;\n\t\t& > div {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t\tbutton {\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: rgba(0, 0, 0, 0.6);\n\t\t\tbox-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);\n\t\t\tpadding: 16px;\n\t\t\talign-items: center;\n\t\t\tborder-radius: 15px;\n\t\t\tbox-sizing: border-box;\n\t\t\tfont-weight: 600;\n\t\t\tdisplay: inline-flex;\n\t\t\tjustify-content: center;\n\t\t\tmax-height: 32px;\n\t\t\tmax-width: 480px;\n\t\t\ttext-align: center;\n\t\t\tborder: none;\n\t\t}\n\t}\n"]))),Wn=x.a.div(Rn||(Rn=Object(l.a)(['\n\tbackground: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n\tbackground-size: contain;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\twidth: 48px;\n\theight: 48px;\n\tmargin-right: 8px;\n']))),Bn=x.a.a(Fn||(Fn=Object(l.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 14px;\n\tcolor: #0a66c2;\n\timg {\n\t\tmargin-left: 5px;\n\t}\n"]))),Gn=Object(x.a)(_n)(En||(En=Object(l.a)(["\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"])));var Jn,Vn,Pn,qn,Kn=function(){return Object(N.jsxs)(Tn,{children:[Object(N.jsxs)(_n,{children:[Object(N.jsxs)(Mn,{children:[Object(N.jsx)("h2",{children:"Add to your feed"}),Object(N.jsx)("img",{src:"/images/feed-icon.svg",alt:""})]}),Object(N.jsxs)(Dn,{children:[Object(N.jsxs)("li",{children:[Object(N.jsx)("a",{children:Object(N.jsx)(Wn,{})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"#linkedin"}),Object(N.jsx)("button",{children:"Follow"})]})]}),Object(N.jsxs)("li",{children:[Object(N.jsx)("a",{children:Object(N.jsx)(Wn,{})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"#video"}),Object(N.jsx)("button",{children:"Follow"})]})]})]}),Object(N.jsxs)(Bn,{children:["View all recommendation",Object(N.jsx)("img",{src:"/images/right-icon.svg",alt:""})]})]}),Object(N.jsx)(Gn,{children:Object(N.jsx)("img",{src:"https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg",alt:""})})]})};const Xn=x.a.div(Jn||(Jn=Object(l.a)(["\n\tmax-width: 100%;\n"]))),Yn=x.a.div(Vn||(Vn=Object(l.a)(["\n\tmax-width: 1128px;\n\tmargin: auto;\n"]))),Qn=x.a.section(Pn||(Pn=Object(l.a)(["\n\tmin-height: 50px;\n\tmargin: 16px 0 -30px;\n\tbox-sizing: content-box;\n\ttext-align: center;\n\ttext-decoration: underline;\n\tdisplay: flex;\n\tjustify-content: center;\n\th5 {\n\t\tcolor: #0a66c2;\n\t\tfont-size: 14px;\n\t\tmargin-block-start: 0;\n\t\tmargin-block-end: 0;\n\t\ta {\n\t\t\tfont-weight: 700;\n\t\t}\n\t}\n\tp {\n\t\tfont-size: 14px;\n\t\tcolor: #434649;\n\t\tmargin-block-start: 0;\n\t\tmargin-block-end: 0;\n\t\tfont-weight: 600;\n\t}\n\n\t@media (max-width: 768px) {\n\t\tflex-direction: column;\n\t\tpadding: 0 5px;\n\t\tmargin: 16px 0;\n\t}\n"]))),Zn=x.a.div(qn||(qn=Object(l.a)(['\n\tdisplay: grid;\n\tgrid-template-areas: "left main right";\n\tgrid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);\n\tcolumn-gap: 25px;\n\trow-gap: 25px;\n\tmargin: 25px 0;\n\t@media (max-width: 768px) {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 0 5px;\n\t}\n'])));var $n=Object(c.b)((t=>({user:t.userState.user})))((function(t){return Object(N.jsxs)(Xn,{children:[!t.user&&Object(N.jsx)(d.a,{to:"/"}),Object(N.jsxs)(Yn,{children:[Object(N.jsxs)(Qn,{children:[Object(N.jsx)("h5",{children:Object(N.jsx)("a",{children:"Hiring in a hurray..?"})}),Object(N.jsx)("p",{children:"- Find talented pros in record time with LinkedIn and keep business moving."})]}),Object(N.jsxs)(Zn,{children:[Object(N.jsx)(Vt,{}),Object(N.jsx)(Hn,{}),Object(N.jsx)(Kn,{})]})]})]})}));var te=Object(c.b)((t=>({})),(t=>({getUserAuth:()=>t((t=>{j.onAuthStateChanged((async n=>{n&&t(v(n))}))}))})))((function(t){return Object(i.useEffect)((()=>{t.getUserAuth()}),[]),Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(o.a,{children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(d.b,{exact:!0,path:"/",children:Object(N.jsx)($,{})}),Object(N.jsxs)(d.b,{path:"/feed",children:[Object(N.jsx)(wt,{}),Object(N.jsx)($n,{})]})]})})})})),ne=e(27),ee=e(47);const ie={user:null};var ae=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return{...t,user:n.user};default:return t}};const se={loading:!1,articles:[]};var re=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case f:return{...t,articles:n.payload,ids:n.id};case O:return{...t,loading:n.status};default:return t}};var ce=Object(ne.b)({userState:ae,articleState:re});var oe=Object(ne.c)(ce,Object(ne.a)(ee.a));e(83);r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(c.a,{store:oe,children:Object(N.jsx)(te,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.cc416116.chunk.js.map