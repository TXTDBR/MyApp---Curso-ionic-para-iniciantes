import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  public loader;
  public refresher;
  public isRefresher:boolean = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private mooveProvider: MooveProvider,
     public loadingCtrl: LoadingController) {
  }

  

  oPenLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }
 
    closeLoading(){
      this.loader.dismiss();
    }

    doRefresh(refresher) {
      this.refresher = refresher;
        this.isRefresher = true;
        this.carregarFilmes();
    }

  ionViewDidEnter() {
      this.carregarFilmes(); 
  }
  public carregarFilmes(){
    this.oPenLoading();
    this.mooveProvider.getLatesMoove().subscribe(
      data=>{
        const rs = (data as any);
        this.filmes = rs.results;
        console.log(this.filmes);
        this.closeLoading();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }
      }, error=>{
        console.log(error);
        this.closeLoading();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }
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
