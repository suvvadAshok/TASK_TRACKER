export type BOARD = {
    id: string;
    boardName : string;
    columns : COLUMN_SCHEMA[];
}

export type COLUMN_SCHEMA = {
    id : string;
    columnName : string;
    task : TASK_SCHEMA[];
}

export type TASK_SCHEMA = {
    id : string;
    taskHead : string;
    description : string;
    // users : USER_SCHEMA[];
    // activity : ACTIVITY_SCHEMA[];
}

export type USER_SCHEMA = {
    id : string;
    name : string;
    mail : string;
}

export type ACTIVITY_SCHEMA = {
    id : string;
    activity : string;
}