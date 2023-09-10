# TrackIt

FrontEnd Web Mobile application developed in ReactJs for routine activities management. Here, you can organize your daily routine and activities by day and track it all in one aplication!

Try it out now on the application deploy: https://projeto11-trackit-murex-gamma.vercel.app/ <br/> <br/>

## About

- [x] I used ContextAPI resources for managing global states, such as the logged-in user and daily progress, to avoid state handling issues.
- [x] The Login screen (route `/`) uses the `react-loader-spinner` library for the loading phase.
- [x] The Registration screen (`/cadastro`) is implemented.
- [x] User information is displayed at the top.
- [x] In the menu, the "Today" button (route `/hoje`) displays a circular progress bar indicating the user's habit completion percentage using the `react-circular-progressbar` library.
- [x] The "Habits" screen (route `/habitos`) loads user habits through an Axios request to a private API.
- [x] The "Today" screen (route `/hoje`) loads all habits registered for the corresponding day using the `dayjs` library.

#
https://github.com/CleiverCoelho/trackit/assets/102709370/f429013c-b3de-4972-8e2f-8c422c514399

![Screenshot_20230910_133159_Gallery](https://github.com/CleiverCoelho/trackit/assets/102709370/694cb106-916a-4e47-a5d7-4d014db1b0bf)


## Main Technologies
<p>
    <img style='margin: 5px;' src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"/>
   <img style='margin: 5px;' src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img style='margin: 5px;' src="(https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

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
