"use strict";(self.webpackChunkplayground_front=self.webpackChunkplayground_front||[]).push([[713],{6713:function(n,e,i){i.d(e,{Z:function(){return wn}});var t,r,o,s,a=i(2791),l=i(885),c=i(2419),d=i(2033),u=i(9766),h=i(168),f=i(9958),p=i(7630),x=i(4440),Z=i(1572),v=f.Z.div(t||(t=(0,h.Z)(["\n  display: flex;\n  height: 70px;\n  justify-content: space-between;\n  align-items: center;\n"]))),g=f.Z.div(r||(r=(0,h.Z)(["\n  & > .nav-items {\n    display: inline-block;\n    height: 50px;\n    padding: 0 5px 0 5px;\n    margin: 0 15px 0 15px;\n    border-radius: 10%;\n\n    text-decoration: none;\n    line-height: 50px;\n    color: ",";\n    font-size: 25px;\n    font-weight: 700;\n  }\n\n  & > .welcome-text {\n    font-size: 18px;\n    font-weight: 600;\n  }\n\n  & > .hover {\n    &: hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),x.Z.Blue,x.Z.Blue,x.Z.White),m=(0,p.ZP)("form")((function(n){return{position:"relative",borderRadius:n.theme.shape.borderRadius,backgroundColor:x.Z.White,marginLeft:0,width:"100%"}})),j=(0,p.ZP)("div")((function(n){return{padding:n.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),w=(0,p.ZP)(Z.ZP)((function(n){var e=n.theme;return{color:"inherit","& .MuiInputBase-input":{padding:e.spacing(0,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%"}}})),b=i(2167),k=i(3504),C=(0,f.Z)(k.rU)(o||(o=(0,h.Z)(["\n\ttext-decoration: none;\n"]))),y=i(4554),P=i(6151),z=i(9617),S=i(184);function D(n){var e=n.isOpen,i=n.anchorEl,t=n.onClose,r=n.userData,o=n.errorCode,s=(0,c.ZP)("/friend",u.Z).mutate,l="404"==o?"\uc544\uc774\ub514\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694 :(":"\uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc774 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",h=a.useCallback((function(n){n.preventDefault(),d.Z.post("/friend/request/".concat(null===r||void 0===r?void 0:r.id)).then((function(){s(),t()})).catch((function(n){t(),alert("".concat(n.response.data.message))}))}),[r]);return(0,S.jsx)(z.ZP,{open:e,anchorEl:i,onClose:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:o?(0,S.jsx)(y.Z,{sx:{padding:1},children:l}):(0,S.jsxs)(y.Z,{sx:{padding:1.5},children:[(0,S.jsxs)("span",{children:[null===r||void 0===r?void 0:r.nickname,"(",null===r||void 0===r?void 0:r.id,")\ub2d8\uc5d0\uac8c"]}),(0,S.jsx)(P.Z,{onClick:h,variant:"text",sx:{fontSize:"16px"},children:(0,S.jsx)("span",{children:"\uce5c\uad6c \uc694\uccad \ubcf4\ub0b4\uae30"})})]})})}function N(){var n=(0,c.ZP)("/user/me",u.Z),e=n.data,i=n.error,t=a.useState(null),r=(0,l.Z)(t,2),o=r[0],s=r[1],h=a.useState(null),f=(0,l.Z)(h,2),p=f[0],x=f[1],Z=a.useState(null),k=(0,l.Z)(Z,2),y=k[0],P=k[1],z=a.useState(!1),N=(0,l.Z)(z,2),B=N[0],T=N[1],O=a.useCallback((function(n){n.preventDefault(),P(n.currentTarget),d.Z.get("/user?id=".concat(n.target.input.value)).then((function(n){s(n.data),x(null)})).catch((function(n){s(null),x(n.response.data.statusCode)}))}),[]);return a.useEffect((function(){setTimeout((function(){B||(x(null),s(null),P(null))}),500)}),[B]),a.useEffect((function(){o&&T(!0)}),[o]),a.useEffect((function(){p&&T(!0)}),[p]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(v,{children:[(0,S.jsxs)(g,{children:[(0,S.jsx)(C,{to:"/",className:"nav-items hover",onClick:function(){return alert("\uc544\uc9c1 \uac1c\ubc1c\uc911\uc778 \uae30\ub2a5\uc785\ub2c8\ub2e4 :(")},children:"\uac8c\uc784"}),(0,S.jsx)(C,{to:"/chat",className:"nav-items hover",children:"\ucc44\ud305"})]}),(0,S.jsxs)(g,{children:[e&&!i?(0,S.jsxs)("span",{className:"welcome-text",children:[e.nickname,"(",e.id,")\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."]}):(0,S.jsx)("span",{}),(0,S.jsx)("div",{className:"nav-items",children:(0,S.jsxs)(m,{onSubmit:O,children:[(0,S.jsx)(j,{children:(0,S.jsx)(b.Z,{})}),(0,S.jsx)(w,{name:"input",placeholder:"ID\ub85c \uce5c\uad6c \ucc3e\uae30"})]})})]})]}),(0,S.jsx)(D,{isOpen:B,anchorEl:y,onClose:function(){T(!1)},userData:o,errorCode:p})]})}var B=f.Z.div(s||(s=(0,h.Z)(["\n  width: 100%;\n  height: 30px;\n  text-align: center;\n\n  font-size: 15px;\n  font-weight: 600;\n"])));var T=i.p+"static/media/GitHub-Mark.e23e760d636dd4e4ceb5510d5bd5697a.svg";function O(){return(0,S.jsxs)(B,{children:["Made By Woog2roid",(0,S.jsx)("a",{href:"https://github.com/woog2roid/",target:"_blank",rel:"noreferrer",children:(0,S.jsx)("img",{src:T,alt:"",width:"15px",height:"15px"})})]})}var E,W=i(5861),q=i(7757),F=i.n(q),G=i(6871),R=i(6183),I=function(n){return(0,R.i)(n,{labels:{confirmable:"\uc608",cancellable:"\uc544\ub2c8\uc624"}})},M=i(9953),_=i(7924),L=i(493),H=i(4852),U=f.Z.div(E||(E=(0,h.Z)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  color: ",";\n"])),x.Z.Red);function A(n){var e=n.isOpen,i=n.closeDrawer,t=n.openDrawer,r=(0,G.s0)(),o=function(){var n=(0,W.Z)(F().mark((function n(){return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(),n.next=3,I("\ub85c\uadf8\uc544\uc6c3 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?");case 3:n.sent?d.Z.post("".concat("https://playground-backend-knyit.run.goorm.io","/user/logout")).then((function(){r(0)})).catch((function(){alert("\uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc774 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc544\uc694... :(")})):t();case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,W.Z)(F().mark((function n(){return F().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(),n.next=3,I("\uc815\ub9d0 \ud0c8\ud1f4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?");case 3:n.sent?d.Z.delete("".concat("https://playground-backend-knyit.run.goorm.io","/user/quit"),{withCredentials:!0}).then((function(){r(0)})).catch((function(){alert("\uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc774 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc544\uc694... :(")})):t();case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,S.jsx)(M.ZP,{anchor:"right",open:e,onClose:i,children:(0,S.jsx)(y.Z,{sx:{width:"250px"},children:(0,S.jsxs)(U,{children:[(0,S.jsx)(_.Z,{}),(0,S.jsxs)(L.Z,{children:[(0,S.jsx)(H.ZP,{button:!0,onClick:o,children:"\ub85c\uadf8\uc544\uc6c3"}),(0,S.jsx)(H.ZP,{button:!0,onClick:s,children:"\ud68c\uc6d0\ud0c8\ud1f4"})]})]})})})}var J,K,Q,V,X,Y=i(318),$=i(787),nn=i(7483),en=f.Z.span(J||(J=(0,h.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n"]))),tn=((0,f.Z)(H.ZP)(K||(K=(0,h.Z)(["\n  font-size: 13px;\n"]))),function(n){var e=n.id,i=n.nickname,t=(0,c.ZP)("/friend",u.Z).mutate,r=(0,c.ZP)("/user/me",u.Z).data;return(0,S.jsxs)(en,{children:[(0,S.jsxs)("span",{children:[i,"(",e,")\ub2d8"]}),(0,S.jsxs)("span",{children:[(0,S.jsx)(Y.Z,{onClick:function(){d.Z.post("/friend/accept/".concat(e)).then((function(){t(),d.Z.post("/chat-room?dm=true",{members:[e,null===r||void 0===r?void 0:r.id],title:""})}))},fontSize:"small"}),(0,S.jsx)($.Z,{onClick:function(){d.Z.delete("/friend/request?relation=follower&id=".concat(e)).then((function(){t()}))},fontSize:"small"})]})]})}),rn=function(n){var e=n.id,i=n.nickname,t=(0,c.ZP)("/friend",u.Z).mutate;return(0,S.jsxs)(en,{children:[(0,S.jsxs)("span",{children:[i,"(",e,")\ub2d8"]}),(0,S.jsx)("span",{children:(0,S.jsx)($.Z,{onClick:function(){d.Z.delete("/friend/request?relation=following&id=".concat(e)).then((function(){t()}))},fontSize:"small"})})]})},on=function(n){var e=n.id,i=n.nickname,t=(0,c.ZP)("/friend",u.Z).mutate;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(en,{children:[(0,S.jsxs)("span",{children:[i,"(",e,")\ub2d8"]}),(0,S.jsx)("span",{children:(0,S.jsx)(nn.Z,{onClick:function(){d.Z.delete("/friend?id=".concat(e)).then((function(){t()}))},fontSize:"small"})})]})})},sn=f.Z.details(Q||(Q=(0,h.Z)(["\n  border: 8px solid white;\n"]))),an=f.Z.summary(V||(V=(0,h.Z)(["\n  background-color: ",";\n  padding: 12px;\n  font-size: 16px;\n  &::marker {\n    font-size: 0;\n  }\n"])),x.Z.TransparentBlue),ln=f.Z.div(X||(X=(0,h.Z)([""])));function cn(n){var e,i,t,r,o,s,a=n.isOpen,l=n.closeDrawer,d=(0,c.ZP)("/friend",u.Z).data;return(0,S.jsx)(M.ZP,{anchor:"right",open:a,onClose:l,children:(0,S.jsxs)(y.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"300px",height:"100%",overflow:"auto"},children:[(0,S.jsxs)(sn,{children:[(0,S.jsx)(an,{children:"\uce5c\uad6c \ubaa9\ub85d  (".concat(null===d||void 0===d||null===(e=d.friends)||void 0===e?void 0:e.length,")")}),(0,S.jsx)(L.Z,{children:null===d||void 0===d||null===(i=d.friends)||void 0===i?void 0:i.map((function(n){return(0,S.jsx)(H.ZP,{button:!0,children:(0,S.jsx)(on,{id:n.following.id,nickname:n.following.nickname})},+n.id)}))})]}),(0,S.jsxs)(ln,{children:[(0,S.jsxs)(sn,{children:[(0,S.jsx)(an,{children:"\uc544\uc9c1 \ud655\uc778\ud558\uc9c0 \uc54a\uc740 \uce5c\uad6c \uc694\uccad  (".concat(null===d||void 0===d||null===(t=d.followers)||void 0===t?void 0:t.length,")")}),(0,S.jsx)(L.Z,{children:null===d||void 0===d||null===(r=d.followers)||void 0===r?void 0:r.map((function(n){return(0,S.jsx)(H.ZP,{button:!0,children:(0,S.jsx)(tn,{id:n.follower.id,nickname:n.follower.nickname})},+n.id)}))})]}),(0,S.jsxs)(sn,{children:[(0,S.jsx)(an,{children:"\uc544\uc9c1 \uc218\ub77d\ub418\uc9c0 \uc54a\uc740 \uce5c\uad6c \uc694\uccad  (".concat(null===d||void 0===d||null===(o=d.followings)||void 0===o?void 0:o.length,")")}),(0,S.jsx)(L.Z,{children:null===d||void 0===d||null===(s=d.followings)||void 0===s?void 0:s.map((function(n){return(0,S.jsx)(H.ZP,{button:!0,children:(0,S.jsx)(rn,{id:n.following.id,nickname:n.following.nickname})},+n.id)}))})]})]})]})})}var dn,un,hn,fn=i(6379),pn=i(2392),xn=i(5200),Zn=i(7607),vn=f.Z.div(dn||(dn=(0,h.Z)(["\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n  align-items: center;\n"]))),gn=f.Z.div(un||(un=(0,h.Z)(["\n  display: flex;\n  width: 180px;\n  justify-content: ",";\n  & > .nav-items {\n    display: inline-block;\n    padding: 0px 5px 0px 5px;\n    margin-top: -7px;\n    border-radius: 10%;\n    color: ",";\n  }\n\n  .nav-items + .nav-items {\n    margin-left: 15px;\n  }\n\n  & > .hover {\n    &: hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),(function(n){return"right"===(null===n||void 0===n?void 0:n.side)?"flex-end":"flex-start"}),x.Z.Blue,x.Z.Blue,x.Z.White);function mn(){var n=(0,G.s0)(),e=(0,c.ZP)("/friend",u.Z).data,i=a.useState(!1),t=(0,l.Z)(i,2),r=t[0],o=t[1],s=function(){o(!0)},d=a.useState(!1),h=(0,l.Z)(d,2),f=h[0],p=h[1],x=function(){p(!0)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(vn,{children:[(0,S.jsx)(gn,{children:(0,S.jsx)(pn.Z,{fontSize:"large",className:"nav-items hover",onClick:function(){n("/notice")}})}),(0,S.jsx)(gn,{children:(0,S.jsx)(O,{})}),(0,S.jsxs)(gn,{side:"right",children:[void 0!==(null===e||void 0===e?void 0:e.followers)&&void 0!==(null===e||void 0===e?void 0:e.followings)?(0,S.jsx)(fn.Z,{badgeContent:"".concat(e.followers.length,"/").concat(e.followings.length),className:"nav-items hover",color:"error",children:(0,S.jsx)(xn.Z,{fontSize:"large",onClick:x})}):(0,S.jsx)(xn.Z,{fontSize:"large",className:"nav-items hover",onClick:x}),(0,S.jsx)(Zn.Z,{fontSize:"large",className:"nav-items hover",onClick:s})]})]}),(0,S.jsx)(A,{isOpen:r,closeDrawer:function(){o(!1)},openDrawer:s}),(0,S.jsx)(cn,{isOpen:f,closeDrawer:function(){p(!1)}})]})}var jn=f.Z.div(hn||(hn=(0,h.Z)(["\n  padding: 0;\n  margin-left: 1%;\n  margin-right: 1%;\n  width: 98%;\n  height: 100%;\n\n  & > .top-nav {\n    position: fixed;\n    top: 5px;\n    height: 70px;\n    width: inherit;\n  }\n\n  & > .bottom-nav {\n    position: fixed;\n    bottom: 5px;\n    height: 50px;\n    width: inherit;\n  }\n\n  & > .content-wrapper {\n    position: fixed;\n    top: 10%;\n    height: calc(80% - 60px);\n    left: 8%;\n    width: calc(84% - 60px);\n\n    border-radius: 5%;\n    padding: 30px;\n\n    background: ",";\n  }\n\n  .content-wrapper > .content {\n    background-color: ",";\n    outline: 1px solid ",";\n    width: 100%;\n    height: 100%;\n  }\n"])),x.Z.TransparentBlue,x.Z.TransparentWhite,x.Z.Gray);function wn(n){var e=n.children;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(jn,{children:[(0,S.jsx)("div",{className:"top-nav",children:(0,S.jsx)(N,{})}),(0,S.jsx)("div",{className:"content-wrapper",children:(0,S.jsx)("div",{className:"content",children:e})}),(0,S.jsx)("div",{className:"bottom-nav",children:(0,S.jsx)(mn,{})})]})})}},4440:function(n,e){e.Z={Blue:"rgba(70, 96, 240, 0.95)",White:"rgba(255, 255, 255, 0.95)",Red:"rgb(200, 0, 0)",Gray:"#bdbdbd",TransparentBlue:"rgba(200, 200, 230, 0.65)",TransparentWhite:"rgba(255, 255, 255, 0.4)",TransparentBlack:"rgba(100, 100, 100, 0.2)",TransparentGray:"rgba(200, 200, 200, 0.4)"}}}]);
//# sourceMappingURL=713.661072f4.chunk.js.map