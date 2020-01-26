import { Injectable               } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})

export class GithubService
{
  private headers:        HttpHeaders;
  private accessPointUrl: string = "https://api.github.com";

  constructor(private http: HttpClient) { this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }); }

  //GET
  public getPublicRepositories () { return this.http.get(this.accessPointUrl + '/users/grayengineering425/repos?access_token=4bf4cdd0d1d97135d535cd9f286e8891678ea322')};
}
