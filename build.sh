#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

cat > index.html <<'HTML_HEAD'
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>English Test – Simple Present &amp; Simple Past | Klasse 5/6</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400&family=Nunito:wght@400;600;700;800&family=Caveat:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/app.css">
</head>
<body>
<div class="container">
HTML_HEAD

for f in views/header.php views/screen-start.php views/screen-info.php \
         views/screen-quiz.php views/screen-result.php views/screen-reading.php \
         views/footer.php; do
  cat "$f" >> index.html
done

cat >> index.html <<'HTML_TAIL'
</div>
<script src="questions/english/q_simple_present.js"></script>
<script src="questions/english/q_simple_past.js"></script>
<script src="questions/english/q_telling_time.js"></script>
<script src="questions/english/q_reading_present.js"></script>
<script src="questions/english/q_reading_past.js"></script>
<script src="assets/js/config.js"></script>
<script src="assets/js/utils.js"></script>
<script src="assets/js/state.js"></script>
<script src="assets/js/cookies.js"></script>
<script src="assets/js/quiz.js"></script>
<script src="assets/js/reading.js"></script>
<script src="assets/js/events.js"></script>
</body>
</html>
HTML_TAIL

echo "✓ index.html generiert ($(wc -l < index.html) Zeilen)"
