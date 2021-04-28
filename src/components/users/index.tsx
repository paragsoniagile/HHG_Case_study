import React from "react";
import { Link } from "react-router-dom";
import List from "./list";

let Users: React.FC = () => {
	return (
		<>
			<section className="page-section">
				<div className="container">
					<nav className="mb-4 p-3 border-bottom">
						<Link to="/counter" className="text-info text-underline">
							<ins>Counter</ins>
						</Link>
					</nav>
					<List />
				</div>
			</section>
		</>
	);
};

export default Users;
