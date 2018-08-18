import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cad-evento',
  templateUrl: './cad-evento.component.html',
  styleUrls: ['./cad-evento.component.scss']
})
export class CadEventoComponent implements OnInit {
    eventObj: object = {};
    upEventObj: object = {};
    events = [];
    id: number;

    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    listEvent = function() {
        this.http.get('http://sciec.test/admin/event/index').subscribe(
            (res: Response) => {
                this.events = res.json();
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
            'institutions_id': event.institutions_id,
            'coordenador': event.coordenador,
        };
            this.http.post('http://sciec.test/org/event/store', this.eventObj).subscribe((res: Response) => {
                console.log(res);
                this.listEvent();
                this.router.navigate(['/dashboard']);
            });
    };

    ngOnInit() {
        this.listEvent();

    }

}
