export interface Todo {
  id: number;
  title: string;
  description: string;
  type: 'To Do' | 'Doing' | 'Done';
}
