# Building the env
install npm and run at the root of the project:
> npm install

# Opening test runner
> npm run cy:open

-- or --

> ./node_modules/.bin/cypress open

# Running tests headless

| Browser  | Script Command           |
| -------- | ------------------------ |
| Electron | > npm run cy:run         |
| Chrome   | > npm run cy:run:chrome  |
| Firefox  | > npm run cy:run:firefox |
| Edge     | > npm run cy:run:edge    |

# Setting up a new project
New package.json
> npm init

Install Cypress
> npm install cypress --save-dev

Install Typescript
> npm install typescript --save-dev

Config Typescript
> tsc --init

Launch Cypress test runner first time to configure
> ./node_modules/.bin/cypress open
