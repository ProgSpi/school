// ============ COOKIES / HIGHSCORE ============
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name) {
  const m = document.cookie.match(new RegExp('(^|;\\s*)' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[2]) : null;
}

function getHighscore(modeKey) {
  const raw = getCookie(MODES[modeKey].cookieName);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function saveHighscore(modeKey, score, total) {
  const data = {
    score, total,
    percent: Math.round(score / total * 100),
    date: new Date().toISOString()
  };
  setCookie(MODES[modeKey].cookieName, JSON.stringify(data), COOKIE_DAYS);
  return data;
}

function maybeUpdateHighscore(modeKey, score, total) {
  const existing = getHighscore(modeKey);
  const isNew = !existing || score > existing.score;
  if (isNew) saveHighscore(modeKey, score, total);
  return isNew;
}

function renderHighscoreOnStart() {
  const box = $('highscore-display');
  box.innerHTML = Object.keys(MODES).map(key => {
    const m = MODES[key];
    const hs = getHighscore(key);
    if (!hs) {
      return `
        <div class="highscore-card empty">
          <div class="highscore-mode-label">${m.icon} ${m.shortLabel}</div>
          <div class="highscore-trophy">🏆</div>
          <div class="highscore-info">
            <div class="score">noch kein Rekord</div>
          </div>
        </div>`;
    }
    return `
      <div class="highscore-card">
        <div class="highscore-mode-label">${m.icon} ${m.shortLabel}</div>
        <div class="highscore-trophy">🏆</div>
        <div class="highscore-info">
          <div class="score">${hs.score} / ${hs.total} <span class="percent">${hs.percent}%</span></div>
          <div class="date">${formatDate(hs.date)}</div>
        </div>
      </div>`;
  }).join('');
}
