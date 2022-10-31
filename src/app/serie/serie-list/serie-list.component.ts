import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  average: number = 0;

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) =>
    {
      this.series = series;
      let totalSeasons: number = 0;
      let numberOfSeries: number = 0;
      series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
        numberOfSeries++;
      });
      this.average = totalSeasons/numberOfSeries;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

}
