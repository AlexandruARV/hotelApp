import { useState } from "react";
import Form from "../../ui/Form";
import CabinContent from "./CabinContent";

function CabinTable() {
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <div>
      <header>
        <div>Cabins</div>
        <div>fillter / sort</div>
      </header>
      <CabinContent></CabinContent>
      <button
        className="bg-blue-600 text-cyan-50 px-6 py-3 rounded-md mt-4 w-full"
        onClick={() => setShowForm(!showForm)}
      >
        Create cabin
      </button>
      {showForm && <Form />}
    </div>
  );
}

export default CabinTable;
