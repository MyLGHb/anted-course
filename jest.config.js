/*
其实 jest 的配置不是必须的，在第一个示例 测试一个方法 中其实是不需要的。但是在 测试一个组件 
中因为我们引入了 enzyme 来测试组件。最新版的 enzyme 依赖浏览器的 localStorage 等环境，
而 jest 中 testURL 的默认值是 about:blank，这样会导致运行时报错，设置了 testURL 为一个有效的 
URL 后能够避免这个问题。当然不一定必须是 http://localhost:7001，只要是合法的 URL 地址即可。
不过这不意味着 testURL 是没有意义的，实际上 testURL 还有其他作用，你可以参考它的文档说明查看具体内容。
*/

// 需要注意的是这里不能使用 export default 这样的 ES6 的语法，因为它是被 jest 直接读取的，不会被 umi 编译。
module.exports = {
  testURL: 'http://localhost:7001',
};