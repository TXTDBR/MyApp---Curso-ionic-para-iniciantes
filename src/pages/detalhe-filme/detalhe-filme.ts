import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooveProvider } from '../../providers/moove/moove';

/**
 * Generated class for the DetalheFilmePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-filme',
  templateUrl: 'detalhe-filme.html',
  providers: [
    MooveProvider
  ]
})
export class DetalheFilmePage {
  public id;
  public filmeDetail:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private mooveProvider: MooveProvider) {
  this.id = navParams.get("id");
  }

  ionViewDidLoad() {
    this.mooveProvider.getDetailMoove(this.id).subscribe(
      data=>{
        const rs = (data as any);
        this.filmeDetail = rs;
        console.log(this.filmeDetail);
      }, error=>{
        console.log(error);
      }
    )
  }

}
