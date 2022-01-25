import createApiRequestWatcher from "../../../utils/createAPIRequestSaga";
import { movieActions } from "../constants";

export const fetchMovieWatcher = createApiRequestWatcher(movieActions);
