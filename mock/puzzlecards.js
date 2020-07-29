const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];

let random_joke_call_count = 0;

//模拟请求后端返回数据
// export default {
//   'get /dev/posts/1': function (req, res) {
//     const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
//     random_joke_call_count += 1;
//     setTimeout(() => {
//       res.json(responseObj);
//     }, 3000);
//   },
// };

//模拟请求出错
export default {
  'get /dev/posts/1': function (req, res) {
    res.status(500);
    res.json({});
  },
};

//如果只需要简单地返回数据，只需要这样
// export default {
//   'get /dev/random_joke': {
//     setup: 'What is the object oriented way to get wealthy ?',
//     punchline: 'Inheritance',
//   },
// };