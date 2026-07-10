import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../redux/createSlice";

export default function CategoryFilter({ selectedCategory}) {
  const dispatch = useDispatch();
    const handleChange = (event) => {
    dispatch(setSelectedCategory(event.target.value));
  };
  return (
    <div>
        <FormControl sx={{ ml: "50px", color: "#000" }}>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            checked={selectedCategory === ""}
            onChange={handleChange}
            value=""
            control={<Radio sx={{ color: "#ff3c5f!important" }} />}
            label="All"
          />
          <FormControlLabel
            checked={selectedCategory === "men"}
            onChange={handleChange}
            value="men"
            control={<Radio sx={{ color: "#ff3c5f!important" }} />}
            label="Men"
          />
          <FormControlLabel
            checked={selectedCategory === "women"}
            onChange={handleChange}
            value="women"
            control={<Radio sx={{ color: "#ff3c5f!important" }} />}
            label="women"
          />
          <FormControlLabel
            checked={selectedCategory === "kids"}
            onChange={handleChange}
            value="kids"
            control={<Radio sx={{ color: "#ff3c5f!important" }} />}
            label="kids"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
