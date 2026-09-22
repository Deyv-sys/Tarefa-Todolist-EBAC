import { useRecoilState } from 'recoil';
import { tasksAtom } from '../atoms/tasksAtom';

function TaskItem({ task }) {
	const [tasks, setTasks] = useRecoilState(tasksAtom);

	function toggleTask() {
		setTasks(tasks.map((item) => (
			item.id === task.id ? { ...item, completed: !item.completed } : item
		)));
	}

	function removeTask() {
		setTasks(tasks.filter((item) => item.id !== task.id));
	}

	return (
		<li className={`task-item ${task.completed ? 'is-completed' : ''}`}>
			<label>
				<input type="checkbox" checked={task.completed} onChange={toggleTask} />
				<span>{task.text}</span>
			</label>
			<button className="task-item__remove" type="button" onClick={removeTask}>
				Excluir
			</button>
		</li>
	);
}

export default TaskItem;
