"use client";
import React, { useEffect } from "react";

import { useLoadScript } from "@/hooks/useLoadScript";

export type AddressWidgetProps = {
  token: string;
  mode: "CHECKOUT" | "PROFILE" | "MYLANTA";
  country: string;
  locale: string;

  shouldShowHeadline?: boolean;
  scrollOnAddNew?: boolean;
  identifier?: string;
  initiallySelectedAddressId?: string;

  onAddressSelected?: (event: CustomEvent) => void;

  version?: "v7" | "v8";
  environment?: "preview" | "production";
};

const previewUrl = "https://components.profile.porsche-preview.com";
const productionUrl = "https://components.profile.porsche.com";

export const MyProfileAddressWidgetWebComponent: React.FC<
  AddressWidgetProps
> = (props) => {
  const addressWidgetRef = React.useRef<HTMLDivElement>(null);
  const baseUrl = props.environment === "preview" ? previewUrl : productionUrl;
  const state = useLoadScript(
    `${baseUrl}/${props.version || "v8"}/webcomponents.js`,
  );

  useEffect(() => {
    if (state !== "ready") {
      return;
    }

    const onAddressSelected: EventListener = (event) => {
      if (event instanceof CustomEvent) {
        props.onAddressSelected?.(event);
      }
    };

    const addressNode = addressWidgetRef.current;

    if (addressNode) {
      addressNode.addEventListener("addressSelected", onAddressSelected);
    }

    return () => {
      if (addressNode) {
        addressNode.removeEventListener("addressSelected", onAddressSelected);
      }
    };
  }, [state]);

  if (state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <myprofile-address-widget
        ref={addressWidgetRef}
        token={props.token}
        mode={props.mode}
        country={props.country}
        locale={props.locale}
        should-show-headline={props.shouldShowHeadline}
        scroll-on-add-new={props.scrollOnAddNew}
        identifier={props.identifier}
        initially-selected-address-id={props.initiallySelectedAddressId}
      />
    </div>
  );
};

export default MyProfileAddressWidgetWebComponent;
