import { Component, ViewEncapsulation, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  templateUrl: "./profile-details.html",
  encapsulation: ViewEncapsulation.Emulated,
  styles: [require("./profile-details.scss").toString()],
  selector:"main"
})
export class ProfileDetailsComponent implements OnInit {

  private profile:any = null;
  ngOnInit() {
     let isVal = this.elm.nativeElement.getAttribute("data-profile-id"); 
     this.getUserInfo(isVal);
  }


  async getUserInfo(id:string){
   const userData =  await this.appService.getUserDetails(id);
   this.profile = userData.data;
  }

  constructor(private appService: AppService, private elm: ElementRef) {}
}
