import React from "react";

type MyProfilePhoneWidgetProps = React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLElement>,
   HTMLElement
> & {
   token: string;
   mode: "CHECKOUT";
   country: string;
   locale: string;
   "should-show-headline"?: boolean;
   "scroll-on-add-new"?: boolean;
   "initially-selected-phone-id"?: string;
   "mobiles-only"?: boolean;
};

type MyProfileBirthdayWidgetProps = React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLElement>,
   HTMLElement
> & {
   token: string;
   mode: "EXTERNAL" | "PROFILE";
   country: string;
   locale: string;
   "scroll-on-add-new"?: boolean;
   environment?: "production" | "preview";
};

type MyProfileAddressWidgetProps = React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLElement>,
   HTMLElement
> & {
   token: string;
   mode: "CHECKOUT" | "PROFILE" | "MYLANTA";
   country: string;
   locale: string;
   "should-show-headline"?: boolean;
   "scroll-on-add-new"?: boolean;
   identifier?: string;
   "initially-selected-address-id"?: string;
};

declare global {
   namespace JSX {
      interface IntrinsicElements {
         "myprofile-phone-widget": MyProfilePhoneWidgetProps;
         "myprofile-birthday-widget": MyProfileBirthdayWidgetProps;
         "myprofile-address-widget": MyProfileAddressWidgetProps;
      }
   }
}

declare module "react" {
   namespace JSX {
      interface IntrinsicElements {
         "myprofile-phone-widget": MyProfilePhoneWidgetProps;
         "myprofile-birthday-widget": MyProfileBirthdayWidgetProps;
         "myprofile-address-widget": MyProfileAddressWidgetProps;
      }
   }
}

export {};
