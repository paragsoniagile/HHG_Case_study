import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "./list";
import { createUser } from "../../actions/apiActions";

let AddUser: React.FC = () => {
	let initialVal: User = { email: "", name: "", position: "" };

	let [formValue, setFormValue] = useState<User>(initialVal);

	let [submitDisable, setSubmitDisable] = useState<boolean>(true);

	let handleChange = (e: any, field: keyof { [x: string]: User }) => {
		setFormValue({ ...formValue, [field]: e.target.value });
	};

	let handleSubmit = (e: any) => {
		e.preventDefault();
		setSubmitDisable(true);

		createUser(formValue).then((res: User) => {
			setFormValue(initialVal);
		});
	};

	useEffect(() => {
		if (formValue.name && formValue.email && formValue.position) {
			setSubmitDisable(false);
		} else {
			setSubmitDisable(true);
		}
	}, [formValue]);

	return (
		<>
			<section className="page-section">
				<div className="container">
					<nav className="mb-4 p-3 border-bottom">
						<Link
							to="/users"
							className="text-info text-underline"
						>
							<ins>Users</ins>
						</Link>
					</nav>
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="col-md-6 form-group">
								<label className="w-100 mb-0">
									Name:
									<input
										className="form-control"
										name="name"
										type="text"
										value={formValue.name}
										onChange={(e) =>
											handleChange(e, "name")
										}
									/>
								</label>
							</div>
							<div className="col-md-6 form-group">
								<label className="w-100 mb-0">
									Email:
									<input
										className="form-control"
										name="email"
										type="text"
										value={formValue.email}
										onChange={(e) =>
											handleChange(e, "email")
										}
									/>
								</label>
							</div>
							<div className="col-md-6 form-group">
								<label className="w-100 mb-0">
									Position:
									<input
										className="form-control"
										name="position"
										type="text"
										value={formValue.position}
										onChange={(e) =>
											handleChange(e, "position")
										}
									/>
								</label>
							</div>
						</div>
						<button
							type="submit"
							disabled={submitDisable}
							className="btn btn-success"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default AddUser;
