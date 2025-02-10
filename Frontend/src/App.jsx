  // App.jsx
  import './App.css';
  import Page from './Page/Page';
  import { GlobalProvider } from './Components/Main_component/3D model/Context/Globalcontext'; // Import the context provider

  function App() {
    return (
      <GlobalProvider> {/* Wrap Page component with GlobalProvider */}
        <Page />
      </GlobalProvider>
    );
  }

  export default App;
