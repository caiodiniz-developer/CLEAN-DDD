class Answer {
  constructor(
    public instructorId: string,
    public questionId: string,
  ) {}
}

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
}

class AnswerQuestionUseCase {
  execute({ instructorId, questionId }: AnswerQuestionUseCaseRequest): Answer {
    const answer = new Answer(instructorId, questionId);

    return answer;
  }
}

new AnswerQuestionUseCase().execute({
  questionId: "1",
  instructorId: "2",
});
