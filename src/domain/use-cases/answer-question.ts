import type { AnswerRepository } from "./../repositories/answers-repository.js";
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
      authorId: instructorId,
      questionId,
      content,
    });

    await this.AnswerRepository.create(answer);

    return answer;
  }
}
