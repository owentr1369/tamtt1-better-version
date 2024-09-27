import { type PropsWithChildren, type ReactNode } from "react"

// interface CourseGoalProps {
//     title: string,
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{ title: string }>
const CourseGoal = ({ title, children }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <div>
                    {children}
                </div>
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal