// ============ QUIZ LOGIC ============
function pickQuestions(modeKey) {
  const pool = MODES[modeKey].getPool();
  const normal = shuffle(pool.filter(q => !q.hard)).slice(0, 16);
  const hard   = shuffle(pool.filter(q => q.hard)).slice(0, 4);
  return shuffle([...normal, ...hard]);
}

function startNewTest(modeKey) {
  currentMode = modeKey || currentMode;
  session = {
    mode: currentMode,
    questions: pickQuestions(currentMode),
    answers: {},
    current: 0,
    viewing: 0,
    score: 0
  };
  $('total').textContent = TEST_SIZE;
  $('quiz-mode-label').textContent = `${MODES[currentMode].icon} ${MODES[currentMode].label}`;
  $('abort-confirm').classList.add('hidden');
  show('quiz');
  renderQuestion();
}

function resumeTest() {
  show('quiz');
  renderQuestion();
}

function renderQuestion() {
  const i = session.viewing;
  const q = session.questions[i];
  const isReview = i < session.current;
  const ans = session.answers[i];

  $('cur').textContent = i + 1;
  $('score').textContent = session.score;
  $('bar').style.width = `${(session.current / TEST_SIZE) * 100}%`;

  $('qnum').textContent = `Frage ${i + 1}`;
  const typeBadge = $('qtype');
  if (q.hard) {
    typeBadge.textContent = q.type === 'mc' ? '🌶 Extra schwer · MC' : '🌶 Extra schwer · Texteingabe';
    typeBadge.classList.add('hard');
  } else {
    typeBadge.textContent = q.type === 'mc' ? 'Multiple Choice' : 'Texteingabe';
    typeBadge.classList.remove('hard');
  }

  $('review-banner').classList.toggle('hidden', !isReview);

  let html = q.q.replace(/_{3,}/g, '<span class="blank">?</span>');
  if (q.verb) {
    html += ` <span class="verb-hint">${escapeHtml(q.verb)}</span>`;
  }
  $('qtext').innerHTML = html;

  if (q.hint && !q.verb) {
    $('qhint').textContent = q.hint;
    $('qhint').classList.add('hidden');
    $('qhint-wrap').classList.remove('hidden');
    $('qhint-toggle').textContent = '💡 Tipp anzeigen';
  } else {
    $('qhint-wrap').classList.add('hidden');
  }

  $('feedback').classList.add('hidden');
  if (q.type === 'mc') {
    $('textwrap').classList.add('hidden');
    $('options').classList.remove('hidden');
    renderMC(q, ans);
  } else {
    $('options').classList.add('hidden');
    $('textwrap').classList.remove('hidden');
    renderText(q, ans);
  }

  if (ans) showFeedback(q, ans);
  updateNavButtons();
}

function renderMC(q, ans) {
  const opts = $('options');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  const locked = !!ans;
  q.options.forEach((text, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="letter">${letters[idx]}</span><span>${escapeHtml(text)}</span>`;
    if (locked) {
      btn.disabled = true;
      if (text === q.correct) btn.classList.add('correct');
      else if (text === ans.given) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => handleMC(text, q));
    }
    opts.appendChild(btn);
  });
}

function renderText(q, ans) {
  const inp = $('textinput');
  const submit = $('submit-btn');
  inp.classList.remove('correct', 'wrong');
  if (ans) {
    inp.value = ans.given;
    inp.disabled = true;
    submit.disabled = true;
    inp.classList.add(ans.isCorrect ? 'correct' : 'wrong');
  } else {
    inp.value = '';
    inp.disabled = false;
    submit.disabled = false;
    setTimeout(() => inp.focus(), 80);
  }
}

function handleMC(chosen, q) {
  if (session.viewing !== session.current) return;
  if (session.answers[session.viewing]) return;
  const isCorrect = chosen === q.correct;
  recordAnswer(chosen, isCorrect);
  renderQuestion();
}

function handleText() {
  if (session.viewing !== session.current) return;
  if (session.answers[session.viewing]) return;
  const q = session.questions[session.viewing];
  const inp = $('textinput');
  const given = inp.value.trim();
  if (!given) { inp.focus(); return; }
  const accepted = q.correct.map(a => a.toLowerCase());
  const isCorrect = accepted.includes(given.toLowerCase());
  recordAnswer(given, isCorrect);
  renderQuestion();
}

function recordAnswer(given, isCorrect) {
  session.answers[session.viewing] = { given, isCorrect };
  if (isCorrect) session.score++;
}

function showFeedback(q, ans) {
  const fb = $('feedback');
  fb.classList.remove('hidden', 'ok', 'bad');
  fb.classList.add(ans.isCorrect ? 'ok' : 'bad');
  const head = ans.isCorrect ? '✓ Richtig! Well done!' : '✗ Leider falsch.';
  let inner = `<div class="head">${head}</div>`;
  if (!ans.isCorrect) {
    const rightAnswer = q.type === 'mc' ? q.correct : q.correct[0];
    inner += `<div class="correct-answer">Richtige Antwort: <strong>${escapeHtml(rightAnswer)}</strong></div>`;
  }
  if (q.explain) inner += `<div class="explain">💡 ${escapeHtml(q.explain)}</div>`;
  fb.innerHTML = inner;
}

function updateNavButtons() {
  const i = session.viewing;
  const isReview = i < session.current;
  const answered = !!session.answers[i];
  const isLast = i === TEST_SIZE - 1;

  $('prev-btn').disabled = (i === 0);

  const next = $('next-btn');
  if (isReview) {
    next.disabled = false;
    next.textContent = 'Weiter →';
  } else if (answered) {
    next.disabled = false;
    next.textContent = isLast ? 'Test beenden ✓' : 'Weiter →';
  } else {
    next.disabled = true;
    next.textContent = 'Weiter →';
  }
}

function goPrev() {
  if (session.viewing > 0) {
    session.viewing--;
    renderQuestion();
  }
}

function goNext() {
  const i = session.viewing;
  const isReview = i < session.current;
  if (isReview) {
    session.viewing++;
    renderQuestion();
  } else if (session.answers[i]) {
    session.current++;
    if (session.current >= TEST_SIZE) {
      finishTest();
    } else {
      session.viewing = session.current;
      renderQuestion();
    }
  }
}

function finishTest() {
  const pct = Math.round((session.score / TEST_SIZE) * 100);
  const finishedMode = session.mode;
  $('final-score').textContent = session.score;
  $('final-total').textContent = TEST_SIZE;
  $('result-sub').textContent = 'Hier ist dein Ergebnis';
  $('final-percent').textContent = pct + '%';
  $('result-mode').textContent = `${MODES[finishedMode].icon} ${MODES[finishedMode].label}`;

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

  const isNew = maybeUpdateHighscore(finishedMode, session.score, TEST_SIZE);
  if (isNew) {
    $('new-highscore').classList.remove('hidden');
    $('new-highscore-val').textContent = `${session.score} / ${TEST_SIZE} (${pct}%)`;
  } else {
    $('new-highscore').classList.add('hidden');
  }

  currentMode = finishedMode;
  session = null;
  renderHighscoreOnStart();
  show('result');
}
