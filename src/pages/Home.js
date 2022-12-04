import React from "react";
import useTranslation from "../components/customHooks/translations";

export default function Home() {
  const translation = useTranslation();
  return (
    <div>
      <h2>Home Page</h2>
      <div>{translation.homePara}</div>
    </div>
  );
}
