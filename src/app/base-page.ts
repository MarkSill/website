import { Input } from '@angular/core';

export class BasePage {
  @Input('pageTitle') title: string;
}
