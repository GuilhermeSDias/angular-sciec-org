import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gerenciar-eventos',
  templateUrl: './gerenciar-eventos.component.html',
  styleUrls: ['./gerenciar-eventos.component.scss']
})
export class GerenciarEventosComponent implements OnInit {
  routerParam: any;
  isLoggedIn = true;
  errorCredentiasl = false;
  eventObj: object = {};
  events;
  dtevents;
  id:number;

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

  listDetalhesEvent = function() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://sciec.test/org/event/show/'+id).subscribe(
        (res: Response) => {
            this.dtevents = res.json();
            console.log(this.dtevents.data);
        }

    );

};

  activeEvent = function(dtevents) {
    this.dteventObj = {
        'status': 1,

    };
    let id = +this.route.snapshot.paramMap.get('id');
        this.http.post('http://sciec.test/org/event/delete/'+id, this.dteventObj).subscribe(
            (res: Response) => {
            console.log(res);                
            // this.showEventForm();
        });
        this.router.navigate(['/eventos']);           
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
