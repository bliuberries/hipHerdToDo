import AddToDo from '../client/src/components/addToDo'

describe('<AddToDo /> rendering', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AddToDo />);
  })

  // it('should render one <form>', () => {
  //   expect(wrapper.find('form')).toHaveLength(1);
  // });

  it('should change the state to reflect input field', () => {
    console.log(wrapper.state().todo, 'this is the console log');
    const instance = wrapper.instance();
    expect(wrapper.state().todo).to.equal('b');
    instance.onChange('123');
    expect(wrapper.state().todo).to.equal('123');
  })
});