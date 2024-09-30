import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoal = {
    goals: CGoal[]
    handleDeleteGoal: (id: number) => void
};

const CourseGoalList = (props: CourseGoal) => {
    return (
        <ul>
            {props.goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} handleDeleteGoal={props.handleDeleteGoal} id={goal.id}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    );
};

export default CourseGoalList;
