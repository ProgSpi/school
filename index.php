<?php
declare(strict_types=1);

$config = require __DIR__ . '/config/config.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (str_starts_with($uri, '/api/')) {
    $endpoint = __DIR__ . $uri . '.php';
    if (file_exists($endpoint)) {
        require $endpoint;
    } else {
        http_response_code(404);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['status' => 'error', 'message' => 'Endpunkt nicht gefunden']);
    }
    exit;
}
?><!DOCTYPE html>
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
  <?php include __DIR__ . '/views/header.php'; ?>
  <?php include __DIR__ . '/views/screen-start.php'; ?>
  <?php include __DIR__ . '/views/screen-info.php'; ?>
  <?php include __DIR__ . '/views/screen-quiz.php'; ?>
  <?php include __DIR__ . '/views/screen-result.php'; ?>
  <?php include __DIR__ . '/views/screen-reading.php'; ?>
  <?php include __DIR__ . '/views/footer.php'; ?>
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
