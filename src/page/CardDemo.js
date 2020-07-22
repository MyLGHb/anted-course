
class Card extends React.Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
};


// 比如渲染包含 “Ant Design 实战教程” 字样的div
import ReactDOM from 'react-dom';

const style = {
  width: '400px',
  margin: '30px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  border: '1px solid #e8e8e8',
};

ReactDOM.render(
  <Card style={style} content={
    <div>
      Ant Design 实战教程
    </div>
  } />,
  document.getElementById('root')
)


