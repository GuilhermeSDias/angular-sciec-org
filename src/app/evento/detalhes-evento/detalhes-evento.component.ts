import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})

export class DetalhesEventoComponent implements OnInit {
    dteventObj: object = {};
    dtevents;

    constructor(
        private http: Http,
        private route: ActivatedRoute
    ) {
        console.log(this.route.snapshot.paramMap.get('id'))
    }

    listDetalhesEvent = function() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.get('http://sciec.test/org/event/show/'+id).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
                console.log(this.dtevents.data);
            }

        );

    };

    addNewDtEvent = function(dtevent) {
        this.dteventObj = {
            'nome': dtevent.nome,
            'descricao': dtevent.descricao,
            'local': dtevent.local,
            'data_inicio': dtevent.data_inicio,
            'data_conclusao': dtevent.data_conclusao,
            'situacao': dtevent.situacao,
            'status': dtevent.status,
            'coordenador': dtevent.coordenador,
        };
        this.http.post('http://sciec.test/org/event/store', this.dteventObj).subscribe((res: Response) => {
            console.log(res);
            this.fetchData();
        });
    };

  ngOnInit() {
      this.listDetalhesEvent();
  }

}