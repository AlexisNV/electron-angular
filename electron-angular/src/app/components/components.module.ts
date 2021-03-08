import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieFormComponent} from './movie-form/movie-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MovieFormComponent],
  exports: [MovieFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ComponentsModule {}
