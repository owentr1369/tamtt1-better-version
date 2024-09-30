import { type PropsWithChildren } from "react"


type CourseGoalProps = PropsWithChildren<{ title: string, id: number, handleDeleteGoal: (id: number) => void }>


const CourseGoal = ({ title, id, children, handleDeleteGoal }: CourseGoalProps) => {

    const onDelete = (id: number) => {
        handleDeleteGoal(id)
    }
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <div>
                    {children}
                </div>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default CourseGoal