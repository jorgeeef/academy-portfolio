export interface IProject {
    id: number;
    title: string;
    categoryIds: number[];
    status: 'completed' | 'in-progress' | 'not-started';
    imageUrl: string;
  }
  