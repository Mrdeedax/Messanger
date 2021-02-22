import { useState } from 'react';
import axios from 'axios';

const projectID = 'f5077b63-cf78-4a98-8f55-83781324304f';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Email or Password is wrong! Contact to help desk to be assisted.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Log in</h1>
        <form onSubmit={handleSubmit}>
           <div class="form-floating mb-3">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"  placeholder="Email Address" required /> 
           </div>
           <div class="form-floating mb-3"> 
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input"  placeholder="Password" required />
          </div>
          <div align="center">
            <button type="submit" className="button">
              <span>Submit</span>
            </button>
            <a>Don' have an account?</a>
          </div>
          <div align="center">
             <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="Home/SignUp">Sign Up</a></li>
                  </ol>
             </nav>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;