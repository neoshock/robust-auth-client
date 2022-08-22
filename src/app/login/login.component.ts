import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {}
  public onErrorValidator: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  public login(): void {
    if (this.user.email != null && this.user.password != null
      && this.user.email != '' && this.user.password != '' && this.validateEmail(this.user.email)) {
      this.onErrorValidator = false;
      this._router.navigate(['/welcome']);
    } else {
      this.onErrorValidator = true;
    }
  }

  public validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public clearValidation(){
    this.onErrorValidator = false;
  }

}
