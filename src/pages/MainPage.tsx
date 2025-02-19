import TasksTable from "../components/TasksTable";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="w-full">
                <div className="flex flex-col gap-2 pb-6 sm:pb-12">
                    <span className="text-2xl sm:text-5xl font-bold leading-[29px] sm:leading-[58px]">User To-Do Table</span>
                    <span className="text-xs sm:text-base font-normal text-white-color-opacity-30 leading-5 sm:leading-6">User task table for effective planning.</span>
                </div>
                <TasksTable />
            </div>
        </>
    );
};

export default MainPage;