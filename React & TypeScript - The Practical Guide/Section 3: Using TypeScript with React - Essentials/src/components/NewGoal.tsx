import { useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}


const NewGoal = ({ onAddGoal }: NewGoalProps) => {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        const enteredGoal = goal.current?.value
        const enteredSummary = summary.current?.value
        event.currentTarget.reset()
        onAddGoal(enteredGoal!, enteredSummary!)
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input type="text" id="goal" name="goal" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input type="text" id="summary" name="summary" ref={summary} />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal