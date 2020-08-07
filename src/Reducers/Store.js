import { createStore } from "redux";
import rootReducer from "./rootreducers";

export const store = createStore(rootReducer);
