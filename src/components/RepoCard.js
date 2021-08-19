import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RepoCard = ({
  repo: { description, name, language, fork, stargazers_count, id },
  repo,
}) => {
  return (
    <Fragment>
      {!fork && (
        <div className='repoCard'>
          <h3 className='repoCard__name'>{name}</h3>
          <p className='repoCard__desp'>{description}</p>
          <p className='languages'>Languages: {language}</p>
          <span className='star'>
            &#11088;<span className='star-count'>{stargazers_count}</span>
          </span>
          {/* <Link to={`/${id}`} className='repo-link'>For More Details...</Link> */}
          <Link
            to={{
              pathname: `/${id}`,
              state: repo,
            }}
            className='repo-link'
          >
            For More Details...
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default RepoCard;
