import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    articleList: state.articles.articleList,
    dataLoading: state.loading.effects['articles/queryInitArticle']
  };
};

class List extends React.Component {

  state = {
    visible: false,
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
      type: 'articles/queryInitArticle',
    });
  };



  columns = [
    {
      title: '名称',
      dataIndex: 'title',
    },
    {
      title: '描述',
      dataIndex: 'content',
    },
    {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>,
    },
    {
      title: '',
      dataIndex: '_',
      render: () => {
        return (
          <Button onClick={() => { alert(111) }}>查看</Button>
        );
      },
    },
  ];

  render() {
    const { articleList, dataLoading } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Table columns={this.columns} dataSource={articleList} loading={dataLoading} rowKey="id" />
        <Button onClick={this.showModal}>新建</Button>
        <Modal 
        visible={visible} 
        onCancel={this.handleCancel}
        onOk={this.handleOk}
        title="新建记录">
          <Form ref={this.formRef}>
            <FormItem label="名称" name="title" rules={[{required:true}]}>
              <Input />
            </FormItem>
            <FormItem label="描述" name="content">
              <Input />
            </FormItem>
            <FormItem label="链接" name="url" rules={[{ type: 'url' }]}>
              <Input />
            </FormItem>
          </Form>
        </Modal>
      
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);