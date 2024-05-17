/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, h as renderSlot } from '../astro_B_bJZi8i.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './_forumName__DtPhhrNf.mjs';

const $$Astro$2 = createAstro();
const $$FormRegister = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormRegister;
  const { token } = Astro2.props;
  return renderTemplate` ${maybeRenderHead()}<form class="mt-8" id="register"${addAttribute(token, "data-set-token")}> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label for="name" class="block text-lg font-medium text-gray-700 text-left">Nombre</label> <input type="text" id="name" name="name" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Ingresa tu nombre" required> </div> <div> <label for="lastName" class="block text-lg font-medium text-gray-700 text-left">Apellido</label> <input type="text" id="lastName" name="lastName" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Ingresa tu apellido" required> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"> <div> <label for="email" class="block text-lg font-medium text-gray-700 text-left">Email</label> <input type="email" id="email" name="email" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Ingresa tu email" required> </div> <div> <label for="age" class="block text-lg font-medium text-gray-700 text-left">Edad</label> <input type="number" id="age" name="age" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Ingresa tu edad" required> </div> </div> <div class="mt-4"> <label for="password" class="block text-lg font-medium text-gray-700 text-left">Contraseña</label> <input type="password" id="password" name="password" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Crea una contraseña" required> </div> <div class="mt-4"> <label for="confirmPassword" class="block text-lg font-medium text-gray-700 text-left">Confirmar Contraseña</label> <input type="password" id="confirmPassword" name="confirmPassword" class="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Confirma tu contraseña" required> </div> <div class="mt-8"> <button type="submit" class="px-4 py-2 bg-green-500 text-white font-medium rounded-md">Registrarse</button> </div> </form>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/User/FormRegister.astro", void 0);

const $$Astro$1 = createAstro();
const $$RegisterLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RegisterLayout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Navegacion de educacion Universidad Cooperativa de Colombia sede Pasto", "description": "Aqui podras navegar dentro del contenido de la educacion ambiental de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mx-auto max-w-screen-md mt-8 mb-8"> <h1 class="text-4xl font-bold">Registro</h1> <p class="text-lg text-gray-600 my-4">
¡Regístrate para ser parte de la comunidad de Ecologica!
</p> <div class="bg-gray-100 p-8 rounded-lg shadow-md mb-12"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/layouts/RegisterLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$token = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$token;
  const { token } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "RegisterLayout", $$RegisterLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormRegister", $$FormRegister, { "token": token })} ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/[token].astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/[token].astro";
const $$url = "/usuario/registrar/[token]";

const _token_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$token,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormRegister as $, _token_ as _, $$RegisterLayout as a };
