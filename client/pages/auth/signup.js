import { useState } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email, password
    },
    onSuccess: () => router.push('/'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await doRequest();
    // Don't put router.push('/'); here
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="form-control" 
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" 
            className="form-control" />
        </div>
        <br />
        <button className="btn btn-primary">Sign Up</button>
        <br />
        <br />
        {errors}
      </form>
    </div>
  );
};

export default Signup;