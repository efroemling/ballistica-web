# Some high-level shortcuts and formulas
# (yes I know these should probably live in package.json scripts)

serve:
	npm start

install:
	rm -rf dist/ballistica-web
	mkdir -p dist/ballistica-web
	ng build --configuration production
	@echo Pushing live...
	rsync -a dist/ballistica-web/ ubuntu@ballistica.net:/var/www/www.ballistica.net.test/
	echo SUCCESS!

test:
	npm test --no-watch --no-progress --browsers ChromeHeadlessCI

lint:
	ng lint
