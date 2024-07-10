import { useQuery } from "@tanstack/react-query";
import CabinRow from "./CabinRow";
import { getCabins } from "../../services/apiCabins";

const fake = [
  {
    name: "001",
    maxCapacity: 12,
    price: 100,
    discount: 50,
    description: "nice",
    image: "url",
  },
  {
    name: "002",
    maxCapacity: 12,
    price: 100,
    discount: 50,
    description: "nice",
    image: "url",
  },
];

function CabinContent() {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  console.log(cabins);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="border-[1px] rounded-md border-stone-200">
      <div className="grid  grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-[1.4rem] py-[1rem]">
        <div></div>
        <div>CABIN</div>
        <div>CAPACITY</div>
        <div>PRICE</div>
        <div>DISCOUNT</div>
        <div></div>
      </div>
      {cabins.map((cabin) => (
        <CabinRow key={cabin.name} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinContent;
