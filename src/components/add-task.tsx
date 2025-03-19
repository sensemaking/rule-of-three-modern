'use client'

import { addTask } from '../actions/add_task'

export function AddTask({ notepad }: { notepad: string }) {
    return <form action={addTask}>
        <input type='text' name='task' required />
        <input type='hidden' name='notepad' value={notepad} />
        <button type='submit'>Add Task</button>
    </form>
}