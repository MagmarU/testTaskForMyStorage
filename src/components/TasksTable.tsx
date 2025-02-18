import { observer } from "mobx-react-lite";
import { tasksTableColumns } from "../utils/consts";
import { useContext } from "react";
import { Context } from "..";
import { toJS } from "mobx";

const TasksTable: React.FC = observer(() => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Компонент должен использоваться внутри Context.Provider');
    }
    const { taskStore, userStore } = context;
    const tasks = taskStore.tasks;
    return (
        <>
            <table className="min-w-max">
                <thead><tr>
                    {tasksTableColumns.map((column) => (
                        <th key={column.uid}>
                            {column.name.toUpperCase()}
                        </th>
                    ))}
                </tr></thead>
                <tbody>
                    {userStore.users.map((item) => (
                        <tr key={item.id}>
                            {tasksTableColumns.map((column) => {
                                console.log(toJS(tasks[item.id]));
                                return (
                                    <td key={column.uid}>
                                        {tasks[item.id] || "-"}
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