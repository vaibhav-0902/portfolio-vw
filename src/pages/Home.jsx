import React from "react";
import { Button } from "@mui/material";

const Home = () => {
	return (
		<>
			<div className="home-page">
				<h1>
					Hi, I am <span className="name">Vaibhav Waghela.</span>
				</h1>
				<h2 className="profession">I am a FrontEnd developer.(ReactJS)</h2>
				<p className="desc">
					My self <b>Vaibhav Waghela</b>. I am from <b>Patan, Gujarat.</b><br />
					Currently I am studying BE in <b>Computer Science and Engineering</b> at <b>Government Engineering College, Patan.</b><br />
					I have better knowledge of <b>C programming language, Java, Python, JavaScript.</b> <br /> And I also have a good knowledge of D<b>ata Structures DBMS, and Computer Networks.</b><br /> I have done Projects in <b>JavaScript.</b> <br />
					In future I am interested in working with <b>ReactJS</b> and <b>JavaScript's different Libraries/Frameworks.</b>
				</p>
				<div className="container">
					<a
						href="https://drive.google.com/file/d/1Z1Vp93c-FU447JC8Cx4xKWz9zyqfTEQn/view?usp=sharing" target="_vaibhav"
						style={{ textDecoration: "none" }}
					>
						<Button variant="contained" sx={{ margin: "5px auto 20px auto" }}>
							Resume
						</Button>
					</a>
					<div className="links">
						<a href="https://github.com/vaibhav-0902" target="_vaibhav">
							GitHub
						</a>
						<a href="https://www.linkedin.com/in/vaibhav-waghela-017292213" target="_vaibhav">LinkedIn</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
