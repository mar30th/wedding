import React from "react";

export const mapRange = (
  inputLower: any,
  inputUpper: any,
  outputLower: any,
  outputUpper: any,
  value: any
) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;
  return (
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  );
};
