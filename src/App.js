import Pages  from './pages/Pages'
import Category from './Components/Category';
import Search from './Components/Search';
import Logo from './Components/Logo'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Logo/>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
