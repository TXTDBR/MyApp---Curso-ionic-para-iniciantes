import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooveProvider } from '../../providers/moove/moove';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MooveProvider
  ]
})
export class FeedPage {
  private endereco:any = {};
  public nomeUsuario:string = "Charles França do Code";

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private mooveProvider: MooveProvider
     ) {
  }


  ionViewDidLoad() {
    this.mooveProvider.getLatesMoove().subscribe(
      data=>{

        this.endereco = data
        console.log(this.endereco.complemento);
      }, error=>{
        console.log(error);
      }
    )   
  }
}
