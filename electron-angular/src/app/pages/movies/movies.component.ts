import {Component, OnInit} from '@angular/core';
import {MovieService} from 'src/app/services/movie.service';
import {Movie} from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.findAll();
    console.log(this.movies);
  }
}
