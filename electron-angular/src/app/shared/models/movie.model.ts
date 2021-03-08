export interface MovieDTO {
  title: string;
  year: number;
  director: string;
  poster: string;
  synopsis: string;
  rented: boolean;
}

export class Movie {
  public id: string;
  public title: string;
  public year: number;
  public director: string;
  public poster: string;
  public synopsis: string;
  public rented: boolean;

  constructor(
    {title, year, director, poster, synopsis, rented}: MovieDTO = {
      title: '',
      year: 0,
      director: '',
      poster: '',
      synopsis: '',
      rented: false,
    },
  ) {
    this.id = Movie.uuidv4();
    this.title = title;
    this.year = year;
    this.director = director;
    this.poster = poster;
    this.synopsis = synopsis;
    this.rented = rented;
  }

  static uuidv4(): string {
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
      /[018]/g,
      (c: number) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16),
    );
  }

  /*   generateId(): number {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  } */
}
