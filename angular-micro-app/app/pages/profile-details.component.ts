import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  templateUrl: "./profile-details.html",
  encapsulation: ViewEncapsulation.Emulated,
  styles: [require("./profile-details.scss").toString()],
  selector: "main",
})
export class ProfileDetailsComponent implements OnInit {
  private profile: any = null;
  ngOnInit() {
    this.getUserInfo(this.appService.getUserId());
  }

  async getUserInfo(id: string) {
    const userData = await this.appService.getUserDetails(id);
    this.profile = userData.data;
  }

  constructor(private appService: AppService) {}
}
