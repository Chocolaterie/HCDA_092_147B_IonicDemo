import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Movie } from '../movie';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-demo-film',
  templateUrl: './demo-film.page.html',
  styleUrls: ['./demo-film.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DemoFilmPage implements OnInit {

  public keyword = "";


  // les films à afficher
  public movies = Array<Movie>();

  constructor(private filmService: FilmService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  ngOnInit() {

  }

  /**
   * Ouvrir une Alert Box
   */
  public async showAlert() {
    // Creer une dialog box en mémoire
    const alert = await this.alertCtrl.create({
      header: "La soutenance",
      message: "Je vais pipoter ma soutenance ça passe crême",
      buttons: ["Non tu est folle", "A l'aise, petit billet"]
    });

    // afficher
    alert.present();
  }

  public async login() {
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

  /**
   * Rechercher films
   */
  public async searchMovie() {

    // Afficher le loading 
    const loading = await this.loadingCtrl.create({
      message: "Rechercher de films"
    });

    // ATTENTIOn : present pour afficher
    loading.present();

    // Je lance une promesse (tache asynchrone)
    this.filmService.search(this.keyword)
      .then(results => {
        this.movies = results;
      }).finally(() => {

        // Dans tout les cas (erreur ou non) je ferme le loading
        loading.dismiss();
      });
  }



}
