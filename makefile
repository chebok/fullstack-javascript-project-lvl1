install:
		npm ci # установка
brain-games:
		node bin/brain-games.js # запуск игры
brain-even:
		node bin/brain-even.js # запуск Проверка на четность
brain-calc:
		node bin/brain-calc.js # запуск Калькулятора		
publish:
		npm publish --dry-run # публикация
lint:
		npx eslint # eslinting