# TrackIt

FrontEnd application developed in ReactJs for routine activities management. Here, you can organize your daily routine and activities by day and track it all in one aplication!

Try it out now on the API deploy: https://nest-pass.onrender.com <br/> <br/>
You can also access the documentation, built using Swagger, by navigating to the `'/api'` route on the link above, clicking [here](https://nest-pass.onrender.com/api), or locally by following the steps to run the application on your machine, described below.

## Documentation
![image](https://github.com/CleiverCoelho/driven-pass/assets/102709370/2f7d9ba4-1191-4a0d-80cb-8c97e45ae550)

## About

- [x] I used PrismaORM to manage the database, migrations, and execute necessary queries.
- [x] I implemented a repository layer - outside the Nest service pattern to structure the application in layers - to handle database access.
- [x] I divided the code into modules (`@Modules`) and created one for each of the entities: Notes, Cards, Credentials, Users, Auth, separately.
- [x] For the login session on the `'users/sign-in'` route, I used JWT Token verification.
- [x] All routes, except for login and registration, are authenticated using unique user tokens.
- [x] I encrypted all sensitive data for registration and credentials stored in the database.
- [x] I have Automated Integration Tests with code coverage of over 80%, using design patterns with factories.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.




### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
