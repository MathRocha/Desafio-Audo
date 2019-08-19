import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { AppService, User } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.getUser(this.activatedRoute.snapshot.params.id);
  }

  getUser(id: number) {
    this.appService.getCurrentUser(id).subscribe(
      result => {
        this.user = result[0];
      },
      err => console.log(err)
    );
  }

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.user.exames, event.previousIndex, event.currentIndex);
  }
}
