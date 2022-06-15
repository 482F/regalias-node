import { describe, expect, it } from 'vitest'
import regalias from './index.mjs'

describe('regalias', () => {
  it('random', () => {
    const firstAlias = regalias()
    const secondAlias = regalias()
    expect(firstAlias).not.toBe(secondAlias)
  })

  it('seed', () => {
    const alias = regalias('seed')
    expect(alias).toBe('スレイブシャイン')
  })
})
