import { Entity } from "../../core/entities/entity.js";
import type { UniqueEntityId } from "../../core/entities/unique-entity-id.js";
import type { Optional } from "../../core/types/optional.js";
import { slug } from "./value-objects/slug.js";

interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  slug: slug;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  get authorId() {
    return this.props.authorId;
  }

  get questionId() {
    return this.props.bestAnswerId;
  }

  get content() {
    return this.props.title;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.content;
  }

  get isNew(): boolean {
    const ageInDays =
      (Date.now() - this.createdAt.getTime()) / (24 * 60 * 60 * 1000);
    return ageInDays <= 3;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }

  set title(title: string) {
    this.props.title = title;
    this.props.slug = slug.createFromText(title);
    this.touch();
  }
  static create(
    props: Optional<QuestionProps, "slug" | "createdAt">,
    id?: UniqueEntityId,
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id,
    );

    return question;
  }
}
