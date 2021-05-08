import { main } from '@/main';

describe('Testing Application', () => {
  it('should return Hello World!', () => {
    expect(main()).toEqual('Hello World!');
  });
});
