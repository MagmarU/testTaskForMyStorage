import { makeAutoObservable } from "mobx";
import { taskType } from "../utils/interfaces";
import { getTaskList } from "../http/api";

export default class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }
    private _tasks: taskType | {} = {};

    public setTasks(tasks: taskType[]) {
        console.log( tasks );
        this._tasks = tasks;
    }

    public get tasks() {
        return this._tasks;
    }

    public async initTasks() {
        try {
            const response = await getTaskList();
            this.setTasks(response);
        } catch (error) {
            throw new Error('Ошибка получения задач пользователей');
        }
    }
}
