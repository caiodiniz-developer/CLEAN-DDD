interface QuestionProps {
  title: string;
  authorId: string;
  content: string;
}

export class Question {
  public title: string;
  public content: string;
  public id: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
