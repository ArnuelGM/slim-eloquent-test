<?php

	require __DIR__ . "/../vendor/autoload.php";

	use Slim\App;
	
	$config = require __DIR__ . "/../src/configuration.php";

	$app = new App(['settings' => $config]);

	require __DIR__ . "/../src/dependencies.php";

	require __DIR__ . "/../src/routes.php";

	$app->run();
