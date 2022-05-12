install:
		npm ci # установка
brain-games:
		node bin/brain-games.js # запуск игры
brain-even:
		node bin/brain-even.js # запуск Проверка на четность		
publish:
		npm publish --dry-run # публикация
lint:
		npx eslint # eslinting