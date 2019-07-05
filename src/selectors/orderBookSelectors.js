import { createSelector } from "reselect";

const selectOrderBook = () => (state) => state.get("orderbook");

const makeSelectOrderBook = () =>
  createSelector(
    selectOrderBook(),
    substate => substate && substate.payload
  );

export { makeSelectOrderBook };
