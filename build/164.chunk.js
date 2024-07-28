"use strict";(self.webpackChunksimtestlab=self.webpackChunksimtestlab||[]).push([[164],{5164:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var o=t(6540),r=t(8669),i=t(5072),a=t.n(i),s=t(7825),l=t.n(s),d=t(7659),c=t.n(d),h=t(5056),m=t.n(h),f=t(540),p=t.n(f),u=t(1113),b=t.n(u),v=t(6722),x={};x.styleTagTransform=b(),x.setAttributes=m(),x.insert=c().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=p(),a()(v.A,x),v.A&&v.A.locals&&v.A.locals;var g=t(7559);const y=()=>{const n=g.A.hero.slides,[e,t]=(0,o.useState)(0),[i,a]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{const e=setInterval((()=>{a(!1),setTimeout((()=>{t((e=>(e+1)%n.length)),a(!0)}),800)}),4e3);return()=>clearInterval(e)}),[n.length]),o.createElement("section",{id:"hero",className:"contrast-section"},o.createElement(r.Ay,{height:500,offset:100},o.createElement("div",{className:"video-container"},o.createElement("video",{autoPlay:!0,muted:!0,loop:!0,id:"heroVideo",preload:"metadata"},o.createElement("source",{src:g.A.hero.videoSrc,type:"video/mp4"}),"Your browser does not support HTML5 video."))),o.createElement("div",{className:"overlay"})," ",o.createElement("div",{className:"hero-content"},o.createElement("div",{className:"hero-carousel"},o.createElement("div",{className:"hero-slide ".concat(i?"visible":"hidden")},o.createElement("h1",{className:"hero-title"},n[e].title),o.createElement("p",{className:"hero-text"},n[e].text))),o.createElement("div",{className:"hero-buttons"},g.A.hero.buttons.map(((n,e)=>o.createElement("a",{key:e,href:n.href,className:"btn"},n.label))))))}},6722:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(1601),r=t.n(o),i=t(6314),a=t.n(i)()(r());a.push([n.id,"#hero {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  color: #ffffff;\n  overflow: hidden;\n}\n\n.video-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n}\n\n#hero video {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: blur(3px);\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5); /* Light black overlay */\n  z-index: 0;\n}\n\n.hero-content {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  width: 100%;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-carousel {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n}\n\n.hero-slide {\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  transform: translateY(100%);\n  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;\n}\n\n.hero-slide.hidden {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n\n.hero-slide.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.hero-title {\n  font-size: 3.5rem; /* Increased font size */\n  margin: 0;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n}\n\n.hero-text {\n  font-size: 1.5rem; /* Increased font size */\n  margin: 0;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);\n}\n\n.hero-buttons {\n  margin-top: 50px; /* Adjusted margin for better spacing */\n}\n\n.hero-buttons .btn {\n  display: inline-block;\n  padding: 1rem 2rem;\n  margin: 0 1rem 1rem 0;\n  background-color: #00bbff;\n  color: #ffffff;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\n.hero-buttons .btn:hover {\n  background-color: #ffffff;\n  color: #00bbff;\n  transform: scale(1.05);\n}\n\n@media (max-width: 768px) {\n  .hero-title {\n    font-size: 2rem;\n  }\n\n  .hero-text {\n    font-size: 1rem;\n  }\n\n  .hero-buttons .btn {\n    padding: 0.75rem 1.5rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-title {\n    font-size: 1.5rem;\n  }\n\n  .hero-text {\n    font-size: 0.9rem;\n  }\n\n  .hero-buttons .btn {\n    padding: 0.5rem 1rem;\n  }\n}\n",""]);const s=a}}]);