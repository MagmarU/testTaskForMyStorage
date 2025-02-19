export const tasksTableColumns = [
    {name: '#', uid: 'userId', references: ['id']},
    {name: 'username', uid: 'user', references: ['name', 'email']},
    {name: 'to-do count', uid: 'counter', references: []},
]; 