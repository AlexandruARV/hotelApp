import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-dvh">
      <div className="row-span-full px-12 bg-white border-r-1 border-stone-200 py-10 ">
        <Sidebar></Sidebar>
      </div>
      <Header></Header>
      <main className="bg-slate-200">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
