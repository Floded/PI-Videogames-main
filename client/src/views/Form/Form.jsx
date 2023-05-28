import { useState, useEffect } from "react";
import style from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    launchDate: "",
    rating: "",
    genres: "",
  });
  const [allGenres, setAllGenres] = useState([]);

  // Error State
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    launchDate: "",
    rating: "",
    genres: "",
  });

  // fn() onChange
  const handlerChange = (event) => {
    // console.log(event);
    const { value, name, defaultValue } = event.target;
    console.log(event);
    validate({ ...form, [name]: value });
    if (name === form.genres) {
      setForm({ ...form, genres: defaultValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // fn() validadora

  const validate = (form) => {
    if (form.description.length > 200) {
      setErrors({
        ...errors,
        description: "No puede superar los 200 caracteres",
      });
    } else {
      setErrors({ ...errors, description: "" });
    }

    if (form.name.length > 20) {
      setErrors({
        ...errors,
        name: "No puede superar los 20 caracteres",
      });
    } else {
      setErrors({ ...errors, name: "" });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/videogames", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/genres")
      .then((res) => res.data)
      .then((data) =>
        setAllGenres(
          data.map((gen) => ({
            id: gen.id,
            name: gen.name,
          }))
        )
      );
  }, []);

  return (
    <form onSubmit={submitHandler} className={style.Container}>
      <h2>Soy tu Formulario</h2>
      <div>
        <label>Name: </label>
        <br />
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handlerChange}
          placeholder="Name"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Description: </label>
        <br />
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={handlerChange}
          placeholder="Description"
        />
        {errors.description && <span>{errors.description}</span>}
      </div>
      <div>
        <label>Platforms: </label>
        <br />
        <input
          name="platforms"
          type="text"
          value={form.platforms}
          onChange={handlerChange}
          placeholder="Plataforms"
        />
      </div>
      <div>
        <label>Image: </label>
        <input
          name="image"
          type="file"
          value={form.image}
          onChange={handlerChange}
          placeholder="Image"
        />
      </div>
      <div>
        <label>Launch: </label>
        <br />
        <input
          name="launchDate"
          type="date"
          value={form.launchDate}
          onChange={handlerChange}
          placeholder="LaunchDate"
        />
      </div>
      <div>
        <label>Rating: </label>
        <br />
        <input
          name="rating"
          type="number"
          min="0"
          max="10"
          value={form.rating}
          onChange={handlerChange}
          placeholder="Rating"
        />
      </div>
      <div>
        <label>Genre: </label>
        <br />
        {allGenres.map((element) => (
          <label key={element.id}>
            <input
              name="genres"
              type="checkbox"
              value={element.name}
              onChange={handlerChange}
            />
            {element.name}
          </label>
        ))}
        {/* <input
          name="genres"
          type="text"
          value={form.genres}
          onChange={handlerChange}
          placeholder="Genres"
        /> */}
      </div>
      <button type="submit">Crear</button>
    </form>
  );
};

export default Form;

/* <div>
<label>Nombre</label>
<input
  type="text"
  value={form.name}
  name="name"
  onChange={changeHandler}
/>
{errors.name && <span>{errors.name}</span>}
</div>
<div>
<label>Imagen</label>
<input
  type="file"
  value={form.image}
  name="image"
  onChange={changeHandler}
/>
</div>
<div>
<label>Descripción</label>
<input
  type="text"
  value={form.description}
  name="description"
  onChange={changeHandler}
/>
{errors.description && <span>{errors.description}</span>}
</div>
<div>
<label>Plataformas</label>
<input
  type="select"
  value={form.platforms}
  name="platform"
  onChange={changeHandler}
/>
</div>
<div>
<label>Fecha de lanzamiento</label>
<input
  type="date"
  value={form.launchDate}
  name="date"
  onChange={changeHandler}
/>
</div>
<div>
<label>Rating</label>
<input
  type="text"
  value={form.rating}
  name="rating"
  onChange={changeHandler}
/>
</div>
<div>
<label>Genero</label>
<input
  type="select"
  value={form.genres}
  name="genre"
  onChange={changeHandler}
/>
{/* {errors.genres && <span>{errors.genres}</span>} 
// </div> */
