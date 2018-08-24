import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-destalhes-atividade',
  templateUrl: './destalhes-atividade.component.html',
  styleUrls: ['./destalhes-atividade.component.scss']
})
export class DestalhesAtividadeComponent implements OnInit {
  dtactivityObj: object = {};
  dtactivity;
  events;
  id: number;

  constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
  ) { }

  listDetalhesActivity = function() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://sciec.test/org/event/activity/show/'+id).subscribe(      
        (res: Response) => {
            this.dtactivity = res.json();
            console.log(this.dtactivity.data);
        }

    );

};

listEvents = function() {
  let id = +this.route.snapshot.paramMap.get('id');
  this.http.get('http://sciec.test/org/event/show/'+id).subscribe(
      (res: Response) => {
              this.events = res.json();
              console.log(this.events.data);
      },
  );

};

deleteActivity = function(dtevents) {
  this.dtactivityObj = {
      'status': 0,

  };
    let id = +this.route.snapshot.paramMap.get('id');
      this.http.post('http://sciec.test/org/event/activity/delete/'+id, this.dtactivityObj).subscribe(
          (res: Response) => {
          console.log(res);                          
      });
      this.router.navigate(['/detalhes-evento/'+id]);           
    };

  ngOnInit() {
    this.listDetalhesActivity();
    this.listEvents();
  }

}
