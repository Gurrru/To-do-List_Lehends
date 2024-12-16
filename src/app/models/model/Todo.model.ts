export interface ToDo {
  id: number;
  title: string;
  description: string;
  category: string;
  done: boolean;
  createdAt: Date;
  completedAt?: Date;
}
