import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Movie} from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  form!: FormGroup;

  @Input() movie: Movie = {} as Movie;
  @Output() onsave: EventEmitter<any> = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      director: ['', Validators.required],
      poster: ['', Validators.required],
      synopsis: ['', Validators.required],
    });
  }

  save() {
    const movie = {
      ...this.form.value,
    };
    this.onsave.emit(movie);
  }
}
