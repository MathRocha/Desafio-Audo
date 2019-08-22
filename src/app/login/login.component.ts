import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string;
  password: string;
  showAlert = false;
  alertMessage: string;

  constructor(private router: Router, private appService: AppService) {}

  realizarLogin(): void {
    this.appService.login(this.login, this.password).subscribe(
      result => {
        if (result[0]) {
          this.router.navigate(['/home', result[0].id]);
        } else {
          this.showAlert = true;
          this.alertMessage = 'Usuario ou senha incorretos';
          setTimeout(() => (this.showAlert = false), 5000);
        }
      },
      err => {
        console.log(err);
        this.showAlert = true;
        this.alertMessage = 'Erro ao se comunicar com o servidor';
        setTimeout(() => (this.showAlert = false), 5000);
      }
    );
  }
}
