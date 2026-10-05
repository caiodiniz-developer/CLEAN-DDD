import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question.js";
import type { AnswerRepository } from "../repositories/answers-repository.js";
import type { Answer } from "../entities/answer.js";

const fakeAnswerRepository: AnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  },
};

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase({
    create: () => {},
  } as never);

  const answer = answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
