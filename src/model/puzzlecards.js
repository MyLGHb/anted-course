/**
 * 注意 dva model 的定义。一个基本的 dva model 最少具备两个成员：namespace 和 state。
 * namespace 来作为一个 model 的唯一标识，state 中就是该 model 管理的数据。
 */

import request from '../util/request';

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const {call, put} = sagaEffects;
      const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      
      
      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });
      
      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};