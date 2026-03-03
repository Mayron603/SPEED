import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Hierarchy from './pages/Hierarchy';
import Manuals from './pages/Manuals';
import ApplicationForm from './pages/ApplicationForm';
import Status from './pages/Status';

export const pagesConfig = {
  mainPage: "Home",
  Layout: Layout,
  Pages: {
    Home,
    About,
    Hierarchy,
    Manuals,
    ApplicationForm,
    Status
  }
};