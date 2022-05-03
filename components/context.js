import { createContext } from "react";

// this context is for storing the value of cart update which is shown on the top of cart icon on the navbar.
const cartStatus = createContext([0, () => {}]);

// this stores the current status of the user profile, indicated wheater the user has filled address or not.
export const userProfileStatus = createContext([0, () => {}]);

export default cartStatus;
