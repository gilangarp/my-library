import { IoCloudyNight } from "react-icons/io5";
import { Button } from "./components/ui/Button";
import { Label } from "./components/ui/Label";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Label>Accept terms and conditions</Label>
      <Button>
        <IoCloudyNight />
      </Button>
    </div>
  );
};

export default App;
