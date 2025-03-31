"use client";
import React, {
	createContext,
	useReducer,
	ReactNode,
} from "react";
import { CartProduct } from "../types/product";
import {
	GlobalState,
	GlobalContextType,
} from "../types/context";

type GlobalAction =
	| { type: "ADD_TO_CART"; payload: CartProduct }
	| { type: "REMOVE_FROM_CART"; payload: string }
	| { type: "SET_SEARCH"; payload: string }
	| { type: "SET_RESULTS_LENGTH"; payload: number };

const initialState: GlobalState = {
	cart: [],
	search: "",
	resultsLength: 0,
};

const globalReducer = (
	state: GlobalState,
	action: GlobalAction
): GlobalState => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(
					(item) => item.id !== action.payload
				),
			};
		case "SET_SEARCH":
			return { ...state, search: action.payload };
		case "SET_RESULTS_LENGTH":
			return { ...state, resultsLength: action.payload };
		default:
			return state;
	}
};

export const GlobalContext = createContext<
	GlobalContextType | undefined
>(undefined);

export const GlobalProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [state, dispatch] = useReducer(
		globalReducer,
		initialState
	);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
