import {render, screen, cleanup} from '@testing-library/react';
import Todo from '../todo';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});


test('Should render non-complated todo', ()=>{
    const todo={ id:1,  title:'wash dishes', completed:false, }
   render(<Todo todo={todo}/>);
   const todoElement = screen.getByTestId('todo-1');
   expect(todoElement).toBeInTheDocument();
   expect(todoElement).toHaveTextContent('wash dishes')
});

test('Should render complated todo', ()=>{
    const todo={ id:2,  title:'wash car', completed:true, }
   render(<Todo todo={todo}/>);
   const todoElement = screen.getByTestId('todo-2');
   expect(todoElement).toBeInTheDocument();
   expect(todoElement).toHaveTextContent('wash car')
   expect(todoElement).not.toContainHTML('<strike>');
});

test('matches snapshot',() => {
    const todo={ id:1,  title:'wash dishes', completed:false, }
    const tree=renderer.create(<Todo todo={todo}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

 