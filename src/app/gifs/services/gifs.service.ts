import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){

    this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`,{
      params:{
        api_key:environment.giphyApiKey,
        limit:25,
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    })

  }

}
