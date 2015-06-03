<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>memory</title>
	
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/main.css">
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="js/main.js" type="text/javascript"></script>
</head>
<body>

@include('partials.fb')

	<div class="wrapper">
		<div class="victory-page">
			<div class="victory-alert">
				<img src="images/trophy.png" alt="trophy">
				<p>Congratulations!</p>
				<p>You did it in <span class="totalClicksCounter"></span> clicks!</p>
			</div>
		</div>
		<div class="header">
			<div class="header-content">
					
				<div class="title-block">
					
					<p id="title">- Memory -</p>	

				</div>

				<div class="button-block">
					<div class="score-buttons">
						<p id="highscore-text">Highscore</p>
						<p class="score-number" id="highscore">0</p>
					</div>
					
					<div class="score-buttons">
						<p>Clicks</p>
						<p class="score-number" id="click-counter">0</p>
					</div>

				</div>
			</div>
		</div>
		<div class="container">
            <fb:login-button scope="public_profile,email,user_photos" onlogin="checkLoginState();">
            </fb:login-button>

            <div id="status">
            </div>
			<input id="start-button" type="button" name="start_button" value="Shuffle and Start">

			<div class="row">
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
			</div>

			<div class="row">	
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
			</div>

			<div class="row">	
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
			</div>

			<div class="row">	
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
				<div class="square">
					<div class="content"></div>		
				</div>
			</div>

		</div>
	</div>	
</body>
</html>