import React from 'react';
import { Table, Modal, Button, Form, Input, message } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    articleList: state.articles.articleList,
    total: state.articles.total,
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
  };

  handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination);
    this.queryParam.page = pagination.current;
    this.queryParam.size = pagination.pageSize;
    this.loadData();
  };

  handleOk = () => {
    const { dispatch } = this.props;
    this.formRef.current.validateFields()
    .then( values => {
      dispatch({
        type: 'articles/addOne',
        payload: values,
      })
      .then(res => {
        message.info(res.message);
        this.loadData();
      });
      // 重置 `visible` 属性为 false 以关闭对话框
      this.setState({ visible: false });
    }).catch(err => console.log(err));
  };

  // 组件加载后执行的方法
  componentDidMount() {
    this.loadData();
  };

  loadData() {
    const queryParam = this.queryParam;
    this.props.dispatch({
      type: 'articles/queryInitArticle',
      payload: queryParam,
    }).then(() => {
      this.pagination.total = this.props.total
    }).catch(err => console.log(err));
  }



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

  queryParam = {
    page: '1',
    size: '5',
    searchData: {}
  }

  pagination = {
    defaultPageSize: 5,
    showTotal: total => `共有 ${total} 条数据`,
    pageSizeOptions: ['5', '10', '20', '50'],
    showSizeChanger: true,
    total: this.props.total
  };

  render() {
    const { articleList, dataLoading } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Table 
          columns={this.columns} 
          dataSource={articleList} 
          loading={dataLoading} 
          onChange={this.handleTableChange}
          pagination={this.pagination}
          rowKey="id" />

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