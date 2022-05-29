import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review`;
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
        toast("Your Review Added Successfully!!");
      });
  };

  return (
    <div className="justify-center ">
      <h2 className="mb-5 mt-3 text-primary">Please add your positive review!</h2>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          class=" input input-bordered w-full max-w-xs"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input class="input input-bordered w-full max-w-xs my-3" placeholder="Photo url" type="text" {...register("img")} />
        <textarea class="input input-bordered w-full max-w-xs" placeholder=" Please Review" {...register("review")} />
        <input
          class="input input-bordered w-full max-w-xs my-3"
          placeholder="Enter Your Location"
          type="text"
          {...register("location")}
        />
        <input class="btn btn-primary w-full max-w-xs " type="submit" value="Add Review" />
      </form>
    </div>
  );
};

export default MyReview;