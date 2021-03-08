import {Injectable} from '@angular/core';
import {Movie} from '../shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: Movie[] = [
    {
      id: 'cda22928-de8f-458e-a3ba-e0d712e47624',
      title: 'El Padrino',
      year: 1972,
      director: 'Francis Ford Coppola',
      poster:
        'http://es.web.img3.acsta.net/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27',
      rented: false,
      synopsis:
        "América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.",
    },
    {
      id: 'cda22928-de8f-458e-a3ba-e0d712e47623',
      title: 'Gremlins',
      year: 1984,
      director: 'Joe Dante',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbj7x6PMzscO_IKIApKqQrhsMDz1yfm7PVr0cy2Fw46OnWIyw',
      rented: true,
      synopsis:
        'Rand (Hoyt Axton) es un viajante que un día regala a su hijo Billy (Zach Galligan) una tierna y extraña criatura, un mogwai. El inocente regalo, sin embargo, será el origen de toda una ola de gamberradas y fechorías en un pequeño pueblo de Estados Unidos. Todo empieza cuando son infringidas, una tras otra, las tres reglas básicas que deben seguirse para cuidar a un mogwai: no darle de comer después de medianoche, no mojarlo y evitar que le dé la luz del sol.',
    },
  ];

  constructor() {}

  findAll(): Movie[] {
    return this.movies;
  }

  findById(movieID: String | null): Movie[] {
    return this.movies.filter(movie => movie.id === movieID);
  }

  add(movie: Movie) {
    this.movies.push(new Movie(movie));
  }

  rent(movieID: string, movie: Movie) {
    const movieToRent = this.movies.find(movie => movie.id === movieID);
    if (!movieToRent) {
      throw new Error('ERROR: Película no encontrada');
    }
    if (!movieToRent.rented) {
      movie.rented = true;
    } else {
      movie.rented = false;
    }
  }

  delete(movieID: string) {
    this.movies = this.movies.filter(movie => movie.id !== movieID);
  }
}
