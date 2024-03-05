import React from 'react';
import { fetchData } from '../../helpers';
import { useLoaderData } from 'react-router-dom';

//loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
};

export default Dashboard;
