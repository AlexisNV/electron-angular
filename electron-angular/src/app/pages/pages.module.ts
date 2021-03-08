import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

import {PagesComponent} from './pages.component';
import {MoviesComponent} from './movies/movies.component';
import {AddMoviesComponent} from './add-movies/add-movies.component';
import {ComponentsModule} from '../components/components.module';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

@NgModule({
  declarations: [PagesComponent, MoviesComponent, AddMoviesComponent, DetailsMovieComponent],
  imports: [CommonModule, RouterModule, SharedModule, ComponentsModule],
})
export class PagesModule {}
