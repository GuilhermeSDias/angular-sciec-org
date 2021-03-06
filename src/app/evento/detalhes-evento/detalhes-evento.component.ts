import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})

export class DetalhesEventoComponent implements OnInit {
    dteventObj: object = {};
    dtevents;
    activity;
    id:number;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) {
        
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

    listActivity = function() {
        // let id = +this.route.snapshot.paramMap.get('id');
        // this.http.get('http://sciec.test/org/event/activity/show/'+id).subscribe(             
        this.http.get('http://sciec.test/org/event/activity/index/').subscribe(
            (res: Response) => {
                this.activity = res.json();
                console.log(this.activity.data);
            }
        );
    };

    deleteEvent = function(dtevents) {
        this.dteventObj = {
            'status': 0,

        };
        let id = +this.route.snapshot.paramMap.get('id');
            this.http.post('http://sciec.test/org/event/delete/'+id, this.dteventObj).subscribe(
                (res: Response) => {
                console.log(res);                
                // this.showEventForm();
            });
            this.router.navigate(['/eventos']);           
          };

          activeEvent = function(dtevents) {
            this.dteventObj = {
                'status': 1,
    
            };
            let id = +this.route.snapshot.paramMap.get('id');
                this.http.post('http://sciec.test/org/event/active/'+id, this.dteventObj).subscribe(
                    (res: Response) => {
                    console.log(res);                
                    // this.showEventForm();
                });
                this.router.navigate(['/eventos']);           
              };

              concluiEvent = function(dtevents) {
                this.dteventObj = {
                    'status': 3,
        
                };
                let id = +this.route.snapshot.paramMap.get('id');
                    this.http.post('http://sciec.test/org/event/situacao/'+id, this.dteventObj).subscribe(
                        (res: Response) => {
                        console.log(res);                                
                    this.router.navigate(['/detalhes-evento/'+id]);
                    });                                      
                  };

  ngOnInit() {
      this.listDetalhesEvent();
      this.listActivity();
  }

}