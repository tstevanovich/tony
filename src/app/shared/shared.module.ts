import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderbyPipe } from '@app/shared/pipes/orderby.pipe';

@NgModule({
  // modules
  imports: [CommonModule, ReactiveFormsModule],
  // components, directives, pipes
  declarations: [OrderbyPipe],
  // modules & components, directives, pipes
  exports: [CommonModule, ReactiveFormsModule, OrderbyPipe]
})
export class SharedModule {}
