import { selector } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';
import { tasksAtom } from '../atoms/tasksAtom';

export const filteredTasksSelector = selector({
	key: 'filteredTasksSelector',
	get: ({ get }) => {
		const tasks = get(tasksAtom);
		const filter = get(filterAtom);

		if (filter === 'completed') {
			return tasks.filter((task) => task.completed);
		}

		if (filter === 'pending') {
			return tasks.filter((task) => !task.completed);
		}

		return tasks;
	},
});
