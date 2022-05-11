install:
		npm ci # установка
brain-games:
		node bin/brain-games.js # запуск игры
publish:
		npm publish --dry-run # публикация