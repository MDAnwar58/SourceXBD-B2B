import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import {
	PlusWithBorderSvgIcon,
	ImageGallerySvgIcon,
} from "@admin/components/SvgIcons";

export default function ChatFooter() {
	return (
		<div className="flex items-center gap-3">
			<Button type="button" className="text-[#4285F4] w-6 h-6">
				<PlusWithBorderSvgIcon />
			</Button>
			<div className="w-full relative">
				<Input
					type="text"
					className="bg-[#ffffff] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[14px] h-10 px-5 shadow-admin-card w-full border-none ring-0 focus:border-none focus:ring-0"
					placeholder="Type a Message"
				/>
				<Button
					type="button"
					className="w-[25.29px] h-6 text-[#4285F4] absolute right-3 top-[50%] transform-translate-y-middle"
				>
					<ImageGallerySvgIcon />
				</Button>
			</div>
		</div>
	);
}
