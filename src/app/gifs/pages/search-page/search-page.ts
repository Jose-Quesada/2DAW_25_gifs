import { Component } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'gifs-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  onSearch( query:string){
    console.log(query)
  }
 }
