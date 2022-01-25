import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../../constants";

// eslint-disable-next-line react/prop-types
export default function SearchMovie() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => dispatch(movieActions.init({ t: value }));

  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
}
