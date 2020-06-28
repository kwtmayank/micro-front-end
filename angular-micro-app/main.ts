import "reflect-metadata";
import "zone.js/dist/zone";
// Angular
import "@angular/common";
import "@angular/core";
import "@angular/platform-browser";
import "@angular/platform-browser-dynamic";
import "@angular/router";

// RxJS
import "rxjs";

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

declare global {
  interface Window {
    renderProfileDetails: any;
  }
}

export class AppConfig {
  containerId: string;
  profileId: string;
}

window.renderProfileDetails = function (
  containerId: string,
  profileId: string
) {
  let appConfig = new AppConfig();
  appConfig.containerId = containerId;
  appConfig.profileId = profileId;
  platformBrowserDynamic([{ provide: "appConfig", useValue: appConfig }])
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
};
