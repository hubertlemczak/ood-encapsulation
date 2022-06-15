class SecretDiary {
  constructor() {
    this.diaryKey = new DiaryKey();
    this.entries = [];
  }

  addEntry(entry) {
    if (this.diaryKey.isLocked) throw new Error('Diary Locked!');
    this.entries.push(entry);
    return this;
  }

  getEntries() {
    if (this.diaryKey.isLocked) throw new Error('Diary Locked!');
    console.log(this.entries);
    return this;
  }

  diaryUnlock() {
    // this.diaryKey = false;
    this.diaryKey.unlock();
    return this;
  }

  diaryLock() {
    // this.diaryKey = true;
    this.diaryKey.lock();
    return this;
  }
}

class DiaryKey {
  constructor() {
    this.isLocked = true;
  }

  unlock() {
    this.isLocked = false;
  }

  lock() {
    this.isLocked = true;
  }
}

const secretDiary = new SecretDiary();
secretDiary.diaryUnlock().addEntry('new entry').addEntry('another entry');
console.log(secretDiary.getEntries());

module.exports = SecretDiary;
