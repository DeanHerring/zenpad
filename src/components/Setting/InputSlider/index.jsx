import Slider from '@mui/material/Slider';
import './InputSlider.scss';

const InputSlider = ({ title, onChange, value, min, max }) => {
  return (
    <div>
      <h3 className="input_slider-title font-rubik">{title}</h3>
      <div className="mt-[10px]">
        <Slider
          min={min}
          max={max}
          value={value}
          aria-label="Small"
          valueLabelDisplay="auto"
          step={10}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default InputSlider;
