// ============ CONFIG ============
const TEST_SIZE = 20;
const COOKIE_DAYS = 365;
const MODES = {
  present: {
    label: 'Simple Present',
    shortLabel: 'Present',
    icon: '📘',
    subject: 'english',
    cookieName: 'simplepresent_highscore',
    getPool: () => questions
  },
  past: {
    label: 'Simple Past',
    shortLabel: 'Past',
    icon: '📙',
    subject: 'english',
    cookieName: 'simplepast_highscore',
    getPool: () => questionsPast
  },
  time: {
    label: 'Telling Time',
    shortLabel: 'Uhrzeit',
    icon: '🕐',
    subject: 'english',
    cookieName: 'tellingtime_highscore',
    getPool: () => questionsTellingTime
  },
  mixed: {
    label: 'Mixed Mode',
    shortLabel: 'Mixed',
    icon: '🎲',
    subject: 'english',
    cookieName: 'mixed_highscore',
    getPool: () => questions.concat(questionsPast).concat(questionsTellingTime)
  },
  readingPresent: {
    label: 'Lesetext – Present',
    shortLabel: 'Lesen Present',
    icon: '📖',
    subject: 'english',
    cookieName: 'reading_present_hs',
    type: 'reading',
    getPool: () => questionsReadingPresent
  },
  readingPast: {
    label: 'Lesetext – Past',
    shortLabel: 'Lesen Past',
    icon: '📖',
    subject: 'english',
    cookieName: 'reading_past_hs',
    type: 'reading',
    getPool: () => questionsReadingPast
  },
  readingMixed: {
    label: 'Lesetext – Mixed',
    shortLabel: 'Lesen Mixed',
    icon: '📖',
    subject: 'english',
    cookieName: 'reading_mixed_hs',
    type: 'reading',
    getPool: () => questionsReadingPresent.concat(questionsReadingPast)
  }
};
