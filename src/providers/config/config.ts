import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProvider {

  constructor() {
  }

  getPerfil():any {
    return localStorage.getItem("config");
  }

  setPerfil(perfil?: boolean) {

    let config = {
      slideShow: false
    }

    if(perfil){
      config.slideShow = perfil;
    }

    localStorage.setItem("config", JSON.stringify(config));
  }
}
