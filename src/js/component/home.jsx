import React, {useState} from "react";

//create your first component
const Home = ({seconds}) => {
	let ones = Math.floor(seconds % 10);
	let tens = Math.floor(seconds / 10) % 10;
	let hundreds = Math.floor(seconds / 100) % 10;
	let thousands = Math.floor(seconds / 1000) % 10;
	let tensOfAThousand = Math.floor(seconds / 10000) % 10;
	let hundredsOfAThousand = Math.floor(seconds / 100000) % 10;
	
	return (
		<>
		<div>
			<h1 style={{color: "white"}}>Seconds counter:</h1>
		</div>
		<div id="simpleCounter" className="d-flex">
			<div className="digit">🕜</div>
			<div className="digit">{hundredsOfAThousand}</div>
			<div className="digit">{tensOfAThousand}</div>
			<div className="digit">{thousands}</div>
			<div className="digit">{hundreds}</div>
			<div className="digit">{tens}</div>
			<div className="digit">{ones}</div>
		</div>
		</>
	);
};

export default Home;
