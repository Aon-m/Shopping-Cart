import styles from "./MoreInfoBtn.module.scss";
import Button from "@/shared/components/Button/Button";
import Dialog from "@/shared/components/Dialog/Dialog";
import { useRef } from "react";

export default function ToolTip({
  onClick = () => {},
  btnContent,
  dialogContent,
}) {
  const dialogRef = useRef(null);

  function toggleDialog() {
    dialogRef.current.toggle();
  }

  return (
    <>
      <Button
        onClick={() => {
          toggleDialog();
          onClick();
        }}
        tooltip="More Info"
        styles={{
          button: styles.btn,
        }}
      >
        {btnContent}
        <Dialog
          modal={false}
          ref={dialogRef}
          styles={{
            dialog: styles.dialog,
          }}
        >
          <div className="flex flex-column gap-2 text text-white text-4 text--400 tooltip">
            {dialogContent}
          </div>
        </Dialog>
      </Button>
    </>
  );
}
