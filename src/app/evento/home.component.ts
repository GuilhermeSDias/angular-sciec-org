import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private http: Http) { }
    eventObj: object = {};

    events = [];
    fetchData = function() {

        this.http.get('http://localhost:8000/admin/event/index').subscribe(
            (res: Response) => {
                this.events = res.json();
                console.log(this.events.data);
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
        this.http.post('http://localhost:8000/admin/event/store/', this.eventObj).subscribe((res: Response) => {
            console.log(res);
            this.fetchData();
        });
    };

  ngOnInit() {
      this.fetchData();

    }

}
