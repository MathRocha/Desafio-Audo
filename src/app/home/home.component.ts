import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  exames = [];

  ngOnInit() {
    this.exames = [
      {
        dia: 'Hoje',
        data: '1 Fev',
        medico: 'Dr. Marcos',
        exame: 'Teleperfil Em Celalostalo Com Traçado',
        show: false
      },
      {
        dia: 'Hoje',
        data: '1 Fev',
        medico: 'Dr. Marcos',
        exame: 'Teleperfil Em Celalostalo Com Traçado',
        show: false
      },
      {
        dia: 'Hoje',
        data: '1 Fev',
        medico: 'Dr. Marcos',
        exame: 'Teleperfil Em Celalostalo Com Traçado',
        show: false
      },
      {
        dia: 'Hoje',
        data: '1 Fev',
        medico: 'Dr. Marcos',
        exame: 'Teleperfil Em Celalostalo Com Traçado',
        show: false
      },
      {
        dia: 'Hoje',
        data: '1 Fev',
        medico: 'Dr. Marcos',
        exame: 'Teleperfil Em Celalostalo Com Traçado',
        show: false
      }
    ];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.exames, event.previousIndex, event.currentIndex);
  }
}
