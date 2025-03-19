export type Task = { content: string, id: string, is_ticked: boolean, is_carried: boolean, is_removed: boolean, page_count: number }
export type Notepad = { name: string, owner_email: string, tasks: Task[], id: string, last_selected_time: string, shared_with: [] }