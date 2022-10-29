import { useState } from "react";
import "./styles/App.css";

const Counter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		setCount(count + 1);
	};

	const minusOne = () => {
		setCount(count - 1);
	};

	console.log("render");

	return (
		<div className="counter">
			<h1>Counter</h1>
			<div className="counter__count">{count}</div>
			<div className="counter__controls">
				<button onClick={plusOne}>Plus one</button>
				<button onClick={minusOne}>Minus one</button>
			</div>
			{console.log("render JSX")}
		</div>
	);
};

export default Counter;
