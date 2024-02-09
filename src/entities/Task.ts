export class Task {
  readonly id: string;
  title: string;
  description: string;
  status: 'Do' | 'Done' | 'Finish';

  constructor(props: Task, id?: string) {
    this.id = id ?? crypto.randomUUID();
    this.title = props.title;
    this.description = props.description;
    this.status = props.status;
  }
}
