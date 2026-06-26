.PHONY: install dev build start lint clean run preview help

help:
	@echo "RTB0 website — available targets:"
	@echo "  make install   Install npm dependencies"
	@echo "  make dev       Start development server"
	@echo "  make run       Alias for make dev"
	@echo "  make build     Build static site to out/"
	@echo "  make preview   Serve out/ locally (requires: npm run build)"
	@echo "  make lint      Run ESLint"
	@echo "  make clean     Remove build artifacts"
	@echo "  make clean-all Remove build artifacts and node_modules"

install:
	npm install

dev run:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

preview: build
	npx serve out

clean:
	rm -rf .next out

clean-all: clean
	rm -rf node_modules
