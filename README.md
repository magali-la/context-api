# React + TypeScript Context API

## Description
This to-do application demonstrates the use of three context APIs (Todo management, Theme, Filter) to avoid prop drilling.

## Tech Stack
### Languages
- JavaScript
- TypeScript
- HTML/CSS

## Libraries
- React
- TailwindCSS

## Build
- Vite
- Netlify

## Features
1. Users can add new todo items, edit them, and delete them
2. Conditional button text for edit and save button dependent on `isEditing` state
3. TodoContext and TodoDispatch contexts to avoid prop drilling and memory leaks
4. Light/Dark mode toggle
5. Filtering todos by status
6. Clear all completed todos

## Reflections
### Lessons Learned
- Splitting contexts into data and dispatch contexts can improve performance and clarity
- useReducer is better for complex state management than useState
- Function initializers in useState help prevent UI flashing on load
- TypeScript with Context requires proper typing to catch errors early

### Challenges
**Setting up Providers and Contexts**

The biggest challenge was learning how to set up providers and contexts in a scalable way. While a todo app is quite simple, I wanted to follow best practices with setting up contexts and providers while ensuring type safety with TypeScript. One of the steps I took was reviewing the documentation from React as well as looking at blogs and examples to fill in the blanks regarding using TypeScript to implement the `TodoContext`. This helped me get in the right direction in properly typing contexts, and splitting the data contexts and dispatch contexts to aide in comprehension. I followed the docs to keep the reducer and providers, and I'm looking forward to learning best practices in file structure when working with contexts.

## Resources
For assistance in following React best practices when building contexts - data context vs function context done separately
https://react.dev/learn/scaling-up-with-reducer-and-context

For assistance in syntax for TypeScript contexts - how to set defaults to null
https://blog.logrocket.com/how-to-use-react-context-typescript/
https://medium.com/@jameshunt.co/a-typescript-todo-app-using-the-context-api-within-react-f135d18e1620