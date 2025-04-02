import React from "react";

const ResultsLength = ({
	results,
}: {
	results: number;
}) => {
	return (
		<div>
				<p>{`${results} ${
			results === 1 ? "RESULT" : "RESULTS"
		}`}</p>
		</div>
	
	);
};
export default ResultsLength;
