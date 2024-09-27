const CourseGoal = ({ title, description }: {
    title: string,
    description: string
}) => {
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