import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {getResponseURL} from "@angular/http/src/http_utils";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    routerParam: any;
    isLoggedIn = true;
    errorCredentiasl = false;
    eventObj: object = {};
    events = [];

    constructor(
        private http: Http,
    ) { }

    listEvents = function() {

        this.http.get('http://sciec.test/org/event/index').subscribe(
            (res: Response) => {
                this.events = res.json();
                console.log(this.events.data);
            },
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 500) {
                    this.errorCredentiasl = true;
                }
            }

        );

    };

    addNewEvent = function(event) {
        this.eventObj = {
            'nome': event.nome,
            'descricao': event.descricao,
            'local': event.local,
            'data_inicio': event.data_inicio,
            'data_conclusao': event.data_conclusao,
            'situacao': event.situacao,
            'status': event.status,
            'coordenador': event.coordenador,
        };
        this.http.post('http://sciec.test/org/event/store/', this.eventObj).subscribe((res: Response) => {
            console.log(res);
            this.listEvents();
        });
    };

  ngOnInit() {
      this.listEvents();
    }
}
