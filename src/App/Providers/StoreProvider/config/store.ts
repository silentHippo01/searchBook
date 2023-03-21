import { configureStore } from '@reduxjs/toolkit';
import { bookDataReducer } from '../../../../../src/Components/Header';
import { StateSchema } from './StateSchema';


export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            bookData: bookDataReducer,
        },
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
