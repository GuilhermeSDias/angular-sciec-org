import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-controle-frequencia',
  templateUrl: './controle-frequencia.component.html',
  styleUrls: ['./controle-frequencia.component.scss']
})
export class ControleFrequenciaComponent implements OnInit {
  users = [];
  userObj: object = {};

  constructor(
    private http: Http,
  ) { }
  
  listUsers = function() {
    this.http.get('http://sciec.test/admin/user/index').subscribe(
        (res: Response) => {
            this.users = res.json();  
            console.log(res);
        }
    );
};

  ngOnInit() {
    this.listUsers();
  }

}
