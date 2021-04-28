import React, { useState } from "react";
import { Link } from "react-router-dom";

let initialCount: number = 0;

let Counter: React.FC = () => {
	let [count, setCount] = useState<number>(initialCount);

	return (
		<>
			<section className="page-section">
				<div className="container">
					<nav className="mb-4 p-3 border-bottom">
						<Link to="/users" className="text-info text-underline">
							<ins>Users</ins>
						</Link>
					</nav>
					<div className="mb-3">Current Count: {count}</div>
					<button
						className="btn btn-primary mr-3 mt-1"
						onClick={() => setCount(count + 1)}
					>
						Increment +1
					</button>
					<button
						className="btn btn-danger mt-1"
						onClick={() => setCount(initialCount)}
					>
						Reset
					</button>
				</div>
			</section>
		</>
	);
};

export default Counter;
