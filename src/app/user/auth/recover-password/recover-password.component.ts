import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  constructor(private http: Http) { }
    resetObj: object = {};

    resetPassword = function(user) {
        this.resetObj = {
            'email': user.email,
        };

        this.http.post('http://localhost:8000/password/email', this.resetObj).subscribe((res: Response) => {
            console.log( this.resetObj);
        });
    };


    ngOnInit() {


    }

}
