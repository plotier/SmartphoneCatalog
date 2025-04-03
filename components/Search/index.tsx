"use client";

import TextInput from "@/components/ui/TextInput";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import ResultsLength from "../ui/ResultsLength";
import Icon from "@/components/ui/Icon";
import styles from "./search.module.css";

const Search = () => {
	const { state, dispatch } = useGlobalContext();

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = event.target.value;
		dispatch({ type: "SET_SEARCH", payload: value });
	};

	const clearSearch = () => {
		dispatch({ type: "SET_SEARCH", payload: "" });
	};

	return (
		<div className={styles.container}>
			<div className={styles.inputWrapper}>
				<TextInput
					value={state.search}
					onChange={handleChange}
					placeholder="Search for a smartphone..."
				/>
				{state.search && (
					<button
						className={styles.clearButton}
						onClick={clearSearch}
					>
						<Icon
							name={"cross"}
							width={8}
							height={17}
						/>
					</button>
				)}
			</div>
			<ResultsLength results={state.resultsLength} />
		</div>
	);
};

export default Search;
