import myStyles from './styles.css';
/**
 * 在 React 的语境下，我们使用 className  保留字来定义一个 html 元素的 class，而非 w3c 标准中的 class 保留字。
 * 在 umi 中我们默认开启了 CSS modules 特性，这使得 class 名需要通过变量属性去引用。
 */

//简单页面的国际化其实只要能够将代码中的 new world 替换为能够按照当前语言环境变化的变量即可：

const lang = window.navigator.language;

export default () => {
  const helloworld = lang === 'en-US' ? 'new world !' : '新天地！';
  return ( 
    <div className={myStyles.hello}> {helloworld} </div> 
  );
}