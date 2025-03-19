import { Notepad } from "../types";
import { readFileSync } from 'fs';

export default async function HomePage() {
  const notepads = await getNotepads()

  return <main>
    <h1>Rule of Three</h1>    
    <ul>
      {notepads.map(notepad => <li key={notepad.id}><a href={`/notepad/${notepad.id}`}>{notepad.name}</a></li>)}
    </ul>
  </main>
}

async function getNotepads(): Promise<Notepad[]> {
  const file = readFileSync('./private/db.json', 'utf-8');
  return JSON.parse(file) as Notepad[];
}

export const getConfig = async () => {
  return { render: 'dynamic' } as const;
};
