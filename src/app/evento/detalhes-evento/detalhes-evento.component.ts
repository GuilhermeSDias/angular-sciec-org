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

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log(this.route.snapshot.paramMap.get('id'))
    }

    listDetalhesEvent = function() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.get('http://localhost:8000/org/event/show/'+id).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
                console.log(this.dtevents.data);
            }

        );

    };

    DeleteEvent = function() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.http.get('http://localhost:8000/org/event/delete/'+id).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
                console.log(this.dtevents.data);
                this.router.navigate(['/eventos']);                
            }

        );

    };

  ngOnInit() {
      this.listDetalhesEvent();
  }

}