import { Injectable } from "@angular/core";
import axios from 'axios';

@Injectable({ providedIn: "root" })
export class AppService {
  private userId: string;

  constructor() {}

  public async getUserDetails(userId: string) {
    console.log("User id is " + userId);
    return await axios.get("http://localhost:3030/users/" + userId);
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getUserId() {
    return this.userId;
  }
}