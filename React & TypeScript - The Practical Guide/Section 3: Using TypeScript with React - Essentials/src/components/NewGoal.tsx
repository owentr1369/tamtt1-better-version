import { type FormEvent } from "react"

const NewGoal = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        // const goal = event.target.goal.value
        // const summary = event.target.summary.value
        // console.log(goal, summary)
        new FormData(event.currentTarget)
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" name="goal" />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input type="text" id="summary" name="summary" />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal