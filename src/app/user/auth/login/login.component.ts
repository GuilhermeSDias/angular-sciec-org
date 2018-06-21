import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  f: FormGroup;

  constructor( private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
    })
  }

  onSubmit() {
      this.authService.login(this.f.value).subscribe(
          (data) => { console.log(data); }
      );
  }
}
