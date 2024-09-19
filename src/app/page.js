// pages/display.js
"use client";
import { useEffect, useState } from "react";

const Display = () => {
	const [dpopData, setDpopData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/api/dpop-receiver");
			const data = await response.json();
			setDpopData(data);
		};

		fetchData();
	}, []);

	return (
		<div className="bg-red-500">
			<h1>DPoP Data</h1>
			<pre>{JSON.stringify(dpopData, null, 2)}</pre>
		</div>
	);
};

export default Display;
