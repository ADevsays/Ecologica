function l({user:s,token:o}){const e=new Date;e.setHours(e.getHours()+12);const r={user:s??{msg:"NO user"},token:o,expirationTime:e.getTime()};localStorage.setItem("user_session",JSON.stringify(r))}const n=({container:s,icon:o,msg:e,status:r,timer:i})=>{const t=document.createElement("div"),a=r==="error";t.className="flex bg-black bg-opacity-50 justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full",t.id="popup",t.innerHTML=`
        <div class="relative bg-white p-4 w-full max-w-md h-auto rounded-xl">
            <div class="flex flex-col justify-center items-center w-full h-full">
                <span class="block w-24 h-auto">
                    ${o}
                </span>
                <h3 class="${a?"text-red-700":"text-green-500"} font-bold text-lg">${a?"Ha habido un error":"¡Todo ha salido correctamente!"}</h3>
                <p class="text-base text-gray-600 mt-3">${e}</p>
            </div>
        </div>`,s.appendChild(t),setTimeout(()=>{t.remove()},i??2500)};export{n as c,l as s};
