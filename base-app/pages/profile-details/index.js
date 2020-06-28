import React, { useState, useEffect } from "react";
import { Microfrontend } from "../../common";

export default function ProfileDetails({ history, location }) {
  const host = process.env.PROFILE_DETAILS_HOST;
  const appName = "profileDetails";
  const containerId = `${appName}-container`;
  const profileId = location.state.profileId;
  const scriptId = Microfrontend.generateScriptId(appName);

  useEffect(() => {
    onInit();
  });

  function onInit() {
    if (Microfrontend.checkIfScriptLoaded(scriptId)) {
      renderProfileDetailsApp();
    } else {
      Microfrontend.fetchRenderingScriptAndAppend(
        host,
        appName,
        scriptId,
        renderProfileDetailsApp
      );
    }
  }

  function renderProfileDetailsApp() {
    const functionName = Microfrontend.camelCase(`render ${appName}`);
    window[functionName](containerId);
  }

  return (
    <div>
      <h1>Profile Details App</h1>
      <main id={containerId} data-profile-id={profileId} />
    </div>
  );
}
