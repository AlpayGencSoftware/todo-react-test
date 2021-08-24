 
import './App.css';
import Todo from './components/todo'

function App() {
  const todos=[
        {  id:1,  title:'wash dishes', completed:false, },
        {  id:2,  title:'make dinner', completed:true, },
        {  id:3,  title:'watch tv', completed:false, },
        {  id:4,  title:'listen to music', completed:true, }
  ];
  return (
    <div className="App">
         {   
           todos.map((todo)=>{
              return (<Todo todo={todo} />);
           })
         }
    </div>
  );
}

export default App;
