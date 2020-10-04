import { Hasher } from '@/data/protocols/cryptography/hasher'

export class HasherSpy implements Hasher {
  digest = 'any_digest'
  plaintext: string

  async hash (plaintext: string): Promise<string> {
    this.plaintext = plaintext
    return this.digest
  }
}
