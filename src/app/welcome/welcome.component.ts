import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") == null) this.router.navigate(['/login']);
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

}
