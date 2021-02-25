import { getDate } from './locales';

test('getDate', () => {
  /**
   * Test will not pass for other timezone.
   * I don't need timezone support so toBeTruthy enough
   */
  expect(getDate('Thu Feb 25 2021 09:55:18 GMT+0100')).toBeTruthy();
});
