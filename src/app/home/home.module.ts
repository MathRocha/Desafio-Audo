import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { AlertModule } from '../alert/alert.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing-module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeBodyMobileComponent } from './home-body/home-body-mobile/home-body-mobile.component';
import { HomeBodyDesktopComponent } from './home-body/home-body-desktop/home-body-desktop.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyMobileComponent,
    HomeBodyDesktopComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AlertModule,
    RouterModule,
    HomeRoutingModule,
    DragDropModule,
    MatExpansionModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
