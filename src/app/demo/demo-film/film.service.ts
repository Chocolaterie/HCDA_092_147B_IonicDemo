import { Injectable } from '@angular/core';
import { Movie } from './movie';

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

  constructor() { }

  public search(keyword: String): Promise<Array<Movie>> {
    return new Promise((resolve, reject) => {
      // Je simule un lag de 1 sec
      setTimeout(() => {
        // Preparer le resultat
        let results = [];

        // On parcours la liste des films
        for (let movie of this.dbMovies) {
          // Si le titre du film coresspond avec le input alors c'est bon
          if (movie.title! == keyword) {
            results.push(movie);
          }
        }

        // Retourner le resultat de la recherche
        resolve(results);
      }, 0)
      // Preparer le resultat
      // let results = [];

      // // On parcours la liste des films
      // for (let movie of this.dbMovies) {
      //   // Si le titre du film coresspond avec le input alors c'est bon
      //   if (movie.title! == keyword) {
      //     results.push(movie);
      //   }
      // }

      // // Retourner le resultat de la recherche
      // resolve(results);
    });
  }
}
