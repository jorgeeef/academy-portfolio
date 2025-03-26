import { Routes } from '@angular/router';
import { ProjectsComponent } from './features/portfolio/components/projects/projects.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent }, 
  { path: '**', redirectTo: 'projects' }
];
