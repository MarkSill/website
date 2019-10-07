import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

const baseTitle = 'marksill.dev';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  currentTitle: string = '';

  constructor(
    private titleService: Title,
  ) {
    // this.currentTitle = this.titleService.getTitle();
  }

  setTitle(title: string) {
    this.currentTitle = title;
    if (title) {
      this.titleService.setTitle(`${baseTitle} - ${title}`);
    } else {
      this.titleService.setTitle(baseTitle);
    }
  }
}
