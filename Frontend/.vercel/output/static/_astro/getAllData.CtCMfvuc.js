import{C as e,B as s,a as o,L as l,b as n,M as c,c as i}from"./COLORS.DQT3oG8g.js";function g(a,r,t="x"){e.register(s,o,l,n),new e(a,{type:"bar",data:{labels:c,datasets:[{label:"Cantidad de residuos",data:r,backgroundColor:i}]},options:{indexAxis:t,scales:{[t==="x"?"y":"x"]:{type:"linear",beginAtZero:!0}}}})}const d="http://localhost:3001";async function h(){try{const r=await(await fetch(`${d}/stats/getAll`)).json();if(!r.error)return r;throw new Error(r.error)}catch(a){throw console.error(a),a}}export{g as c,h as g};