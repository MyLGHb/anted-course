import React from 'react';
import { Chart } from '@antv/g2';

class SampleChart extends React.Component {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    // G2 初始化图形代码
    this.chart = new Chart({
      // this.containerRef.current 即为引用
      container: this.containerRef.current,
      width: 450,
      height: 300
    });
    this.refreshChart();
  };

  // data变化时刷新图表
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  };

  // 组件不使用时销毁图表
  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  };

  refreshChart = () => {
    // 接收 data 属性作为数据源
    this.chart.source(this.props.data);
    // 此处为硬编码，配置源自 G2 官方示例： https://github.com/antvis/g2
    // 实际开发中需要封装，推荐直接使用 BizCharts。
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };

  /**
   * 属性 ref，通过该属性我们可以获取经过 render 后的真实节点的引用
   * 如果 ref 的节点是一个 dom 元素，那么你得到的是文档中真实的 dom 节点，
   * 如果 ref 的节点是一个 component，那么你获得将是该 component 渲染后的实例
   */
  render() {
    return (
      <div ref={this.containerRef} />
    );
  }
}

export default SampleChart;