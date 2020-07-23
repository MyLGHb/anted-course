// 卡片列表页面
// props 是用来传导数据的，而 state 是数据改变的源泉

/**
 * 我们删除了组件本身的 state，同时添加了 @connect(mapStateToProps)
 * connect 是连接 dva 和 React 两个平行世界的关键
 * 
 * React 有一个基本的哲学：数据映射到视图
 * 无论什么途径，我们点击按钮后，本质上都是去触发 state 的改变，state 的改变再映射回视图
 * 所以我们这里的目标就是使得每次点击按钮，触发 dva model 的中卡片数据再添加一条
 * 而在 dva 的语境中，是统一通过 dispatch 函数来做这件事情
 * 
 */

import React, { Component } from 'react';
import { Card,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}