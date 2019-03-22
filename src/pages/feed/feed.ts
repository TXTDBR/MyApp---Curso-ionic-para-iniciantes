import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MooveProvider } from '../../providers/moove/moove';
import { DetalheFilmePage } from '../detalhe-filme/detalhe-filme';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MooveProvider
  ]
})
export class FeedPage {
  public filmes:any = [];
  public nomeUsuario:string = "Charles França do Code";

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private mooveProvider: MooveProvider
     ) {
  }

  test(id){
    console.log(id);
  }
  ionViewDidLoad() {
    this.mooveProvider.getLatesMoove().subscribe(
      data=>{
        const rs = (data as any);
        this.filmes = rs.results;
      }, error=>{
        console.log(error);
      }
    )   
  }

  //metodo para passar parametros entre classes
  pushPage(id){
    this.navCtrl.push(DetalheFilmePage,{
      id: `${id}`
    });
  }
}
