interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
}

class AnswerQuestionUseCase {
  execute({ instructorId, questionId }: AnswerQuestionUseCaseRequest) {
    
  }
}

new AnswerQuestionUseCase().execute({
  questionId: "1",
  instructorId: "2",
});
