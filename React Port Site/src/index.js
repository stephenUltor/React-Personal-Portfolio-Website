import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App name="Port site" />);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
