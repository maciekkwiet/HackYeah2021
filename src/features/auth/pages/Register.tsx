import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from 'react-supabase';

export const Register = () => {
  const [, signUp] = useSignUp();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);

    try {
      const { error } = await signUp({ email, password });

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
              handleRegister();
            }}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
