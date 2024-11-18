import { BOARD, COLUMN_SCHEMA, TASK_SCHEMA } from './typeSchema';

export const task : TASK_SCHEMA[] = [{
    id : "task_1",
    taskHead : "AWS explore",
    description : "today task"
}]

export const column : COLUMN_SCHEMA[] = [{
    id : "column_1",
    columnName : "todo",
    task : task
}]

export const boards : BOARD[] = [{
    id : "board_1",
    boardName : "advait",
    columns : column
}]

 