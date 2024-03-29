import React from 'react';
import { fetchData } from '../../helpers';
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';
import AddBudgetForm from '../components/AddBudgetForm';

//library imports
import { toast } from 'react-toastify';

//loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  const budgets = fetchData('budgets');
  return { userName, budgets };
}

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem('userName', JSON.stringify(formData.userName));
    return toast.success(`Welcome ${formData.userName}`);
  } catch {
    throw new Error('There was a problem creating your acount');
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">{/*  {budgets ? (): ()} */}</div>
          <div className="flex-lg">
            {' '}
            <AddBudgetForm />
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
