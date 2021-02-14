import { AddAccountRepository, LoadAccountByEmailRepository } from '@/data/protocols'
import { mockAddAccountResult } from '@/tests/domain/mocks'
import faker from 'faker'

export class AddAccountRepositorySpy implements AddAccountRepository {
  result = mockAddAccountResult()
  addAccountParams: AddAccountRepository.Params

  async add (data: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    this.addAccountParams = data
    return this.result
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  result = {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    password: faker.internet.password()
  }

  email: string

  async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
    this.email = email
    return this.result
  }
}
