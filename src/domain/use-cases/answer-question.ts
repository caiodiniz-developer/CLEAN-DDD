import { Answer } from "../entities/answer.js";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
}

class AnswerQuestionUseCase {
  execute({ instructorId, questionId }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer();
  }
}

new AnswerQuestionUseCase().execute({
  questionId: "1",
  instructorId: "2",
});
