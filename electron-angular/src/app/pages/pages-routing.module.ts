import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';
import {MoviesComponent} from './movies/movies.component';
import {AddMoviesComponent} from './add-movies/add-movies.component';
import {DetailsMovieComponent} from './details-movie/details-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: MoviesComponent,
      },
      {
        path: 'add',
        component: AddMoviesComponent,
      },
      {
        path: ':id',
        component: DetailsMovieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
