import logo from './logo.svg';
import './App.css';
import Counter from './component/features/Counter';
import PostList from './component/featuresPost/PostList';
import AddpostForm from './component/featuresPost/AddpostForm';


function App() {
  return (
    <div className="App">
      {/* counter */}
     {/* <Counter/> */}

{/* PostList */}
     <PostList/>
     <AddpostForm/>
    </div>
  );
}

export default App;
