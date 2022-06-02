import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre} from "../../../models/genres.interface";
import gendersBaseURL, {api} from "../../../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) {
  }

  getGenres(): Observable<IGenre> {
    return this.http.get<IGenre>(gendersBaseURL + api.genresAPI)
  }
}
