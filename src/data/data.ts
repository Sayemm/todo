import axios from 'axios';

let listData = [
  {
    userId: 1,
    id: 2,
    title: 'hello',
    completed: false,
  },
];

axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
  for (let i = 0; i < res.data.length; i++) {
    listData.push(res.data[i]);
  }
});

export default listData;
