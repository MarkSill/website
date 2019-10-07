import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const components = [
  HeaderComponent,
];
const modules = [
  CommonModule,
  FormsModule,
  IonicModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
