import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  loadTrendingGifs(){

    this.http.get(`${environment.giphyURL}/gifs/trending`,{
      params:{
        api_key:environment.giphyApiKey,
        limit:25,
      }
    })

  }

}
