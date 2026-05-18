<section id="quiz" class="hidden">

  <div class="quiz-top">
    <div class="progress-wrap">
      <div class="progress-info">
        <span class="quiz-mode-label" id="quiz-mode-label">📘 Simple Present</span>
        <span class="score-now">Punkte: <strong id="score">0</strong></span>
      </div>
      <div class="progress-info">
        <span>Frage <strong id="cur">1</strong> von <strong id="total">20</strong></span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="bar"></div></div>
    </div>
    <div class="quiz-top-actions">
      <button class="info-link" id="goto-info-from-quiz">📖 Info</button>
      <button class="btn-abort" id="abort-btn" title="Test abbrechen">✕</button>
    </div>
  </div>

  <div id="abort-confirm" class="abort-confirm hidden">
    <span>Test wirklich abbrechen?</span>
    <button id="abort-yes" class="btn btn-coral btn-sm">Ja, abbrechen</button>
    <button id="abort-no" class="btn btn-ghost btn-sm">Weiter üben</button>
  </div>

  <div class="question-card">
    <div class="review-banner hidden" id="review-banner">Du schaust dir eine bereits beantwortete Frage an</div>
    <div class="q-num" id="qnum">Frage 1</div>
    <div class="q-type" id="qtype">Multiple Choice</div>
    <div class="q-text" id="qtext"></div>
    <div id="qhint-wrap" class="q-hint-wrap hidden">
      <button id="qhint-toggle" class="btn-hint-toggle">💡 Tipp anzeigen</button>
      <div class="q-hint hidden" id="qhint"></div>
    </div>

    <div class="options hidden" id="options"></div>

    <div class="text-input-wrap hidden" id="textwrap">
      <input type="text" class="text-input" id="textinput" placeholder="Deine Antwort..." autocomplete="off" autocorrect="off" spellcheck="false">
      <button class="btn btn-coral" id="submit-btn">Prüfen</button>
    </div>

    <div class="feedback hidden" id="feedback"></div>
  </div>

  <div class="quiz-nav">
    <button class="btn btn-ghost" id="prev-btn">← Zurück</button>
    <button class="btn" id="next-btn">Weiter →</button>
  </div>
</section>
