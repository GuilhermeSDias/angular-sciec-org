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
    institution;
    id:number;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
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

    listInstitutions = function() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.get('http://sciec.test/admin/config/institution/show/'+id).subscribe(
            (res: Response) => {
                this.institution = res.json();
                console.log(res);
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
      
      

  ngOnInit() {
      this.listDetalhesEvent();
  }

}