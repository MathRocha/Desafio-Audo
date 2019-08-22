import { Input, Output, EventEmitter } from '@angular/core';
import { Exame } from 'src/app/app.service';

export class HomeBody {
  @Input() exame: Exame;
  @Output() emitShow = new EventEmitter();

  downloadLaudo(): void {
    const link = document.createElement('a');
    link.download = 'laudo';
    link.href = 'assets/txt/laudo.txt';
    link.click();
  }

  downloadImagem(): void {
    const link = document.createElement('a');
    link.download = 'imagem';
    link.href = 'assets/img/download.jpg';
    link.click();
  }

  exameClicked(show: boolean): void {
    this.exame.show = show;
    this.emitShow.emit(this.exame.show);
  }
}
