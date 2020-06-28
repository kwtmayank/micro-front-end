import axios from "axios";

const Microfrontend = {
  generateScriptId: function (name) {
    return `micro-frontend-script-${name}`;
  },

  checkIfScriptLoaded: function (name) {
    return document.getElementById(name);
  },

  fetchRenderingScriptAndAppend: async function (
    host,
    name,
    scriptId,
    onLoadFn
  ) {
    console.log(`fetching manifest for ${name}`);
    const manifest = await axios.get(`/manifest/${name}`);
    console.log(`Manifest is ${JSON.stringify(manifest.data)}`);
    const script = document.createElement("script");
    script.id = scriptId;
    script.crossOrigin = "anonymous";
    script.src = `${host + manifest.data["main-js"]}`;
    script.onload = onLoadFn;
    document.head.appendChild(script);
    console.log(
      `script downloaded from ${
        host + manifest.data["main-js"]
      } and appended with id ${scriptId}`
    );
  },

  renderMicroFrontendApp: function (name) {
    const functionName = camelCase(`render ${name}`);
    switch (functionName) {
      case "renderProfileDetails":
        window[functionName](`${name}-container`, history, state);
      case "renderProfileList":
        window[functionName](`${name}-container`, history, handleClick);
    }
  },

  camelCase: function (str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  },
};

export default Microfrontend;
