(this["webpackJsonpadm-citas"]=this["webpackJsonpadm-citas"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),i=a.n(s),r=a(11),l=a(3),o=a(5),j=a(7),u=a(9),b=a.n(u),h=a(0),d=function(e){var t=e.crearCitas,a=Object(c.useState)({mascota:"",dueno:"",fecha:"",hora:"",sintomas:""}),n=Object(l.a)(a,2),s=n[0],i=n[1],r=Object(c.useState)(!1),u=Object(l.a)(r,2),d=u[0],m=u[1],O=function(e){i(Object(j.a)(Object(j.a)({},s),{},Object(o.a)({},e.target.name,e.target.value)))},x=s.mascota,f=s.dueno,p=s.fecha,g=s.hora,v=s.sintomas;return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("h2",{children:"Crear Cita"}),d?Object(h.jsx)("p",{className:"alerta-error",children:"Todos los campos son obligatorios"}):null,Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==x.trim()&&""!==f.trim()&&""!==p.trim()&&""!==g.trim()&&""!==v.trim()?(i(!1),s.id=b()(),t(s),i({mascota:"",dueno:"",fecha:"",hora:"",sintomas:""})):m(!0)},children:[Object(h.jsx)("label",{children:"Nombre Mascota"}),Object(h.jsx)("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:O,value:x}),Object(h.jsx)("label",{children:"Nombre Due\xf1o"}),Object(h.jsx)("input",{type:"text",name:"dueno",className:"u-full-width",placeholder:"Nombre Due\xf1o",onChange:O,value:f}),Object(h.jsx)("label",{children:"Fecha alta"}),Object(h.jsx)("input",{type:"date",name:"fecha",className:"u-full-width",onChange:O,value:p}),Object(h.jsx)("label",{children:"Hora alta"}),Object(h.jsx)("input",{type:"time",name:"hora",className:"u-full-width",onChange:O,value:g}),Object(h.jsx)("label",{children:"Sintomas"}),Object(h.jsx)("textarea",{name:"sintomas",className:"u-full-width",placeholder:"Describa los sintomas",onChange:O,value:v}),Object(h.jsx)("button",{type:"submit",className:"u-full-width button-primary",children:"Agregar cita"})]})]})},m=function(e){var t=e.cita,a=e.eliminarCita;return Object(h.jsxs)("div",{className:"cita",children:[Object(h.jsxs)("p",{children:["Mascota: ",Object(h.jsx)("span",{children:t.mascota})]}),Object(h.jsxs)("p",{children:["Due\xf1o: ",Object(h.jsx)("span",{children:t.dueno})]}),Object(h.jsxs)("p",{children:["Fecha: ",Object(h.jsx)("span",{children:t.fecha})]}),Object(h.jsxs)("p",{children:["Hora: ",Object(h.jsx)("span",{children:t.hora})]}),Object(h.jsxs)("p",{children:["Sintomas: ",Object(h.jsx)("span",{children:t.sintomas})]}),Object(h.jsx)("button",{onClick:function(){return a(t.id)},className:"button eliminar u-full-width",children:"Eliminar \xd7"})]})},O=a(10),x=a.n(O);d.propTypes={crearCitas:x.a.func.isRequired};var f=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(c.useState)(e),a=Object(l.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(n)):localStorage.setItem("citas",JSON.stringify([]))}),[n,e]);var i=function(e){var t=n.filter((function(t){return t.id!==e}));s(t)},o=0===n.length?"No hay citas":"Administra tus citas";return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("h1",{children:"Administrador de Pacientes"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"one-half column",children:Object(h.jsx)(d,{crearCitas:function(e){s([].concat(Object(r.a)(n),[e]))}})}),Object(h.jsxs)("div",{className:"one-half column",children:[Object(h.jsx)("h2",{children:o}),n.map((function(e){return Object(h.jsx)(m,{cita:e,eliminarCita:i},e.id)}))]})]})})]})},p=(a(23),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))});i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),p()}},[[24,1,2]]]);
//# sourceMappingURL=main.208c6cbe.chunk.js.map