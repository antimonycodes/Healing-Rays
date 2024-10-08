import React from "react";

const Payment = () => {
  return (
    <>
      <div>
        <div className="grid mt-8 gap-y-16 px-3 sm:px-10 font-semibold ">
          <p className=" flex gap-x-3 sm:gap-x-12 text-[#0A4F1b] text-[18px] font-bold ">
            II. <span>Payments</span>
          </p>
          <p>
            You agree to an annual subscription fee of ₦10,000 (for specialists)
            and ₦7,000 (for general practitioners) to remain active on the
            platform. If you are a doctor outside Nigeria, you agree to an
            annual subscription fee of $50 (for specialists), and $30 (for
            general practitioners) to remain active. As a general practitioner,
            you also agree to retain 60% of the total fee paid by the patient
            for every consultation, while Healing Rays retains 40%. As a
            specialist, you agree to retain 70% of the total fee paid by the
            patient for every consultation, while Healing Rays retains 30%.
          </p>
        </div>
      </div>
    </>
  );
};

export default Payment;
