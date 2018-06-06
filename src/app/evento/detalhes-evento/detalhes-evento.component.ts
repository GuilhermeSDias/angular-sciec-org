import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';


@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})
export class DetalhesEventoComponent implements OnInit {

    constructor(private http: Http) { }

    address = [];
    fetchData = function() {
        this.http.get("https://viacep.com.br/ws/01001000/json/").subscribe(
            (res: Response) => {
              this.address = res.json();

            }
        )
    }

  ngOnInit() {
      this.fetchData;
  }

}
