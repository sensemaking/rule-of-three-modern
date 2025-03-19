import type { PageProps } from 'waku/router'
import { Notepad } from '../../types'
import { readFileSync } from 'fs';
import { AddTask } from '../../components/add-task';

export default async function NotepadPage({ id }: PageProps<'/notepad/[id]'>) {
    const notepad = await getNotepad(id)

    return <main>
        <h1>{notepad.name}</h1>
        <ul>
            {notepad.tasks.map(task => <li key={task.id}>{task.content}</li>)}
        </ul>
        <AddTask notepad={notepad.id} />
    </main>
}

async function getNotepad(id : string) : Promise<Notepad> {
    const file = readFileSync('./private/db.json', 'utf-8');
    const notepads = JSON.parse(file) as Notepad[];
    return notepads.find(notepad => notepad.id === id) as Notepad;
}