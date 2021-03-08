## Instabox Assignment

Simple list web app using React, Material UI and CRA.

## Build With

* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/)
* [Create-react-app with Typescript template](https://create-react-app.dev/docs/adding-typescript/)
* [React hot toast](https://github.com/timolins/react-hot-toast)
* [Typescript](https://www.typescriptlang.org/docs/handbook/react.html)
* [Axios](https://github.com/axios/axios)
* [Axios mock adapter](https://github.com/ctimmerm/axios-mock-adapter#readme)
* [Date-fns](https://date-fns.org/)
* [Instabox API](https://demo4231066.mockable.io/orders)

### Hot to run 

Firstly we need to create our env vars for the app
```
Create on the root folder a .env file and put inside our env var which will use 
(REACT_APP_API_ENDPOINT=https://demo4231066.mockable.io/)
```
 
 After the first step we can start our main installation process.
```
cd simple-list-app
npm install
npm run start
```

### Features implemented
* Search field with on change search action
* Toaster library for notification pop ups
* Details button with modal for showing the details of the order
* Link for redirecting to google maps with the selected longitude and latitude
* Material UI used for ui components
* Debounce function implemented for handling search
* Normalize functions for dates
* Responsive design in order to hide columns on widh change based on their significance.

### Testing build with

* [Jest for React](https://jestjs.io/)
* [Enzyme for jest](https://enzymejs.github.io/enzyme/)

### Testing

For testing i have used jest framework together with enzyme to render components.
The testing was focused mostly on the basic render of the components and then on util functions that are more critical. Also most of click events and on change events have tests integrated.

Generally i believe if you have a continuous delivery pipeline you need mostly tests on the critical parts of the app. (e.g if you have a checkout you need to cover that part first)

To run the test type:

```
npm test
```

To run test with coverage run:

```
npm test -- --coverage
```