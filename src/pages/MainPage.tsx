import TasksTable from "../components/TasksTable";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="w-max mt-[81px]">
                <div className="flex flex-col gap-2">
                    <span className="text-5xl font-bold leading-[58px]">User To-Do Table</span>
                    <span className="font-normal opacity-30 leading-6">User task table for effective planning.</span>
                </div>
                <TasksTable />
            </div>
        </>
    );
};

export default MainPage;