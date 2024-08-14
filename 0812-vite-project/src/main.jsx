// import { StrictMode } from 'react' StrictMode : 제한사항이 많으므로 안써도 무방함
import { createRoot } from 'react-dom/client' // // {} 중괄호 : default를 쓴 경우
import App from './App.jsx' // // {} 중괄호 없는 경우 : default를 안 쓴 경우
import './index.css'

createRoot(document.getElementById('root')).render( //ID가 root인 곳에 App이라는 컴포넌트를 그려
  <App />
)
