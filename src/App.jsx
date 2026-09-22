import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Organização diária</p>
        <h1>To-do List</h1>
        <p className="subtitle">Pequenos passos, tudo sob controle.</p>
      </header>
      <TaskForm />
      <Filter />
      <TaskList />
    </main>
  );
}

export default App;