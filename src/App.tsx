import logo from './assets/react.svg'
import './App.css'
// import { TonConnectUIProvider } from '@tonconnect/ui-react';
// import { TonConnectButton } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk'

function App() {

  return (
    <>
        <div>
          <a href="https://ton.org/dev" target="_blank">
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </div>
        <h1>Bets</h1>
        <div className="card">
          <button onClick={() => WebApp.showAlert(`Hello World!`)}>
            Connect
          </button>
        </div>
        {/*  */}
    </>
  )
}

export default App
