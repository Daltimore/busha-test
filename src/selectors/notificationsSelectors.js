import { createSelector } from "reselect";

const selectNotifications = () => (state) => state.get("notifications");

const makeSelectNotifications = () =>
  createSelector(
    selectNotifications(),
    substate => substate
  );

export { makeSelectNotifications };
