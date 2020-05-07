# NodeJS ToDo App

> A simple To-Do App built on a React frontend with MongoDB Atlas on the backend connected by Mongo Stitch functionality. Styled using Semantic UI React. It was built following the Stitch [todo app](https://docs.mongodb.com/stitch/tutorials/todo-overview/) tutorial with modifications for Semantic. 

---
## Requirements
To run this locally you will need:
- A MongoDB Atlas account
- A cluster with a linked Stitch application 
- Defined Rules and Schema for the collection  

*All requirements can be met by following the linked tutorial provided by MongoDB above*


## Getting Started
To get started, first clone this repository 
```git clone https://github.com/mystikdeveloped/NodeJS-ToDo-App.git```  
Once cloned you will need to install the dependencies
```npm install```  
Once installed, go to ```src/stitch/app.js``` and add your Stitch App ID to the project to connect to your MongoDB cluster
Then simply start the server  ```npm start```


## Supports
- Anonymous authentication for simple testing
- Google OAuth Authentication to save your to-do's
