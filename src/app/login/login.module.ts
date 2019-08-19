import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AlertModule } from '../alert/alert.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AlertModule, FormsModule, RouterModule],
  exports: [LoginComponent]
})
export class LoginModule {}
