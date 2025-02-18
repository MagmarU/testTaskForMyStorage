import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TaskStore from './store/taskStore';
import { ContextType } from './utils/interfaces';
import UserStore from './store/userStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext<ContextType | null>(null);
const taskStore = new TaskStore();
const userStore = new UserStore();

root.render(
  <Context.Provider value={{
    taskStore: taskStore,
    userStore: userStore,
  }}
  >
    <App />
  </Context.Provider>
);