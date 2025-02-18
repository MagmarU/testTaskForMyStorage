export const tasksTableColumns = [
    {name: '#', uid: 'id', references: ['id']},
    {name: 'username', uid: 'user', references: ['name', 'email']},
    {name: 'to-do count', uid: 'counter', references: []},
]; 