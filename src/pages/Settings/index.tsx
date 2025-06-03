import Button from "../../components/Button";
import { useTheme } from "../../hooks/useTheme";

const Settings = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <div>Settings</div>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </>
  )
}

export default Settings