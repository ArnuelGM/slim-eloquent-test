<?php

	use App\Controllers\PacientesController;

	$app->group('/pacientes', function(){

		$this->get('', PacientesController::class . ':index');
		$this->get('/{id}[/{field}]', PacientesController::class . ':show');

	});

	$app->get('/foto', function($req, $res){

		$image = @file_get_contents( __DIR__ . "/../public/foto.jpg");
		
		if($image === FALSE) 
		{
			$handler = $this->notFoundHandler;
			return $handler($req, $res);
		}

		$res->write($image);
		return $res->withHeader('Content-Type', FILEINFO_MIME_TYPE);

	});