# The amount of time needed to do this project
30 hours

## Project Description

Two terminals are required to operate the project: one for the server and another for the viewer.
In order to connect to JSON data and perform CRUD operations on the data you provided, I utilised JSON-Server. Thus, I created a json file out of the four json files you supplied me.
You may test each page on a variety of devices and it will all be responsive. For this reason, I set up a host on port 5137 in the vite.config.js file with the IP address 0.0.0.0 so you can test on a real device if you'd like.
I thought that if the user didn't have any token, for instance, after logging in, if he manually cleared site data from the dev tools storage, he would be redirected to the login page where he would have to input his username and password in order to create an account.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Server Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start
```