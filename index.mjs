import { readFile } from 'node:fs/promises'
const data = JSON.parse(await readFile(new URL('./data.json', import.meta.url)))
const aux = ['の', '・オブ・', '・', 'ザ・']

import gen from 'random-seed'

export default function regalias(seed) {
  const rand = gen(seed)
  while (true) {
    const headIndice = { r: undefined, c: undefined }
    const tailIndice = { r: undefined, c: undefined }
    let alias = (() => {
      while (true) {
        headIndice.c = rand.range(data.length)
        const row = data[headIndice.c]
        headIndice.r = rand.range(row.length - 1)
        const alias = row[headIndice.r]
        if (alias) return alias
      }
    })()

    if ([0, 1].includes(headIndice.r)) {
      if (rand.range(10) < 1) {
        headIndice.r = 10
        alias = data[headIndice.c][headIndice.r]
      } else {
        alias += aux[0]
      }
    } else if ([10, 11].includes(headIndice.r)) {
      const r25 = rand.range(24)
      if (0 <= r25 && r25 <= 4) {
        headIndice.r = 0
        alias = data[headIndice.c][headIndice.r]
        if (!alias) continue
        if (rand.range(2) < 1) {
          alias += aux[0]
        }
      } else if (5 <= r25 && r25 <= 8) {
        alias += aux[1]
      } else if (9 <= r25 && r25 <= 12) {
        alias += aux[2]
      } else if (13 <= r25 && r25 <= 16) {
        return aux[3] + alias
      }
    }

    const tailAlias = (() => {
      for (let i = 0; i < 100; i++) {
        tailIndice.c = rand.range(data.length)

        if (tailIndice.c === headIndice.c) continue

        const headCategory = data[headIndice.c].at(-1)
        const tailCategory = data[tailIndice.c].at(-1)

        if (headCategory === tailCategory && tailCategory !== '万能') continue

        tailIndice.r = rand.range(2)
        if (9 < headIndice.r) {
          tailIndice.r += 10
        }

        const tailAlias = data[tailIndice.c][tailIndice.r]

        if (tailAlias) {
          return tailAlias
        }
      }
    })()

    if (!tailAlias) continue

    alias += tailAlias

    if (alias.length < 14) return alias
  }
}
