import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface RotateButtonProps {
  onClick: () => void;
}

export default function RotateButton({ onClick }: RotateButtonProps) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <FontAwesomeIcon icon={faRotateRight} />
    </div>
  );
}
