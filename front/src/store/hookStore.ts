import { createTypedHooks } from "easy-peasy";
import { IStoreModel } from "./storeModel";


const typedHooks = createTypedHooks<IStoreModel>();

// We export the hooks from our store as they will contain the
// type information on them

export const useStoreState = typedHooks.useStoreState;
export const useStoreActions = typedHooks.useStoreActions;
//export const useStoreDispatch = typedHooks.useStoreDispatch;
