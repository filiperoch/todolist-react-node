import { Action } from "easy-peasy";

export default interface ICountStore {
    count: number,
    setCount:Action<ICountStore, number>
}
