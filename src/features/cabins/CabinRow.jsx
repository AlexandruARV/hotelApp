import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

function CabinRow({ cabin }) {
  const queryClient = useQueryClient();
  // console.log(queryClient);

  const { mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => toast.error(`Can't delete cabin`),
  });

  return (
    <li className="grid gap-[2.4rem] grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-[1.6rem] py-[1rem] items-center">
      <img
        className="block aspect-[3/2] object-cover object-center scale-150 translate-x-[-7px] w-[7rem]"
        src={cabin.image}
      ></img>
      <div className="font-semibold">{cabin.name} </div>
      <div className="text-stone-500">
        Fits up to {cabin.maxCapacity} quests
      </div>
      <div>{cabin.price}</div>
      <div>{cabin.discount}</div>
      <div>
        <button onClick={() => deleteCabin(cabin.id)}>Delete</button>
      </div>
    </li>
  );
}

export default CabinRow;
