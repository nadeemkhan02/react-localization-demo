import React from "react";
import useTranslation from "../components/customHooks/translations";

export default function About() {
  const translation = useTranslation();
  return (
    <div>
      <h2>About Page</h2>
      <div>
        {translation.formatString(
          translation.aboutPara,
          <a
            style={{ color: "#0099ff" }}
            target="_blank"
            rel="noreferrer"
            href="http://ui-dev.in"
          >
            UI Dev
          </a>
        )}
      </div>
    </div>
  );
}
