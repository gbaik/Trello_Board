import { applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

const middleware = applyMiddleware(
  thunk,
  promise(), 
  logger
);

export default middleware;
