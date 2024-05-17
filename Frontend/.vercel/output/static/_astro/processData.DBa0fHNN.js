function u(r){return r.reduce((e,n)=>(n.forEach((t,c)=>{e[c]+=t.quantity}),e),Array(r[0].length).fill(0))}export{u as p};
