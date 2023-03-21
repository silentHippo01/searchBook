import { StateSchema } from '../../../../../App/Providers/StoreProvider/config/StateSchema';


export const getCountSelector = (state:StateSchema) => state.bookData.totalItems;
