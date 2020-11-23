import request from '../util/request';
import { message } from 'antd';

export default {
  namespace: 'articles',
  state: {
    articleList: [],
  },
  effects: {
    *queryInitArticle(_, sagaEffects) {
      const {call, put} = sagaEffects;
      const endPointURI = '/con/article';
      
      try {
        const res = yield call(request, endPointURI);
        const articleList = res.data;
        yield put({ type: 'addArticleData', payload: articleList });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      };
      
    }
  },
  reducers: {
    addArticleData(state, { payload: articleList }) {
      return {
        ...state,
        articleList,
      };
    }
  },
}