import { Component, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'gifs-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifs = signal<Gif[]>([])
  gifsService = inject(GifsService)

  onSearch( query:string){
    this.gifsService.searchGifs(query)
    .subscribe((resp)=>{
     this.gifs.set(resp)
    })

  }
 }
