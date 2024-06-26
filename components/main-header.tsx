import NavItem from "./nav-item";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <NavItem href="/">NextNews</NavItem>
      </div>
      <nav>
        <ul>
          <li>
            <NavItem href="/news">News</NavItem>
          </li>
          <li>
            <NavItem href="/archive">Archive</NavItem>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
