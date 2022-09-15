import React, { useState } from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import TopBar from "./TopBar";
import SearchBox from "./SearchBox";
import MobileNavigation from "./MobileNavigation";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="relative flex flex-col overflow-x-clip">
      <TopBar />
      <Main onClick={() => setMobileMenu(!mobileMenu)} />
      <div className="hidden bg-prColor py-4 md:block">
        <div className="container relative flex justify-between divide-x-2 divide-white/30">
          <Navigation />
          <SearchBox />
        </div>
      </div>
      {
        <MobileNavigation
          onClick={() => setMobileMenu(!mobileMenu)}
          mobileMenu={mobileMenu}
        />
      }
    </header>
  );
};

export default Header;
