import React from "react";
import Input from "@/components/Input";
import { DashboardQucikActionSearchSvgIcon } from "@admin/components/SvgIcons";

export default function MessageSidebarSearch() {
	return (
		<div className=" px-4">
			<div className=" relative">
				<div className=" absolute top-[50%] left-3 transform-translate-y-middle">
					<div className="w-4 h-4 ">
						<DashboardQucikActionSearchSvgIcon />
					</div>
				</div>
				<Input
					type="text"
					className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-xl h-[34px] border-none ring-0 focus:ring-0 focus:border-none shadow-admin-input ps-9 w-full"
					placeholder="Search"
				/>
			</div>
		</div>
	);
}
