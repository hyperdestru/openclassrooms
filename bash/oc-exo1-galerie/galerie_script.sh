#!/bin/bash

if [ -z $1 ]
then
	sortie='galerie.html'
else
	sortie=$1
fi

echo '' > $sortie

if [ ! -e miniatures ]
then
	mkdir miniatures
fi

echo '<!DOCTYPE html>
<html>
		<head>
			<meta charset="utf-8">
			<title>Ma galerie</title>
			<style type="text/css">
					a img {border: 0;
								border-radius: 5px;}
					a img:hover {box-shadow:0px 0px 5px 5px pink;}
					body {display: flex;
								justify-content: space-around;
								background-color: black;
								margin-top: 350px;}
			</style>
		</head>
		<body>
				<p>' >> $sortie

for image in `ls imagesNormal/. 2>/dev/null`
do
	convert imagesNormal/$image -thumbnail '100x100>' miniatures/$image
	echo '<a href="imagesNormal/'$image'"><img src="miniatures/'$image'" alt="" title="'$image'" /></a>' >> $sortie
done

echo '</p>
	</body>
</html>' >> $sortie

xdg-open $sortie
