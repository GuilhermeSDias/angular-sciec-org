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

<<<<<<< HEAD
        this.http.get('http://localhost:8000/admin/event/index').subscribe(
=======
    listEvent = function() {
        this.http.get('http://sciec.test/admin/event/index').subscribe(
>>>>>>> 42d6bccc1c5f732504a59740fa9b1a08e987cd84
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

<<<<<<< HEAD
        this.http.post('http://localhost:8000/org/event/store', this.eventObj).subscribe((res: Response) => {
=======
    updateEvent = function(upEvent) {
        this.upEventObj = {
            'nome': upEvent.nome,
            'descricao': upEvent.descricao,
            'local': upEvent.local,
            'data_inicio': upEvent.data_inicio,
            'data_conclusao': upEvent.data_conclusao,
            'situacao': upEvent.situacao,
            'status': upEvent.status,
            'institutions_id': upEvent.institutions_id,
            'coordenador': upEvent.coordenador,
        };
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.post('http://sciec.test/org/event/update/'+id, this.upEventObj).subscribe((res: Response) => {
>>>>>>> 42d6bccc1c5f732504a59740fa9b1a08e987cd84
            console.log(res);
            this.listEvent();
            this.router.navigate(['/dashboard']);
        });
    };

    ngOnInit() {
        this.listEvent();

    }

}
