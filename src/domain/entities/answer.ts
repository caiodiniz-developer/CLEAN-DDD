export interface QuestionProps {
  content: string;
  id?: string;
}

export class Question {
  public id: string;
  public content: string;

  constructor(props: QuestionProps) {
    this.content = props.content;
    this.id = props.id ?? globalThis.crypto.randomUUID();
  }
}
