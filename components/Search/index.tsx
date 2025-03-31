"use client";

import TextInput from "@/components/ui/TextInput";
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { useState } from "react";
import ResultsLength from "../ui/ResultsLength";
import styles from "./search.module.css";

const Search = () => {
  const { state, dispatch } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    dispatch({ type: "SET_SEARCH", payload: value });
  };

  return (
    <div className={styles.container}>
      <TextInput
        value={state.search}
        onChange={handleChange}
        placeholder="Search for a smartphone..."
      />
      <ResultsLength results={state.resultsLength} />
    </div>

  );
};

export default Search;
