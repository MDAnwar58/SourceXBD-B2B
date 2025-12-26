import Cookies from "js-cookie";

export function setCookie(name: string, value: string, exp: number) {
   const options: any = {
      expires: exp,
      path: "/",
      sameSite: "Strict", // or "Lax" / "None" as per your requirements
   };
   // If you want to enforce secure cookies
   if (window.location.protocol === "https:") {
      options.secure = true; // Only set secure to true if on HTTPS
   }
   Cookies.set(name, value, options);
}
export function removeCookie(name: string) {
   Cookies.remove(name);
}
export function getCookie(name: string) {
   return Cookies.get(name);
}

// Set a cookie using document.cookie with expiration in minutes
export const setCookieForShortTerm = (
   name: string,
   value: any,
   minutes: number
) => {
   let expires = "";
   if (minutes) {
      const date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000); // Calculate expiration in minutes
      expires = "; expires=" + date.toUTCString();
   }
   document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
