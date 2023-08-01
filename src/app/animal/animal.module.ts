import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    AnimalComponent
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }
