"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { ItemUserUpSvgIcon } from "@/buyer/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { BuyerState } from "@/app/buyer/store";
import { AppDispatch } from "@/app/store";
import {
   deleteBuyerProfileSocialMediaLink,
   getBuyerProfileSocialMediaLinks,
   getCountiresForProfileUpdate,
   getProfileForEdit,
   storeBuyerProfileSocialMediaLink,
   updateBuyerProfile,
} from "@/buyer/profile/features/ProfileAction";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { LocalUrl } from "@/components/react/localhost";
import { FaceBookSvgIcon } from "@/saller/components/SvgIcons";
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const ProfileImageUpload = dynamic(() => import("./ProfileImageUpload"), {
   ssr: false,
});
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"), {
   ssr: false,
});
const BuyerCountrySearchAutoComplete = dynamic(
   () => import("@/app/buyer/components/SearchAutoComplete"),
   {
      ssr: false,
   }
);
const SocialMediaLinksCard = dynamic(() => import("./SocialMediaLinksCard"), {
   ssr: false,
});

type SocialMedia = {
   id: number;
   name: string;
   logo: string;
};

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

const icon = (
   <div className="w-6 h-6 text-gray-700">
      <ItemUserUpSvgIcon />
   </div>
);

type Props = {
   params: {
      id: string;
   };
};

export default function ProfileEditContent({ params }: Props) {
   const [name, setName] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   const [phone, setPhone] = useState<string>("");
   const [state, setState] = useState<string>("");
   const [gpo, setGpo] = useState<string>("");
   const [country, setCountry] = useState<any>({});
   const [showImage, setShowImage] = useState<string>("");
   const image = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const localUrl: string = LocalUrl();
   const [socialMediaName, setSocialMediaName] = useState<string>("");
   const [socialMedia, setSocialMedia] = useState<SocialMedia | any>({});
   const [socialMediaLink, setSocialMediaLink] = useState<string>("");
   const socialFormRef = useRef<HTMLFormElement>(null);

   useEffect(() => {
      dispatch(getProfileForEdit());
      dispatch(getCountiresForProfileUpdate());
      dispatch(getBuyerProfileSocialMediaLinks());
   }, [dispatch]);

   const { common, profile } = useSelector((state: BuyerState) => state.buyer);
   const { user } = common;
   const { countires, social_media_links } = profile;
   const Countires: Country[] = countires;

   useEffect(() => {
      if (profile?.profile) {
         const { image = [] } = profile?.profile;
         if (image !== undefined && user?.id !== undefined) {
            const userImage = image[0] !== undefined ? image[0].image : "";
            const forwardSlash = "/";
            const userImageUrl = forwardSlash.concat(userImage);
            const imagePath = localUrl.concat(userImageUrl);
            if (image?.length > 0) setShowImage(imagePath);
         }
         const countryId =
            profile?.profile?.profile?.country_id !== undefined
               ? profile?.profile?.profile?.country_id
               : "";
         const countryData: Country | undefined = Countires?.find(
            (country) => country?.id === countryId
         );

         setName(profile?.profile?.name || "");
         setEmail(profile?.profile?.email || "");
         setPhone(profile?.profile?.phone || "");
         if (profile?.profile?.profile?.state !== undefined) {
            setState(profile?.profile?.profile?.state);
         }
         if (profile?.profile?.profile?.gpo !== undefined) {
            setGpo(profile?.profile?.profile?.gpo);
         }
         if (countryData !== undefined) {
            setCountry(countryData);
         }
      } else {
         if (user) {
            setName(user?.name || "");
            setEmail(user?.email || "");
         }
      }
   }, [user, profile]);

   const onHandleUpdateProfile = () => {
      const Image =
         image.current &&
         image.current?.files &&
         image.current?.files[0] !== undefined
            ? image.current?.files[0]
            : "";
      const country_id = country?.id !== undefined ? String(country?.id) : "";
      const Gpo = gpo ? String(gpo) : "";

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("state", state);
      formData.append("gpo", Gpo);
      formData.append("country_id", country_id);
      formData.append("image", Image);
      dispatch(updateBuyerProfile({ formData, router }));
   };

   const onHandleStoreSocialMediaLink = useCallback(() => {
      const payload = {
         name: socialMedia?.name !== undefined ? socialMedia?.name : "",
         link: socialMediaLink,
      };
      dispatch(storeBuyerProfileSocialMediaLink({ payload })).finally(() => {
         setSocialMedia({});
         setSocialMediaLink("");
         socialFormRef?.current?.reset();
      });
   }, [dispatch, socialMediaName, socialMediaLink, socialFormRef]);

   const onHandleDeleteSocialMediaLink = (id: number) => {
      dispatch(deleteBuyerProfileSocialMediaLink({ id }));
   };

   return (
      <Fragment>
         <PageHeader icon={icon} title="Profile" searchBox={false} />
         <div
            className="bg-[#ffffff] rounded-[20px] p-7"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="flex md:justify-start justify-center">
               <ProfileImageUpload
                  image={image}
                  showImage={showImage}
                  setShowImage={setShowImage}
               />
            </div>
            <div className="pt-5 flex lg:flex-row flex-col gap-5">
               <div className="lg:w-[75%] w-full">
                  <div className="pb-4 ">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                        Full Name
                     </div>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                        style={{
                           boxShadow:
                              "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                        }}
                        placeholder="Type Here"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div className="pb-4 ">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                        Email
                     </div>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                        style={{
                           boxShadow:
                              "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                        }}
                        placeholder="Type Here"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="pb-4 ">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                        Phone Number
                     </div>
                     <Input
                        type="text"
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                        style={{
                           boxShadow:
                              "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                        }}
                        placeholder="Type Here"
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                     />
                  </div>
                  <div className="flex 3xs:flex-row flex-col pb-4 3xs:gap-5 gap-3">
                     <div className="w-full">
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                           State
                        </div>
                        <Input
                           type="text"
                           className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                           placeholder="Type Here"
                           onChange={(e) => setState(e.target.value)}
                           defaultValue={state}
                        />
                     </div>
                     <div className="w-full">
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                           GPO No
                        </div>
                        <Input
                           type="text"
                           className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                           placeholder="Type Here"
                           onChange={(e) => setGpo(e.target.value)}
                           defaultValue={gpo}
                        />
                     </div>
                  </div>
                  <div className="">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                        Country
                     </div>
                     <BuyerCountrySearchAutoComplete
                        items={Countires}
                        country={country}
                        setCountry={setCountry}
                        className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full shadow-admin-card px-5"
                        placeholder="Type Here"
                     />
                  </div>
                  <Button
                     type="button"
                     className="rounded-[10px] w-full h-10 bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium flex justify-center items-center mt-5"
                     style={{
                        boxShadow:
                           "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                     }}
                     onClick={() => onHandleUpdateProfile()}
                  >
                     Save &amp; Continue
                  </Button>
               </div>
               <SocialMediaLinksCard
                  socialMediaName={socialMediaName}
                  setSocialMediaName={setSocialMediaName}
                  socialMediaLink={socialMediaLink}
                  setSocialMediaLink={setSocialMediaLink}
                  onHandleStoreSocialMediaLink={onHandleStoreSocialMediaLink}
                  socialFormRef={socialFormRef}
                  socialMedia={socialMedia}
                  setSocialMedia={setSocialMedia}
                  onHandleDeleteSocialMediaLink={onHandleDeleteSocialMediaLink}
               />
            </div>
         </div>
      </Fragment>
   );
}
