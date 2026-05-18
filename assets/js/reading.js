// ============ READING LOGIC ============
function startQuiz(modeKey) {
  if (MODES[modeKey].type === 'reading') {
    startReadingTest(modeKey);
  } else {
    startNewTest(modeKey);
  }
}

function startReadingTest(modeKey) {
  currentMode = modeKey;
  const pool = MODES[modeKey].getPool();
  const story = pool[Math.floor(Math.random() * pool.length)];
  currentReading = { story, mode: modeKey };
  $('reading-title').textContent = story.title;
  $('reading-mode-label').textContent = `${MODES[modeKey].icon} ${MODES[modeKey].label}`;
  $('reading-abort-confirm').classList.add('hidden');
  renderReadingStory(story);
  show('reading');
}

function renderReadingStory(story) {
  let html = story.story;
  story.blanks.forEach((blank, i) => {
    const opts = shuffle([...blank.options])
      .map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`)
      .join('');
    html = html.replace(`[${i}]`, `<select id="blank-${i}" class="story-select"><option value="">–</option>${opts}</select>`);
  });
  $('reading-story').innerHTML = html;
}

function finishReading() {
  const { story, mode } = currentReading;
  let correct = 0;
  story.blanks.forEach((blank, i) => {
    const val = document.getElementById(`blank-${i}`)?.value ?? '';
    if (val === blank.correct) correct++;
  });
  const total = story.blanks.length;
  const pct = Math.round((correct / total) * 100);

  $('final-score').textContent = correct;
  $('final-total').textContent = total;
  $('result-sub').textContent = `${correct} von ${total} Lücken richtig ausgefüllt`;
  $('final-percent').textContent = pct + '%';
  $('result-mode').textContent = `${MODES[mode].icon} ${MODES[mode].label}`;

  let emoji, title, grade;
  if (pct >= 92)      { emoji = '🏆'; title = 'Excellent!';             grade = 'Note: 1 (sehr gut)'; }
  else if (pct >= 80) { emoji = '🌟'; title = 'Very good!';             grade = 'Note: 2 (gut)'; }
  else if (pct >= 66) { emoji = '👍'; title = 'Good job!';              grade = 'Note: 3 (befriedigend)'; }
  else if (pct >= 50) { emoji = '📚'; title = 'Keep going!';            grade = 'Note: 4 (ausreichend)'; }
  else if (pct >= 30) { emoji = '✍️'; title = 'Üb noch ein bisschen!'; grade = 'Note: 5 (mangelhaft)'; }
  else                { emoji = '💪'; title = "Don't give up!";         grade = 'Note: 6 (ungenügend)'; }
  $('result-emoji').textContent = emoji;
  $('result-title').textContent = title;
  $('grade').textContent = grade;

  const isNew = maybeUpdateHighscore(mode, correct, total);
  if (isNew) {
    $('new-highscore').classList.remove('hidden');
    $('new-highscore-val').textContent = `${correct} / ${total} (${pct}%)`;
  } else {
    $('new-highscore').classList.add('hidden');
  }

  currentMode = mode;
  currentReading = null;
  renderHighscoreOnStart();
  show('result');
}
