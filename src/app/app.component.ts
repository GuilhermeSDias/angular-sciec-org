import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Endereco} from "./endereco.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    /*private apiUrl = 'http://ip.jsontest.com/';*/
    /*private apiUrl = 'http://address-book-demo.herokuapp.com/api/contacts';*/
    private apiUrl = 'https://viacep.com.br/ws/01001000/json/';
    data: any = {};



    constructor(private http: Http) {
        console.log('Opa... Deus é Muito Bom!!!');
        this.getContacts();
        this.getData();
    }

    getData(){
        return this.http.get(this.apiUrl).map((res: Response) => res.json())
    }

    getContacts(){

        this.getData().subscribe(data => {
           console.log(data);
           this.data = data;
        });
    }

    ngOnInit(){
        /*/!*this.http.get ('http://www.transantiago.cl/restservice/rest/getrecorrido/503') .subscribe (data => {
            console.log (data);
        });*!/
        this.http.get ('http://ip.jsontest.com/') .subscribe (data => {
            console.log (data);
        });*/
    }

    isMap(){

    }
}
