import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  f: FormGroup;
  errorCredentiasl = false;

  constructor( private formBuilder: FormBuilder,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
    })
  }

  onSubmit() {
      this.authService.login(this.f.value).subscribe(
          (resp) => {
                this.router.navigate(['eventos']);
              },
          (errorResponse: HttpErrorResponse) => {
              if (errorResponse.status === 401) {
                  this.errorCredentiasl = true;
              }
          }
      );
  }
}
