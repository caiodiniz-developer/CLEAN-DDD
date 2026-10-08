import { expect, test } from 'vitest'
import type { Question } from '../../enterprise/entities/question.js'
import type { QuestionsRepository } from '../repositories/questions-repository.js'
import { CreateQuestionUseCase } from './create-question.js'

let savedQuestion: Question | undefined

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question) => {
    savedQuestion = question
  },
}

test('creates and saves a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)
  const question = await createQuestion.execute({
    authorId: '1',
    title: 'Pergunta nova',
    content: 'Conteudo da pergunta',
  })

  expect(question.question.content).toBe('Conteudo da pergunta')
  expect(savedQuestion).toBe(question.question)
})
