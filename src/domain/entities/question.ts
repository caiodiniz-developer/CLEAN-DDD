import { Entity } from "../../core/entities/entity.js";
import type { UniqueEntityId } from "../../core/entities/unique-entity-id.js";
import type { slug } from "./value-objects/slug.js";

interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  slug: slug;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {}
