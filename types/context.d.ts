export interface GlobalState {
    cart: Product[];
    search: string;
    resultsLength: number;
}

export interface GlobalContextType {
    state: GlobalState;
    dispatch: React.Dispatch<GlobalAction>;
}
