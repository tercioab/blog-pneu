import TextField from "@mui/material/TextField";

export default function Input({ marcaValue, priceValue, kmValue, func, ph, phText }) {
	return (
		<>
       <TextField
        id="MARCA"
        label="MARCA"
        placeholder="digite a marca"
        type="text"
        name="marca"
        value={marcaValue}
        onChange={func}
      />
      <TextField
        id="PREÇO"
        label="PREÇO"
        placeholder="digite o preço"
        type="number"
        name="price"
        value={priceValue}
        onChange={func}
      />
      <TextField
        id="KM"
        label={phText}
        placeholder={ph}
        type="number"
        name="km"
        value={kmValue}
        onChange={func}
      />
		</>
	);
}