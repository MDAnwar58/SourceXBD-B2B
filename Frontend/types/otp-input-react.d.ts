declare module "otp-input-react" {
   import { FC } from "react";

   interface OTPInputProps {
      value: string;
      onChange: (value: string) => void;
      autoFocus?: boolean;
      isNumberInput?: boolean;
      disabled?: boolean;
      OTPLength?: number;
      otpType?: "number" | "alpha";
      className?: string;
      inputClassName?: string;
      inputStyle?: React.CSSProperties;
      focusStyle?: React.CSSProperties;
   }

   interface ResendOTPProps {
      maxTime?: number;
      onResendClick: () => void;
      className?: string;
   }

   export const OTPInput: FC<OTPInputProps>;
   export const ResendOTP: FC<ResendOTPProps>;
   export default OTPInput;
}
