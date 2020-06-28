import React, { useState, useEffect } from "react";
import {Microfrontend} from "../../common";

export default function ProfileList({ history }) {
  const host = process.env.PROFILE_LIST_HOST;
  const appName = "profileList";
  const containerId = `${appName}-container`;
  const scriptId = Microfrontend.generateScriptId(appName);

  function handleProfileClick(profile) {
    console.log(`profile clicked with id ${profile.id}`);
    history.push("/profileDetails", { profileId: profile.id });
  }

  useEffect(() => {
    onInit();
  });

  function onInit() {
    if (Microfrontend.checkIfScriptLoaded(scriptId)) {
      renderProfileListApp();
    } else {
      Microfrontend.fetchRenderingScriptAndAppend(
        host,
        appName,
        scriptId,
        renderProfileListApp
      );
    }
  }

  function renderProfileListApp() {
    const functionName = Microfrontend.camelCase(`render ${appName}`);
    window[functionName](containerId, history, handleProfileClick);
  }

  return (
    <div>
      <h1>Profile List App</h1>
      <main id={containerId} />
    </div>
  );
}
