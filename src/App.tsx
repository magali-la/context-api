import './App.css'
import FilterButtons from './components/FilterButtons'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {

  return (
    <div>
      <div className='flex flex-col gap-4 rounded-2xl bg-amber-100 border-2 border-amber-200 py-4 px-6'>
        {/* title and toggle button */}
        <div className='flex flex-row gap-20 items-center'>
          <h1 className='text-2xl! font-semibold'>To-do App Context API Demo</h1>
          <button aria-label='toggle light or dark mode'>Toggle Mode</button>
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
