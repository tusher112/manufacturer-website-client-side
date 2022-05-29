import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Your Product Added Successfully!!");
      });
  };
  return (
    <div className="justify-center ">
      <h2 className="mb-5 mt-3 text-primary">Please add a new Product</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          class=" input input-bordered w-full max-w-xs"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />

        <input class="input input-bordered w-full max-w-xs mt-3" placeholder="Price" type="number" {...register("price")} />
        <input
          class="input input-bordered w-full max-w-xs my-3"
          placeholder="Minimum Order Quantity"
          type="number"
          {...register("minquantity")}
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Available Quantity"
          type="number"
          {...register("totalquantity")}
        />
        <input class="input input-bordered w-full max-w-xs my-3" placeholder="Photo url" type="text" {...register("img")} />
        <textarea class="input input-bordered w-full max-w-xs my-3" placeholder="Description" {...register("description")} />
        <input class="btn btn-primary w-full max-w-xs " type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;