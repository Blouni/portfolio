import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [ColumnComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
