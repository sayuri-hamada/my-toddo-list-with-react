import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className='l-psge'>
      <BrowserRouter>
        <header className='l-header'>
          <div className='l-header__inner'>
            <h1 className='l-header-ttl'>TODO LIST</h1>
            <button className='l-header-add-btn'>＋</button>
            <p className='l-header-link'><Link to='/complete-list'>Complete List</Link></p>
          </div>
        </header>

        <div className='todo-list'>
          <h2>未完了のタスク</h2>
          <div className='todo-list-card'>
            <div>
              <p>タスク名</p>
              <p>完了日：2022/09/01</p>
            </div>
            <div>
              <button>完了</button>
              <button>削除</button>
            </div>
          </div>
        </div>



      </BrowserRouter>
    </div>
  )
}

export default App;
