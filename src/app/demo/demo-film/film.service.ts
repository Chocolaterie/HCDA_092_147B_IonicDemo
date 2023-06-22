import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // Les films en base
  public dbMovies = [
    new Movie("The Thing", "Pour les enfants"),
    new Movie("Les teletubbies", "Un film d'horreur avec un soleil qui parle"),
    new Movie("Les stagiaires de l'ENI", "Un film d'horreur, des stagiaires deviennent foux et met le feu aux etablissement à cause de Android Studio"),
  ];

  constructor(private httpClient : HttpClient) { }

  public search(keyword: String) : Observable<any> {
    return this.httpClient
    .get("https://raw.githubusercontent.com/Chocolaterie/EniWebService/main/api/movies.json")
    .pipe(
      map((movies : any) => movies.filter((movie : Movie) => movie.title === keyword)
      )
    );
  }
}
