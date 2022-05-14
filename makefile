install:
		npm ci # установка
brain-games:
		node bin/brain-games.js # запуск игры
brain-even:
		node bin/brain-even.js # запуск Проверка на четность
brain-calc:
		node bin/brain-calc.js # запуск Калькулятора
brain-gcd:
		node bin/brain-gcd.js # запуск Наибольший Общий Делитель НОД
brain-progression:
		node bin/brain-progression.js # запуск Прогрессия с пропуском
brain-prime:
		node bin/brain-prime.js # запуск Простое число						
publish:
		npm publish --dry-run # публикация
lint:
		npx eslint # eslinting