import styles from "./ToolTIp.module.scss";
import Button from "@/shared/components/Button/Button";
import Dialog from "@/shared/components/Dialog/Dialog";
import { useRef } from "react";

export default function ToolTip({
  onClick,
  onHover,
  children,
  icon = "ToolTip",
}) {
  const dialogRef = useRef(null);

  function toggleDialog() {
    dialogRef.current.toggle();
  }

  return (
    <>
      <Button
        content={icon}
        onClick={() => {
          toggleDialog();
          onClick();
        }}
        onHover={onHover}
        onPointerEnter={onHover}
        tooltip="Help Button"
        styles={{
          other: styles.btn,
          button: "button--black button--circle",
        }}
      ></Button>
      <Dialog
        modal={false}
        ref={dialogRef}
        styles={{
          dialog: styles.dialog,
        }}
      >
        <div className="flex flex-column gap-2 text text-white text-4 text--400 tooltip">
          {children}
        </div>
      </Dialog>
    </>
  );
}
