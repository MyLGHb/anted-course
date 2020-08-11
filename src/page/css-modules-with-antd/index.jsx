import {  Button } from 'antd';
import styles from './styles.less';

//想要覆盖掉 .ant-btn 中声明的 border-radius 属性，来绘制圆角按钮。直观的想法是：
//在 css/less 文件中定义覆盖
//在 html 中使用对应的 class 名称(ant-btn)
//但事实上由于 CSS modules 的使用， ant-btn 会被改名

export default () => {
  return (
    <div>
      <p>
        <span className={styles['override-ant-btn']}>
          <Button type="primary">圆角样式按妞</Button>
        </span>
      </p>
      <p>
        <Button type="primary">antd 原始按钮</Button>
      </p>
    </div>
  );
};