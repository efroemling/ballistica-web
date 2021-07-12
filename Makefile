# Some high-level shortcuts and formulas
# (yes I know these should probably live in package.json scripts)

install:
	rm -rf dist/ballistica-web
	mkdir -p dist/ballistica-web
	ng build --configuration production
	@echo adding wiki redirect...
	echo "Redirect 301 /wiki https://github.com/efroemling/ballistica/" > dist/ballistica-web/.htaccess
	@echo Pushing live...
	rsync -a dist/ballistica-web/ ubuntu@ballistica.net:/var/www/www.ballistica.net/
	echo SUCCESS!

