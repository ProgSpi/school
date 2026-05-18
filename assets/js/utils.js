// ============ UTILS ============
const $ = id => document.getElementById(id);
const screens = ['start', 'info', 'quiz', 'result', 'reading'];

function show(id) {
  screens.forEach(s => $(s).classList.toggle('hidden', s !== id));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('de-DE', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });
  } catch { return ''; }
}
