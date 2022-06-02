import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenres} from "../../../models/genres.interface";
import gendersBaseURL, {api} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {
    console.log(this.getGenres())
  }

  getGenres(): Observable<IGenres[]> {

    return this.http.get<IGenres[]>(gendersBaseURL + api.genresAPI)
  }
}
