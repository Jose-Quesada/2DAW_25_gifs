import {  Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { GifsService } from '../../services/gifs.service';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'app-gifs-history',
  imports: [JsonPipe, GifsList],
  templateUrl: './gifs-history.html',
})
export default class GifsHistory {

  gifService = inject(GifsService)

  // query = inject(ActivatedRoute).params
  //   .subscribe(
  //     (data) => { console.log(data['query'])}
  //   )


   query = toSignal (
    inject(ActivatedRoute).params
    .pipe(map((params) => params['query']))
  )

  gifsByKey = computed( () => {
    return this.gifService.getHistoryGifs(this.query())
  })



}
