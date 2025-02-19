import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { tasksTableColumns } from "../utils/consts";
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
            <div className="overflow-hidden rounded-lg border-[1px] border-border-color">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="h-8">
                            {tasksTableColumns.map((column) => (
                                <th
                                    key={column.uid}
                                    className={
                                        `text-start bg-white-color-opacity-4 text-[8px] sm:text-xs leading-[10px] sm:leading-[15px] text-white-color-opacity-30
                                        ${column.uid === 'userId' ? 'w-[37px] sm:w-[47px] !text-center' : column.uid === 'counter' ? 'w-[86px] sm:w-[168px]' : 'flex-1'}`
                                    }
                                >
                                    {column.name.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => (
                            <tr key={item.id}>
                                {tasksTableColumns.map((column) => {
                                    let content: any = 'N/A';

                                    if (column.uid === 'userId') {
                                        content = <span>{item.id}</span>;

                                    } else if (column.uid === 'user') {
                                        content =
                                            <div className="flex gap-4 items-center">
                                                <div className="w-max h-max flex bg-white-color-opacity-4 border-border-color border-[1px] p-1.5 sm:p-[9px] rounded-full">
                                                    <UserIcon className=" w-3.5 h-3.5 sm:w-5 sm:h-5" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                    <span className="text-white-color-opacity-40 text-[10px] sm:text-xs leading-3 sm:leading-[15px]">
                                                        {item.email}
                                                    </span>
                                                </div>
                                            </div>;

                                    } else if (column.uid === 'counter') {
                                        content = <span className="">
                                            {tasks[item.id] ? tasks[item.id].length : 0}
                                        </span>;
                                    }
                                    return (
                                        <td
                                            key={column.uid}
                                            className={`
                                                py-5 px-2 border-b border-white-color-opacity-10 text-xs sm:text-base leading-[15px] sm:leading-[19px]
                                                ${column.uid === "userId" ? "text-center" : ""}
                                                `}
                                        >
                                            {content}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
});

export default TasksTable;
