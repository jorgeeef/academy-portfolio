import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProject } from './projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsUrl = 'https://my-json-server.typicode.com/christyantoun/frontend-session/projects';

  constructor(private http: HttpClient) {}

  fetchProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl);
  }
}
