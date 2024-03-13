import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img className='ImgCircle' src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <h3><strong> Logged in as: <br></br> {user?.name}</strong></h3>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)} class="button-83">What is my access token?</button>
          </div>
          <div>
            <button onClick={handleClick} class="button-83">Settings</button>
          </div>
          <div>
            <button onClick={() => logout()} class="button-83" >Click to logout</button><br></br>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()} class="button-83">Click me to login</button>
        </div>
      )}
    </div>
  );
}
const handleClick = () => {
  AdminPortal.show();
};

export default App;