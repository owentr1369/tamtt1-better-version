import "./App.css";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Learn React + TS",
        description: "Learn it in depth",
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      {/* <button onClick={() => handleAddGoal()}>Add Goal</button> */}
      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
