import React from "react";

export function LocalUrl(): string {
   return process.env.NEXT_PUBLIC_BACKEND_API_URL || "";
}
