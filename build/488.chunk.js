"use strict";(self.webpackChunksimtestlab=self.webpackChunksimtestlab||[]).push([[488],{7488:(n,e,t)=>{t.r(e),t.d(e,{default:()=>E});var o=t(6540),a=t(7559),r=t(5072),l=t.n(r),i=t(7825),c=t.n(i),s=t(7659),m=t.n(s),d=t(5056),u=t.n(d),p=t(540),f=t.n(p),g=t(1113),h=t.n(g),x=t(7124),b={};b.styleTagTransform=h(),b.setAttributes=u(),b.insert=m().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),l()(x.A,b),x.A&&x.A.locals&&x.A.locals;const E=()=>{const[n,e]=(0,o.useState)({name:"",email:"",phone:"",subject:"",message:""}),[t,r]=(0,o.useState)(!1);(0,o.useEffect)((()=>{console.log("isSubmitted state changed:",t)}),[t]);const l=t=>{e({...n,[t.target.name]:t.target.value})};return o.createElement("footer",{id:"contact"},o.createElement("div",{className:"footer-col center-align"},o.createElement("h4",null,"Contact Us"),o.createElement("ul",null,o.createElement("li",null,a.A.contact.address),o.createElement("li",null,a.A.contact.email),o.createElement("li",null,a.A.contact.phone),o.createElement("li",null,a.A.contact.copyright))),o.createElement("div",{className:"footer-col center-align"},o.createElement("h4",null,"Company"),o.createElement("ul",null,a.A.contact.companyLinks.map(((n,e)=>o.createElement("li",{key:e},o.createElement("a",{href:n.href},n.label)))))),o.createElement("div",{className:"footer-col"},o.createElement("h4",null,"Follow us"),o.createElement("div",{className:"links"},a.A.contact.socialLinks.map(((n,e)=>o.createElement("a",{key:e,href:n.href},o.createElement("i",{className:n.icon})))))),o.createElement("div",{className:"footer-col"},o.createElement("h4",null,"Get In Touch"),o.createElement("form",{className:"contact-form",onSubmit:async e=>{e.preventDefault();try{(await fetch("/.netlify/functions/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(alert("Email sent successfully"),r(!0)):alert("Error sending email")}catch(n){alert("Error sending email")}}},o.createElement("div",{className:"form-group"},o.createElement("input",{type:"text",name:"name",placeholder:"Name",value:n.name,onChange:l,required:!0}),o.createElement("input",{type:"email",name:"email",placeholder:"Email",value:n.email,onChange:l,required:!0})),o.createElement("div",{className:"form-group"},o.createElement("input",{type:"text",name:"phone",placeholder:"Phone Number",value:n.phone,onChange:l}),o.createElement("input",{type:"text",name:"subject",placeholder:"Subject",value:n.subject,onChange:l,required:!0})),o.createElement("div",{className:"form-group"},o.createElement("textarea",{name:"message",placeholder:"Message",value:n.message,onChange:l,required:!0})),o.createElement("button",{type:"submit",className:"btn",disabled:t},"Send Message"))))}},7124:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(1601),a=t.n(o),r=t(6314),l=t.n(r)()(a());l.push([n.id,"footer {\n  background-color: #023246;\n  padding: 60px 10%;\n  color: #f6f6f6;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; /* Adjusted to space-around for centering */\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.footer-col {\n  flex: 1 1 20%;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; /* Center align items */\n}\n\n.footer-col h4 {\n  position: relative;\n  margin-bottom: 20px;\n  font-weight: 400;\n  font-size: 18px;\n  color: #60B3D1;\n  text-transform: capitalize;\n  text-align: center; /* Center align text */\n}\n\n.footer-col h4::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -6px;\n  background-color: #287094;\n  height: 2px;\n  width: 40px;\n}\n\n.footer-col ul li {\n  margin-bottom: 10px;\n  text-align: center; /* Center align text */\n}\n\n.footer-col ul li a {\n  display: block;\n  font-size: 16px;\n  text-transform: capitalize;\n  color: #d4d4ce;\n  text-decoration: none;\n  transition: color 0.4s;\n}\n\n.footer-col ul li a:hover {\n  color: #f6f6f6;\n}\n\n.links a {\n  display: inline-block;\n  height: 44px;\n  width: 44px;\n  background-color: rgba(40, 130, 214, 0.8);\n  margin: 0 8px 8px 0;\n  text-align: center;\n  line-height: 44px;\n  border-radius: 50%;\n  color: white;\n  transition: background-color 0.4s;\n}\n\n.links a:hover {\n  background-color: white;\n  color: #4d4f55;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.form-group input,\n.form-group textarea {\n  width: 48%;\n  padding: 10px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 5px;\n}\n\n.form-group textarea {\n  width: 100%;\n  height: 100px;\n  resize: none;\n}\n\n.contact-form .btn {\n  display: inline-block;\n  height: 44px;\n  width: auto;\n  background-color: rgba(40, 130, 214, 0.8);\n  margin: 0 8px 8px 0;\n  text-align: center;\n  line-height: 44px;\n  border-radius: 5px;\n  color: white;\n  transition: background-color 0.4s;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 0 20px; /* Adjust padding for a wider button */\n}\n\n.contact-form .btn:hover {\n  background-color: white;\n  color: #4d4f55;\n}\n\n@media (max-width: 768px) {\n  footer {\n    padding: 40px 5%;\n  }\n\n  .footer-col {\n    flex: 1 1 100%;\n    text-align: center;\n  }\n\n  .footer-col h4::before {\n    display: none;\n  }\n\n  .form-group {\n    flex-direction: column;\n  }\n\n  .form-group input,\n  .form-group textarea {\n    width: 100%;\n  }\n\n  .links {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 480px) {\n  .footer-col {\n    flex: 1 1 100%;\n    text-align: center;\n  }\n\n  .links {\n    justify-content: center;\n  }\n\n  .form-group {\n    width: 100%;\n  }\n\n  .form-group input,\n  .form-group textarea {\n    width: 100%;\n  }\n}\n",""]);const i=l}}]);