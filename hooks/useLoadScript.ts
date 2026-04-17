/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useState } from "react";

export type ScriptState = "ready" | "loading" | "error";
export type ScriptModule = "module" | "nomodule";

const states: Record<string, ScriptState> = {};
export const callbacks: Record<
  string,
  Array<(addedScript: "ready" | "loading" | "error") => any>
> = {};

export const addScript = (
  src: string,
  callback: (addedScript: ScriptState) => any,
  moduleAttr?: ScriptModule,
) => {
  const findScript = () => document.querySelector(`script[src="${src}"]`);

  const successHandler = () => {
    states[src] = "ready";
    while (callbacks[src].length > 0) {
      callbacks[src].pop()!("ready");
    }
  };
  const errHandler = () => () => {
    states[src] = "error";
    while (callbacks[src].length > 0) {
      callbacks[src].pop()!("error");
    }
  };
  const existingScript = findScript();

  if (existingScript) {
    callback(states[src]);
  }

  if (!callbacks[src]) {
    callbacks[src] = [];
  }

  callbacks[src].push(callback);

  if (!existingScript) {
    const scriptTag: HTMLScriptElement = document.createElement("script");
    scriptTag.async = false;
    scriptTag.src = src;
    scriptTag.type = "text/javascript";

    if (moduleAttr === "module") {
      scriptTag.type = "module";
    } else if (moduleAttr === "nomodule") {
      scriptTag.noModule = true;
    }

    scriptTag.addEventListener("load", successHandler);
    scriptTag.addEventListener("error", errHandler);

    try {
      document.head.appendChild(scriptTag);
    } catch (e) {
      console.log("Failed to append script element", e);
    }
  }

  return () => {
    const existingScript = findScript();
    if (existingScript) {
      existingScript.removeEventListener("load", successHandler);
      existingScript.removeEventListener("error", errHandler);
    }
  };
};

export const useLoadScript = (
  src: string,
  moduleAttr?: ScriptModule,
): ScriptState => {
  const [status, setStatus] = useState<ScriptState>("loading");

  useLayoutEffect(() => {
    if (status !== "ready") {
      addScript(
        src,
        () => {
          setStatus("ready");
        },
        moduleAttr,
      );
    }
  }, [src, moduleAttr, status]);

  return status;
};
