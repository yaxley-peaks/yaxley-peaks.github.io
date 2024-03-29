import { Props } from "./PropInterfaces";
import "./MobileMessage.css";

export default function MobileMessage(props: Props) {
  if (props.isMobile) {
    return (
      <>
        <p id="mob">
          You seem to be on a Mobile device. This is not supported. Please
          switch to a non Mobile device. Touch screens are not supported either.
        </p>
      </>
    );
  } else {
    return <></>;
  }
}
