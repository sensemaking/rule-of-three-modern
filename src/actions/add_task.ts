'use server'

import { readFileSync, writeFileSync } from 'fs'
import { Notepad } from '../types';

export async function addTask(formData: FormData) {
    const file = readFileSync('./private/db.json', 'utf-8');
    const notepads = JSON.parse(file) as Notepad[];
    const notepadIndex = notepads.findIndex(n => n.id === formData.get('notepad'));
    notepads[notepadIndex]!.tasks.push({ content: formData.get('task')! as string, id: Math.random().toString(), is_ticked: false, is_carried: false, is_removed: false, page_count: 0 });
    writeFileSync('./private/db.json', JSON.stringify(notepads));
}