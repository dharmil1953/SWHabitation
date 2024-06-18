import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  EmailFormFields,
  ErrorResponseArgs,
  PendingArgs,
  SuccessResponseArgs,
} from "react-mailchimp-subscribe";
import clsx from "clsx";
import locales from "../../../../../lib/locales";

const EmailForm: React.FC<{
  status:
    | ErrorResponseArgs["status"]
    | SuccessResponseArgs["status"]
    | PendingArgs["status"];
  subscribe: (data: EmailFormFields) => void;
  message:
    | ErrorResponseArgs["message"]
    | SuccessResponseArgs["message"]
    | PendingArgs["message"];
  input_placeholder?: string;
  button_label?: string;
  sidebar?: boolean;
}> = ({
  status,
  message,
  subscribe,
  input_placeholder,
  button_label,
  sidebar,
}) => {
  const initialValues: { email: string } = { email: "" };

  const validate = (values: { email: string }) => {
    const errors: { email?: string } = {};
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const handleSubmit = (values: { email: string }) => {
    subscribe({ EMAIL: values.email });
  };

  return (
    <div className="mail-msg pt-6 w-full">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex s(480):flex-col items-center s(767):justify-[unset] justify-center w-full relative">
          <Field
            className={clsx(
              "border border-ivory placeholder:text-theme-ivory py-[10px] px-[15px] bg-transparent placeholder:font-normal font-normal s(640):w-full w-[285px] focus-within:outline-0 ",
              status === "error"
                ? "border-[red] border-[1px] bg-[transparent]  placeholder:text-white "
                : ""
            )}
            type="email"
            name="email"
            placeholder={input_placeholder ?? "Email address"}
          />
          <button
            className="cursor-pointer bg-theme-ivory text-theme-black s(767):text-18 text-24 py-[10px] px-[32px]  s(480):mt-4 s(480):ml-0 ml-2 hover:bg-transparent border-2 border-transparent hover:border-theme-ivory hover:text-theme-ivory transition-all delay-100 ease-in-out"
            type="submit"
          >
            {button_label ?? locales.en.SUBSCRIBE}
          </button>
          <div className="absolute bottom-[-30px]">
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EmailForm;
