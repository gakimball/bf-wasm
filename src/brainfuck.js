/** @returns number[] */
export function execute(/** @type number[] */ input) {
  let pc = 0
  let dc = 0
  let oc = 0
  const data = new Array(100)
  const output = new Array(100)

  data.fill(0)
  output.fill(0)

  while (pc < input.length) {
    switch (input[pc]) {
      case 0: // >
        dc++
        break
      case 1: // <
        dc--
        break
      case 2: // +
        data[dc] += 1
        break
      case 3: // -
        data[dc] -= 1
        break
      case 4: // .
        output[oc++] = data[dc]
        break
      case 5: // ,
        break
      case 6: { // [
        if (data[dc] === 0) {
          let brackets = 0

          while (brackets > -1) {
            const token = input[++pc]

            if (token === 6) { // [
              brackets++
            } else if (token === 7) { // ]
              brackets--
            }
          }
        }
        break
      }
      case 7: { // ]
        if (data[dc] !== 0) {
          let brackets = 0

          while (brackets > -1) {
            const token = input[--pc]

            if (token === 7) { // ]
              brackets++
            } else if (token === 6) { // [
              brackets--
            }
          }
        }
        break
      }
    }

    pc++
  }

  return output
}

export function executeMulti(/** @type number[] */ input) {
  for (let i = 0; i < 1000; i++) {
    execute(input)
  }
}
