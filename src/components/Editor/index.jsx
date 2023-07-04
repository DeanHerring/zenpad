import TextEditor from './TextEditor/index.jsx';
import Wallpaper from './Wallpaper/index.jsx';

const Editor = () => {
  return (
    <div className="mid w-full min-h-screen bg-cover bg-no-repeat">
      <Wallpaper />
      <TextEditor />
    </div>
  );
};

export default Editor;
