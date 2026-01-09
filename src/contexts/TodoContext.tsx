import React, { createContext, useEffect, useReducer } from "react";
import type { Todo, TodoContextType, TodoDispatchContextTypes } from "../types";

// create two contexts - one for the data and one for the functions to manipulate the data
export const TodoContext = createContext<TodoContextType | null>(null);
export const TodoDispatchContext = createContext<TodoDispatchContextTypes | null>(null);

// reducer function - it's going to handle state changes based on whatever action was dispatched using switch statements
export function todoReducer(state: Todo[], action: any): Todo[] {
    // check action triggered run something via switch statements
    switch(action.type) {
        case 'ADD_TODO': {
            // add a new todo to an array by spreading the old todos and appending w the id, text, and completed boolean / payload refers to anything that isn't the type defined in the providers dispatch object
            return [...state, {id: Date.now(), text: action.payload, completed: false}];
        }
        case 'TOGGLE_TODO': {
            // set the item that matches its ID as completed and overwrite the state array or the array of todos Todo[]
            return state.map((todo) => {
                // payload in this context via the provider is the id of the item clicked
                if (todo.id === action.payload) {
                    // return the found todo item object and switch the completed status from whatever it is
                    return {...todo, completed: !todo.completed};
                } else {
                    // return any todos that don't have the id or weren't clicked
                    return todo;
                }
            });
        }
        case 'DELETE_TODO': {
            // delete the todo filtering and keeping every todo item that doesn't match that id - payload refers to the id of the thing clicked
            return state.filter((todo) => todo.id !== action.payload);
        }
        case 'EDIT_TODO':{
            // edit the field of the todo item by mapping, then editing the text field of the todo - return nonmatching todos as is
            return state.map((todo) => {
                // payload refers to the id in the payload obj in the provider to find a match
                if (todo.id === action.payload.id) {
                    return {...todo, text: action.payload.text};
                } else {
                    return todo;
                }
            });
        }
        case 'CLEAR_TODO': {
            // filter out todos that don't have completed status
            return state.filter(todo => todo.completed === false);
        }
        default:
            return state;
    }
}

// Provider for TodoContext
export function TodoProvider({ children }: { children: React.ReactNode }) {
    // useReducer to manage state of the todos array with the dispatch functions - the default is set to an empty array, set initializer function to retrieve from local storage
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            return JSON.parse(storedTodos);
        } else {
            return [];
        }
    });

    // save anything to local w useEffect if todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // Dispatch action ADD_TODO
    function addTodo(text: string) {
        console.log('Adding new todo:', text);

        // dispatch the action citing the type and the text that was added
        dispatch({ 
            type: 'ADD_TODO', 
            payload: text 
        });
    };

    // Dispatch action TOGGLE_TODO
    function toggleTodo(id: number) {
        console.log('Toggling completed status of todo item: ', id);

        // dispatch the action citing the type and the payload refers to the id number of the thing clicked
        dispatch({ 
            type: 'TOGGLE_TODO', 
            payload: id
        });
    };

    // Dispatch action DELETE_TODO
    function deleteTodo(id: number) {
        console.log('Deleting todo item: ', id);

        // dispatch the action citing the type and payload refers to the id of the thing clicked
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    };

    // Dispatch action EDIT_TODO 
    function editTodo(id: number, newText: string) {
        console.log('Edited todo item to: ', newText);

        // dispatch the action citing the id of the thing clicked and its new input text that was saved via save button in the UI
        dispatch({
            type: 'EDIT_TODO',
            payload: {
                id,
                text: newText
            }
        });
    };

    // Dispatch action CLEAR_TODO 
    function clearCompleted() {
        console.log('Clearing all completed tasks');

        // dispatch the action by citing the type - we don't need anything else bc we just need to check the completed value for all the tasks and get rid of them
        dispatch({type: 'CLEAR_TODO'});
    }

    // write objects which will serve as the values actually exported from the context to be used in other components - split by context and dispatch actions
    const value: TodoContextType = {
        todos
    }
    const dispatchValue: TodoDispatchContextTypes = {
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted
    }

    return (
        // wrap the contexts around children which is App 
        <TodoContext value={value}>
            <TodoDispatchContext value={dispatchValue}>
                {children}
            </TodoDispatchContext>
        </TodoContext>
    )
}