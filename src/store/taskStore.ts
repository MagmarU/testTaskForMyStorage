import { makeAutoObservable } from "mobx";
import { taskType } from "../utils/interfaces";
import { getTaskList } from "../http/api";

export default class TaskStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _tasks: { [key: number]: taskType[] } = {};

    public setTasks(data: taskType[]) {
        data.forEach((item) => {
            this._tasks[item.userId] = [
                ...this._tasks[item.userId] || [],
                item
            ];
        });
    }

    public get tasks() {
        return this._tasks;
    }

    public async initTasks() {
        try {
            const response = await getTaskList()
            if (response) {
                this.setTasks(response);
            }
        } catch (error) {
            throw new Error(`Ошибка получения задач пользователей ${error}`);
        }
    }
}
