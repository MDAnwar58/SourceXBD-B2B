import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { LocalUrl } from "@/components/react/localhost";
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

export const get_categories = createAsyncThunk<Category[]>(
   "categories-get/for-product-create",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get("/admin/get-categories");
         return response.data as Category[];
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
// get category types list function name is getCategoryTypes
export const get_sub_categories = createAsyncThunk<SubCategory[]>(
   "sub-category/get",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/admin/get-sub-categories`);
         return response.data as SubCategory[];
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
// get category types list function name is getCategoryTypes
export const get_sellers = createAsyncThunk<Seller[]>(
   "sub-category/get-for-product-create",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/admin/get-sellers`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const create_product = createAsyncThunk<
   string,
   { formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("product/create", async ({ formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/products", formData);
      notify(response.data.msg);
      router.push("/admin/products");
      return response.data;
   } catch (error: any) {
      console.log(error.response);
      return rejectWithValue(error.response.data.errors);
   }
});

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
   "products/get",
   async (
      { page, perPage, search, tableTab },
      { rejectWithValue }
   ): Promise<any> => {
      try {
         const response = await Axios.get(
            `/admin/products?page=${page}&number=${perPage}&key=${search}&tab=${tableTab}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
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
      setSection: React.Dispatch<React.SetStateAction<string>>;
      setUserId: React.Dispatch<React.SetStateAction<string>>;
      setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
   }
>(
   "product/edit",
   async (
      {
         id,
         setProductImages,
         setStatus,
         setPublishing,
         setCategoryId,
         setSubCategoryId,
         setSection,
         setUserId,
         setTags,
      },
      { rejectWithValue }
   ) => {
      try {
         const response = await Axios.get(`/admin/products/${id}`);

         const localUrl = LocalUrl();
         const filePaths = response.data.images.map(
            (media: any) => localUrl + media.file_path
         );
         setProductImages(filePaths);
         setUserId(response.data.user_id);
         setCategoryId(response.data.category_id);
         setSubCategoryId(response.data.sub_category_id);
         setStatus(response.data.status);
         const publishing = JSON.parse(response.data.publish);
         setPublishing(publishing);
         // const remark = response.data.section === "tranding" ? 1 : 2;
         // setSection(remark.toString());
         const tagsJson = JSON.parse(response.data.tags);
         const tags = tagsJson !== null ? tagsJson : [];
         setTags(tags);
         // console.log(response.data.desc);
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
>("products/update", async ({ id, formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post(`/admin/product/${id}`, formData);

      notify(response.data.msg);
      router.push("/admin/products");
      return response.data;
   } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data.errors);
   }
});

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
   "product/delete",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.delete(`/admin/products/${id}`);
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
   "product/restore",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/restore-products/${id}`);
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
   "product/force-delete",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/product-force-delete/${id}`);
         notify(response.data.msg);
         dispatch(get_products({ page, perPage, search, tableTab })); // get product after delete());
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
// change approval status
export const change_approve_product = createAsyncThunk<
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
   "product/change-approve-product",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/product-approve/${id}`);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(get_products({ page, perPage, search, tableTab }));
         }
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
// change reject status
export const change_reject_product = createAsyncThunk<
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
   "product/change-reject-product",
   async (
      { id, page, perPage, search, tableTab },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/product-desline/${id}`);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(get_products({ page, perPage, search, tableTab }));
         }
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
