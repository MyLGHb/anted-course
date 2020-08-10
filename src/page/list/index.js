import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../component/SampleChart';

const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
    statistic: state.cards.statistic,
  };
};

class List extends React.Component {

  state = {
    id: null,
    visible: false,
    statisticVisible: false,
  };

  formRef = React.createRef();

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  handleOk = () => {
    const { dispatch } = this.props;
    this.formRef.current.validateFields()
    .then( values => {
      dispatch({
        type: 'cards/addOne',
        payload: values,
      });
      // 重置 `visible` 属性为 false 以关闭对话框
      this.setState({ visible: false });
    }).catch(err => console.log(err));
  }

  // 组件加载后执行的方法
  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  };

  //图表相关
  showStatistic = (id) => {
    console.log(id)
    this.props.dispatch({
      type: 'cards/getStatistic',
      payload: id,
    });
    console.log(this.props.statistic)
    // 更新 state，弹出包含图表的对话框
    this.setState({ id, statisticVisible: true });
  };
  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false,
    });
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
    {
      title: '',
      dataIndex: '_',
      render: (_, { id }) => {
        return (
          <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
        );
      },
    },
  ];

  render() {
    const { cardsList, cardsLoading, statistic } = this.props;
    const { visible, id, statisticVisible } = this.state;

    return (
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
        <Button onClick={this.showModal}>新建</Button>
        <Modal 
        visible={visible} 
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        title="新建记录">
          <Form ref={this.formRef}>
            <FormItem label="名称" name="name" rules={[{required:true}]}>
              <Input />
            </FormItem>
            <FormItem label="描述" name="desc">
              <Input />
            </FormItem>
            <FormItem label="链接" name="url" rules={[{ type: 'url' }]}>
              <Input />
            </FormItem>
          </Form>
        </Modal>
        <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
          <SampleChart data={statistic[id] ? statistic[id]:[]} />
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);