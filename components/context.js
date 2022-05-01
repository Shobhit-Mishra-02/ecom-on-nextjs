import { createContext } from "react";

const cartStatus = createContext([0, () => {}]);
export const userProfileStatus = createContext([0, () => {}]);

export default cartStatus;
