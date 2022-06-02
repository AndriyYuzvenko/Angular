import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenres} from "../../../models/genres.interface";
import {GenresService} from "../genres-services/genres.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
genress:IGenres[]
  constructor(private activatedRoute:ActivatedRoute,private genresService:GenresService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({genresData}) => console.log(genresData))
  }

}
