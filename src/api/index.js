import {v4} from 'uuid';

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


const mockData = [{
  id: v4(),
  name: 'lijia1',
  completed: false
},{
  id: v4(),
  name: 'lijia2',
  completed: true
},{
  id: v4(),
  name: 'lijia3',
  completed: false
},{
  id: v4(),
  name: 'lijia4',
  completed: false
},{
  id: v4(),
  name: 'lijia5',
  completed: true
},{
  id: v4(),
  name: 'lijia6',
  completed: false
}]

export const fetchTodos = (filter) => {

  return delay(1000).then((todos) => {
    switch(filter){
      case 'all':
        return mockData;
      case 'completed':
        return todos.filter((todo) => {
          return todo.completed;
        })
      case 'active':
        return todos.filter((todo) => {
          return !todo.completed;
        })
      default:
        throw new Error('unknow filter');
    }
  })
}
