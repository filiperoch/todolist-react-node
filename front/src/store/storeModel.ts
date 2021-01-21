import countStore from "./count";
import ICountStore from "./count/ICountStore";

interface IStoreModel {
    countStore: ICountStore
}

const StoreModel:IStoreModel = {
    countStore: countStore
}

export { StoreModel };
export type { IStoreModel };

