import { useForm } from "react-hook-form";
import FormRow from "./FormRow";

function Form() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 px-10 mt-10">
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold ">Cabin name</label>
          <input
            className="input"
            type="text"
            id="name"
            {...register("name")}
          ></input>
        </div>
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold">Maximum capacity</label>
          <input
            className="input"
            type="text"
            id="maxCapacity"
            {...register("maxCapacity")}
          ></input>
        </div>
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold">Regular price</label>
          <input
            className="input"
            type="text"
            id="price"
            {...register("price")}
          ></input>
        </div>
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold">Discount</label>
          <input
            className="input"
            type="text"
            id="discount"
            {...register("discount")}
          ></input>
        </div>
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold">Description</label>
          <textarea
            className="input"
            id="description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="grid grid-cols-[14rem_1fr_1.2fr]">
          <label className="text-base font-semibold">Cabin photo</label>
          <input
            className="w-[20rem] file:bg-blue-600 file:text-stone-100 file:border-none file:py-2 file:px-4 file:rounded-md file:hover:cursor-pointer"
            type="file"
            id="image"
            {...register("image")}
          ></input>
        </div>
        <div className="flex justify-end">
          <button className="text-stone-700 px-6 py-2 rounded-md">
            Calncel
          </button>
          <button className="bg-blue-500 text-white  px-6 py-2 rounded-md">
            Add a cabin
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
