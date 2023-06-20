import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
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

  constructor(private alertCtrl : AlertController, private loadingCtrl : LoadingController) { }

  ngOnInit() {

  }

  /**
   * Ouvrir une Alert Box
   */
  public async showAlert(){
    // Creer une dialog box en mémoire
    const alert = await this.alertCtrl.create({
      header: "La soutenance",
      message: "Je vais pipoter ma soutenance ça passe crême",
      buttons: ["Non tu est folle", "A l'aise, petit billet"]
    });

    // afficher
    alert.present();
  }

  public async login(){
    // Afficher le loading 
    const loading = await this.loadingCtrl.create({
      message: "Connexion en cours"
    });

    // ATTENTIOn : present pour afficher
    loading.present();

    // Appeler web service qui dure x Temps (callback appelé aprés les x secondes en parametre)
    setTimeout(() => {
        // Quand le web service terminé => fermer le loading
        loading.dismiss();
    }, 2000);
 
  }

  public onSelect(e : any){
    // alert("test");
    console.log("qsdlsqmldsqdsqd");
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
