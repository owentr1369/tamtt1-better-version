import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

type CourseGoal = {
  goals: CGoal[];
  handleDeleteGoal: (id: number) => void;
};

const CourseGoalList = (props: CourseGoal) => {
  if (props.goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>No goals found. Maybe add one?</p>
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (props.goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        <p>Too many goals. Delete some.</p>
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              handleDeleteGoal={props.handleDeleteGoal}
              id={goal.id}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
