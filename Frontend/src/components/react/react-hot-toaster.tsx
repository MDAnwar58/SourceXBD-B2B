import toast from "react-hot-toast";

// Define the async saveSettings function
const saveSettings = async (settings: any, stats: string, exp: number) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         // Simulate success or failure
         // const isSuccess = Math.random() > 0.2; // 80% chance of success
         if (stats === "success") {
            resolve("Settings saved successfully!");
         } else {
            reject("Failed to save settings.");
         }
      }, exp); // Simulate a delay
   });
};

export const useHotNotify = (
   message: string,
   stats: string,
   exp: number = 5000
) => {
   // Define the settings object
   const settings = {
      theme: "dark",
      isClosable: true,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
   };

   // Call toast.promise with the saveSettings function and the settings argument
   toast.promise(
      saveSettings(settings, stats, exp),
      {
         loading: "Saving...",
         success: <b>{message}</b>,
         error: <b>{message}</b>,
      },
      {
         position: "top-right",
      }
   );
};
