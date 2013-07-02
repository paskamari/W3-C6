<!DOCTYPE HTML>
<html lang="en-US" manifest="cache.manifest">
<head>
	<meta charset="UTF-8" />
	<title>W3project</title>
	<link rel="stylesheet" type="text/css" href="library/1styles.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="library/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="library/jquery.address.min.js"></script>
	
</head>
<body>

	<?php
		include('library/lib.php');
		$imgs = getFiles('images/Slider','jpg','png');
	?>

	<div class="container">

		<div class="top">
			<div class="slideshow">
				<div class="train">
					

						<?php
							foreach($imgs as $img){

								$temp = explode('.',$img);

								echo "
									<div class='local-train'>
										<h1>$temp[0]</h1>
									</div>
								";
							}
						?>
					
				</div>
		    </div>
		</div>

		<div class="bottom cover">
			<div class="prev"></div>
		    <div class="next"></div>

			<div class="slideshow">
				<div class="train">
					<?php
						foreach($imgs as $img){

							$temp = explode('.',$img);

							echo "
								<div class='local-train'>
									<div class='logo'>
										<img src='images/Slider/$img' />
									</div>
									<div class='subject-logo'>
										<h1>$temp[1]</h1>
										<p class='description'>...</p>
									</div>
								</div>
							";
						}
					?>
				</div>
		    </div>

		</div>
		<div class="pointer"></div>
	</div>

	<script type="text/javascript" src="script.js"></script>
</body>
</html>