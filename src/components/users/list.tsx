import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../actions/apiActions";
import Pagination from "react-js-pagination";

export interface User {
	id?: string;
	email: string;
	name: string;
	position: string;
}

export interface Paginate {
	page: number;
	limit: number;
}

let List: React.FC = () => {
	let [totalCount, setTotalCount] = useState<number>(0);
	let [users, setUsers] = useState<User[]>([]);
	let [paginate, setPaginate] = useState<Paginate>({ page: 1, limit: 5 });

	// moke api dosent proivde total count
	// while applying pagination
	// {{enablePaginate}}
	let fetchUsers = (enablePaginate: boolean) => {
		getUsers(paginate, enablePaginate)
			.then((res: User[]) => {
				if (enablePaginate) setUsers(res);
				else setTotalCount(res.length);
			})
			.catch(() => {
				setUsers([]);
			});
	};

	let pageChange = (page: number) => {
		setPaginate({ ...paginate, page });

		fetchUsers(true);
	};

	useEffect(() => {
		// moke api dosent proivde total count
		// while applying pagination
		fetchUsers(false);

		fetchUsers(true);
	}, []); // eslint-disable-line

	return (
		<>			
			<div className="table-responsive">
				<table className="table table-bordered">
					<thead>
						<tr>
							<th style={{width: "55%"}}>Name</th>
							<th>Email</th>
							<th>Position</th>
						</tr>
					</thead>
					<tbody>
						{users.map((u) => (
							<tr key={u.id}>
								<td>{u.name}</td>
								<td>{u.email}</td>
								<td>{u.position}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
            <div className="mt-2 mb-4">
				<Link to="/add" className="btn btn-primary">
					New user
				</Link>
			</div>
			<nav>
				<Pagination
					innerClass="pagination"
					itemClass="page-item"
					linkClass="page-link"
					prevPageText="&#8592;"
					nextPageText="&#8594;"
					firstPageText="&#8647;"
					lastPageText="&#8649;"
					activePage={paginate.page}
					itemsCountPerPage={paginate.limit}
					totalItemsCount={totalCount}
					pageRangeDisplayed={4}
					onChange={pageChange}
				/>
			</nav>
            
		</>
	);
};

export default List;
