import { HasherSpy } from '@/data/test'
import { DbAddAccount } from './db-add-account'

describe('DbAddAccount UseCase', () => {
  test('Should call Hasher with correct password', async () => {
    const hasherSpy = new HasherSpy()
    const sut = new DbAddAccount(hasherSpy)
    const accountParams = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    }
    await sut.add(accountParams)

    expect(hasherSpy.plaintext).toBe(accountParams.password)
  })
})
