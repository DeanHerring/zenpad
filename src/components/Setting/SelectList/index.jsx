import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import './SelectList.scss';

const SelectList = ({ title, items, sliceMethod, storageID, activeValue }) => {
  const dispatch = useDispatch();

  const handleSelect = (value) => {
    dispatch(sliceMethod(value));
    localStorage.setItem(storageID, value);
  };

  return (
    <div className="md-1100:mt-[25px]">
      <h3 className="font-rubik text-black-1">{title}</h3>
      <div className="mt-[10px]">
        <Select value={activeValue} onChange={(e) => handleSelect(e.target.value)}>
          {items.map((item) => {
            return (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default SelectList;
