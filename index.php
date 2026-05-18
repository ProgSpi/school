<?php
declare(strict_types=1);

$config = require __DIR__ . '/config/config.php';

// Einfacher Router: /api/* → API-Handler, alles andere → Frontend
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (str_starts_with($uri, '/api/')) {
    // PHP-interne API-Weiterleitung (alternativ via .htaccess)
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

// Frontend ausliefern
readfile(__DIR__ . '/index.html');
