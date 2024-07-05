import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="flex flex-col gap-8">
      <Logo></Logo>
      <MainNav></MainNav>
    </div>
  );
}

export default Sidebar;
