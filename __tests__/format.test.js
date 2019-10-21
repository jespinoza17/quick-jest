const format = require('./../client/stringFormat.js');

describe('Test string formatting', () => {
  it('Should work on an array of test objects', () => {
    expect(format([{functionName:'test', tests: ['should render an object']}])).not.toBe(undefined);
  })
})
