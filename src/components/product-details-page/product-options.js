import React from 'react';
import { FormControlLabel, MenuItem, Radio, RadioGroup, TextField, Tooltip } from '@mui/material';

const ProductOptions = ({ productOptionsSet, productChoices, handleProductChoiceChange }) =>
  productOptionsSet.optionType === 'color' ? (
    <ColorVariant
      productOptionsSet={productOptionsSet}
      productChoices={productChoices}
      handleProductChoiceChange={handleProductChoiceChange}
    />
  ) : (
    <ListVariant
      productOptionsSet={productOptionsSet}
      productChoices={productChoices}
      handleProductChoiceChange={handleProductChoiceChange}
    />
  );

export default ProductOptions;

const ColorVariant = ({ productOptionsSet, productChoices, handleProductChoiceChange }) => (
  <RadioGroup
    value={productChoices[productOptionsSet.name]}
    onChange={handleProductChoiceChange(productOptionsSet.name)}
    name={productOptionsSet.name}
    row>
    {productOptionsSet.choices.map((choice, idx) => (
      <Tooltip key={idx} arrow title={choice.description}>
        <FormControlLabel
          value={choice.description}
          control={
            <Radio
              sx={{
                color: choice.value,
                '&.Mui-checked': {
                  color: choice.value,
                },
              }}
            />
          }
        />
      </Tooltip>
    ))}
  </RadioGroup>
);

const ListVariant = ({ productOptionsSet, productChoices, handleProductChoiceChange }) => (
  <TextField
    select
    label={`Select ${productOptionsSet.name}`}
    value={productChoices[productOptionsSet.name]}
    sx={{ textTransform: 'capitalize' }}
    onChange={handleProductChoiceChange(productOptionsSet.name)}>
    {productOptionsSet.choices.map((choice, idx) => (
      <MenuItem key={idx} value={choice.description} sx={{ textTransform: 'capitalize' }}>
        {choice.description}
      </MenuItem>
    ))}
  </TextField>
);
