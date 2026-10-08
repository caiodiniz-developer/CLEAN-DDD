import { UniqueEntityId } from '../../core/entities/unique-entity-id.js'
import { Answer } from '../forum/enterprise/entities/answer.js'
import type { AnswersRepository } from '../forum/application/repositories/answers-repository.js'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: Pick<AnswersRepository, 'create'>) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
