import { Component, OnInit } from '@angular/core';
import {User} from "./auth/interface/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth/services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    user: User;

    constructor(private auth: AuthService, private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any>(`${environment.api_url}/auth/me`).subscribe(data => {
            this.user = data.user;
        });
    }

}
