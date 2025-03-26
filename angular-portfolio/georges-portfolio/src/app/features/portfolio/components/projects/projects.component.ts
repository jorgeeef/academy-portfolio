import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects.service';
import { IProject } from './projects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: IProject[] = [];
  filteredProjects: IProject[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.fetchProjects().subscribe(data => {
      this.projects = data;
      this.filteredProjects = [...this.projects]; 
    });
  }
}
