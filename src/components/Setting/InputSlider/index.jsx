import Slider from '@mui/material/Slider';
import './InputSlider.scss';

const InputSlider = ({ title, onChange, value }) => {
  return (
    <div>
      <h3 className="font-rubik text-black-1">
        {title} <span className="text-gray-3">({value})</span>
      </h3>
      <div className="mt-[10px]">
        <Slider defaultValue={70} aria-label="Small" valueLabelDisplay="auto" step={10} onChange={(e) => onChange(e)} />
      </div>
    </div>
  );
};

export default InputSlider;
