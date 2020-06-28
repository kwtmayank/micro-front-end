import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Microfrontend({ host, name, history, state }) {
  const [scriptId, setScriptId] = useState(`micro-frontend-script-${name}`);
  console.log("data is" + JSON.stringify(state))

  useEffect(() => {
    checkIfScriptLoaded();
  },[]);

  function checkIfScriptLoaded() {
    if (!document.getElementById(scriptId)) {
      fetchRenderingScript();
    } else {
      renderMicroFrontendApp();
    }
  }

  async function fetchRenderingScript() {
    console.log(`/manifest/${name}`);
    const manifest = await axios.get(`/manifest/${name}`);
    console.log(`Manifest is ${manifest.data}`);
    const script = document.createElement("script");
    script.id = scriptId;
    script.crossOrigin = "anonymous";
    script.src = `${host + manifest.data["main-js"]}`;
    script.onload = renderMicroFrontendApp;
    document.head.appendChild(script);
    console.log(`script appended with ${scriptId}`);
  }

  function renderMicroFrontendApp() {
    const functionName = camelCase(`render ${name}`);
    switch(functionName){
      case 'renderProfileDetails':
        window[functionName](`${name}-container`, history, state);
      case 'renderProfileList':
        window[functionName](`${name}-container`, history, handleClick);
    }
    
  }

  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function handleClick(data){
    console.log(data);
    history.push('/profileDetails', { id: data.id });
  }

  return (
    <div>
      <h1>Micro App</h1>
      <main id={`${name}-container`} data-state={state? state.id : ''}/>
    </div>
  );
}
