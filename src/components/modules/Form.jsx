import React, { useState } from "react";
import BtnPink from "./BtnPink";
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

function FormJoin({ pInput }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  var regexEmail = /[^a-z0-9]{0,3}@gmail.com$/;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("required");
    } else {
      if (!regexEmail.test(email)) {
        setError("notValid");
      } else {
        const res = await fetch("http://localhost:5000/email", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (res.status === 201) {
          setError("success");
          setEmail("");
        } else {
          setError("reject");
        }
      }
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className="w-full">
        <div className={`flex flex-col items-center gap- w-full ${error.trim() ? "gap-2" : "gap-6"}`}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email address"
            className={`w-full md:w-full bg-accent  rounded-full text-center text-xs font-semibold md:text-lg  shadow-input focus:shadow-input ${pInput}`}
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setError("");
              }
              setEmail(e.target.value);
            }}
          />

          {error === "required" ? (
            <p className="text-[13px] text-red-600 font-medium flex items-center gap-1">
              <IoIosCloseCircleOutline size="18px" className="fill-red-500" />{" "}
              this field required !
            </p>
          ) : error === "notValid" ? (
            <p className="text-[13px] text-red-600 font-medium flex items-center gap-1">
              <IoIosCloseCircleOutline size="18px" className="fill-red-500" />{" "}
              this email is not valid !
            </p>
          ) : error === "success" ? (
            <p className="text-[13px] text-white/65 font-medium flex items-center gap-1">
              <MdMarkEmailRead size="18px" className="fill-yellow-300" />{" "}
              Confirmation email sent. Please check your inbox.
            </p>
          ) : error === "reject" ? (
            <p className="text-[13px] text-white/55 font-medium flex items-center gap-1">
              <IoIosCloseCircleOutline size="18px" className="fill-red-500" />{" "}
              Please try a few more times
            </p>
          ) : (
            ""
          )}
          <BtnPink type="submit">Get Updates</BtnPink>
        </div>
      </form>
    </>
  );
}

FormJoin.defaultProps = {
  pInput: "py-2.5 md:py-4 px-6",
};

export default FormJoin;
