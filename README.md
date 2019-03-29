# 📙 AN ACCORDION REUSABLE COMPONENT WITH VANILLA JS AND SCSS

[Demo](https://ivanmlaborda.github.io/vanilla-js-accordion/)

This is a handmade accordion component developed with ES6 JS and SCSS SUIT convention.
The project is bundled with Webpack and transpiled with Babel

To run the project, clone and run:

```
yarn
```
or
````
npm install
````
and then

```
npm start
```
`Iy you encounter any problems while running the command above try with Node version 10.14.2`

---

The component is packaged with few tests.
  - Unit: testing the service with Jest
    ```
    npm run test:jest
    ```


  - Integration: testing the api with Jest
    ```
    npm run test:jest
    ```

  - Acceptance criteria: testing the product requirements with Cypress
    ```
    npm run test:jest
    ```

---

### USAGE:

Create as many accordions as you want.
You only need to instantiate the class Accordion passing a parameter indicating a selector where you desire to put the accordion.
```
const myAccordion = new Accordion('#root')
```

Once instantiated you can pass new terms to the accordion. To achieve this you need to call the addTo method to the instance and pass an array data following the next structure.
```
const data = [
  {
    "term": "Section 4 - AJAX",
    "description": "Section 4 Content..."
  },
  {
    "term": "Section 5 - AJAX",
    "description": "Section 5 Content..."
  }
]

myAccordion.addTo(data)
```

