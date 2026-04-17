"use client";
import React, { useEffect } from "react";

import { useLoadScript } from "@/hooks/useLoadScript";

type BirthdayWidgetProps = {
  token: string;
  mode: "EXTERNAL" | "PROFILE";
  country: string;
  locale: string;
  scrollOnAddNew?: boolean;
  onBirthdayChanged?: (event: CustomEvent) => void;

  version?: "v7" | "v8";
  environment?: "preview" | "production";
};

const previewUrl = "https://components.profile.porsche-preview.com";
const productionUrl = "https://components.profile.porsche.com";

export const MyProfileBirthdayWidgetWebComponent: React.FC<
  BirthdayWidgetProps
> = (props) => {
  const birthdayWidgetRef = React.useRef<HTMLDivElement>(null);
  const baseUrl = props.environment === "preview" ? previewUrl : productionUrl;
  const state = useLoadScript(
    `${baseUrl}/${props.version || "v8"}/webcomponents.js`,
  );

  useEffect(() => {
    if (state !== "ready") {
      return;
    }

    const onBirthdayChanged: EventListener = (event) => {
      if (event instanceof CustomEvent) {
        props.onBirthdayChanged?.(event);
      }
    };

    const birthdayNode = birthdayWidgetRef.current;

    if (birthdayNode) {
      birthdayNode.addEventListener("birthdayChanged", onBirthdayChanged);
    }

    return () => {
      if (birthdayNode) {
        birthdayNode.removeEventListener("birthdayChanged", onBirthdayChanged);
      }
    };
  }, [state]);

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <myprofile-birthday-widget
        ref={birthdayWidgetRef}
        token={props.token}
        mode={props.mode}
        country={props.country}
        locale={props.locale}
        scroll-on-add-new={props.scrollOnAddNew}
      />
    </div>
  );
};

export default MyProfileBirthdayWidgetWebComponent;
