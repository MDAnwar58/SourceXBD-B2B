import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
   cors: {
      origin: "*",
   },
});

const onlineBuyerIds = new Map();
const onlineSellerIds = new Map();
const typingUsers = new Map();

io.on("connection", (socket) => {
   console.log("SourceBDX a user connected live with socket io");
   socket.on("sendChatToSourceBDXServer", (data) => {
      console.log("SourceBDX sendChatToSourceBDX", data);
      io.emit("sendChatToSourceBDXClient", data);
   });

   socket.on("buyerStatusToSourceBDXServer", (userId) => {
      console.log("SourceBDX Buyers Online Active Status", userId);

      for (const [key, value] of onlineBuyerIds) {
         if (value === userId) {
            onlineBuyerIds.delete(key);
         }
      }
      onlineBuyerIds.set(socket.id, userId);
      console.log(
         "Current online buyers:",
         Array.from(onlineBuyerIds.values())
      );

      io.emit(
         "buyerStatusToSourceBDXClient",
         Array.from(onlineBuyerIds.values())
      );
   });
   socket.on("buyerLogoutToSourceBDXServer", (userId) => {
      console.log("SourceBDX Buyers Offline User", userId);
      for (const [key, value] of onlineBuyerIds) {
         if (value === userId) {
            console.log("Logging out user:", value);
            onlineBuyerIds.delete(key); // Remove the userId from the map
            break; // Exit the loop once the userId is found and removed
         }
      }
      io.emit(
         "buyerLogoutToSourceBDXClient",
         Array.from(onlineBuyerIds.values())
      );
      console.log(
         "Current online buyers:",
         Array.from(onlineBuyerIds.values())
      );
   });

   socket.on("sellerStatusToSourceBDXServer", (userId) => {
      console.log("SourceBDX Sellers Online Active Status", userId);

      for (const [key, value] of onlineSellerIds) {
         if (value === userId) {
            onlineSellerIds.delete(key);
         }
      }
      onlineSellerIds.set(socket.id, userId);
      console.log(
         "Current online sellers:",
         Array.from(onlineSellerIds.values())
      );

      io.emit(
         "sellerStatusToSourceBDXClient",
         Array.from(onlineSellerIds.values())
      );
   });
   socket.on("sellerLogoutToSourceBDXServer", (userId) => {
      console.log("SourceBDX Buyers Offline User", userId);
      for (const [key, value] of onlineSellerIds) {
         if (value === userId) {
            console.log("Logging out user:", value);
            onlineSellerIds.delete(key); // Remove the userId from the map
            break; // Exit the loop once the userId is found and removed
         }
      }
      io.emit(
         "sellerLogoutToSourceBDXClient",
         Array.from(onlineSellerIds.values())
      );
   });

   socket.on("sendChatUserTypeingToSourceBDXServer", (chat) => {
      console.log("SourceBDX sendUserTypeingChatToSourceBDX", chat);
      let userFound = false;
      for (const [key, user] of typingUsers.entries()) {
         if (user.fromId === chat.fromId && user.toId === chat.toId) {
            user.typing = chat.typing;
            typingUsers.set(key, user);
            userFound = true;
            break;
         }
      }
      if (!userFound) {
         typingUsers.set(socket?.id, chat); // chat contains fromId, toId, typing, etc.
      }
      console.log("Updated typing users:", Array.from(typingUsers.values()));
      io.emit(
         "sendChatUserTypeingToSourceBDXClient",
         Array.from(typingUsers.values())
      );
   });

   socket.on("disconnect", () => {
      console.log("SourceBDX a user disconnected");
      // Remove the user ID from the Map using the socket ID
      const buyerId = onlineBuyerIds.get(socket.id);
      const sellerId = onlineSellerIds.get(socket.id);
      if (buyerId) {
         onlineBuyerIds.delete(socket.id);
         console.log(
            `User ${buyerId} disconnected. Current online users:`,
            Array.from(onlineBuyerIds.values())
         );
         // Broadcast updated online users list
         io.emit(
            "buyerStatusToSourceBDXClient",
            Array.from(onlineBuyerIds.values())
         );
      }
      if (sellerId) {
         onlineSellerIds.delete(socket.id); // Remove user from the map
         console.log(
            `User ${sellerId} disconnected. Current online users:`,
            Array.from(onlineSellerIds.values())
         );
         // Broadcast updated online users list
         io.emit(
            "sellerStatusToSourceBDXClient",
            Array.from(onlineSellerIds.values())
         );
      }
   });
});

server.listen(6001, () => {
   console.log("server is running on port 6001");
});
