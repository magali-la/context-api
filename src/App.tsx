import { useContext } from 'react'
import './App.css'
import FilterButtons from './components/FilterButtons'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  // import theme context - use non null for ts error
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <div>
      <div className='flex flex-col gap-4 rounded-2xl bg-amber-100 border-2 border-amber-200 py-4 px-6 dark:bg-blue-950 dark:border-blue-900'>
        {/* title and toggle button */}
        <div className='flex flex-row gap-20 items-center'>
          <h1 className='text-2xl! font-semibold dark:text-white'>To-do App Context API Demo</h1>
          {/* toggle theme, and update the text */}
          <button className='bg-[#1A1A1A]! text-white dark:bg-[#f9f9f9]! dark:text-blue-950' aria-label='toggle light or dark mode' onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
        <hr className='text-gray-400'/>
        {/* input and add button */}
        <section aria-label='add todo item section' className='w-full'>
          <TodoInput/>
        </section>
        {/* filters */}
        <FilterButtons/>
        {/* list w empty state */}
        <TodoList />
      </div>
    </div>
  )
}

export default App
