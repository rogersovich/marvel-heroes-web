import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react"
import { FieldError, UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  errors: FieldError | undefined;
  register: UseFormRegister<any>;
  label: string;
  isLabeled?: boolean;
  placeholder: string;
  onKeyUp? : (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CsInput: React.FC<Props> = ({ name, errors, register, label = true, isLabeled, placeholder, onKeyUp }) => {
  return (
    <>
      <FormControl isInvalid={!!errors}>
        {isLabeled === true ? (
          <FormLabel htmlFor={name}>{label}</FormLabel>
        ) : null}

        <Input id={name} placeholder={placeholder} {...register(name)} onKeyUp={onKeyUp} />
        <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
      </FormControl>
    </>
  );
};


export default CsInput
