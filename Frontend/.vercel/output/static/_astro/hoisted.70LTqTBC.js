import{c as l,s as c}from"./createPopup.DIwhvOn4.js";import"./hoisted.Cf2UQPm2.js";import"./auth.Bit6wUPJ.js";const d="http://localhost:3001";async function u(e,r){const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})};try{const o=await(await fetch(`${d}/user/login`,n)).json();return o.error&&console.error(o.error),console.log(`Usuario ${o.name} ha iniciado sesión correctamente`),o}catch(t){return console.error("Error en login:",t),{error:t.message}}}const s={email:"",password:""};function g(e){const r=e.target;if(!(r&&r instanceof HTMLInputElement))return;const{name:n,value:t}=r;s[n]=t}async function p(e){e.preventDefault();const r=document.querySelector("section");if(!e.target||!r)return;const{email:n,password:t}={...s},{user:o,token:a,error:i}=await u(n,t);if(i){l({container:r,icon:'<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>error-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ff0000" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C331.136,3.55271368e-14 426.666667,95.5306667 426.666667,213.333333 C426.666667,331.136 331.136,426.666667 213.333333,426.666667 C95.5306667,426.666667 3.55271368e-14,331.136 3.55271368e-14,213.333333 C3.55271368e-14,95.5306667 95.5306667,3.55271368e-14 213.333333,3.55271368e-14 Z M262.250667,134.250667 L213.333333,183.168 L164.416,134.250667 L134.250667,164.416 L183.168,213.333333 L134.250667,262.250667 L164.416,292.416 L213.333333,243.498667 L262.250667,292.416 L292.416,262.250667 L243.498667,213.333333 L292.416,164.416 L262.250667,134.250667 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>',msg:i,status:"error"});return}c({user:o,token:a}),window.location.href="/"}const m=document.getElementById("login"),f=document.querySelectorAll("input");f.forEach(e=>e.addEventListener("change",g));m?.addEventListener("submit",p);