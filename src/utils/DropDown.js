import React from "react";
import { BsThreeDots } from "react-icons/bs";
import useComponentVisible from "./TouchBehaviour";

function DropDown({ open, setopen, LogOut, content }) {
	const { header, options } = content;
	const { ref } = useComponentVisible(true, open, setopen);
	return (
		<div class='relative inline-block text-left' ref={ref}>
			<div>
				<button
					type='button'
					class='inline-flex justify-center w-full rounded-md   shadow-sm px-4 py-2  text-sm font-medium  hover:bg-gray-50 '
					id='menu-button'
					aria-expanded='true'
					aria-haspopup='true'
					onClick={() => setopen(!open)}
				>
					<BsThreeDots size={25} />
				</button>
			</div>
			<div
				class='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary-background ring-1 ring-black ring-opacity-5 focus:outline-none z-50'
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabindex='-1'
				hidden={!open}
			>
				<div class='py-1' role='none'>
					{options?.map((option) => {
						return (
							<a
								href={option.linkto}
								class=' block px-4 py-2 text-sm'
								role='menuitem'
								tabindex='-1'
								id='menu-item-2'
							>
								{option?.name}
							</a>
						);
					})}
					{LogOut && (
						<button
							type='submit'
							class=' block w-full text-left px-4 py-2 text-sm'
							role='menuitem'
							tabindex='-1'
							id='menu-item-3'
							onClick={() => LogOut()}
						>
							Sign out
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default DropDown;
