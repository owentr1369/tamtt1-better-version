import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header'
import goalsImg from './assets/react.svg'
import { useState } from 'react'

type CourseGoal = {
  title: string,
  description: string,
  id: number
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = { title: 'Learn React + TS', description: 'Learn it in depth', id: Math.random() }
      return [...prevGoals, newGoal]
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={() => handleAddGoal()}>Add Goal</button>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>

      {/* <CourseGoal title='Learning React with TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal> */}
    </main>
  )
}

export default App
