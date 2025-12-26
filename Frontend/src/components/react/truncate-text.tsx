type Props = {
   text?: string | undefined;
   wordLimit?: number | undefined;
};

export function useTruncateText({ text = "", wordLimit = 5 }: Props) {
   return text ? text.split(" ").slice(0, wordLimit).join(" ") + "..." : "";
}
export function useShortenText(text: string, length: number = 5): string {
   return text.length > length ? text.substring(0, length) + "..." : text;
}
export function usePhoneNumberFormat(inputPhone: string): string {
   if (inputPhone && inputPhone.startsWith("0")) {
      inputPhone = inputPhone.replace(/^0/, "");
   }
   return inputPhone;
}
export const truncateDangerousHTMLText = (html: string, maxLength: number) => {
   const tempDiv = document.createElement("div");
   tempDiv.innerHTML = html;
   const textContent = tempDiv.textContent || "";
   return textContent.length > maxLength
      ? `${textContent.slice(0, maxLength)}...`
      : textContent;
};
