declare module "html-truncate" {
   function truncate(
      html: string,
      limit: number,
      options?: { ellipsis?: string }
   ): string;
   export default truncate;
}
