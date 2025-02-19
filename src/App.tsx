import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import MainPage from "./pages/MainPage";

const App: React.FC = observer(() => {
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(Context);
  if (!context) {
    throw new Error('Компонент должен использоваться внутри Context.Provider');
  }

  const { taskStore, userStore } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        Promise.all([userStore.initUsers(), taskStore.initTasks()])
          .then(res => {
            setLoading(false);
          })
      } catch (error) {
        console.error('Произошла ошибка с инициализацией данных', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="w-full min-h-screen flex justify-center px-10 pt-14 sm:pt-[81px] sm:pl-[79px] sm:pr-[80px]">
      <div className="w-[1569px] flex flex-col gap-4">
        <MainPage />
      </div>
    </div>
  );
});

export default App;