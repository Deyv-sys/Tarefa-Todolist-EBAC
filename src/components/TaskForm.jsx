import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tasksAtom } from '../atoms/tasksAtom';

function TaskForm() {
	const [taskText, setTaskText] = useState('');
	const [, setTasks] = useRecoilState(tasksAtom);

	function handleSubmit(event) {
		event.preventDefault();
		const text = taskText.trim();

		if (!text) {
			return;
		}

		setTasks((currentTasks) => [
			...currentTasks,
			{ id: crypto.randomUUID(), text, completed: false },
		]);
		setTaskText('');
	}

	return (
		<form className="task-form" onSubmit={handleSubmit}>
			<label htmlFor="new-task">Nova tarefa</label>
			<div className="task-form__controls">
				<input
					id="new-task"
					type="text"
					value={taskText}
					onChange={(event) => setTaskText(event.target.value)}
					placeholder="O que precisa ser feito?"
					maxLength={120}
				/>
				<button type="submit">Adicionar</button>
			</div>
		</form>
	);
}

export default TaskForm;
