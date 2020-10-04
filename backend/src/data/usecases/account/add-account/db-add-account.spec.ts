import { HasherSpy } from '@/data/test'
import { mockAccountModel } from '@/domain/test'
import { DbAddAccount } from './db-add-account'

describe('DbAddAccount UseCase', () => {
  test('Should call Hasher with correct password', async () => {
    const hasherSpy = new HasherSpy()
    const sut = new DbAddAccount(hasherSpy)
    const accountParams = mockAccountModel()
    await sut.add(accountParams)

    expect(hasherSpy.plaintext).toBe(accountParams.password)
  })
})
