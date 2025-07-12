

const products = [
	{ id: 'qwe', name: 'Чайник' },
	{ id: 'asd', name: 'Утюг' },
];

export const MyComponent = () => {
	return (
		<ul>
			{products.map(({ id, name }) => (
				<li key={id}>{name}</li>
			))}
		</ul>
	);
};
