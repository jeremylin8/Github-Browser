import React, { Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Nav from './Nav';
const RepoDetails = () => {
  const data = useLocation();
  console.log('data', data);
  const {
    state: {
      description,
      name,
      language,
      fork,
      stargazers_count,
      id,
      created_at,
      url,
    },
  } = data;
  return (
    <Fragment>
      <Nav />
      <div className='repoDetails'>
        <h3>{name}</h3>
        <p>{created_at}</p>
        <Link to='/url'>Github URL</Link>
      </div>
    </Fragment>
  );
};

export default RepoDetails;
