/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_DkoZZsxe.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_CmPZ1iT7.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Navegacion de educacion Universidad Cooperativa de Colombia sede Pasto", "description": "Aqui podras navegar dentro del contenido de la educacion ambiental de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-left mx-auto max-w-screen-md h-screen mt-20 mb-8 px-4"> <h1 class="text-4xl font-bold">Iniciar sesion</h1> <p class="text-lg text-gray-600 mt-4">
¡Inica sesión ahora para poder participar activamente en los foros de Ecologica!
</p> <div class="bg-gray-100 p-8 rounded-lg shadow-md mt-6"> <form id="login"> <div class="mb-4"> <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label> <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu email" required> </div> <div class="mb-6"> <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label> <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu contraseña" required> </div> <div class="flex items-center justify-between"> <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar sesión</button> <a href="/usuario/registrar" class="inline-block align-baseline font-bold text-sm text-emerald-700 hover:text-blue-800">¿No tienes una cuenta? ¡Crea una!</a> </div> </form> </div> </section> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/usuario/login.astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/usuario/login.astro";
const $$url = "/usuario/login";

export { $$Login as default, $$file as file, $$url as url };
