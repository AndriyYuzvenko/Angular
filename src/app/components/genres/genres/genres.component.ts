import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IGenres} from "../../../models/genres.interface";
import gendersBaseURL, {api} from "../../../urls/urls";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
genress:IGenres[]
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(gendersBaseURL + api.genresAPI)
    this.activatedRoute.data.subscribe(({genresData})=>console.log(this.genress=genresData))
  }

}
