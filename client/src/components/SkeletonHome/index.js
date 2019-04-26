import React from "react";
import { Skeleton } from "antd";

export default function SkeletonHome(props) {
  return (
    <div>
      <Skeleton loading={props.loading} active avatar>
        {props.children}
      </Skeleton>
    </div>
  );
}
