import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Movie } from '../movie';

@Component({
  selector: 'app-demo-film',
  templateUrl: './demo-film.page.html',
  styleUrls: ['./demo-film.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DemoFilmPage implements OnInit {

  public keyword = "";

  // Les films en base
  public dbMovies = [
    new Movie("The Thing", "Pour les enfants"),
    new Movie("Les teletubbies", "Un film d'horreur avec un soleil qui parle"),
    new Movie("Les stagiaires de l'ENI", "Un film d'horreur, des stagiaires deviennent foux et met le feu aux etablissement à cause de Android Studio"),
  ];

  // les films à afficher
  public movies = Array<Movie>();

  constructor() { }

  ngOnInit() {
  }

  public searchMovie(){
    let results = [];

    // On parcours la liste des films
    for (let movie of this.dbMovies ){
      // Si le titre du film coresspond avec le input alors c'est bon
      if (movie.title! == this.keyword){
        results.push(movie);
      }
    }

    // Mettre à jour les films à afficher
    this.movies = results;
  }

}
