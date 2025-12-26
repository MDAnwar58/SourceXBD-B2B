import { decodeToken } from "react-jwt";

interface DecodedToken {
   sub: string; // Change the type based on your JWT structure
   name: string;
   email: string;
   role: string;
   permissions: any[];
   nbf: string | number;
   roles: any[];
   // Add any additional properties you expect from your token
}

export function useAuth(token: any) {
   const myDecodedToken = decodeToken<DecodedToken>(token);
   // Check if the token is valid (decoded token is not null)
   if (!myDecodedToken) {
      return null; // or handle the invalid token case as needed
   }
   const user = {
      id: myDecodedToken.sub,
      name: myDecodedToken.name,
      email: myDecodedToken.email,
      role: myDecodedToken.role,
      permissions: myDecodedToken.permissions,
      phone: myDecodedToken.nbf,
      roles: myDecodedToken.roles,
   };
   return user;
}
