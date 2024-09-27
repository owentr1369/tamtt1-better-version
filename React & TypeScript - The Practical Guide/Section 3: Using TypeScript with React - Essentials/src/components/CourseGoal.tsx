interface CourseGoalProps {
    title: string,
    description: string
}

const CourseGoal = ({ title, description }: CourseGoalProps) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <button>Delete</button>
        </article>
    )
}

export default CourseGoal