# ToDo List

A simple toDo list built with React. Add tasks, mark them complete, and remove
them from the list.

## Features

- Add tasks with the input field. Empty entries are ignored.
- Click a task to toggle its completed state.
- Remove a task with the × button.
- Starts with a few sample tasks so the list is populated on launch.

Tasks are stored in the app's in-memory state. They are not saved between page
reloads.

## Requirements

- Node.js and npm

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page
reloads when you edit the source.

## Available scripts

| Command         | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| `npm start`     | Start the development server.                                           |
| `npm test`      | Run the test runner in watch mode.                                      |
| `npm run build` | Create an optimized production build in `build/`.                       |
| `npm run eject` | Expose the Create React App configuration. This is a one-way operation. |

## Project structure

- `src/App.js` renders the `ToDoList` component.
- `src/toDoList.js` manages toDo state with `useReducer` and passes the state and dispatch function to its child components through props.
- `src/components/InputList.js` renders the toDo input form.
- `src/components/MonitorList.js` renders and manages the displayed toDo items.
- `src/App.css` styles the list.
- `src/index.js` mounts the React app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
