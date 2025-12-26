export function getUrlLastPart(url: string) {
   const Url = new URL(url);
   const path = Url.pathname;
   const param = path.split("/").pop();
   return param;
}

export function getWithForwardSlushStoreFileUrl(
   store_file_urls: any[],
   localUrl: string
): string | null {
   if (store_file_urls !== undefined && store_file_urls.length > 0) {
      const storeFile = store_file_urls?.map((user: any) => user.image);
      const storeFilePath = storeFile.join("");
      const forwardSlash = "/";
      const ImagePath = forwardSlash.concat(storeFilePath);
      const imageUrl = localUrl.concat(ImagePath);
      return imageUrl;
   } else {
      return null;
   }
}
