import { memo } from "react";
import React from "react";
import clsx from "clsx";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import en_locales from "../../../../lib/locales/en";
import DoubleArrowDown from "@/components/Commons/AllIcons/DoubleArrowDown";
export interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(en_locales.NAMEISREQUIRED),
    email: Yup.string()
      .required(en_locales.EMAILISREQUIRED)
      .email(en_locales.INVALIDEMAILADDRESS),
    phone: Yup.string()
      .required(en_locales.PHONEISREQUIRED)
      .matches(/^(\+?\d{1,4}[\s-]?)?\d{8,14}$/, en_locales.INVALIDPHONENUMBER),
  });
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/contact-form`, values);
      // console.log(response, "ok");
      if (response?.status) {
        formik.resetForm();
        setSubmitted(true);
      }
    } catch (error) {
      return console.error("Error submitting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    isInitialValid: false,
  });
  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);
  return (
    <section className="mt-[4rem]">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="font-Poppins">
            <input
              placeholder={"Name"}
              type="string"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              className={`border-b-[1px] border-theme-black w-full  outline-none h-[41px]  bg-[transparent] text-base placeholder:text-20 placeholder:text-theme-black placeholder:leading-[24px] placeholder:font-light ${
                formik.errors.name && formik.touched.name
                  ? "!border-[red]"
                  : "border-white-color"
              }`}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>
          <div className="mt-[2.625rem]">
            <input
              placeholder={"Phone"}
              type="string"
              id="phone"
              name="phone"
              maxLength={10}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`border-b-[1px] appearance-none border-theme-black outline-none  h-[41px]  w-full bg-[transparent] text-base placeholder:text-20 placeholder:text-theme-black placeholder:leading-[24px] placeholder:font-light ${
                formik.errors.phone && formik.touched.phone
                  ? "!border-[red]"
                  : "border-white-color"
              }`}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          <div className="mt-[2.62rem]">
            <input
              placeholder={"Email"}
              type="string"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`border-b-[1px] border-theme-black h-[41px] outline-none w-full bg-[transparent]  text-base placeholder:text-20 placeholder:text-theme-black placeholder:leading-[24px] placeholder:font-light ${
                formik.errors.email && formik.touched.email
                  ? "!border-[red]"
                  : "border-white-color"
              }`}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="mt-[2.625rem]">
            <textarea
              placeholder={"Message"}
              name="message"
              onChange={formik.handleChange}
              rows={1}
              cols={1}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="border-b-[1px] border-theme-black h-[42px] outline-none w-full bg-[transparent]  text-base placeholder:text-20 placeholder:text-theme-black placeholder:leading-[24px] placeholder:font-light resize-none flex flex-col items-center  "
            />
          </div>
          <div className="flex w-full mt-[4rem]  ">
            <button
              className={clsx(
                " group py-3 px-6 flex items-center gap-1 w-fit ",
                loading
                  ? "bg-[black] text-theme-ivory"
                  : submitted
                  ? "bg-[green] text-theme-ivory"
                  : "shadow-buttonShadow  bg-theme-black border-2 border-transparent hover:bg-transparent  transition-all duration-300 ease-in-out hover:shadow-none  hover:border-theme-black  "
              )}
              type="submit"
              disabled={loading || submitted}
            >
              <span
                className={clsx(
                  " text-20 font-light text-theme-ivory",
                  loading
                    ? ""
                    : submitted
                    ? " "
                    : "group-hover:text-theme-black text-theme-ivory"
                )}
              >
                {loading
                  ? "Submitting..."
                  : submitted
                  ? en_locales.THANKYOU
                  : en_locales.SENDMESSAGE}
              </span>
              <DoubleArrowDown
                className={clsx(
                  "",
                  loading
                    ? ""
                    : submitted
                    ? ""
                    : "group-hover:[&>path]:!stroke-theme-black group-hover:[&>path]:!fill-theme-black"
                )}
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactForm);
{
  /* <div className="flex w-full mt-[4rem] ">
	<button
		className={clsx(
			"disabled:opacity-70 opacity-100 disabled:cursor-not-allowed shadow-buttonShadow group  flex items-center gap-1 w-fit bg-[#333333] border-2 border-transparent hover:bg-transparent  transition-all duration-300 ease-in-out hover:shadow-none  hover:border-[#333333] cursor-pointer   ",
			loading
				? "py-3 px-6 text-white  text-20 font-light "
				: submitted
				? "bg-[green] py-3 px-8 text-white  text-20 font-light cursor-pointer"
				: "bg-brand-lightPurple py-3 px-8 text-white text-20 font-light cursor-pointer "
		)}
		type="submit"
		disabled={loading || submitted}
	>
		<span className="group-hover:text-[#333333] text-theme-ivory">
			{" "}
			{loading
				? "Submitting..."
				: submitted
				? en_locales.THANKYOU
				: en_locales.SENDMESSAGE}
		</span>
		<DoubleArrowDown className="group-hover:[&>path]:!stroke-[#333333] group-hover:[&>path]:!fill-[#333333]" />
	</button>
</div>; */
}
// ("group-hover:text-[#333333] text-theme-ivory" ,
