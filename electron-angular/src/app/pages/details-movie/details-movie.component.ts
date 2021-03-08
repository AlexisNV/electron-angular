import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {MovieService} from 'src/app/services/movie.service';
import {Movie} from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css'],
})
export class DetailsMovieComponent implements OnInit {
  movie$!: Observable<Movie>;

  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly route: Router,
  ) {}

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const selectedId = params.get('id');
        return this.movieService.findById(selectedId);
      }),
    );
  }

  rent(movieID: string, movie: Movie) {
    this.movieService.rent(movieID, movie);
  }

  remove(movieID: string) {
    this.movieService.delete(movieID);
    this.route.navigateByUrl('/movies');
  }
}
