import { App } from './components/app/index';
import './styles.css';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);
root.render(<App />);
