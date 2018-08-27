import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gerenciar-eventos',
  templateUrl: './gerenciar-eventos.component.html',
  styleUrls: ['./gerenciar-eventos.component.scss']
})
export class GerenciarEventosComponent implements OnInit {  
    eventObj: object = {};
    events;
    activity;
    id:number;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) {}

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

    deleteEvent = function(events) {
        this.eventObj = {
            'status': 0,

        };
        let id = +this.route.snapshot.paramMap.get('id');
            this.http.post('http://sciec.test/org/event/delete/'+id, this.eventObj).subscribe(
                (res: Response) => {
                console.log(res);                                
            });                      
          };
    
    abrirEvent = function(events) {
                this.eventObj = {
                    'status': 1,
        
                };
                let id = +this.route.snapshot.paramMap.get('id');
                    this.http.post('http://sciec.test/org/event/situacao/'+id, this.eventObj).subscribe(
                        (res: Response) => {
                        console.log(res);                                
                    });                      
                  };

    fecharEvent = function(events) {
                    this.eventObj = {
                        'status': 2,
            
                    };
                    let id = +this.route.snapshot.paramMap.get('id');
                        this.http.post('http://sciec.test/org/event/situacao/'+id, this.eventObj).subscribe(
                            (res: Response) => {
                            console.log(res);                                
                        });                      
                      };

    concluiEvent = function(events) {
                        this.eventObj = {
                            'status': 3,
                
                        };
                        let id = +this.route.snapshot.paramMap.get('id');
                            this.http.post('http://sciec.test/org/event/situacao/'+id, this.eventObj).subscribe(
                                (res: Response) => {
                                console.log(res);                                
                            });                      
                          };

    activeEvent = function(events) {
        this.eventObj = {
            'status': 1,
    
        };
        let id = +this.route.snapshot.paramMap.get('id');
            this.http.post('http://sciec.test/org/event/ativar/'+id, this.eventObj).subscribe(
                (res: Response) => {
                console.log(res);                
            });                      
          };

  ngOnInit() {
      this.listEvents();    
  }

}
