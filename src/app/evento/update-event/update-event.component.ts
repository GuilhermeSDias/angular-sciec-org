import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  upeventObj: object = {};
  upevents;
  institution = [];

  constructor(   
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  showEventForm = function() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/org/event/show/'+id).subscribe(
        (res: Response) => {
            this.upevents = res.json();
            console.log(this.upevents.data);
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

updateEvent = function(upEvent) {
  this.upeventObj = {
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
      this.http.post('http://localhost:8000/org/event/update/'+id, this.upeventObj).subscribe((res: Response) => {
          console.log(res);
          this.showEventForm();
          this.router.navigate(['/detalhes-evento/'+id]);
      });
    };

  ngOnInit() {
    this.showEventForm();
    this.listInstitutions();
  }

}
