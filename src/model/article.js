import * as articleService from '../service/article';
import { message } from 'antd';

export default {
  namespace: 'articles',
  state: {
    articleList: [],
  },
  effects: {
    *queryInitArticle({ payload }, sagaEffects) {
      const {call, put} = sagaEffects;
      try {
        const res = yield call(articleService.queryList,payload.page,payload.size,payload.searchData);
        const articleList = res.data.rows;
        yield put({ type: 'addArticleData', payload: {articleList} });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      };
      
    }
  },
  reducers: {
    addArticleData(state, { payload: {articleList} }) {
      return {
        ...state,
        articleList,
      };
    }
  },
}