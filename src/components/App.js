import React from "react";
import Nav from "./Nav";
import Parent from "./Parent";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Parent hogs={hogs} />
		</div>
	);
}

export default App;
