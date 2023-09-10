# TrackIt

FrontEnd application developed in ReactJs for routine activities management. Here, you can organize your daily routine and activities by day and track it all in one aplication!

Try it out now on the application deploy: https://projeto11-trackit-murex-gamma.vercel.app/ <br/> <br/>

## About

- [x] I used ContextAPI resources for managing global states, such as the logged-in user and daily progress, to avoid state handling issues.
- [x] The Login screen (route `/`) uses the `react-loader-spinner` library for the loading phase.
- [x] The Registration screen (`/cadastro`) is implemented.
- [x] User information is displayed at the top.
- [x] In the menu, the "Today" button (route `/hoje`) displays a circular progress bar indicating the user's habit completion percentage using the `react-circular-progressbar` library.
- [x] The "Habits" screen (route `/habitos`) loads user habits through an Axios request to a private API.
- [x] The "Today" screen (route `/hoje`) loads all habits registered for the corresponding day using the `dayjs` library.

## Installation

```bash
$ git clone https://github.com/CleiverCoelho/trackit
$ cd trackit
$ npm install
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
