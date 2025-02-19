import { observer } from "mobx-react-lite";
import { tasksTableColumns } from "../utils/consts";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { toJS } from "mobx";
import { ReactComponent as UserIcon } from "../assets/icons/users.svg";

const TasksTable: React.FC = observer(() => {
    const context = useContext(Context);

    if (!context) {
        throw new Error('Компонент должен использоваться внутри Context.Provider');
    }
    const { taskStore, userStore } = context;
    const tasks = taskStore.tasks;
    const users = userStore.users;
    
    return (
        <>
            <table className="w-full">
                <thead><tr>
                    {tasksTableColumns.map((column) => (
                        <th key={column.uid} className="text-start bg-user-icon-background-color rounded-t">
                            {column.name.toUpperCase()}
                        </th>
                    ))}
                </tr></thead>
                <tbody>
                    {users.map((item) => (
                        <tr key={item.id}>
                            {tasksTableColumns.map((column) => {
                                let content: any = 'N/A';

                                if (column.uid === 'userId') {
                                    content = <span>
                                        {item.id}
                                    </span>

                                } else if (column.uid === 'user') {
                                    content =
                                        <>
                                            <div className="flex gap-4">
                                                <div className="w-max h-max bg-user-icon-background-color border-border-color border-[1px] p-2.5 rounded-full">
                                                    <UserIcon />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className="leading-[19px]">
                                                        {item.name}
                                                    </span>
                                                    <span className="opacity-40 text-xs leading-[15px]">
                                                        {item.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                } else if (column.uid === 'counter') {
                                    content = <span className="">
                                        {tasks[item.id] ? tasks[item.id].length : 0}
                                    </span>
                                }
                                return (
                                    <td key={column.uid}>
                                        {content}
                                        {/* {tasks[item.id] || "-"} */}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
});

export default TasksTable;