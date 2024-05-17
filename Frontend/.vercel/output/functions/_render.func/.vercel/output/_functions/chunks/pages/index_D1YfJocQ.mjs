/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_DkoZZsxe.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$FormRegister, a as $$RegisterLayout } from './_token__BjZgTI_h.mjs';
import { $ as $$Layout } from './404_CmPZ1iT7.mjs';
import { g as getAllForums } from './_forumName__DjxfuBvZ.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';

const $$Astro$8 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate``;
}, "D:/Clientes/Ecologica/Frontend/src/pages/admin/index.astro", void 0);

const $$file$2 = "D:/Clientes/Ecologica/Frontend/src/pages/admin/index.astro";
const $$url$2 = "/admin";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

function PrincipalButton({ link, children, onClick }) {
  const styles = "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
  return /* @__PURE__ */ jsx(Fragment, { children: link ? /* @__PURE__ */ jsx(
    "a",
    {
      className: styles,
      href: link,
      children
    }
  ) : /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: styles,
      children
    }
  ) });
}

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "RegisterLayout", $$RegisterLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormRegister", $$FormRegister, {})} ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/index.astro", void 0);

const $$file$1 = "D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/index.astro";
const $$url$1 = "/usuario/registrar";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Stats;
  return renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-[800px]"> <canvas id="history-home-stats"></canvas> </div>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/Stats/Stats.astro", void 0);

const $$Astro$5 = createAstro();
const $$MainStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MainStats;
  return renderTemplate`${maybeRenderHead()}<section class="w-full p-4 my-4 text-black flex justify-center flex-col items-center"> <h2 class="lg:text-2xl pb-2 text-xl font-bold">Datos históricos</h2> ${renderComponent($$result, "Stats", $$Stats, {})} </section>`;
}, "D:/Clientes/Ecologica/Frontend/src/sections/home/MainStats.astro", void 0);

const $$Astro$4 = createAstro();
const $$CardForum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardForum;
  const { title, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card md:w-72 w-full bg-white rounded-lg shadow-lg min-h-[310px] text-center card-body p-12 flex flex-col justify-between h-full border border-gray-200"> <h2 class="card-title text-2xl font-bold"> ${title} </h2> <p class="card-text mt-2">${description}</p> ${renderComponent($$result, "PrincipalButton", PrincipalButton, { "link": link }, { "default": ($$result2) => renderTemplate` Ver Foro` })} </div>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/Forums/CardForum.astro", void 0);

const $$Astro$3 = createAstro();
const $$MonthStats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MonthStats;
  return renderTemplate` ${maybeRenderHead()}<div class="max-w-[420px] w-full"> <canvas id="month-home-stats"></canvas> </div>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/Stats/MonthStats.astro", void 0);

const $$Astro$2 = createAstro();
const $$PresentationForum = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PresentationForum;
  let forums = [];
  try {
    forums = (await getAllForums()).slice(0, 3);
  } catch (error) {
    console.error(error);
  }
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col w-full p-3 justify-center items-center gap-12 my-12"> ${forums.length > 0 && renderTemplate`<h2 class="text-2xl font-bold">¡Únete a nuestros foros de discusión!</h2>
  <div class="flex gap-12 flex-wrap lg:flex-nowrap  justify-center"> ${forums.map((forum) => renderTemplate`${renderComponent($$result, "CardForum", $$CardForum, { "title": forum.title, "description": forum.description, "link": `/foros/${forum.title}` })}`)} </div>`} <div class="p-4 my-4 text-black flex justify-center flex-col items-center w-full"> <h2 class="lg:text-2xl font-medium m-3">Reciclaje del mes actual</h2> ${renderComponent($$result, "MonthStats", $$MonthStats, {})} </div> </section>`;
}, "D:/Clientes/Ecologica/Frontend/src/sections/home/PresentationForum.astro", void 0);

const $$Astro$1 = createAstro();
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Welcome;
  return renderTemplate`${maybeRenderHead()}<section class="p-4 lg:p-12 mt-12 lg:my-6 md:mt-20 flex flex-col lg:flex-row lg:justify-between items-center gap-12"> <div class="absolute top-0 left-0 -z-10 h-full w-full bg-white"> <div class="absolute bottom-auto left-auto right-0 top-0 lg:h-[800px] lg:w-[800px] lg:-translate-x-[0%] lg:translate-y-[0%] h-[500px] w-[500px] -translate-x-[50%] translate-y-[-20%] rounded-full bg-ecologica-secondary opacity-10 blur-[80px] -z-20"></div> </div> <div class="text-center lg:text-left"> <h1 class="text-2xl font-bold max-w-fit lg:text-5xl">
Ecologica <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text">Universidad</span> Cooperativa de Colombia
</h1> <p class="mt-5 text-sm lg:text-xl text-gray-700">
Todos los datos de <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text font-bold">reciclaje</span> nos ayudan a mejorar nuestros estándares
</p> </div> <aside class="w-full lg:max-w-[820px]"> <img class="size-full rounded-lg" src="https://th.bing.com/th/id/R.e35ce608dc71485f2353af6b3323ebc8?rik=hlvH8mEhH9A3gg&pid=ImgRaw&r=0" alt="Imagen de reciclaje"> </aside> </section>`;
}, "D:/Clientes/Ecologica/Frontend/src/sections/home/Welcome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecologica Universidad Cooperativa de Colombia", "description": "Pagina principal de medicion ecologica de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${maybeRenderHead()}<main class="text-center mx-auto max-w-screen-md mt-8 mb-8 min-h-screen z-50"> ${renderComponent($$result2, "MainStats", $$MainStats, {})} ${renderComponent($$result2, "PresentationForum", $$PresentationForum, {})} </main> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/index.astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { PrincipalButton as P, index$1 as a, index as b, index$2 as i };
