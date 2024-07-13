import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

function Form() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin successfully added");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: () => {
      toast.error(`Cabin can not be added `);
    },
  });

  function onSubmit(data) {
    console.log(data);
    console.log(data.image[0]);
    console.log(getValues);
    mutate({ ...data, image: data.image[0] });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col gap-4 px-10 mt-10">
        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold ">Cabin name</label>
          <input
            className="input"
            type="text"
            id="name"
            {...register("name", {
              required: "This field is requiered",
            })}
          ></input>
          {errors.name && (
            <div className="text-red-700">{errors?.name?.message}</div>
          )}
        </div>

        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold">Maximum capacity</label>
          <input
            className="input"
            type="text"
            id="maxCapacity"
            {...register("maxCapacity", {
              required: "This field is requiered",
            })}
          ></input>
          {errors.maxCapacity && (
            <div className="text-red-700">{errors.maxCapacity.message}</div>
          )}
        </div>

        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold">Regular price</label>
          <input
            className="input"
            type="text"
            id="price"
            {...register("price", {
              required: "This field is requiered",
            })}
          ></input>
          {errors.price && (
            <div className="text-red-700">{errors.price.message}</div>
          )}
        </div>

        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold">Discount</label>
          <input
            className="input"
            type="text"
            id="discount"
            defaultValue={0}
            {...register("discount", {
              required: "This field is requiered",
              validate: (value) =>
                +value <= +getValues().price ||
                "discount should be less than regular price",
            })}
          ></input>
          {errors.discount && (
            <div className="text-red-700">{errors.discount.message}</div>
          )}
        </div>

        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold">Description</label>
          <textarea
            className="input"
            id="description"
            {...register("description", {
              required: "This field is requiered",
            })}
          ></textarea>
          {errors.description && (
            <div className="text-red-700">{errors.description.message}</div>
          )}
        </div>

        <div className="grid grid-cols-[14rem_1fr_1.2fr] gap-4">
          <label className="text-base font-semibold">Cabin photo</label>
          <input
            className="w-[14rem] file:bg-blue-600 file:text-stone-100 file:border-none file:py-2 file:px-4 file:rounded-md file:hover:cursor-pointer"
            type="file"
            id="image"
            {...register("image")}
          ></input>
        </div>

        <div className="flex justify-end">
          <button className="text-stone-700 px-6 py-2 rounded-md">
            Calncel
          </button>

          <button
            disabled={isCreating}
            className="bg-blue-500 text-white  px-6 py-2 rounded-md"
          >
            Add a cabin
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
