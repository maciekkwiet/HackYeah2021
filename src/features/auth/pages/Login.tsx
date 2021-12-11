import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-supabase';

export const Login = () => {
  const [, signIn] = useSignIn();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const { error } = await signIn({ email, password });

      setLoading(false);

      if (error) throw error;

      navigate('/');
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Supabase + React</h1>
        <p>Sign up with your email below</p>
        <div>
          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Login</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
