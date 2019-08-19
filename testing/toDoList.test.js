import ToDoList from '../client/src/components/toDoList'

describe('ToDoList', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToDoList />)
  })

  describe('deleting todos', () => {
    it('list should be empty after deleteAll has been triggered', () => {
      // const instance = wrapper.instance();
      const todos = [
        {
          todo: 'work',
          completed: 'false'
        },
        {
          todo: 'play',
          completed: 'true'
        }
      ];
      expect(wrapper.state().list).toEqual([]);
      wrapper.setState({
        list: todos
      });
      expect(wrapper.state().list.length).toEqual(2);
      wrapper.instance().deleteTodos();
      expect(wrapper.state().list.length).toEqual(0);
    })
  })

})