import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Category = {
   id: string;
   name: string;
};

type SubCategory = {
   id: string;
   name: string;
};
type Seller = {
   id: string;
   name: string;
};

type Product = {
   id: string;
   name: string;
   slug: string;
   category: Category;
   sub_category: SubCategory;
   price: string | number;
   status: string;
   seller: Seller;
};

interface Tag {
   id: string;
   text: string;
}

export const get_categories = createAsyncThunk<any>(
   "seller/product/categories-get/for-product-create",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get("/seller/get-categories");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
// get category types list function name is getCategoryTypes
export const get_sub_categories = createAsyncThunk<SubCategory[]>(
   "seller/product/sub-category/get",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/get-sub-categories`);
         return response.data as SubCategory[];
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const create_product = createAsyncThunk<
   string,
   { formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>(
   "seller/product/create",
   async ({ formData, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/seller/products", formData);
         notify(response.data.msg);
         setTimeout(() => {
            router.push("/saller/products");
         }, 1000);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// get product list
export const get_products = createAsyncThunk<
   Product[],
   {
      page: number;
      perPage: number;
      search: string;
      tableTab: string;
   }
>(
   "seller/products/get",
   async (
      { page, perPage, search, tableTab },
      { rejectWithValue }
   ): Promise<any> => {
      try {
         const response = await Axios.get(
            `/seller/products?page=${page}&number=${perPage}&key=${search}&tab=${tableTab}`
         );
         console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const get_product = createAsyncThunk<
   Product,
   {
      id: string;
      setProductImages: React.Dispatch<React.SetStateAction<object[]>>;
      setStatus: React.Dispatch<React.SetStateAction<string>>;
      setPublishing: React.Dispatch<React.SetStateAction<{ name: string }[]>>;
      setCategoryId: React.Dispatch<React.SetStateAction<string>>;
      setSubCategoryId: React.Dispatch<React.SetStateAction<string>>;
      setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
      localUrl: any;
   }
>(
   "seller/product/edit",
   async (
      {
         id,
         setProductImages,
         setStatus,
         setPublishing,
         setCategoryId,
         setSubCategoryId,
         setTags,
         localUrl,
      },
      { rejectWithValue }
   ) => {
      try {
         const response = await Axios.get(`/seller/products/${id}`);

         if (response.data.images) {
            const filePaths = response.data.images.map(
               (media: any) => localUrl + media?.file_path
            );
            setProductImages(filePaths);
         }
         setCategoryId(response.data.category_id);
         setSubCategoryId(response.data.sub_category_id);
         setStatus(response.data.status);
         const publishing = JSON.parse(response.data.publish);
         setPublishing(publishing);
         const tagsJson = JSON.parse(response.data.tags);
         const tags = tagsJson;
         setTags(tags);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const update_product = createAsyncThunk<
   string,
   { id: string; formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>(
   "seller/products/update",
   async ({ id, formData, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(`/seller/product/${id}`, formData);

         notify(response.data.msg);
         router.push("/saller/products");
         return response.data;
      } catch (error: any) {
         console.log(error.response.data);
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// delete category type
export const deleteProduct = createAsyncThunk<
   number,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
      tableTab: string;
   },
   { rejectValue: string }
>(
   "seller/product/delete",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.delete(`/seller/products/${id}`);
         notify(response.data.msg);
         dispatch(get_products({ page, perPage, search, tableTab })); // get product after delete());
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// restore product type
export const restore_product = createAsyncThunk<
   number,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
      tableTab: string;
   },
   { rejectValue: string }
>(
   "seller/product/restore",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/seller/restore-products/${id}`);
         notify(response.data.msg);
         dispatch(get_products({ page, perPage, search, tableTab })); // get product after delete());
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// force delete product type
export const force_delete_product = createAsyncThunk<
   number,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
      tableTab: string;
   },
   { rejectValue: string }
>(
   "seller/product/force-delete",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(
            `/seller/force-delete/products/${id}`
         );
         notify(response.data.msg);
         dispatch(get_products({ page, perPage, search, tableTab })); // get product after delete());
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// error clean up
export const errorCleanUp = createAsyncThunk(
   "seller/product/error-clean-up",
   async (_, { rejectWithValue }) => {
      try {
         const error = {};
         return error;
      } catch (error: any) {
         return rejectWithValue(error);
      }
   }
);
