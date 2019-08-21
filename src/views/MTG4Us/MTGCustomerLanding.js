import React from "react";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";
import MTGCustomerHeader from "components/MTGViews/MTGCustomerHeader.js";

function MTGCustomerLanding(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <MTGCustomerHeader {...props} />
    </>
  );
}

export default MTGCustomerLanding;