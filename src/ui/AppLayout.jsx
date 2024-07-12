import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-dvh">
      <div className="row-span-full px-8 bg-white border-r-1 border-stone-200 py-10 border-r-2 border-stone-50">
        <Sidebar></Sidebar>
      </div>
      <Header></Header>
      <main className="px-10 py-12 overflow-scroll bg-stone-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
