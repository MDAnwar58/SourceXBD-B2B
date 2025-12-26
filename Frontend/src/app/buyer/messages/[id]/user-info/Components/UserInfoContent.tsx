import React from "react";

type Props = {
   params: {
      id: number;
   };
};

export default function UserInfoContent({ params }: Props) {
   const { id } = params;
   return <div>UserInfoContent{id}</div>;
}
