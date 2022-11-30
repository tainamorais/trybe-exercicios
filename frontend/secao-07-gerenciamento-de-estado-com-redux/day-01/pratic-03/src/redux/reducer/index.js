const INITIAL_STATE = {
  test: 'Valor incial do estado passado via props',
  outroTest: 'Passando estado pela segunda props',
  count: 0,
}

const myReducer = (state = INITIAL_STATE, action) => state;

export default myReducer;