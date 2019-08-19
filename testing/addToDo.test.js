import AddToDo from '../client/src/components/addToDo'

describe('<AddToDo />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AddToDo />);
  })

  it('should change the state to reflect input field', () => {
    const instance = wrapper.instance();
    expect(wrapper.state().todo).toEqual('');
    const event = {target: {name:'todo', value:'123'}}
    instance.onChange(event);
    expect(wrapper.state().todo).toEqual('123');
  });
  
  it('state should be reset to empty string after submitting', () => {
    const event = {target: {name:'todo', value:'123'}};
    wrapper.find('input').filter('.inputField').simulate('submit', event);
    expect(wrapper.state().todo).toEqual('');
  })

});