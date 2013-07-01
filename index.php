<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>W3project</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="library/jquery-1.9.1.min.js"></script>
</head>
<body>


	<div class="container">

		<div class="top">
			


			

		</div>

		<div class="bottom">

			<div class="slideshow">
				<div class="train">
					  <?php
					    include('library/lib.php');
					    $imgs = getFiles('images','jpg','png');
					    foreach($imgs as $img){
					    	$temp = explode('.',$img);

					      	echo "
					      			<div>
					      				<div>
					      					<img src='images/$img' />
					      				</div>
					      				<div>
					    					<h2>'$temp[1]'</h2>
					      				</div>
					      			</div>
					      		";
					    }
					  ?>
				</div>

				<div class="nav">
					<ul class="btns"></ul>
				</div>

			</div>

		</div>
		<div class="pointer"></div>
	</div>

	<script type="text/javascript" src="script.js"></script>
</body>
</html>	