import { action } from 'easy-peasy';
import ICountStore from './ICountStore';

const countStore: ICountStore = {
    count:0,
    setCount:action((state, payload)=>{
        state.count = payload;
    }),
}

export default countStore;
