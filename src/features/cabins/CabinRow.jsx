import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

function CabinRow({ cabin }) {
  const queryClient = useQueryClient();
  console.log(queryClient);

  const { mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => console.log("error"),
  });

  return (
    <div className="grid gap-[2.4rem] grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-[1.4rem] py-[1rem]">
      <img
        className="block aspect-[3/2] object-cover object-center scale-150 translate-x-[-7px] w-[7rem]"
        src={cabin.image}
      ></img>
      <div>{cabin.name} </div>
      <div>{cabin.maxCapacity}</div>
      <div>{cabin.price}</div>
      <div>{cabin.discount}</div>
      <div>
        <button onClick={() => deleteCabin(cabin.id)}>Delete</button>
      </div>
    </div>
  );
}

export default CabinRow;
