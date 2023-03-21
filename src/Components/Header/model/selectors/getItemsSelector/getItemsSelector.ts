import { StateSchema } from '../../../../../App/Providers/StoreProvider/config/StateSchema';


export const getItemsSelector = (state: StateSchema) => state.bookData.items;