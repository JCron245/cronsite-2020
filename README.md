# Resume Website

React website to reflect my current resume.

## Getting Started

To get the project up and running:

- Clone this repo: `git clone <repo url>`
- Navigate into the newly cloned repo
- Install NPM packages `npm i`
- Run project `npm start`

## Create React App:

I chose to use Create React App to scaffold the project. This quickly gives us a great collection 
of development and build tools.  

## Packages:

- [React](https://reactjs.org)
- [Feather Icons](https://feathericons.com/)
- [Bootstrap](https://getbootstrap.com/)

## Dev Tools:

- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)

## Theming:

Website has a dark and light theme.

The theme will be set initially by your OS preferred theme if available.

_how?_ - Relying on [MDN - Prefers Color Scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), and [MDN - Match Media](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)


 If no OS level preference is found it will default to the dark theme. Once you have changed the theme your choice will be stored in local storage and used to set theme on later visits.
