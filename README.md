# schedule_calendar

## ABOUT

This app is a simple schedule meeting calendar. It consists of two screens: main screen with calendar and screen with a form.
Main screen contains filter, "Create event+" button and calendar table. Second screen contains form with fields: "Name of Event", "Participants", "Day", "Time".

### How to work with app

**To create new event** click "Create event+" button and you will be redirected to a screen with form. Fill all fields of the form and click "Create" button. If you don't want to create event - click "Cancel" button. Note that all the fields of the form must be filled, otherwise an error will be shown on the screen. An error will also be shown if the current time slot is already booked.

**To delete event** click on the button in the form of cross in the cell with event you would like to delete. A modal window will appear to confirm your decision. Click "Yes" button to permanently delete event or "No" button - to discard your decision.

**To filter events by participants** click on the select element near the title "Filter events by participant's name:". In the dropdown list you will see all participants that are currently involved in planned events. Click on the name you would like to filter and the app will automatically update calendar's view and show you events filtered on the chosen person.

## DEPLOY

The app has been deployed both to gh-pages and Heroku.  
**[GH-PAGES](https://tomatguitar.github.io/schedule_calendar/dist/)**

**[HEROKU](https://schedule-calendar-app.herokuapp.com/calendar)**

**If you want to run app locally on your machine, please, follow next steps:**

### DOWNLOAD

Clone repository with the command:
`$ git clone git@github.com:tomatguitar/schedule_calendar.git`

Switch to `develop` branch:
`$ git checkout develop`

Please make sure that your file is unpacked in a Web-accessible
directory.
After downloading you will see the following directories and files:

- /config
- /dist
- /server
- /src
- .babelrc
- .editorconfig
- .eslintignore
- .eslintrc.json
- .gitignore
- .prettierrc
- .stylelintrc.json
- package.json
- package-lock.json
- postcss.config.js
- README.md

### PREPARATION

Check that you have node and npm installed in terminal.
`$ node -v`
`$ npm -v`

If you doesn't have packages follow the instructions on this [link](https://nodejs.org/en/download/package-manager/).

## RUN

Run project with the command
`$ npm run dev`

The app should automatically open in new Chrome Tab.

**Enjoy!**

