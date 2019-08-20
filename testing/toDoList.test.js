import ToDoList from '../client/src/components/toDoList'

describe('ToDoList', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ToDoList />)
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
    wrapper.setState({
      list: todos
    });
  })
  describe('showing todos based on completion', () => {
    it('should show only completed todos if completed has been selected', () => {
      wrapper.find('button').filter('.showComplete').simulate('click');
      expect(wrapper.state().displayCompleted).toEqual('true');
    })

    it('should show only incomplete todos if incomplete has been selected', () => {
      wrapper.find('button').filter('.showIncomplete').simulate('click');
      expect(wrapper.state().displayCompleted).toEqual('false');
    })

    it('should show all todos if showAll has been selected', () => {
      wrapper.find('button').filter('.showAll').simulate('click');
      expect(wrapper.state().displayCompleted).toEqual('showAll');
    })

  })

  describe('deleting todos', () => {
    it('list should be empty after deleteAll has been triggered', () => {
      const instance = wrapper.instance();
      expect(wrapper.state().list.length).toEqual(2);
      async function f() {
        instance.deleteTodos();
        await expect(wrapper.state().list.length).toEqual(0);
      }
    })

    it('should delete individual todos', () => {
      const instance = wrapper.instance();
      expect(wrapper.state().list.length).toEqual(2);
      async function f() {
        instance.deleteOne('work');
        await expect(wrapper.state().list.length).toEqual(1);
      }
    })
  })

})