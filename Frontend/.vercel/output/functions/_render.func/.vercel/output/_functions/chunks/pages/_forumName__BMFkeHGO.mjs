/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro, e as addAttribute, f as renderHead, g as renderSlot } from '../astro_WASpLENQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';

const $$DropDown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<li class="relative" id="dropdown"> <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-70 hover:opacity-60">Contenido <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg></button> <!-- Dropdown menu --> <div id="dropdownNavbar" class="z-10 hidden pb-4 font-normal rounded-lg rounded-t-none shadow w-44 absolute top-[32px] bg-gray-700"> <ul class="font-medium flex flex-col p-0 mt-4 justify-start rounded-lg text-left md:mt-0 md:border-0"> <li> <a href="/estadisticas/principal" class="block pt-2 ps-4 text-gray-900 rounded hover:text-gray-300 md:border-0 md:ps-4 dark:text-white">Estadisticas</a> </li> <li> <a href="/educacion/principal" class="block pt-2 ps-4 text-gray-900 rounded hover:text-gray-300 md:border-0 dark:text-white">Educación</a> </li> </ul> </div> </li>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/DropDown.astro", void 0);

const $$Loader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="loader" class="loader" data-astro-cid-6zgyenmi></div> `;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Loader.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<nav class="border-gray-200 bg-ecologica-primary relative"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/img/carbon-footprint.png" class="h-8" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecologica</span> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> <div class="hidden absolute z-50 md:static top-[55px] left-0 w-full md:block md:w-auto bg-ecologica-primary" id="navbar-default"> <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"> <li> <a href="/" class="block hover:opacity-80 py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Inicio</a> </li> ${renderComponent($$result, "DropDown", $$DropDown, {})} <li> <a href="/foros/principal" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Foros</a> </li> <div class="gap-0 hidden flex-col lg:flex-row items-center lg:gap-6" data-auth-user> <li> <a href="/usuario/registrar" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Registrarse</a> </li> <li> <a href="/usuario/login" class="block hover:opacity-80 py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar Sesion</a> </li> </div> <div class="flex items-center flex-col lg:flex-row lg:gap-6"> <li class="hidden" data-logged-user> <button data-close-session class="block rounded-lg text-white bg-ecologica-secondary py-2 px-3 bg-opacity-90 hover:bg-opacity-100">Cerrar sesión
</button> </li> </div> ${renderComponent($$result, "Loader", $$Loader, {})} </ul> </div> </div> </nav>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full p-4 bg-emerald-800 font-bold text-center text-white"> <p>
@2024 Ecologica Universidad Cooperativa de Colombia
</p> </footer>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/Clientes/Ecologica/Frontend/src/layouts/Layout.astro", void 0);

function getSession() {
  return localStorage.getItem("user_session");
}

function isSessionExpired() {
  const sessionDataString = getSession();
  if (!sessionDataString)
    return true;
  const sessionData = JSON.parse(sessionDataString);
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  const expiredTime = new Date(sessionData.expirationTime).getTime();
  return currentTime > expiredTime;
}
function checkUserLogged() {
  const isExpired = isSessionExpired();
  if (isExpired) {
    console.log("La sesión del usuario ya expiró o nunca estuvo loggeado");
    localStorage.removeItem("user_session");
    return null;
  }
  const sessionDataString = getSession();
  if (!sessionDataString)
    return null;
  return JSON.parse(sessionDataString);
}

function getTokenFromSession() {
  const session = checkUserLogged();
  if (!session)
    return null;
  const { token } = session;
  return token;
}

function getRole() {
  const user = checkUserLogged();
  if (!user)
    return { admin: false };
  const role = Boolean(user.user.isAdmin);
  return { admin: role };
}

function useAuth() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const currentRolUser = getRole()?.admin;
    setIsAdmin(currentRolUser ?? false);
  }, []);
  return { isAdmin };
}

const URL$4 = "http://localhost:3001";
async function getAllForums() {
  try {
    const result = await fetch(`${URL$4}/forum/getAll`);
    const forums = await result.json();
    if (!forums.error) {
      return forums;
    }
    throw new Error(forums.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function Send() {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", fill: "currentColor", viewBox: "0 0 512 512", children: /* @__PURE__ */ jsx("path", { d: "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" }) });
}

const URL$3 = "http://localhost:3001";
async function createMessage({ content, forumId, token }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ content })
  };
  try {
    const response = await fetch(`${URL$3}/forum/${forumId}/message`, options);
    const message = await response.json();
    if (!message.error) {
      return message;
    }
    throw new Error(message.error);
  } catch (error) {
    console.error("Error al crear mensaje:", error);
    throw error;
  }
}

const MessageComponent = ({ content, userName, self }) => {
  const styleJoin = "p-2 rounded-3xl px-4 border";
  const styleSelf = `${styleJoin} bg-ecologica-secondary text-white`;
  const styleNoSelf = `${styleJoin} bg-gray-200 mt-5`;
  return /* @__PURE__ */ jsxs("div", { className: `${self ? "self-end" : " self-start"} flex item-center`, children: [
    !self && /* @__PURE__ */ jsx("div", { className: `flex flex-col justify-center relative`, children: /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-gray-700 w-20 absolute top-0 left-0", children: userName }) }),
    /* @__PURE__ */ jsx("div", { className: `${self ? styleSelf : styleNoSelf}`, children: /* @__PURE__ */ jsx("p", { children: content }) })
  ] });
};

const URL$2 = "http://localhost:3001";
async function getAllMessages(forumId) {
  try {
    const result = await fetch(`${URL$2}/forum/${forumId}/getAllMessages`);
    const messages = await result.json();
    if (!messages.error) {
      return messages;
    }
    throw new Error(messages.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function ForumChat({ currentForum }) {
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const handleChange = (event) => {
    const messageContent = event.target.value;
    setContent(messageContent);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getTokenFromSession();
    if (!token)
      return;
    if (!content)
      return;
    const messageResult = await createMessage({
      forumId: String(currentForum.id),
      token,
      content
    });
    messageResult.self = currentUser?.user ? messageResult.userId === currentUser?.user?.id : false;
    setMessages((prevMessages) => [...prevMessages, messageResult]);
    setContent("");
  };
  useEffect(() => {
    const userLogged = checkUserLogged();
    setCurrentUser(userLogged);
    const getMessages = async () => {
      const allMessages = await getAllMessages(String(currentForum?.id));
      const mapMessages = allMessages.map((message) => {
        message.self = userLogged?.user ? message.userId === userLogged?.user?.id : false;
        return message;
      });
      setMessages(mapMessages);
    };
    getMessages();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "flex-1 mt-6 min-h-[80vh] ", children: [
    /* @__PURE__ */ jsxs("div", { className: "border-b border-b-gray-300 pb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: currentForum?.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mt-1", children: currentForum?.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-between h-auto lg:h-[90%]", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 p-3 h-full max-h-[650px] overflow-y-scroll", children: messages.length > 0 ? messages.map((msg) => /* @__PURE__ */ jsx(
        MessageComponent,
        {
          content: msg.content,
          userName: msg.User.name,
          self: msg.self
        },
        msg.id
      )) : /* @__PURE__ */ jsx("p", { className: "font-semibold text-center text-sm", children: "Todavía no hay mensajes... ¡Sé el primero en escribir!" }) }),
      currentUser ? /* @__PURE__ */ jsx("form", { className: "mt-6", onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs("label", { className: "w-full flex gap-2 bg-white px-2 items-center rounded-lg", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            onChange: handleChange,
            value: content,
            className: "w-full py-3 pl-2 focus:outline-none",
            type: "text",
            id: "messageInput",
            placeholder: "Escribe un mensaje...",
            title: "Campo para escribir mensajes"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "w-8 flex justify-center items-center text-white bg-sky-400 rounded-full h-8", children: /* @__PURE__ */ jsx(Send, {}) })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "w-full font-bold text-center bg-gray-200 p-4 rounded-lg", children: /* @__PURE__ */ jsxs("p", { children: [
        "¿Quieres participar en la conversación?",
        /* @__PURE__ */ jsx("a", { className: "text-blue-500 hover:opacity-80", href: "/usuario/login", children: " ¡Inicia Sesión!" })
      ] }) })
    ] })
  ] });
}

const URL$1 = "http://localhost:3001";
async function createForum(token, forumData) {
  const authToken = `Bearer ${token}`;
  try {
    const result = await fetch(`${URL$1}/forum/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": authToken
      },
      body: JSON.stringify(forumData)
    });
    const newForum = await result.json();
    if (!newForum.error) {
      return newForum;
    }
    throw new Error(newForum.error);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function CreateForumForm({ open }) {
  const [forumData, setForumData] = useState({ title: "", description: "" });
  const handleChange = (event) => {
    if (!event.target)
      return;
    const { value, name } = event.target;
    setForumData((forumData2) => ({
      ...forumData2,
      [name]: value
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = getTokenFromSession();
    if (!token)
      return;
    const resultForum = await createForum(token, forumData);
    if (resultForum) {
      toast.success("El foro se ha creado correctamente");
    } else {
      toast.error("Hubo algún problema para crear el foro...");
    }
    setTimeout(() => {
      window.location.reload();
    }, 2100);
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "flex flex-col gap-2 my-3 items-start",
      style: {
        height: `${open ? "220px" : "0"}`,
        overflow: "hidden",
        transition: "all .2s"
      },
      children: [
        /* @__PURE__ */ jsxs("label", { className: "w-full", children: [
          /* @__PURE__ */ jsx("p", { className: "block font-semibold", children: "Título..." }),
          /* @__PURE__ */ jsx("input", { onChange: handleChange, name: "title", className: "p-3 w-full rounded-lg", type: "text", placeholder: "Escribe el título del foro..." })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "w-full", children: [
          /* @__PURE__ */ jsx("p", { className: "block font-semibold", children: "Descripción..." }),
          /* @__PURE__ */ jsx("input", { onChange: handleChange, name: "description", className: "p-3 w-full rounded-lg", type: "text", placeholder: "Escribe la descripción del foro..." })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "bg-green-700 p-2 px-6 mt-3 rounded-lg text-white font-semibold", children: "Listo" })
      ]
    }
  );
}

const URL = "http://localhost:3001";
async function deleteForum(id, token) {
  const authToken = `Bearer ${token}`;
  try {
    const response = await fetch(`${URL}/forum/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": authToken
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function ItemForum({ title, description, id }) {
  const { isAdmin } = useAuth();
  const handleDelete = async () => {
    const confirmUser = confirm("¿Estás seguro de que quieres elminar este foro?");
    if (!confirmUser)
      return;
    const token = getTokenFromSession();
    if (!token)
      return;
    const forumDelete = await deleteForum(String(id), token);
    console.log(forumDelete);
    if (forumDelete.msg)
      toast.success("El foro se ha eliminado correctamente.");
    else
      toast.error("Fatal, hubo un error al tratar de elminar el foro.");
    setTimeout(() => {
      window.location.reload();
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    isAdmin && /* @__PURE__ */ jsx("button", { onClick: handleDelete, className: "text-red-500 absolute top-2 right-2 z-99 hover:scale-[1.1] transition-transform cursor-pointer", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "22", height: "22", fill: "currentColor", className: "bi bi-x-square-fill", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" }) }) }),
    /* @__PURE__ */ jsx("a", { href: `/foros/${title}`, children: /* @__PURE__ */ jsxs("div", { className: "w-full h-[90px] text-base rounded-2xl bg-white p-3 flex justify-between gap-4 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-[75px]", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/img/mundi.jpg",
            alt: "Planeta Tierra",
            className: "w-full h-full object-cover rounded-full"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-800 text-sm hidden lg:block", children: description })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-sm flex flex-col gap-2 justify-center items-center" })
    ] }) })
  ] });
}

function ListOfForums({ forums }) {
  const { isAdmin } = useAuth();
  const [openForm, setOpenForm] = useState(false);
  const handleOpen = () => {
    setOpenForm(!openForm);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "forum-section",
      className: "flex-[0.6]",
      children: [
        isAdmin && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxs("button", { onClick: handleOpen, className: "hover:bg-emerald-600 w-full bg-green-600 text-white p-3 rounded-xl font-medium flex justify-center items-center gap-2", children: [
            "Crear foro",
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-square-fill", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" }) }) })
          ] }),
          /* @__PURE__ */ jsx(CreateForumForm, { open: openForm })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pb-3 lg:pb-0 flex flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-col gap-3 mt-10", children: forums.length > 0 ? forums.map((forum) => /* @__PURE__ */ jsx(
          ItemForum,
          {
            title: forum.title,
            description: forum.description,
            id: forum.id
          },
          forum.id
        )) : /* @__PURE__ */ jsx("p", { className: "font-bold text-center w-full text-sm", children: "Todavía no hay ningún foro..." }) }),
        /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "bottom-left", expand: true })
      ]
    }
  );
}

const $$Astro = createAstro();
const prerender = false;
const getStaticPaths = async () => {
  return forums.map((forum) => ({ params: { forumName: forum.title } }));
};
const $$forumName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$forumName;
  const { forumName } = Astro2.params;
  let forums2 = [];
  let currentForum = null;
  try {
    forums2 = await getAllForums();
    currentForum = forums2.find((forum) => forum.title === forumName);
  } catch (error) {
    console.error(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ecologica Universidad Cooperativa de Colombia", "description": "Pagina principal de medicion ecologica de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="p-12 bg-gray-100"> <div class="text-left"> <h1 class="text-2xl font-bold lg:text-4xl">
Foros de <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text">ecologia</span> </h1> <p class="mt-5 text-sm lg:text-lg text-gray-700 max-w-[500px]">
Aquí trataremos todos los temas más importantes que influyen en
                el <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text font-bold">reciclaje</span> de nuestra Universidad.
</p> </div> <div class="flex flex-col lg:flex-row gap-6"> ${!currentForum ? renderTemplate`${renderComponent($$result2, "ListOfForums", ListOfForums, { "forums": forums2, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/forum/ListOfForums.tsx", "client:component-export": "default" })}
                <section class="flex-1 mt-6 min-h-[80vh] flex flex-col items-center gap-8 border-l-2"> <h2 class="text-2xl font-bold ">Bienvenido a la sección de foros</h2> <h3 class="text-lg font-normal">Por favor, elige algún foro de la izquierda...</h3> <img width="300" src="https://www.troublefreepool.com/media/mr-bean-waiting-gif.190931/full" alt="Gif de mr bean esperando"> </section>` : renderTemplate`${renderComponent($$result2, "ListOfForums", ListOfForums, { "forums": forums2, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/forum/ListOfForums.tsx", "client:component-export": "default" })}
                ${renderComponent($$result2, "ForumChat", ForumChat, { "currentForum": currentForum, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/forum/ForumChat.tsx", "client:component-export": "default" })}`} </div> </main> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/foros/[forumName].astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/foros/[forumName].astro";
const $$url = "/foros/[forumName]";

const _forumName_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$forumName,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _forumName_ as _, $$Loader as a, getAllForums as b, getTokenFromSession as g, useAuth as u };
