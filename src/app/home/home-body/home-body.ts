import { Input } from '@angular/core';
import { Exame } from 'src/app/app.service';

export class HomeBody {
  @Input() exame: Exame;

  downloadLaudo() {
    const link = document.createElement('a');
    link.download = 'laudo';
    link.href = 'assets/txt/laudo.txt';
    link.click();
  }

  downloadImagem() {
    const link = document.createElement('a');
    link.download = 'imagem';
    link.href = 'assets/img/download.jpg';
    link.click();
  }
}
