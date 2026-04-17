"use client";
import React, { useEffect } from "react";

import { useLoadScript } from "@/hooks/useLoadScript";

type PhoneWidgetProps = {
  token: string;
  mode: "CHECKOUT";
  country: string;
  locale: string;

  shouldShowHeadline?: boolean;
  scrollOnAddNew?: boolean;
  initiallySelectedPhoneId?: string;
  mobilesOnly?: boolean;

  onPhoneSelected?: (event: CustomEvent) => void;

  version?: "v7" | "v8";
  environment?: "preview" | "production";
};

const previewUrl = "https://components.profile.porsche-preview.com";
const productionUrl = "https://components.profile.porsche.com";

export const MyProfilePhoneWidgetWebComponent: React.FC<PhoneWidgetProps> = (
  props,
) => {
  const phoneWidgetRef = React.useRef<HTMLDivElement>(null);
  const baseUrl = props.environment === "preview" ? previewUrl : productionUrl;
  const state = useLoadScript(
    `${baseUrl}/${props.version || "v8"}/webcomponents.js`,
  );

  useEffect(() => {
    if (state !== "ready") {
      return;
    }

    const onPhoneSelected: EventListener = (event) => {
      if (event instanceof CustomEvent) {
        props.onPhoneSelected?.(event);
      }
    };

    const phoneNode = phoneWidgetRef.current;

    if (phoneNode) {
      phoneNode.addEventListener("phoneSelected", onPhoneSelected);
    }

    return () => {
      if (phoneNode) {
        phoneNode.removeEventListener("phoneSelected", onPhoneSelected);
      }
    };
  }, [state]);

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <myprofile-phone-widget
        ref={phoneWidgetRef}
        token={props.token}
        mode={props.mode}
        country={props.country}
        locale={props.locale}
        should-show-headline={props.shouldShowHeadline}
        scroll-on-add-new={props.scrollOnAddNew}
        initially-selected-phone-id={props.initiallySelectedPhoneId}
        mobiles-only={props.mobilesOnly}
      />
    </div>
  );
};

export default MyProfilePhoneWidgetWebComponent;
