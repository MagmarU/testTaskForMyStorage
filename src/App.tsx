import { useContext, useEffect } from "react";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import TasksTable from "./components/TasksTable";

const App: React.FC = observer(() => {

  const context = useContext(Context);
  if (!context) {
    throw new Error('Компонент должен использоваться внутри Context.Provider');
  }

  const { taskStore, userStore } = context;

  useEffect(() => {
    const fetchData = async () => {
      userStore.initUsers();
      taskStore.initTasks()
        .catch(err => {
          alert(err);
        })
    }
    fetchData();
  }, []);

  // console.log(toJS(userStore.users));
  // console.log(toJS(taskStore.tasks));

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[1569px] top-20">
          <div className="flex flex-col gap-2">
            <span className="text-5xl font-bold leading-[58px]">User To-Do Table</span>
            <span className="font-normal opacity-30 leading-6">User task table for effective planning.</span>
          </div>
          <TasksTable />
        </div>
      </div>
    </>
  );
});

export default App;