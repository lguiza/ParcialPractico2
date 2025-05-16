import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  location: any;
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }

  ngOnInit() {
    this.getAnimes();
  }

  getTotalSeasons(anime: Anime): number {
    return anime.seasons ? anime.seasons.length : 0;
  }

  getAverageRating(): number {

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
