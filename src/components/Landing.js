import React, { Fragment, useState, useEffect } from 'react';

import Nav from './Nav';
import RepoCard from './RepoCard';
import Spinner from './Spinner';

const Landing = () => {
  const [username, setUsername] = useState('');
  const [githubData, setGithubData] = useState({
    repos: [],
    loading: false,
  });
  const [error, setError] = useState('');

  const { repos, loading } = githubData;

  const onSubmit = async (e) => {
    e.preventDefault();
    const githubAPI = `https://api.github.com/users/${username}/repos`;
    setError('');
    setGithubData({
      ...githubData,
      loading: true,
    });
    try {
      const res = await fetch(githubAPI);
      const repos = await res.json();
      if (res.status !== 404) {
        setGithubData({
          ...githubData,
          repos,
          loading: false,
        });
      } else {
        setError('Username not found');
        setGithubData({
          ...githubData,
          loading: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Nav />
      <main className='landing'>
        <form className='search__form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Github Username'
              name='username'
              className='form-input'
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <input type='submit' className='btn-blue text-white' value='Search' />
        </form>
        <div className='repos-container'>
          {loading ? (
            <Spinner />
          ) : error ? (
            <p className='error-message'>{error}</p>
          ) : (
            repos
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .map((repo) => <RepoCard repo={repo} key={repo.id} />)
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Landing;
