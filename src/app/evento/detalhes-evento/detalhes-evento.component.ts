import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})

export class DetalhesEventoComponent implements OnInit {
    dteventObj: object = {};
    dtevents;
    institution;

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

    deleteEvent = function() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.get('http://sciec.test/org/event/delete/'+id).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
                console.log(this.dtevents.data);
                this.router.navigate(['/eventos']);                
            }

        );

    };

  ngOnInit() {
      this.listDetalhesEvent();
      this.listInstitutions();
  }

}