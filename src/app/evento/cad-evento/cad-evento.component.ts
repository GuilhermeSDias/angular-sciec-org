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
    institution = [];

    constructor(
        private http: Http,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    listEvent = function() {
        this.http.get('http://localhost:8000/admin/event/index').subscribe(
            (res: Response) => {
                this.events = res.json();
                
            }
        );
    };

    listInstitutions = function() {
        this.http.get('http://localhost:8000/admin/config/institution/index').subscribe(
            (res: Response) => {
                this.institution = res.json();
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
            this.http.post('http://localhost:8000/org/event/store', this.eventObj).subscribe((res: Response) => {
                console.log(res);
                this.listEvent();
                this.router.navigate(['/eventos']);
            });
    };

    ngOnInit() {
        this.listEvent();
        this.listInstitutions();

    }

}
