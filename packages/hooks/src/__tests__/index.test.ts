import * as hooks from '..'

describe('hooks', () => {
  test('exports modules should be defined', () => {
    Object.keys(hooks).forEach((module) => {
      // @ts-expect-error test
      // eslint-disable-next-line import/namespace
      expect(hooks[module]).toBeDefined()
    })
  })
})
