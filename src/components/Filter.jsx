import { useRecoilState } from 'recoil';
import { filterAtom } from '../atoms/filterAtom';

const filters = [
	{ value: 'all', label: 'Todas' },
	{ value: 'pending', label: 'Pendentes' },
	{ value: 'completed', label: 'Concluídas' },
];

function Filter() {
	const [activeFilter, setActiveFilter] = useRecoilState(filterAtom);

	return (
		<nav className="filters" aria-label="Filtrar tarefas">
			{filters.map((filter) => (
				<button
					className={activeFilter === filter.value ? 'is-active' : ''}
					key={filter.value}
					type="button"
					onClick={() => setActiveFilter(filter.value)}
					aria-pressed={activeFilter === filter.value}
				>
					{filter.label}
				</button>
			))}
		</nav>
	);
}

export default Filter;
