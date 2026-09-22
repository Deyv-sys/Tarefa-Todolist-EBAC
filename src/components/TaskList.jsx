import { useRecoilValue } from 'recoil';
import { filteredTasksSelector } from '../selectors/filteredTasksSelector';
import TaskItem from './TaskItem';

function TaskList() {
	const tasks = useRecoilValue(filteredTasksSelector);

	if (tasks.length === 0) {
		return <p className="empty-state">Nenhuma tarefa neste filtro.</p>;
	}

	return (
		<ul className="task-list">
			{tasks.map((task) => <TaskItem key={task.id} task={task} />)}
		</ul>
	);
}

export default TaskList;
