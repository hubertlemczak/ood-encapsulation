const SecretDiary = require('../src/secretDiary');

describe('SecretDiary', () => {
  let secretDiary;
  beforeEach(() => {
    secretDiary = new SecretDiary();
  });
  // Tests for Errors
  it('tries to add new entry', () => {
    expect(() => {
      secretDiary.addEntry('new entry');
    }).toThrow(new Error('Diary Locked!'));
  });

  it('tries to get entrries', () => {
    expect(() => {
      secretDiary.getEntries();
    }).toThrow(new Error('Diary Locked!'));
  });
  // Tests for unlocked diary
  it('adds entry', () => {
    const expected = ['new entry'];
    secretDiary.diaryUnlock().addEntry('new entry');
    expect(secretDiary.entries).toEqual(expected);
  });
});
