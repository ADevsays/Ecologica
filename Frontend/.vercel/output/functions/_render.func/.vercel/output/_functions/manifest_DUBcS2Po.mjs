import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_B_bJZi8i.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"educacion/principal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/educacion/principal","isIndex":false,"type":"page","pattern":"^\\/educacion\\/principal\\/?$","segments":[[{"content":"educacion","dynamic":false,"spread":false}],[{"content":"principal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/educacion/principal.astro","pathname":"/educacion/principal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"estadisticas/principal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/estadisticas/principal","isIndex":false,"type":"page","pattern":"^\\/estadisticas\\/principal\\/?$","segments":[[{"content":"estadisticas","dynamic":false,"spread":false}],[{"content":"principal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/estadisticas/principal.astro","pathname":"/estadisticas/principal","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"usuario/login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/usuario/login","isIndex":false,"type":"page","pattern":"^\\/usuario\\/login\\/?$","segments":[[{"content":"usuario","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/usuario/login.astro","pathname":"/usuario/login","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"usuario/registrar/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/usuario/registrar","isIndex":true,"type":"page","pattern":"^\\/usuario\\/registrar\\/?$","segments":[[{"content":"usuario","dynamic":false,"spread":false}],[{"content":"registrar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/usuario/registrar/index.astro","pathname":"/usuario/registrar","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cf2UQPm2.js"}],"styles":[{"type":"external","src":"/_astro/index.Cmwrv1mH.css"},{"type":"inline","content":".loader[data-astro-cid-6zgyenmi]{width:25px;padding:3px;aspect-ratio:1;border-radius:50%;background:#25b09b;--_m: conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3 1s infinite linear}@keyframes l3{to{transform:rotate(1turn)}}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-cyrillic-ext-wght-normal.D4iD1X2E.woff2) format(\"woff2-variations\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-cyrillic-wght-normal.CaM8FerK.woff2) format(\"woff2-variations\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-devanagari-wght-normal.CbfJmLGj.woff2) format(\"woff2-variations\");unicode-range:U+0900-097F,U+1CD0-1CF9,U+200C-200D,U+20A8,U+20B9,U+20F0,U+25CC,U+A830-A839,U+A8E0-A8FF,U+11B00-11B09}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-greek-ext-wght-normal.DKcYOSMP.woff2) format(\"woff2-variations\");unicode-range:U+1F00-1FFF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-greek-wght-normal.BZuoB2Tl.woff2) format(\"woff2-variations\");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-vietnamese-wght-normal.BcO5zKg_.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-latin-ext-wght-normal.D97WOMs8.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-latin-wght-normal.GUnxZaaT.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{margin:0;font-family:Noto Sans Variable,sans-serif}\n"}],"routeData":{"route":"/foros/[forumname]","isIndex":false,"type":"page","pattern":"^\\/foros\\/([^/]+?)\\/?$","segments":[[{"content":"foros","dynamic":false,"spread":false}],[{"content":"forumName","dynamic":true,"spread":false}]],"params":["forumName"],"component":"src/pages/foros/[forumName].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Bkf2c8al.js"}],"styles":[{"type":"external","src":"/_astro/index.Cmwrv1mH.css"},{"type":"inline","content":".loader[data-astro-cid-6zgyenmi]{width:25px;padding:3px;aspect-ratio:1;border-radius:50%;background:#25b09b;--_m: conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box;-webkit-mask:var(--_m);mask:var(--_m);-webkit-mask-composite:source-out;mask-composite:subtract;animation:l3 1s infinite linear}@keyframes l3{to{transform:rotate(1turn)}}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-cyrillic-ext-wght-normal.D4iD1X2E.woff2) format(\"woff2-variations\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-cyrillic-wght-normal.CaM8FerK.woff2) format(\"woff2-variations\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-devanagari-wght-normal.CbfJmLGj.woff2) format(\"woff2-variations\");unicode-range:U+0900-097F,U+1CD0-1CF9,U+200C-200D,U+20A8,U+20B9,U+20F0,U+25CC,U+A830-A839,U+A8E0-A8FF,U+11B00-11B09}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-greek-ext-wght-normal.DKcYOSMP.woff2) format(\"woff2-variations\");unicode-range:U+1F00-1FFF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-greek-wght-normal.BZuoB2Tl.woff2) format(\"woff2-variations\");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-vietnamese-wght-normal.BcO5zKg_.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-latin-ext-wght-normal.D97WOMs8.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Noto Sans Variable;font-style:normal;font-display:swap;font-weight:100 900;src:url(/_astro/noto-sans-latin-wght-normal.GUnxZaaT.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{margin:0;font-family:Noto Sans Variable,sans-serif}\n"}],"routeData":{"route":"/usuario/registrar/[token]","isIndex":false,"type":"page","pattern":"^\\/usuario\\/registrar\\/([^/]+?)\\/?$","segments":[[{"content":"usuario","dynamic":false,"spread":false}],[{"content":"registrar","dynamic":false,"spread":false}],[{"content":"token","dynamic":true,"spread":false}]],"params":["token"],"component":"src/pages/usuario/registrar/[token].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/[token].astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/usuario/registrar/index.astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/educacion/contenido/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/educacion/principal.astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/estadisticas/principal.astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/foros/[forumName].astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Clientes/Ecologica/Frontend/src/pages/usuario/login.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/educacion/contenido/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_B5plHgQA.mjs","\u0000@astrojs-manifest":"manifest_DUBcS2Po.mjs","D:/Clientes/Ecologica/Frontend/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Dc_gkuzL.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_CJsud-d_.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"chunks/index__Ehb9f8v.mjs","\u0000@astro-page:src/pages/educacion/contenido/[...slug]@_@astro":"chunks/_.._Bz8axdDU.mjs","\u0000@astro-page:src/pages/educacion/principal@_@astro":"chunks/principal_9bn1kgS9.mjs","\u0000@astro-page:src/pages/estadisticas/principal@_@astro":"chunks/principal_CruK9tG1.mjs","\u0000@astro-page:src/pages/foros/[forumName]@_@astro":"chunks/_forumName__BN89OBJx.mjs","\u0000@astro-page:src/pages/usuario/login@_@astro":"chunks/login_Dq8dDdYy.mjs","\u0000@astro-page:src/pages/usuario/registrar/[token]@_@astro":"chunks/_token__qdbgl9gf.mjs","\u0000@astro-page:src/pages/usuario/registrar/index@_@astro":"chunks/index_a8CFk5rX.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CwsEvUke.mjs","D:/Clientes/Ecologica/Frontend/src/content/education/medio-ambiente.md?astroContentCollectionEntry=true":"chunks/medio-ambiente_DcGclcBC.mjs","D:/Clientes/Ecologica/Frontend/src/content/education/medio-ambiente.md?astroPropagatedAssets":"chunks/medio-ambiente_CEWwA6sM.mjs","D:/Clientes/Ecologica/Frontend/src/content/education/medio-ambiente.md":"chunks/medio-ambiente_toOAWBfB.mjs","@/sections/stats/MonthStatsSection.tsx":"_astro/MonthStatsSection.CAKx1OZL.js","/astro/hoisted.js?q=2":"_astro/hoisted.9-2kBJOf.js","/astro/hoisted.js?q=4":"_astro/hoisted.BF3pV9gU.js","/astro/hoisted.js?q=0":"_astro/hoisted.70LTqTBC.js","/astro/hoisted.js?q=1":"_astro/hoisted.CENgZXZB.js","D:/Clientes/Ecologica/Frontend/src/sections/forum/ListOfForums.tsx":"_astro/ListOfForums.EASPsONr.js","D:/Clientes/Ecologica/Frontend/src/sections/forum/ForumChat.tsx":"_astro/ForumChat.C-5sbHTc.js","D:/Clientes/Ecologica/Frontend/src/sections/stats/YearStatsSection.tsx":"_astro/YearStatsSection.BfgW7nSL.js","/astro/hoisted.js?q=5":"_astro/hoisted.Cf2UQPm2.js","/astro/hoisted.js?q=3":"_astro/hoisted.Bkf2c8al.js","D:/Clientes/Ecologica/Frontend/src/sections/stats/HistoryStatsSection.tsx":"_astro/HistoryStatsSection.ly8VTV6I.js","@astrojs/react/client.js":"_astro/client.CZMfMgfU.js","D:/Clientes/Ecologica/Frontend/src/sections/stats/HeroSection.tsx":"_astro/HeroSection.CrRpgsi-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/noto-sans-greek-ext-wght-normal.DKcYOSMP.woff2","/_astro/noto-sans-devanagari-wght-normal.CbfJmLGj.woff2","/_astro/noto-sans-greek-wght-normal.BZuoB2Tl.woff2","/_astro/noto-sans-cyrillic-wght-normal.CaM8FerK.woff2","/_astro/noto-sans-vietnamese-wght-normal.BcO5zKg_.woff2","/_astro/noto-sans-latin-wght-normal.GUnxZaaT.woff2","/_astro/noto-sans-cyrillic-ext-wght-normal.D4iD1X2E.woff2","/_astro/noto-sans-latin-ext-wght-normal.D97WOMs8.woff2","/_astro/index.Cmwrv1mH.css","/favicon.svg","/img/carbon-footprint.png","/img/mundi.jpg","/_astro/auth.Bit6wUPJ.js","/_astro/client.CZMfMgfU.js","/_astro/COLORS.DQT3oG8g.js","/_astro/createPopup.DIwhvOn4.js","/_astro/ForumChat.C-5sbHTc.js","/_astro/getAllData.CtCMfvuc.js","/_astro/getDataByMonth.CvSh8s2p.js","/_astro/getMonthName.BN4cmUeH.js","/_astro/getTokenFromSession.BIEqYT4d.js","/_astro/HeroSection.CrRpgsi-.js","/_astro/HistoryStatsSection.ly8VTV6I.js","/_astro/hoisted.70LTqTBC.js","/_astro/hoisted.9-2kBJOf.js","/_astro/hoisted.BF3pV9gU.js","/_astro/hoisted.Bkf2c8al.js","/_astro/hoisted.CENgZXZB.js","/_astro/hoisted.Cf2UQPm2.js","/_astro/index.ERiRZYqk.js","/_astro/index.HuSqFC_B.js","/_astro/jsx-runtime.ozvemubn.js","/_astro/ListOfForums.EASPsONr.js","/_astro/MonthStatsSection.CAKx1OZL.js","/_astro/processData.DBa0fHNN.js","/_astro/useAuth.CSSPEJuy.js","/_astro/YearStatsSection.BfgW7nSL.js","/img/content/eolica.webp","/img/content/fosil.png","/img/content/hidraulica.webp","/img/content/huella.png","/img/content/nuclear.webp","/img/content/reduzca.png","/404.html","/admin/index.html","/educacion/principal/index.html","/estadisticas/principal/index.html","/usuario/login/index.html","/usuario/registrar/index.html","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
