import "@angular/platform-browser";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing";
import { NgModule, Inject } from "@angular/core";
import { AppService } from "./app.service";
import { ProfileDetailsComponent } from "./pages/profile-details.component";
import { AppComponent } from "./app.component";
import { AppConfig } from "../main";

@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap: [ProfileDetailsComponent],
})
export class AppModule {
  constructor(
    @Inject("appConfig") private appConfig: AppConfig,
    private appService: AppService
  ) {
    console.log(appConfig);
    appService.setUserId(appConfig.profileId);
  }
}
