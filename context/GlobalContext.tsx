"use client";
import React, {
	createContext,
	useReducer,
	ReactNode,
	useEffect,
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

const loadCartFromLocalStorage = (): CartProduct[] => {
	const storedCart = localStorage.getItem("cart");
	if (storedCart) {
		return JSON.parse(storedCart);
	}
	return [];
};

const globalReducer = (
	state: GlobalState,
	action: GlobalAction
): GlobalState => {
	switch (action.type) {
		case "ADD_TO_CART":
			const updatedCartAdd = [
				...state.cart,
				action.payload,
			];

			localStorage.setItem(
				"cart",
				JSON.stringify(updatedCartAdd)
			);
			return {
				...state,
				cart: updatedCartAdd,
			};
		case "REMOVE_FROM_CART":
			const updatedCartRemove = state.cart.filter(
				(item) => item.id !== action.payload
			);

			localStorage.setItem(
				"cart",
				JSON.stringify(updatedCartRemove)
			);
			return {
				...state,
				cart: updatedCartRemove,
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
	const [state, dispatch] = useReducer(globalReducer, {
		...initialState,
		cart: loadCartFromLocalStorage(),
	});

	useEffect(() => {
		if (state.cart.length) {
			localStorage.setItem(
				"cart",
				JSON.stringify(state.cart)
			);
		}
	}, [state.cart]);

	return (
		<GlobalContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalContext.Provider>
	);
};
