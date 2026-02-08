import { lazy, Suspense, useState } from 'react';
import React from 'react';

const LazyUserComponent = lazy(() => import('../User'))

const Dashboard = () => {
  const [load, setLoad] = useState(false);

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>This is a protected route.</p>
      
      {/* <Suspense fallback={<h1>Still Loading…</h1>}><LazyUserComponent /></Suspense> */}

      <button onClick={()=> setLoad(true) }>Load Data</button>
      {
        load ? <Suspense fallback={<h1>Still Loading…</h1>}><LazyUserComponent /></Suspense> : null
      }
    </div>
  );
};

export default Dashboard;
