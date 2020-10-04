import { Hasher } from '@/data/protocols/cryptography/hasher'
import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { AccountModel } from '@/domain/models/account'
import { AddAccount, AddAccountParams } from '@/domain/usecases/account/add-account'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccount: AddAccountRepository
  ) {}

  async add (account: AddAccountParams): Promise<AccountModel> {
    const hashedPassword = await this.hasher.hash(account.password)
    const newAccount = await this.addAccount.add((Object.assign({}, account, { password: hashedPassword })))
    return newAccount
  }
}
