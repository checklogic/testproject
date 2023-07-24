import { useState } from 'react';
import './Counter.scss';

export const Counter = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			{count}
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Inc
			</button>
		</div>
	);
};
