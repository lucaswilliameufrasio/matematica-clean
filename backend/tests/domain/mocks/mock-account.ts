import { AddAccount } from '@/domain/usecases/add-account'
import faker from 'faker'

export const mockAddAccountParams = (): AddAccount.Params => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAddAccountResult = (): AddAccount.Result => ({
  accessToken: faker.random.uuid(),
  name: faker.name.findName()
})
