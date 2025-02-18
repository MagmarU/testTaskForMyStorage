import TaskStore from "../store/taskStore";
import UserStore from "../store/userStore";

export interface ContextType {
  taskStore: TaskStore;
  userStore: UserStore;
}

export interface taskType {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface userType {

}

export interface taskTableColumns {
    id: number;
    username: string;
}