import { ReactNode } from "react";

type WarningBoxProps = {
  mode: "hint" | "warning";
  severity?: "low" | "high" | "medium";
  children: ReactNode;
};

type HintBoxPRops = {
  mode: "hint";
  children: ReactNode;
};

type InfoBoxProps = HintBoxPRops | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;
  if (props.mode === "hint") {
    return <aside className="infobox infobox-hint">{children}</aside>;
  }

  const { severity } = props;
  return (
    <aside className={`infobox inforbox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      {children}
    </aside>
  );
};

export default InfoBox;
