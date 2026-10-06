import type { AnswerRepository } from "./../repositories/answers-repository.js";
import { UniqueEntityId } from "../../core/entities/unique-entity-id.js";
import { Answer } from "../entities/answer.js";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private AnswerRepository: AnswerRepository) {}
  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
      createdAt: new Date(),
    });

    await this.AnswerRepository.create(answer);

    return answer;
  }
}
