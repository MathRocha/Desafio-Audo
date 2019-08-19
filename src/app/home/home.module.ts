import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { AlertModule } from '../alert/alert.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing-module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AlertModule,
    RouterModule,
    HomeRoutingModule,
    DragDropModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
