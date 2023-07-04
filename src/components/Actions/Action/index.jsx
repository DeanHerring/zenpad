import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Action = ({ icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="action_wrapper group w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer ml-[10px] first:ml-0 duration-300"
    >
      <FontAwesomeIcon icon={icon} className="action_icon text-[20px]" />
    </div>
  );
};

export default Action;
