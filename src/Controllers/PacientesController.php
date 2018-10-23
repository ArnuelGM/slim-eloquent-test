<?php 

	
	namespace App\Controllers;

	use Psr\Container\ContainerInterface as Container;
	use App\Models\Pacientes;

	class PacientesController extends Controller {

		protected $container;

		// constructor receives container instance
		public function __construct(Container $container) {
			$this->container = $container;
		}

		public function index($req, $res)
		{

			return $res->withJson( [ "data" => Pacientes::all() ], 200 );

		}

		public function show($req, $res, $args)
		{
			$data = Pacientes::where( 'autoid', '=', $args['id'] )->get()->first();
			if( !empty( $args['field'] ) ){
				$data = $data->{$args['field']};
			}
			return $res->withJson( [ "data" => $data ], 200 );
		}


	}

?>