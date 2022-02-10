import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import{ User } from '../models/user'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class USApiService{
    constructor(private http: HttpClient) {}
    rootURL = environment.bgApiRootUrl;
    getUsers() : Promise<User[]>{
        return firstValueFrom(this.http.get<User[]>(this.rootURL + "/User"))
    }
    createNewUser(us: User){
        return firstValueFrom(this.http.post(this.rootURL + "/User", us))
    }
}