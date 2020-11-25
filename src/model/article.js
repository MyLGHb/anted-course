import * as articleService from '../service/article';
import { message } from 'antd';

export default {
  namespace: 'articles',
  state: {
    articleList: [],
    total: 0,
  },
  effects: {
    *queryInitArticle({ payload }, sagaEffects) {
      const {call, put} = sagaEffects;
      try {
        const res = yield call(articleService.queryList,payload.page,payload.size,payload.searchData);
        const articleList = res.data.rows;
        const total = res.data.total;
        yield put({ type: 'addArticleData', payload: {articleList, total} });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }; 
    },
    *addOne({ payload }, {call}) {
      try {
        const res =  yield call(articleService.add,payload);
        return res;
      } catch (e) {
        message.error('数据添加失败');
      }
    }
  },
  reducers: {
    addArticleData(state, { payload: {articleList, total} }) {
      return {
        ...state,
        articleList,
        total,
      };
    }
  },
}