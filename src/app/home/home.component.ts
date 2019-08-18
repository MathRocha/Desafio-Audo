import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teste = [];

  ngOnInit() {
    this.teste = [
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
}
