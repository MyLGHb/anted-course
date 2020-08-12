/*
jest 在执行测试文件的时候会默认注入一些方法，对于最简单的测试，你只需要了解 test 和 expect 这两个方法即可。 
test 方法接收两个参数，第一个是测试描述，第二个是一个函数，它包裹了一个测试样例。在这个样例中你可以调用 
expect 方法检测你的代码。比如，我们新建一个 test/helloworld.test.js 的文件，然后写上如下的内容：
*/

const sum = function (a, b) {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// 测试一个最简单的组件

import { mount } from 'enzyme';
import TestDemo from '../src/component/TestDemo';

test('TestDemo', () => {
  const wrapper = mount(<TestDemo />);
  expect(wrapper.find('div').text()).toBe('test');
});