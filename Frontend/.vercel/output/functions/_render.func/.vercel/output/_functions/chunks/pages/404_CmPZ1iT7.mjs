/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_DkoZZsxe.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$5 = createAstro();
const $$DropDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DropDown;
  return renderTemplate` ${maybeRenderHead()}<li class="relative" id="dropdown"> <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-70 hover:opacity-60">Contenido <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg></button> <!-- Dropdown menu --> <div id="dropdownNavbar" class="z-10 hidden pb-4 font-normal rounded-lg rounded-t-none shadow w-44 absolute top-[32px] bg-gray-700"> <ul class="font-medium flex flex-col p-0 mt-4 justify-start rounded-lg text-left md:mt-0 md:border-0"> <li> <a href="/estadisticas/principal" class="block pt-2 ps-4 text-gray-900 rounded hover:text-gray-300 md:border-0 md:ps-4 dark:text-white">Estadisticas</a> </li> <li> <a href="/educacion/principal" class="block pt-2 ps-4 text-gray-900 rounded hover:text-gray-300 md:border-0 dark:text-white">Educación</a> </li> </ul> </div> </li>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/DropDown.astro", void 0);

const $$Astro$4 = createAstro();
const $$Loader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Loader;
  return renderTemplate`${maybeRenderHead()}<div id="loader" class="loader" data-astro-cid-6zgyenmi></div> `;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Loader.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate` ${maybeRenderHead()}<nav class="border-gray-200 bg-ecologica-primary relative"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/img/carbon-footprint.png" class="h-8" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecologica</span> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden absolute z-50 md:static top-[55px] left-0 w-full md:block md:w-auto bg-ecologica-primary" id="navbar-default"> <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"> <li> <a href="/" class="block hover:opacity-80 py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Inicio</a> </li> ${renderComponent($$result, "DropDown", $$DropDown, {})} <li> <a href="/foros/principal" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Foros</a> </li> <div class="gap-0 hidden flex-col lg:flex-row items-center lg:gap-6" data-auth-user> <li> <a href="/usuario/registrar" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Registrarse</a> </li> <li> <a href="/usuario/login" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar Sesion</a> </li> </div> <div class="flex items-center flex-col lg:flex-row lg:gap-6"> <li class="hidden" data-logged-user> <button data-close-session class="block rounded-lg text-white bg-ecologica-secondary py-2 px-3 bg-opacity-90 hover:bg-opacity-100">Cerrar sesión
</button> </li> </div> ${renderComponent($$result, "Loader", $$Loader, {})} </ul> </div> </div> </nav>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full p-4 bg-emerald-800 font-bold text-center text-white"> <p>
@2024 Ecologica Universidad Cooperativa de Colombia
</p> </footer>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Clientes/Ecologica/Frontend/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "No existe la pagina", "description": "La pagina web a la que se intenta acceder no existe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main style="height: 100vh;" class="flex justify-center items-center flex-col p-12 gap-12"> <h1 class="text-center text-4xl m-6 font-bold text-ecologica-secondary">
Ups esta pagina no existe
</h1> <img src="https://media.tenor.co/images/0d1329f5ff7d31712e3d12ce160df6ec/raw" alt="This is fine meme"> <a href="/" class="rounded p-2 font-medium bg-ecologica-secondary text-white">Volver al inicio</a> </main> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/404.astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Loader as a };
