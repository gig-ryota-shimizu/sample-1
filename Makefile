up:
	docker-compose up -d
up-build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose restart
ps:
	docker-compose ps -a
logs:
	docker-compose logs -f
node:
	docker-compose exec nodejs sh
