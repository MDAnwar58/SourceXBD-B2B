export function setLocalStorage(key: string, data: any) {
   if (typeof window !== "undefined") {
      localStorage.setItem(key, data);
   }
}
export const getLocalStorage = (key: string) => {
   try {
      return localStorage.getItem(key);
   } catch (error) {
      // console.error("Error accessing localStorage:", error);
      return null;
   }
};
export function removeLocalStorage(key: string) {
   if (typeof window !== "undefined") {
      const data = localStorage.removeItem(key);
      return data;
   }
}

export function getLocalStorageObjectValue(objectValue: any) {
   const object_value = Object.fromEntries(new URLSearchParams(objectValue));
   return object_value || {};
}
