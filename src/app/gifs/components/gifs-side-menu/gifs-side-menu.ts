import { Component } from '@angular/core';
import { GifsSideMenuHeader } from "./gifs-side-menu-header/gifs-side-menu-header";
import { GifsSideMenuOption } from "./gifs-side-menu-option/gifs-side-menu-option";

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOption],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu { }
