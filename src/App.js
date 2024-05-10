import 'bulma/css/bulma.css'
import './App.css';
import  Course  from './Course';
import Angular from './image/download copy.jpeg';
import Bootstrap from './image/download.jpeg';
import Csharp from './image/download.png';
import Kompleweb from './image/images.jpeg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarim</p>
        </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
            <Course 
             image={Angular}
             title="Angular" 
             description="Adds React debugging tools to the Chrome Developer Tools.
             Created from revision 1717ab0171 on 5/8/2024.
             React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. 
             It allows you to inspect the React component hierarchies in the Chrome Developer Tools."
            />
          </div>
          <div className='column'>
            <Course 
             image={Bootstrap}
             title="Bootstrap 5" 
             description="Adds React debugging tools to the Chrome Developer Tools.
             Created from revision 1717ab0171 on 5/8/2024.
             React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. 
             It allows you to inspect the React component hierarchies in the Chrome Developer Tools."
            />
          </div>
          <div className='column'>
            <Course
             image={Csharp}
             title="Komple Web" 
             description="Adds React debugging tools to the Chrome Developer Tools.
             Created from revision 1717ab0171 on 5/8/2024.
             React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. 
             It allows you to inspect the React component hierarchies in the Chrome Developer Tools."
            />
          </div>
          <div className='column'>
            <Course
             image={Kompleweb}
             title="Frontend" 
             description="Adds React debugging tools to the Chrome Developer Tools.
             Created from revision 1717ab0171 on 5/8/2024.
             React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. 
             It allows you to inspect the React component hierarchies in the Chrome Developer Tools."
            />
          </div>
        </div>
        </section>
    
      </div>  
    </div>
  );
}

export default App;
