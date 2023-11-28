import React from "react";
import { Button } from "./button";

export default function Modal({ visible, onClose }: any) {
  const handleOnClose = (e: any) => {
    e.stopPropagation();
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded-lg border flex flex-col mx-auto shadow-lg">
        <h2 className="text-center h2 pb-2">I've got mail!</h2>
        <p className="subtitle text-center text-primary">
          Thanks for getting in touch, I'll get back to you soon.
        </p>
        <div className="mx-auto">
          <Button type="submit" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
