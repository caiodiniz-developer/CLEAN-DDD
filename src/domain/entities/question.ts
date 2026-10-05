import type { slug } from "./value-objects/slug.js";

interface QuestionProps {
  title: string;
  slug: slug;
  authorId: string;
  content: string;
}

export class Question {
  public title: string;
  public content: string;
  public slug: slug;
  public id: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.slug = props.slug;
    this.authorId = props.authorId;
    this.id = id ?? globalThis.crypto.randomUUID();
  }
}
