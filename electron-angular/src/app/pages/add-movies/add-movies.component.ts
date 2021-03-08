import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MovieService} from 'src/app/services/movie.service';
import {Movie} from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css'],
})
export class AddMoviesComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private readonly route: Router,
  ) {}

  ngOnInit(): void {}

  save(movie: Movie) {
    this.movieService.add(movie);
    this.route.navigateByUrl('/movies');
  }
}
