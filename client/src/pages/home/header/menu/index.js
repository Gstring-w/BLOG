import React from "react";
import PcMenu from "../../../../components/pcMenu";
import PhoneMneu from "../../../../components/phoneMenu";
export default function HeaderMenu(props) {
  return <>{props.isPc ? <PcMenu {...props} /> : <PhoneMneu {...props} />}</>;
}
