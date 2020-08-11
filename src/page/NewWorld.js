import myStyles from './styles.css';
/**
 * 在 React 的语境下，我们使用 className  保留字来定义一个 html 元素的 class，而非 w3c 标准中的 class 保留字。
 * 在 umi 中我们默认开启了 CSS modules 特性，这使得 class 名需要通过变量属性去引用。
 */
export default () => {
  return ( 
    <div className={myStyles.hello}>this is a new world !</div> 
  );
}