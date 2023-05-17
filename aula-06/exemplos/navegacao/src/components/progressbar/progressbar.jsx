import React from 'react';
import { NavLink } from 'react-router-dom';

function ProgressBar() {
  return (
    <div>
      <NavLink to="/step1" activeClassName="active">
        Step 1
      </NavLink>
      <NavLink to="/step2" activeClassName="active">
        Step 2
      </NavLink>
      <NavLink to="/step3" activeClassName="active">
        Step 3
      </NavLink>
    </div>
  );
}

export default ProgressBar;
