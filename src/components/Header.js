import React from "react";
import headerImg from "../img/first.svg";

const Header = () => {
	return (
		<div className="header">
			<div className="header-container">
				<div className="header-text">
					<h1>
						Eliminating the <br /> <span className="lang">Language</span>{" "}
						Barrier
					</h1>
					<p>
						Travelling the world and meeting people is fun until you cannot
						effectively communicate with them. We are here to proffer solution
						to this barrier. Excited? then be the first to know when we launch.
					</p>
					<div className="input">
						<input type="text" />
						<input type="submit" value="Join the waiting list" />
					</div>
				</div>
				<div className="header-img">
					<img src={headerImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
