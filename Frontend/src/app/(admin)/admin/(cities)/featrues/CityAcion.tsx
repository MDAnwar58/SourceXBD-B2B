import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { LocalUrl } from "@/components/react/localhost";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Country = {
   id: number;
   iso: string;
   nicename: string;
};
type City = {
   name: string;
   country_id: number | string;
   map: string;
   desc: any;
   status: string;
};

export const getCountries = createAsyncThunk<Country[]>(
   "countries/get-for-city-create",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/countries");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const create_city = createAsyncThunk<
   any,
   { formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("city/create", async ({ formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/cities", formData);
      notify(response.data.msg);
      router.push("/admin/cities");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// get category types list function name is getCategoryTypes
export const getCities = createAsyncThunk<
   City[],
   { page: number; perPage: number; search: string }
>("city/get", async ({ page, perPage, search }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(
         `/admin/cities?page=${page}&number=${perPage}&key=${search}`
      );
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const get_city = createAsyncThunk<
   City,
   {
      id: number;
      setCountry: any;
      setImage: React.Dispatch<React.SetStateAction<string>>;
      setStatus: React.Dispatch<React.SetStateAction<string>>;
   }
>(
   "city/edit",
   async ({ id, setCountry, setImage, setStatus }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/cities/${id}`);
         const localUrl = LocalUrl();
         const country = {
            id: response.data.country.id,
            iso: response.data.country.iso,
            name: response.data.country.name,
         };
         if (response.data.images.length > 0) {
            const image = response.data.images
               .map((item: any) => item.image)
               .join(", ");

            setImage(localUrl + "/" + image);
         }
         setCountry(country);
         setStatus(response.data.status);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const update_city = createAsyncThunk<
   any,
   { id: number; formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("city/update", async ({ formData, id, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post(`/admin/city/${id}`, formData);
      console.log(response.data);
      notify(response.data.msg);
      router.push("/admin/cities");
      return response.data;
   } catch (error: any) {
      console.error(error.response);
      return rejectWithValue(error.response.data.errors);
   }
});

// delete category type
export const delete_city = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "city/delete",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/cities/${id}`);
         notify(response.data.msg);
         dispatch(getCities({ page, perPage, search }));
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
