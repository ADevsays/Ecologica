/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent, h as renderSlot } from '../astro_DkoZZsxe.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Loader } from './404_CmPZ1iT7.mjs';
import 'clsx';
import { P as PrincipalButton } from './index_D1YfJocQ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { Chart, PieController, CategoryScale, ArcElement, Tooltip, Legend, BarController, LinearScale, BarElement } from 'chart.js';
import { toast, Toaster } from 'sonner';
import { a as getTokenFromSession, u as useAuth } from './_forumName__DjxfuBvZ.mjs';
import { FileUploader } from 'react-drag-drop-files';

const $$Astro$6 = createAstro();
const $$Arrow = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg>`;
}, "D:/Clientes/Ecologica/Frontend/src/icons/Arrow.astro", void 0);

const $$Astro$5 = createAstro();
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`accordion-collapse-heading-${id}`, "id")}> <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:border-gray-700 dark:text-black hover:bg-gray-100 dark:hover:bg-ecologica-secondary gap-3 bg-green-300 bg-opacity-25"${addAttribute(`#accordion-collapse-body-${id}`, "data-accordion-target")} aria-expanded="true"${addAttribute(`#accordion-collapse-body-${id}`, "aria-controls")}> <h2>${title}</h2> ${renderComponent($$result, "Arrow", $$Arrow, {})} </button> </header> <div${addAttribute(`accordion-collapse-body-${id}`, "id")} class="hidden"${addAttribute(`accordion-collapse-heading-${id}`, "aria-labelledby")}> <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/Education/AccordionItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$AccordionSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AccordionSection;
  return renderTemplate` ${maybeRenderHead()}<section id="accordion-collapse" data-accordion="collapse"> ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Medio Ambiente", "id": "1" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black"> <a href="/educacion/contenido/medio-ambiente" class="text-blue-600 dark:text-blue-500 hover:underline">El medio ambiente</a> engloba todos los aspectos y elementos naturales y artificiales que rodean
      a los seres vivos, afectando su vida de diversas maneras. La responsabilidad
      social y ambiental de las instituciones educativas, especialmente las universidades,
      es fundamental para el desarrollo sostenible y el bienestar de la sociedad.
      Esto incluye la promoción del desarrollo humano sostenible, la investigación
      científica y tecnológica orientada a la sostenibilidad, y la formación de una
      conciencia sobre la importancia de proteger y mejorar el entorno natural.
<a href="https://www.redalyc.org/journal/5709/570962992017/html/" class="text-blue-600 dark:text-blue-500 hover:underline">(Redalyc)</a> </p> <p class="text-black">
Las universidades tienen el deber de liderar con el ejemplo, promoviendo
      valores, cultura, y prácticas que respeten y protejan el medio ambiente.
      La educación ambiental en el nivel superior debe entonces reflejar estos
      compromisos, incorporando la sostenibilidad en su currículo y actividades
      cotidianas para formar profesionales con conciencia y responsabilidad
      ambiental. <a href="https://www.redalyc.org/journal/440/44057415025/html/" class="text-blue-600 dark:text-blue-500 hover:underline">(Redalyc)</a> </p> ` })} <section id="accordion-collapse" data-accordion="collapse"> ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Practicas Sostenibles", "id": "2" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black"> <a href="/educacion/practicasSostenibles" class="text-blue-600 dark:text-blue-500 hover:underline">Las prácticas sostenibles</a> se centran en adoptar acciones que permitan un equilibrio entre el desarrollo
        económico, el bienestar social y la protección del medio ambiente. En el
        contexto universitario, esto implica la integración de políticas y acciones
        que promuevan un uso eficiente de los recursos, la enseñanza orientada hacia
        la sostenibilidad y la concienciación sobre el cuidado ambiental.
<a href="https://www.redalyc.org/journal/5606/560659011001/html/" class="text-blue-600 dark:text-blue-500 hover:underline">(Redalyc)</a> </p> <p class="text-black">
La educación para el desarrollo sostenible se ha establecido como una
        herramienta esencial para fomentar una transformación social hacia
        prácticas más sostenibles y respetuosas con el entorno. Implica la
        incorporación de estos conceptos de manera transversal en el currículo,
        promoviendo un aprendizaje basado en la experiencia y la colaboración
        con la comunidad. <a href="https://www.universitatcarlemany.com/actualidad/blog/sostenibilidad-universitaria/" class="text-blue-600 dark:text-blue-500 hover:underline">(UCMA)</a> </p>
Las instituciones educativas desempeñan un papel fundamental en este
      proceso, preparando a los estudiantes para enfrentar y resolver los
      desafíos ambientales actuales y futuros mediante la adquisición de
      conocimientos, el desarrollo de habilidades y la promoción de valores
      orientados hacia la sostenibilidad. <a href="https://ecologiadigital.bio/cuales-son-las-mejores-practicas-de-educacion-para-el-desarrollo-sostenible-y-el-cuidado-del-medio-ambiente/" class="text-blue-600 dark:text-blue-500 hover:underline">(Ecología Digital)</a> ` })} </section> ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Jardiner\xEDa y Conexi\xF3n con la Naturaleza", "id": "3" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black"> <a href="/educacion/jardineriaConexion" class="text-blue-600 dark:text-blue-500 hover:underline">Las prácticas sosteniblesLa jardinería y la conexión con la naturaleza</a>
son aspectos cruciales en la educación para el desarrollo sostenible, destacando
      la importancia de la educación al aire libre. En este contexto, la naturaleza
      actúa como un escenario ideal para desarrollar conocimientos, habilidades como
      el trabajo en equipo, el liderazgo centrado en la Tierra, y el pensamiento
      crítico y sistémico. Al interactuar con la naturaleza, se fortalecen valores
      y se promueve una comprensión más profunda de las interconexiones entre sistemas
      naturales y sociales, así como de los impactos socioculturales en los problemas
      ambientales <a href="https://laderasur.com/articulo/educacion-en-la-naturaleza-la-clave-para-lograr-un-desarrollo-sustentable/" class="text-blue-600 dark:text-blue-500 hover:underline">(Ladera Sur)</a>. La educación inclusiva también se beneficia enormemente de la conexión
      con la naturaleza, demostrando mejoras significativas en el bienestar y el
      aprendizaje de estudiantes con necesidades educativas especiales <a href="https://laderasur.com/articulo/educacion-en-la-naturaleza-la-clave-para-lograr-un-desarrollo-sustentable/" class="text-blue-600 dark:text-blue-500 hover:underline">(Naturaliza Educación)</a>.
</p> ` })} ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Proyectos de Bricolaje y Reutilizaci\xF3n", "id": "4" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black"> <a href="/educacion/bricolageReutilizacion" class="text-blue-600 dark:text-blue-500 hover:underline">Los proyectos de bricolaje y reutilización</a> emergen como estrategias fundamentales para promover la sostenibilidad y
      reducir la generación de residuos. Estos proyectos van desde la creación de
      centros de reutilización, donde los objetos y materiales pueden tener una segunda
      vida, hasta programas de intercambio o trueque y campañas de sensibilización
      en escuelas, empresas y comunidades. La implementación de estos proyectos en
      la educación universitaria no solo contribuye a la conservación del medio ambiente,
      sino que también fomenta la economía circular, la colaboración y el consumo
      responsable.
<a href="https://reciclaria.com/reutilizacion/proyectos-reutilizacion-reciclaje-beneficios-soluciones/" class="text-blue-600 dark:text-blue-500 hover:underline">(RECICLARIA)</a>.
</p> ` })} ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Uso Responsable de los Recursos", "id": "5" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black">
El uso responsable de los recursos en el contexto educativo universitario
      se enfoca en la adopción de prácticas sostenibles y la incorporación de la
      tecnología para optimizar el aprendizaje y la gestión de recursos. Esto
      implica no solo la utilización eficiente de los materiales y la energía
      sino también la integración de tecnologías digitales para ampliar el
      acceso a la educación, mejorar su calidad y fomentar un entorno de
      aprendizaje inclusivo y accesible. La formación en el uso consciente de
      los recursos abarca desde la infraestructura tecnológica hasta las
      estrategias pedagógicas que promueven el reciclaje, la reutilización y la
      reducción del desperdicio, contribuyendo así a la conservación del medio
      ambiente y al desarrollo sostenible.
<a href="https://unesdoc.unesco.org/ark:/48223/pf0000133009#:~:text=URL%3A%20https%3A%2F%2Funesdoc.unesco.org%2Fark%3A%2F48223%2Fpf0000133009%0AVisible%3A%200%25%20" class="text-blue-600 dark:text-blue-500 hover:underline">(UNESCO Document Repository)</a><a href="https://www.redalyc.org/journal/3314/331462375011/html/" class="text-blue-600 dark:text-blue-500 hover:underline">(Redalyc)</a>.
</p> <p class="text-black"></p> ` })} ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Ejemplo Personal", "id": "6" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black">
El <a href="/educacion/ejemploPersonal" class="text-blue-600 dark:text-blue-500 hover:underline">Ejemplo Personal</a> en el contexto de la sostenibilidad y la ecología en la educación universitaria
      se refiere a la influencia directa y el impacto que individuos dentro de la
      comunidad universitaria pueden tener en promover prácticas sostenibles y ecológicas.
      Este enfoque implica no solo la adopción de comportamientos respetuosos con
      el medio ambiente por parte de estudiantes, docentes y personal administrativo,
      sino también la integración de estos principios en la docencia, la investigación
      y la gestión universitaria.
</p> ` })} ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Seminarios y Talleres", "id": "8" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black">
Pendiente me toca averiguar más información sobre este tema, en la
      universidad cooperativa de colombia. En cada uno de los departamentos de
      carreras.
</p> ` })} ${renderComponent($$result, "AccordionItem", $$AccordionItem, { "title": "Sostenibilidad en el Campus", "id": "11" }, { "default": ($$result2) => renderTemplate` <p class="mb-2 text-black">
Pendiente me toca averiguar más información sobre este tema, en la
      universidad cooperativa de colombia. En cada uno de los departamentos de
      carreras.
</p> ` })} </section>`;
}, "D:/Clientes/Ecologica/Frontend/src/sections/education/AccordionSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${maybeRenderHead()}<section> <h1 class="text-3xl font-bold text-balance ">
Educación <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text">Ambiental</span> </h1> <p class="mt-5 text-sm lg:text-xl text-gray-700">
En este lugar podrás leer acerca de las diferentes temáticas para mejorar en
    tu comprensión ambiental con tu <span class="bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text font-bold">entorno</span> </p> <div class="flex justify-center items-center mt-8 mb-8 flex-wrap "> ${renderComponent($$result, "PrincipalButton", PrincipalButton, { "link": "/" }, { "default": ($$result2) => renderTemplate` Inicio ` })} ${renderComponent($$result, "PrincipalButton", PrincipalButton, { "link": "/estadisticas/principal" }, { "default": ($$result2) => renderTemplate` Estadisticas ` })} ${renderComponent($$result, "PrincipalButton", PrincipalButton, { "link": "/foros/principal" }, { "default": ($$result2) => renderTemplate` Foros ` })} </div> </section>`;
}, "D:/Clientes/Ecologica/Frontend/src/sections/education/HeroSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Principal$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Principal$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Navegacion de educacion Universidad Cooperativa de Colombia sede Pasto", "description": "Aqui podras navegar dentro del contenido de la educacion ambiental de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center mx-auto max-w-screen-md mt-8 mb-8"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "AccordionSection", $$AccordionSection, {})} </section> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/educacion/principal.astro", void 0);

const $$file$1 = "D:/Clientes/Ecologica/Frontend/src/pages/educacion/principal.astro";
const $$url$1 = "/educacion/principal";

const principal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Principal$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const MATERIALS = ["Carton", "Papel", "Plegadiza", "Lata", "Plastico", "Chatarra"];

const COLORS = ["#246876", "#9cc824", "#1c64ca", "#0c174b", "#ff5733", "#8a2be2"];

function createPie(ctx, data) {
  Chart.register(PieController, CategoryScale, ArcElement, Tooltip, Legend);
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels: MATERIALS,
      datasets: [
        {
          label: "Cantidad de residuos",
          data,
          backgroundColor: COLORS
        }
      ]
    },
    options: {
      indexAxis: "y",
      scales: {
        y: { beginAtZero: true, grid: { display: false } },
        x: { grid: { display: false } }
      }
    }
  });
}

function getMonthName(number = 0) {
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const mesActual = (/* @__PURE__ */ new Date()).getMonth();
  return meses[mesActual - number];
}

function calcMonth(state = 0) {
  const date = /* @__PURE__ */ new Date();
  if (state !== 0) {
    date.setMonth(date.getMonth() - state);
  }
  return date.toISOString().split("T")[0];
}

const URL$4 = "http://localhost:3001";
async function getDataByMonth(date) {
  try {
    const result = await fetch(`${URL$4}/stats/getByMonth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ date })
    });
    const data = await result.json();
    if (!data.error) {
      return data;
    }
    throw new Error(data.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function processData(allMaterials) {
  return allMaterials.reduce((sumTotal, materials) => {
    materials.forEach((material, index) => {
      sumTotal[index] += material.quantity;
    });
    return sumTotal;
  }, Array(allMaterials[0].length).fill(0));
}

const URL$3 = "http://localhost:3001";
async function updateDataOneMonth(token, collection) {
  try {
    const result = await fetch(`${URL$3}/stats/createOne`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(collection)
    });
    const data = await result.json();
    if (!data.error) {
      return data;
    }
    throw new Error(data.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function getCurrentDate() {
  const currentDate = /* @__PURE__ */ new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

function StadisticModal({ openModal = false, setOpenModal }) {
  const tempValue = useRef({});
  const baseData = useRef({});
  const [data, setDataStats] = useState([]);
  const [valuesToSend, setValuesToSend] = useState({});
  const [valuesRender, setValuesRender] = useState({});
  const canvasRef = useRef(null);
  const instanceChart = useRef(null);
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (!value || tempValue.current[name] === Number(value))
      return;
    const sumValue = baseData.current[name] + Number(value);
    const updatedValues = { ...valuesRender, [name]: sumValue };
    setValuesRender(updatedValues);
    tempValue.current[name] = Number(value);
    setValuesToSend((prevObj) => ({ ...prevObj, [name]: Number(value) }));
  };
  const handleSubmit = async () => {
    const date = getCurrentDate();
    const token = getTokenFromSession();
    const resultData = await updateDataOneMonth(token, { materials: valuesToSend, date });
    if (resultData.error) {
      toast.error(resultData.error);
      throw new Error(resultData.error);
    }
    toast.success(`Datos del mes de ${getMonthName()} subidos`);
    setTimeout(() => {
      window.location.reload();
    }, 2200);
  };
  useEffect(() => {
    const data2 = Object.values(valuesRender);
    setDataStats(data2);
    if (instanceChart.current) {
      instanceChart.current.destroy();
      instanceChart.current = null;
    }
  }, [valuesRender]);
  useEffect(() => {
    if (!canvasRef.current)
      return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx)
      return;
    if (!instanceChart.current) {
      instanceChart.current = createPie(ctx, data);
    }
  }, [data]);
  useEffect(() => {
    const setDataStatsDB = async () => {
      if (!openModal || data.length !== 0)
        return;
      const currentMonth = calcMonth();
      const dataOfMonth = await getDataByMonth(currentMonth);
      if (!(dataOfMonth.materials && dataOfMonth.materials.length > 1))
        return;
      const dataCurrentMonth = processData(dataOfMonth.materials);
      setDataStats(dataCurrentMonth);
      const reciclyData = {};
      const defaultValues = {};
      MATERIALS.forEach((material, index) => {
        const currentValue = dataCurrentMonth[index];
        const key = material.toLowerCase();
        reciclyData[key] = currentValue;
        defaultValues[key] = 0;
      });
      setValuesRender(reciclyData);
      setValuesToSend(defaultValues);
      baseData.current = reciclyData;
    };
    setDataStatsDB();
  }, [openModal]);
  return /* @__PURE__ */ jsx("div", { className: `w-full h-full z-[999] fixed inset-0 bg-black bg-opacity-50 justify-center items-center p-12 ${openModal ? "flex" : "hidden"}`, children: /* @__PURE__ */ jsxs("div", { className: "w-full rounded-lg border border-gray-800 bg-gray-100 p-6 text-left", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", {}),
      /* @__PURE__ */ jsx("button", { className: "top-0", onClick: () => setOpenModal(false), children: "❌" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-center items-center flex-col lg:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("form", { className: "w-full", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg md:text-2xl my-6", children: [
          "Añadir nueva cantidad de ",
          getMonthName(),
          " - ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: MATERIALS.map((material) => /* @__PURE__ */ jsxs("label", { className: "w-full", children: [
          material,
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "text-sm md:text-base w-full p-1 py-2 rounded-lg ps-2 focus:outline-none focus:bg-gray-200",
              onBlur: handleInput,
              type: "number",
              name: material.toLowerCase(),
              placeholder: `Cantidad ${material}`
            }
          )
        ] }, material)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[250px] lg:max-w-[480px] md:max-w-[300px]", children: [
        /* @__PURE__ */ jsxs("h3", { className: "ms-3 mb-2", children: [
          "Últimos datos registrados para ",
          /* @__PURE__ */ jsx("span", { className: "font-bold", children: getMonthName() })
        ] }),
        /* @__PURE__ */ jsx("canvas", { ref: canvasRef })
      ] })
    ] }),
    /* @__PURE__ */ jsx(PrincipalButton, { onClick: handleSubmit, children: " Deposito " })
  ] }) });
}

const URL$2 = "http://localhost:3001";
async function sendCSVFile(token, formData) {
  try {
    const result = await fetch(`${URL$2}/stats/createByCSV`, {
      method: "POST",
      body: formData,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const allData = await result.json();
    return allData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function InputUpload({ openModal = false, setOpenModal }) {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!success || !file)
      throw new Error("Aún no se puede enviar");
    const formData = new FormData();
    formData.append("file", file);
    const token = getTokenFromSession();
    const resultData = await sendCSVFile(token, formData);
    if (!resultData.error) {
      toast.success("Los datos se han subido correctamente");
      setTimeout(() => {
        window.location.reload();
      }, 2200);
    } else {
      toast.error(resultData.error);
      throw new Error(resultData.error);
    }
  };
  const handleChange = (file2) => {
    setFile(file2);
    setSuccess(true);
    setTimeout(() => {
      const successEl = document.querySelector(".jWkLDY");
      const spanMsg = successEl?.querySelector("span");
      if (!spanMsg)
        throw new Error("Error");
      spanMsg.textContent = "Archivo listo. Dale a enviar.";
    }, 120);
  };
  const handleTypeError = () => {
    setSuccess(false);
    setTimeout(() => {
      const errorEl = document.querySelector(".bpxkGG");
      const spanMsg = errorEl?.querySelector("span");
      if (!spanMsg)
        throw new Error("Error");
      spanMsg.textContent = "El tipo del archivo no es compatible.";
    }, 120);
  };
  return /* @__PURE__ */ jsx("div", { className: `size-full fixed inset-0 bg-black bg-opacity-50 z-[999] justify-center items-center ${openModal ? "flex" : "hidden"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] w-full h-auto rounded-lg border border-gray-800 bg-gray-100 p-6 text-left", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold text-2xl my-6 text-center", children: "Importar datos desde tabla" }),
      /* @__PURE__ */ jsx("button", { className: "top-0", onClick: () => setOpenModal(false), children: "❌" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "w-full scale-110 my-6 flex justify-center flex-col items-center text-lg", children: [
      /* @__PURE__ */ jsx(
        FileUploader,
        {
          handleChange,
          name: "file",
          types: ["CSV"],
          error: true,
          hoverTitle: "Suelta aquí",
          onTypeError: handleTypeError,
          label: "Arrastra tu archivo para importar datos"
        }
      ),
      success && /* @__PURE__ */ jsx("button", { className: "mt-2 bg-ecologica-primary text-white rounded-lg p-1 px-3 text-sm", children: "Enviar" })
    ] })
  ] }) });
}

function HeroSection() {
  const { isAdmin } = useAuth();
  const [openModalIndividual, setOpenModalIndividual] = useState(false);
  const [openInputLoad, setOpenInputLoad] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "py-12", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl  font-bold text-balance", children: [
      "Estadísticas de ",
      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text", children: "ecológia" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-5 text-base text-gray-700 px-2", children: [
      "No podemos mejorar lo que no se puede medir por eso le mostramos a la comunidad universitaria los ",
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "bg-gradient-to-r from-ecologica-primary to-ecologica-secondary text-transparent bg-clip-text font-bold",
          children: "datos "
        }
      ),
      " en formato estadístico para que puedan visualizar comodamente los resultados"
    ] }),
    isAdmin && /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center mt-8 mb-8", children: [
      /* @__PURE__ */ jsx(PrincipalButton, { onClick: () => setOpenModalIndividual(true), children: " Depositar mes " }),
      /* @__PURE__ */ jsx(PrincipalButton, { onClick: () => setOpenInputLoad(true), children: " Importar Datos " })
    ] }),
    /* @__PURE__ */ jsx(StadisticModal, { setOpenModal: setOpenModalIndividual, openModal: openModalIndividual }),
    /* @__PURE__ */ jsx(InputUpload, { setOpenModal: setOpenInputLoad, openModal: openInputLoad }),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "bottom-left", expand: true })
  ] });
}

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

function createLinesStats(ctx, data) {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: MONTHS,
      datasets: data
    },
    options: {
      scales: {
        y: { beginAtZero: true, grid: { display: false } },
        x: { grid: { display: false } }
      }
    }
  });
}

const URL$1 = "http://localhost:3001";
async function getDataByYear(year) {
  try {
    const result = await fetch(`${URL$1}/stats/getByYear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ year })
    });
    const data = await result.json();
    if (!data.error) {
      return data;
    }
    throw new Error(data.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function setDataEveryMonth(data) {
  const monthTotals = {};
  for (const material of MATERIALS) {
    monthTotals[material.toLowerCase()] = Array(12).fill(0);
  }
  for (let item of data) {
    let month = new Date(item.date).getMonth();
    for (let material of item.material) {
      monthTotals[material.name][month] += material.quantity;
    }
  }
  return monthTotals;
}
function processDataToYear(data) {
  const monthData = setDataEveryMonth(data);
  return MATERIALS.map((material, index) => {
    const lowerMaterial = material.toLowerCase();
    return {
      data: monthData[lowerMaterial],
      label: lowerMaterial.charAt(0).toUpperCase() + lowerMaterial.slice(1),
      backgroundColor: COLORS[index],
      borderColor: COLORS[index],
      fill: false
    };
  });
}

function YearStatsSection() {
  const refCurrentYear = useRef(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    const loadData = async () => {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const data = await getDataByYear(currentYear);
      if (!(data && data.length > 1))
        return;
      const dataConvert = processDataToYear(data);
      if (!refCurrentYear.current)
        return;
      const ctxCurrent = refCurrentYear.current.getContext("2d");
      if (!ctxCurrent)
        return;
      createLinesStats(ctxCurrent, dataConvert);
      setTimeout(() => {
        setLoad(true);
      }, 500);
    };
    loadData();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
    /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-xl text-center mb-4", children: [
      "Últimos datos de ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }),
    /* @__PURE__ */ jsx("div", { className: `w-full ${load ? "block" : "hidden"}`, children: /* @__PURE__ */ jsx("canvas", { ref: refCurrentYear }) })
  ] });
}

function createBarsStats(ctx, data, direction = "x") {
  Chart.register(BarController, CategoryScale, LinearScale, BarElement);
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: MATERIALS,
      datasets: [
        {
          label: "Cantidad de residuos",
          data,
          backgroundColor: COLORS
        }
      ]
    },
    options: {
      indexAxis: direction,
      scales: {
        [direction === "x" ? "y" : "x"]: { type: "linear", beginAtZero: true }
      }
    }
  });
}

const URL = "http://localhost:3001";
async function getAllData() {
  try {
    const result = await fetch(`${URL}/stats/getAll`);
    const data = await result.json();
    if (!data.error) {
      return data;
    }
    throw new Error(data.error);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function HistoryStatsSection() {
  const refCurrentHistory = useRef(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    const loadData = async () => {
      const { materials } = await getAllData();
      if (!(materials && materials.length > 1))
        return;
      const dataConvert = processData(materials);
      if (!refCurrentHistory.current)
        return;
      const ctxCurrent = refCurrentHistory.current.getContext("2d");
      if (!ctxCurrent)
        return;
      createBarsStats(ctxCurrent, dataConvert);
      setTimeout(() => {
        setLoad(true);
      }, 500);
    };
    loadData();
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "mt-12", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-xl text-center mb-4", children: "Datos históricos" }),
    /* @__PURE__ */ jsx("div", { className: `w-full ${load ? "block" : "hidden"}`, children: /* @__PURE__ */ jsx("canvas", { ref: refCurrentHistory }) })
  ] });
}

function MonthStatsSections() {
  const refCurrentMonth = useRef(null);
  const refNextMonth = useRef(null);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    const loadData = async () => {
      const currentMonth = calcMonth();
      const prevMonth = calcMonth(1);
      const dataOfMonth = await getDataByMonth(currentMonth);
      const dataOfPrevMonth = await getDataByMonth(prevMonth);
      if (!(dataOfMonth.materials && dataOfMonth.materials.length > 1))
        return;
      const dataCurrentMonth = processData(dataOfMonth.materials);
      const dataPrevMonth = processData(dataOfPrevMonth.materials);
      if (!refCurrentMonth.current || !refNextMonth.current)
        return;
      const ctxCurrent = refCurrentMonth.current.getContext("2d");
      const ctxNext = refNextMonth.current.getContext("2d");
      if (!ctxCurrent || !ctxNext)
        return;
      createPie(ctxCurrent, dataCurrentMonth);
      createPie(ctxNext, dataPrevMonth);
      setLoad(true);
    };
    loadData();
  }, []);
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: `${load ? "flex" : "hidden"} w-full justify-center mt-8 flex-wrap gap-8 items-center lg:justify-between`, children: [
      /* @__PURE__ */ jsxs("div", { className: "w-[45%] min-w-[300px] min-h-[320px]", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-xl text-center mb-4", children: [
          "Datos del mes de ",
          getMonthName()
        ] }),
        /* @__PURE__ */ jsx("canvas", { ref: refCurrentMonth })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-[45%] min-w-[300px]", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-xl text-center mb-4", children: [
          "Datos del mes de ",
          getMonthName(1)
        ] }),
        /* @__PURE__ */ jsx("canvas", { ref: refNextMonth })
      ] })
    ] }),
    !load && /* @__PURE__ */ jsx("p", { children: "Cargando..." })
  ] });
}

const $$Astro$1 = createAstro();
const $$LoadPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LoadPage;
  return renderTemplate` ${maybeRenderHead()}<div id="page-load" class="z-[999] absolute inset-0 bg-white flex gap-6 justify-center items-center text-black"> <h3 class="font-bold text-2xl">Cargando los datos... </h3> ${renderComponent($$result, "Loader", $$Loader, {})} </div>`;
}, "D:/Clientes/Ecologica/Frontend/src/components/UI/LoadPage.astro", void 0);

const $$Astro = createAstro();
const $$Principal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Principal;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Navegacion de educacion Universidad Cooperativa de Colombia sede Pasto", "description": "Aqui podras navegar dentro del contenido de la educacion ambiental de la Universidad Cooperativa de Colombia" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoadPage", $$LoadPage, {})} ${maybeRenderHead()}<main class="text-center mx-auto max-w-screen-md mt-8 mb-8 min-h-screen"> ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/stats/HeroSection.tsx", "client:component-export": "HeroSection" })} <h2 class="text-2xl font-bold">Últimos datos agregados</h2> ${renderComponent($$result2, "MonthStatsSections", MonthStatsSections, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/sections/stats/MonthStatsSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "YearStatsSection", YearStatsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/stats/YearStatsSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "HistoryStatsSection", HistoryStatsSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Clientes/Ecologica/Frontend/src/sections/stats/HistoryStatsSection.tsx", "client:component-export": "default" })} </main> ` })}`;
}, "D:/Clientes/Ecologica/Frontend/src/pages/estadisticas/principal.astro", void 0);

const $$file = "D:/Clientes/Ecologica/Frontend/src/pages/estadisticas/principal.astro";
const $$url = "/estadisticas/principal";

const principal = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Principal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { principal as a, principal$1 as p };
