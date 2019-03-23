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
  public page = 1;
  public infiniteScroll;

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

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
      this.carregarFilmes(true);
   
  }
  
  public carregarFilmes(newPage:boolean = false){
    this.oPenLoading();
    this.mooveProvider.getLatesMoove(this.page).subscribe(
      data=>{
        const rs = (data as any);

        if(newPage){
          this.filmes = this.filmes.concat(rs.results);
          console.log(this.filmes);
           this.infiniteScroll.complete();
        }else{
          this.filmes = rs.results;
        }
        
        


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
