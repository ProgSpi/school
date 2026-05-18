// ============ EVENT WIRING ============
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const mode = card.dataset.mode;
    startQuiz(mode);
  });
});

$('retry-btn').addEventListener('click', () => startQuiz(currentMode));

$('qhint-toggle').addEventListener('click', () => {
  const hint = $('qhint');
  const btn  = $('qhint-toggle');
  const isHidden = hint.classList.toggle('hidden');
  btn.textContent = isHidden ? '💡 Tipp anzeigen' : '💡 Tipp verbergen';
});

$('reading-submit').addEventListener('click', finishReading);
$('reading-abort-btn').addEventListener('click', () => {
  $('reading-abort-confirm').classList.remove('hidden');
});
$('reading-abort-yes').addEventListener('click', () => {
  currentReading = null;
  $('reading-abort-confirm').classList.add('hidden');
  renderHighscoreOnStart();
  show('start');
});
$('reading-abort-no').addEventListener('click', () => {
  $('reading-abort-confirm').classList.add('hidden');
});

$('goto-info-from-start').addEventListener('click', () => {
  returnTo = 'start';
  show('info');
});
$('result-info-btn').addEventListener('click', () => {
  returnTo = 'start';
  show('info');
});
$('result-home-btn').addEventListener('click', () => {
  renderHighscoreOnStart();
  show('start');
});

$('goto-info-from-quiz').addEventListener('click', () => {
  returnTo = 'quiz';
  let targetTab = 'present';
  if (session) {
    if (session.mode === 'past') targetTab = 'past';
    else if (session.mode === 'time') targetTab = 'time';
  }
  switchInfoTab(targetTab);
  show('info');
});

$('info-back-btn').addEventListener('click', () => {
  if (returnTo === 'quiz' && session) {
    resumeTest();
  } else {
    renderHighscoreOnStart();
    show('start');
  }
});

function switchInfoTab(tab) {
  document.querySelectorAll('.info-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  $('info-present').classList.toggle('hidden', tab !== 'present');
  $('info-past').classList.toggle('hidden', tab !== 'past');
  $('info-time').classList.toggle('hidden', tab !== 'time');
}
document.querySelectorAll('.info-tab').forEach(t => {
  t.addEventListener('click', () => switchInfoTab(t.dataset.tab));
});

$('abort-btn').addEventListener('click', () => {
  $('abort-confirm').classList.remove('hidden');
});
$('abort-yes').addEventListener('click', () => {
  session = null;
  $('abort-confirm').classList.add('hidden');
  renderHighscoreOnStart();
  show('start');
});
$('abort-no').addEventListener('click', () => {
  $('abort-confirm').classList.add('hidden');
});

$('prev-btn').addEventListener('click', goPrev);
$('next-btn').addEventListener('click', goNext);
$('submit-btn').addEventListener('click', handleText);

$('textinput').addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  e.preventDefault();
  const i = session?.viewing;
  if (session && session.answers[i]) {
    if (!$('next-btn').disabled) goNext();
  } else {
    handleText();
  }
});

document.addEventListener('keydown', e => {
  if ($('quiz').classList.contains('hidden')) return;
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'Enter' && !$('next-btn').disabled) {
    e.preventDefault();
    goNext();
  } else if (e.key === 'ArrowLeft' && !$('prev-btn').disabled) {
    goPrev();
  } else if (e.key === 'ArrowRight' && !$('next-btn').disabled) {
    goNext();
  }
});

// ============ INIT ============
renderHighscoreOnStart();
