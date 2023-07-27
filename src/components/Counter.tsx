import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			{count}

			<button
				className={classes.green}
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Inc
			</button>
		</div>
	);
};
