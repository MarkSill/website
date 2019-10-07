import { Component, OnInit, Input } from '@angular/core';
import { PageService } from 'src/app/service/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(
    private pageService: PageService,
  ) { }

  ngOnInit() {
    this.title = this.pageService.currentTitle;
  }

}
