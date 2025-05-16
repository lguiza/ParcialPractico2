import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  @Input() animeDetail!: Anime;
  animes: Anime[] = []; 
season: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  getTotalSeasons(anime: Anime): number {
    return anime.seasons ? anime.seasons.length : 0;
  }

  getAverageRating(anime: Anime): number {

  if (!this.animes || this.animes.length === 0) return 0;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < this.animes.length; i++) {
    const rating = this.animes[i].Rating;
    if (rating !== undefined && rating !== null) {
      sum += Number(rating);
      count++;
    }
  }

  if (count === 0) return 0;

  return sum / count;

  }

  goBack() {
    this.location.back();
  }
}
