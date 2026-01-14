"use client";
import React from "react";

export default function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  isTextarea = false,
  required = false,
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="font-medium ml-2">
          {label}
        </label>
      )}

      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:shadow-primary focus:shadow resize-none w-full"
          rows={5}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:shadow-primary focus:shadow w-full"
        />
      )}
    </div>
  );
}
