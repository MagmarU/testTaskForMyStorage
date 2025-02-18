import { makeAutoObservable } from "mobx";
import { userType } from "../utils/interfaces";
import { getUsers } from "../http/api";

export default class UserStore {
    private _users: userType[] | [] = [];

    constructor() {
        makeAutoObservable(this);
    }

    public get users() {
        return this._users;
    }

    private setUsers(users: userType[]) {
        this._users = users;
    }

    public async initUsers() {
        try {
            const response = await getUsers();
            this.setUsers(response);
        } catch (error) {
            throw new Error('Ошибка получения задач пользователей');
        }
    }
}