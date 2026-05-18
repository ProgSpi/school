<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$config = require __DIR__ . '/../config/config.php';

// TODO: Datenbank-Verbindung aufbauen und echte Persistenz implementieren
// Vorerst: In-Memory-Antworten als Platzhalter

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode([
        'status'  => 'ok',
        'message' => 'Progress API bereit (noch kein persistenter Speicher)',
        'data'    => [],
    ]);
    exit;
}

if ($method === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);

    if (!isset($body['mode'], $body['score'], $body['total'])) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Fehlende Parameter: mode, score, total']);
        exit;
    }

    $mode  = (string) $body['mode'];
    $score = (int)    $body['score'];
    $total = (int)    $body['total'];

    // TODO: In DB speichern

    echo json_encode([
        'status'  => 'ok',
        'message' => 'Fortschritt empfangen',
        'data'    => compact('mode', 'score', 'total'),
    ]);
    exit;
}

http_response_code(405);
echo json_encode(['status' => 'error', 'message' => 'Methode nicht erlaubt']);
