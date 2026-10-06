import { Entity } from "../../core/entities/entity.js";
import type { slug } from "./value-objects/slug.js";

interface QuestionProps {
  title: string;
  slug: slug;
  authorId: string;
  content: string;
}

export class Question extends Entity<QuestionProps> {
}
