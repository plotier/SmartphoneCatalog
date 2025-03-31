import React from "react";

const ResultsLength = ({
	results,
}: {
	results: number;
}) => {
	return (
		<p>{`${results} ${
			results === 1 ? "RESULT" : "RESULTS"
		}`}</p>
	);
};
export default ResultsLength;
