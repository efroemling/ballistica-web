serve:
	ng serve

install:
	rm -rf dist/ballistica-web
	mkdir -p dist/ballistica-web
	ng build --configuration production
	@echo Pushing live...
	rsync -a dist/ballistica-web/ ubuntu@ballistica.net:/var/www/www.ballistica.net.test/
	echo SUCCESS!

test:
	ng test --no-watch --no-progress --browsers ChromeHeadlessCI

lint:
	ng lint
