import React from "react";

export function H1({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h1 className={"text-6xl font-extrabold tracking-wide drop-shadow-lg leading-tight bg-gradient-to-b from-teal-400 from-40% to-teal-800 to-100% text-transparent bg-clip-text  " + className}>
            {children}
        </h1>
    );
}

export function H2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={
        "text-4xl font-semibold tracking-wide mb-6 leading-tight bg-gradient-to-b from-teal-400 from-40% to-teal-800 to-100% text-transparent bg-clip-text " +
        className
      }
    >
      {children}
    </h2>
  );
}


export function H3({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h3
            className={"text-2xl font-semibold text-teal-200 tracking-wide mb-4 leading-tight bg-gradient-to-b from-teal-400 from-50% to-teal-800 to-100% text-transparent bg-clip-text " + className}>
            {children}
        </h3>
    );
}

export function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={
        "text-gray-300 text-lg leading-relaxed max-w-3xl " + className
      }
    >
      {children}
    </p>
  );
}

export function PSmall({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={
        "text-gray-400 text-sm leading-relaxed max-w-3xl " + className
      }
    >
      {children}
    </p>
  );
}

export function PLarge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={
        "text-gray-100 text-xl leading-relaxed max-w-3xl " + className
      }
    >
      {children}
    </p>
  );
}