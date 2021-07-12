serve:
	ng serve

install:
	ng build --configuration production
	rsync -av dist/material-angular-io/ ubuntu@ballistica.net:/var/www/www.ballistica.net.test/
	echo SUCCESS!
