import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faExpand } from '@fortawesome/free-solid-svg-icons';

const Actions = ({ setShowSetting }) => {
  return (
    <div className="flex fixed top-[25px] left-[25px] z-10">
      <div
        onClick={() => setShowSetting(true)}
        className="w-[50px] h-[50px] bg-white-2 rounded-full flex justify-center items-center cursor-pointer last:ml-[10px] hover:bg-red-500"
      >
        <FontAwesomeIcon icon={faGear} className="text-black-1 text-[20px]" />
      </div>
      <div className="w-[50px] h-[50px] bg-white-2 rounded-full flex justify-center items-center cursor-pointer last:ml-[10px]">
        <FontAwesomeIcon icon={faExpand} className="text-black-1 text-[20px]" />
      </div>
    </div>
  );
};

export default Actions;
