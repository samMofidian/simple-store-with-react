import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProduct.css";

// yup schema
const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(2).max(54),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .max(1000000, "Price must be less than or equal to 1,000,000"),
  description: yup.string().required("Description is required").min(3).max(256),
  imageLink: yup
    .string()
    .url("Image link must be a valid URL")
    .required("Image link is required"),
  category: yup.string().required("Category is required").max(28),
});

const AddProduct = () => {
  // yup resolver
  const resolver = yupResolver(validationSchema);

  // react-hook-form -- useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: resolver,
    mode: "onChange",
  });

  // log errors
  console.log("errors", errors);

  const onSubmit = (data) => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.imageLink,
        category: data.category,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    toast.success("با موفقیت ثبت شد", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit(onSubmit)} className="add-product-form">
        <label>
          <p>Title</p>
          <input {...register("title")} type="text" />
          <p className="error">{errors.title?.message}</p>
        </label>
        <label>
          <p>Price</p>
          <input {...register("price")} type="number" step="any" />
          <p className="error">{errors.price?.message}</p>
        </label>
        <label>
          <p>Description</p>
          <input {...register("description")} type="text" />
          <p className="error">{errors.description?.message}</p>
        </label>
        <label>
          <p>Image Link</p>
          <input {...register("imageLink")} type="url" />
          <p className="error">{errors.imageLink?.message}</p>
        </label>
        <label>
          <p>Category</p>
          <select {...register("category")}>
            <option value="">Please choose one option:</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
          </select>
          <p className="error">{errors.category?.message}</p>
        </label>
        <div>
          <input type="submit" />
          {/* make parallel to category field (add invisible same text) */}
          <p style={{ color: "white" }}>{errors.category?.message}</p>
          <ToastContainer style={{ fontSize: "1.5rem", fontWeight: 600 }} />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
