import React from 'react';
import { fetchData } from '../../helpers';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';

//assets
import wave from '../assets/wave.svg';

//loader
export function mainLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName}></Nav>
      <h1>main</h1>
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};

export default Main;
