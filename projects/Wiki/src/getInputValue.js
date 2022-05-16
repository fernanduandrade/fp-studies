import { compose, pathOr, trim } from 'ramda';

export default compose(
  trim,
  pathOr('', ['target', 'value']),
);
