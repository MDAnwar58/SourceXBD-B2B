import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { LocalUrl } from "@/components/react/localhost";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Tag = {
   id: string;
   text: string;
};
type Blog = {
   title: string;
   sub_title: string;
   type: string;
   desc: string;
   tags: Tag[];
   status: string;
   image: string;
};

export const create_blog = createAsyncThunk<
   Blog,
   { formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("blog/create", async ({ formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/blogs", formData);
      notify(response.data.msg);
      router.push("/admin/blogs");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// get category types list function name is getCategoryTypes
export const getBlogs = createAsyncThunk<
   Blog[],
   { page: number; perPage: number; search: string }
>("blogs/get", async ({ page, perPage, search }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(
         `/admin/blogs?page=${page}&number=${perPage}&key=${search}`
      );
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const getBlog = createAsyncThunk<
   Blog,
   {
      id: string;
      setImage: React.Dispatch<React.SetStateAction<string>>;
      setStatus: React.Dispatch<React.SetStateAction<string>>;
      setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
   }
>(
   "blog/edit",
   async ({ id, setImage, setStatus, setTags }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/blogs/${id}`);
         const localUrl = LocalUrl();
         const image = response.data.data.images
            .map((image: any) => image)
            .join(", ");
         const imagePath = localUrl + "/" + image;
         setImage(imagePath);
         setStatus(response.data.data.status);
         const tags = response.data.data.tags;
         if (typeof tags === "string") {
            const parsedTags = JSON.parse(tags);
            if (Array.isArray(parsedTags)) {
               setTags(parsedTags); // Set the parsed array
            }
         }
         return response.data.data;
      } catch (error: any) {
         console.log(error);
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const update_blog = createAsyncThunk<
   Blog,
   { id: string; formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("blog/update", async ({ id, formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post(`/admin/blog/${id}`, formData);
      notify(response.data.msg);
      router.push("/admin/blogs");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// delete category type
export const delete_blog = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "blog/delete",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/blogs/${id}`);
         notify(response.data.msg);
         dispatch(getBlogs({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// change status sub category type
// export const changeStatusSubCategory = createAsyncThunk<
//    number,
//    { id: number; page: number; perPage: number; search: string },
//    { rejectValue: string }
// >(
//    "category/change-status",
//    async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
//       try {
//          const response = await Axios.get(`/admin/sub_category-status/${id}`);
//          notify(response.data.msg);
//          dispatch(getCities({ page, perPage, search }));
//          return response.data;
//       } catch (error: any) {
//          return rejectWithValue(error.response.data.errors);
//       }
//    }
// );
