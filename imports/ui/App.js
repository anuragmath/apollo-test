import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withApollo } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import ResolutionForm from './ResolutionForm.js';
import UserForm from './UserForm.js';
import GoalForm from './GoalForm.js';
import Goal from './resolutions/Goal.js';

const App = ({ loading, resolutions, client, user}) => {
  if(loading) return null;
  return (
    <div>
    <UserForm user={user} client={client}/>
    { user._id && <ResolutionForm />}
    { user._id && (
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>
          <span style={{ textDecoration: resolution.completed? 'line-through': 'none' }}>
            {resolution.name}
          </span>
            <ul>
              {resolution.goals.map(goal => (
                <Goal goal={goal} key={goal._id} />
              ))}
            </ul>
            <GoalForm resolutionId={resolution._id} />
          </li>
        ))}
      </ul>
    )}
  </div>)
};

const resolutionsQuery = gql`
 query Resolutions {
  resolutions {
    _id
    name
    completed
    goals {
      _id
      name
      completed
    }
  }
  user {
    _id
  }
}
`;


export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ... data})
})(withApollo(App));
