This project was bootstrapped with [Create React App].

## ToDo App

A basic react todo app.
You can view the app [here](https://stark-brook-21511.herokuapp.com/).

In the project directory, you can run:

### Structure
Component Structure
![Component Structure](https://github.com/adimyth/todo/blob/master/public/component_structure.jpg)

### Run localy
Clone the repo then run
```bash
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment
```
npm run build
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```
