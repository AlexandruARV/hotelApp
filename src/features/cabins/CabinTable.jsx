import CabinContent from "./CabinContent";

function CabinTable() {
  return (
    <div>
      <header>
        <div>Cabins</div>
        <div>fillter / sort</div>
      </header>
      <CabinContent></CabinContent>
      <button className="bg-blue-600 text-cyan-50 px-6 py-3 rounded-md mt-4 w-full">
        Create cabin
      </button>
    </div>
  );
}

export default CabinTable;
