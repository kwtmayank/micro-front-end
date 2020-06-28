import { Injectable } from "@angular/core";
import axios from 'axios';

@Injectable({'providedIn':'root'})
export class AppService{
    constructor(){

    }

    public async getUserDetails(userId:number){
        console.log('User id is '+userId);
        return await axios.get('http://localhost:3030/users/'+userId);
    }
    
    
}