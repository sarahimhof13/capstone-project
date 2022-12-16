# Capstone Project
## Table of Contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General Info
This a full stack responsive web application for a planetary learning resource that performs CRUD operations

## Technologies
Project is created using:
* MongoDB
* Express
* React
* Node.js

## Setup 

### Prerequisites
* MongoDB
* Node ^16.15.1
* npm

To run this project, install it locally with npm. 

* In the server folder create a new file called '.env' and add your Mongo URI. Example: **MONGO_URI = mongodb+srv://<username>:<password>@cluster0.tzgj2td.mongodb.net/<databasename>**
* Add 'PORT = 4000' to the env file

open a new terminal

```
npm install
nodemon app.js
 ```
In the server folder open a new terminal

```
cd server
nodemon app.js
 ```

In the client folder open a new terminal
```
cd client
npm install
npm start
```
