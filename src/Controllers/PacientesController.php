<?php 


	namespace App\Controllers;

	use App\Models\Pacientes;

	class PacientesController extends Controller {


		public function index($req, $res)
		{

			return $res->withJson( [ "data" => Pacientes::all() ], 200 );

		}


	}

?>