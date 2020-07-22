/**
 * 自定义的input组件，通过state使其可控
 * state 对象用来管理组件元素状态
 * @param {*} param0 
 */

const MyInput = ({  value = '', onChange }) => (
  <input value={value} onChange={onChange} />
);

class InputDemo extends React.Component {

  state = {
    text: '',
  }

  onTextChange = (event) => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }

  onTextReset = () => {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <MyInput value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>Reset</button>
      </div>
    );
  }
}

export default InputDemo;