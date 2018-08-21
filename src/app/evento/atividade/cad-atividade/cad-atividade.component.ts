import { AtividadeComponent } from './../atividade.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-atividade',
  templateUrl: './cad-atividade.component.html',
  styleUrls: ['./cad-atividade.component.scss']
})
export class CadAtividadeComponent implements OnInit {

  atividadeObj: object = {};
  upAtividadeObj: object = {};
  atividades = [];
  id: number;
  institution = [];

  constructor(
      private http: Http,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  listAtividade = function() {
      this.http.get('http://sciec.test/org/event/activity/index').subscribe(
          (res: Response) => {
              this.atividades = res.json();
              console.log(res);
          }
      );
  };

  addNewAtividade = function(atividade) {
      this.atividadeObj = {
          'nome': atividade.nome,
          'descricao': atividade.descricao,
          'local': atividade.local,
          'data_inicio': atividade.data_inicio,
          'data_conclusao': atividade.data_conclusao,
          'horas': atividade.horas,
          'qtd_inscritos': atividade.qtd_inscritos,
          'status': atividade.status,
          'type_activity_id': atividade.type_activity_id,
          'events_id': atividade.events_id,
      };
          this.http.post('http://sciec.test/org/event/activity/store', this.atividadeObj).subscribe(
              (res: Response) => {
              console.log(res);
              this.listAtividade();
              this.router.navigate(['/eventos']);
          });
  };

  ngOnInit() {
      this.listAtividade();    

  }

}
