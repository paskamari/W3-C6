<?php
 
function getFiles($path,$type1,$type2){
	$files = scandir($path);
	foreach ($files as $file){
		$temp = explode('.',$file);
		$file_type = strtolower( end($temp) ); // JPG => jpg
		if($file_type == $type1 || $file_type == $type2){
			$images[] = $file;
		}
	}
	return $images;
}