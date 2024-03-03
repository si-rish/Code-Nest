import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Home from "./views/Home/Home";
import Newsletter from './views/Newsletter/Newsletter';
import About from './views/About/About';
import Community from './views/Community/Community';
import Contact from './views/Contact/Contact';
import Practice from './views/Practice/Practice';
import Resources from './views/Resources/Resources';
import Utilities from './views/Utilities/Utilities';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Books from './components/Books/Books';
import Roadmap from './components/Roadmap/Roadmap';
import Projects from './components/Projects/Projects';
import Aptitude from './components/Aptitude/Aptitude';
import Reasoning from './components/Reasoning/Reasoning';
import Verbal from './components/Verbal/Verbal';
import Interview from './components/Interview/Interview';
import Problems from './components/Problems/Problems';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      "path": "/",
      "element": <Home />
    },
    {
      "path": "/about",
      "element": <About/>
    },
    {
      "path": "/community",
      "element": <Community/>
    },
    {
      "path": "/contact",
      "element": <Contact/>
    },
    {
      "path": "/newsletter",
      "element": <Newsletter/>
    },
    {
      "path": "/practice",
      "element": <Practice/>
    },
    {
      "path": "/resources",
      "element": <Resources/>
    },
    {
      "path": "/utilities",
      "element": <Utilities/>
    },
    {
      "path": "/login",
      "element": <Login/>
    },
    {
      "path": "/signup",
      "element": <Signup/>
    },
    {
      "path": "/books",
      "element": <Books/>
    },
    {
      "path": "/roadmaps",
      "element": <Roadmap/>
    },
    {
      "path": "/projects",
      "element": <Projects/>
    },
    {
      "path": "/aptitude",
      "element": <Aptitude/>
    },
    {
      "path": "/reasoning",
      "element": <Reasoning/>
    },
    {
      "path": "/verbal",
      "element": <Verbal/>
    },
    {
      "path": "/interview-questions",
      "element": <Interview/>
    },
    {
      "path": "/problems",
      "element": <Problems/>
    },

  
])

root.render(<RouterProvider router={router} />);


