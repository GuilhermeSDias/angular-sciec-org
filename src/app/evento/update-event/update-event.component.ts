import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  dteventObj: object = {};
  dtevents;

  constructor(   private http: Http,
    private route: ActivatedRoute) { }

  showEventForm = function() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8000/org/event/show/'+id).subscribe(
        (res: Response) => {
            this.dtevents = res.json();
            console.log(this.dtevents.data);
        }

    );

};

  ngOnInit() {

    this.showEventForm();
  }

}
