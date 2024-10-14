
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import st from './components/styles/app.module.scss'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className={st.global}>
    <Provider store={store}>
      <App />
    </Provider>
  </div>

);

