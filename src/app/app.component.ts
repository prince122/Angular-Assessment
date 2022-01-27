import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cp: number = 1;
  public ItemPerPage: number = 10;
  public totalItem: number = 0;
  DisableNext: boolean = false;
  public word;
  public ColorData = [];
  constructor(public GlobalService_: GlobalService) {

  }

  Search(key): void {
    if( key != '' )
    {
    this.GlobalService_.getSearchImage(key, this.cp).subscribe(
      data => {
        if (data != undefined) {
          this.ColorData = [];
          this.totalItem = data.total_results;
          for (let i = 0; i < data.photos.length; i++) {

            switch (i) {

              case 1: {
                this.ColorData.push({
                  'class': 'grid-item--width3 grid-item--height2',
                  'color': data.photos[i].avg_color
                })
                break;
              }
              case 2: {
                this.ColorData.push({
                  'class': 'grid-item--height3',
                  'color': data.photos[i].avg_color
                })
                break;
              }
              case 3: {
                this.ColorData.push({
                  'class': 'grid-item--height2',
                  'color': data.photos[i].avg_color
                })
                break;
              }
              case 4: {
                this.ColorData.push({
                  'class': 'grid-item--width2',
                  'color': data.photos[i].avg_color
                })
                break;
              }

              case 7: {
                this.ColorData.push({
                  'class': 'grid-item--height2',
                  'color': data.photos[i].avg_color
                })
                break;
              }

              case 7: {
                this.ColorData.push({
                  'class': 'grid-item--width2 grid-item--height3',
                  'color': data.photos[i].avg_color
                })
                break;
              }

              case 9: {
                this.ColorData.push({
                  'class': 'grid-item--height2',
                  'color': data.photos[i].avg_color
                })
                break;
              }
              default: {
                this.ColorData.push({
                  'class': 'grid-item',
                  'color': data.photos[i].avg_color
                })
                break;
              }

            }

          }
        }
      }
    )
  }
  else{
    this.totalItem = 0;
    this.ColorData = [];
  }
  }

  onRight(): void {

    if (this.cp <= this.totalItem) {
      this.Search(this.word)
    }
    else {
      this.DisableNext = true
    }

  }

  onLeft(): void {

    if (this.cp != 0) {
      this.Search(this.word)
    }
    else {

    }
  }

}
