import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;
  showAlert = false;

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {}

  realizarLogin() {
    this.appService.login(this.login, this.password).subscribe(
      result => {
        if (result[0]) {
          this.router.navigate(['/home', result[0].id]);
        } else {
          this.showAlert = true;
          setTimeout(() => (this.showAlert = false), 5000);
        }
      },
      err => console.log(err)
    );
  }
}
