import { Formatter } from '../Formatter';

describe('truncateString', () => {
  const MAX_CHIP_LENGTH = 38;
  it.each`
    originalString                                       | truncatedString
    ${'Ex ipsum veniam esse'}                            | ${'Ex ipsum veniam esse'}
    ${'Ex ipsum veniam esse eu voluptate reprehenderit'} | ${'Ex ipsum veniam esse eu voluptate repr...'}
  `(
    `should return the correct string when string length is $originalString.length`,
    ({ originalString, truncatedString }) => {
      const expectedTruncatedString = Formatter.truncate(originalString, MAX_CHIP_LENGTH);
      expect(expectedTruncatedString).toEqual(truncatedString);
    }
  );
});
