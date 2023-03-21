import { StateSchema } from '../../../../../App/Providers/StoreProvider/config/StateSchema';


export const getIsLoading = (state:StateSchema) => state.bookData.isLoading;
