const OK = 200;
const NO_CONTENT = 204;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const regEx = /^https?:\/\/(?:www\.)?[-a-zA-z0-9:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-z0-9()@:%_\\+.~#?&/=]*)$/;

module.exports = {
  OK,
  NO_CONTENT,
  BAD_REQUEST,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
  regEx,
};
