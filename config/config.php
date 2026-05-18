<?php
declare(strict_types=1);

return [
    'db' => [
        'driver' => 'sqlite',
        'path'   => __DIR__ . '/../storage/app.sqlite',
    ],
    'app' => [
        'name'    => 'School Learning App',
        'version' => '1.0.0',
        'debug'   => false,
    ],
    'cors' => [
        'allowed_origins' => ['*'],
    ],
];
