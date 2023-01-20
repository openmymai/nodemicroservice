import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <div className="container">
      <h1>You are signed in</h1>
    </div>
  ) : (
    <div className="container">
      <h1>You are NOT signed in</h1>
    </div>
  );
};

LandingPage.getInitialProps = async context => {
  console.log('LANDING PAGE!');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default LandingPage;