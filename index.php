<!doctype html>
<html lang="pt_BR" ng-app="app">
<head>
	<meta charset="utf-8">
	<title>Plataforma M.I.</title>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/app.css"/>
	<link rel="shortcut icon" href="img/favicon.png" />
</head>
<body ng-controller="AppCtrl">
	<header class="header">
		<div class="content">
			<nav class="navbar">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="text-white navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Mudar navegação</span>
							<i class="fa fa-bars"></i>
						</button>
						<a class="navbar-brand" href="#">
							<img ng-src="{{base_url}}/img/logo-pmi.png" />
						</a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="pull-right collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav nav-mi">
							<li>
								<a href="#como-estudar">
									Como estudar
								</a>
							</li>
							<li>
								<a href="#depoimentos">
									Depoimentos
								</a>
							</li>
							<li>
								<a href="#contato">
									Contato
								</a>
							</li>
							<li>
								<a href="#cadastro">
									Cadastro
								</a>
							</li>
							<li>
								<a href="#teste-de-nivel">
									Teste de nível
								</a>
							</li>
							<li>
								<a href="#/login">
									Login
								</a>
							</li>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>		
		</div>
		<div class="clearfix"></div>
	</header>

	<ng-view></ng-view>

	<footer>
		<small>
			2012 &copy; <?php echo date('Y') ?> Plataforma M.I.
		</small>
	</footer>
	<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/services.js"></script>
	<script type="text/javascript" src="js/controllers.js"></script>
	<script type="text/javascript" src="js/filters.js"></script>
	<script type="text/javascript" src="js/directives.js"></script>
</body>
</html>
