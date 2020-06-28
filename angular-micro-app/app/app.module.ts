import "@angular/platform-browser";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing";
import { NgModule, DoBootstrap, ApplicationRef } from "@angular/core";
import { AppService } from "./app.service";
import { ProfileDetailsComponent } from "./pages/profile-details.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [ProfileDetailsComponent],
  imports: [BrowserModule],
  providers: [AppService],
  bootstrap:[ProfileDetailsComponent]
})
export class AppModule {

}
