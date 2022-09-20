import React, { useState } from "react";
import Navigation from "./Navigation";
import Main from "./Main";
import TopBar from "./TopBar";
import SearchBox from "./SearchBox";
import MobileNavigation from "./MobileNavigation";
import Flex from "../../layouts/Flex";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="relative flex flex-col overflow-x-clip">
      <TopBar />
      <Main onClick={() => setMobileMenu(!mobileMenu)} />
      <div className="hidden bg-prColor py-4 md:block">
        <Flex className="container relative justify-between divide-x-2 divide-white/30">
          <Navigation />
          <SearchBox />
        </Flex>
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
