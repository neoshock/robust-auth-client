import { UserService } from './../services/user.service';
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
  public errorMessage: string = '';

  constructor(private _router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  public login(): void {
    if (this.user.email != null && this.user.password != null
      && this.user.email != '' && this.user.password != '' && this.validateEmail(this.user.email)) {
      this.userService.login(this.user).subscribe(
        (data: any) => {
          if (data.access_token) {
            this.userService.setUserToLocalStorage(data.access_token);
            this._router.navigate(['/welcome']);
          }
        }, error => {
          if (error.error.error) {
            this.errorMessage = error.error.message;
          }
        }
      )
    } else {
      this.onErrorValidator = true;
    }
  }

  public validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public clearValidation() {
    this.onErrorValidator = false;
    this.errorMessage = '';
  }

}
