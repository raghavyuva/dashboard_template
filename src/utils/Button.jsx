
import React from "react";
function Button({ href, text, Style, Icon, onClick, loading }) {
    return (
        <div>
            <div className="flex rounded-md ">
                {loading ? (
                    <button class="btn  bg-secondary    px-5 py-1 border border-transparent  font-medium text-black  my-3  w-44  loading"  >
                        loading
                    </button>
                ) : (
                    <a className={`${Style ? Style : "text-primary-background bg-secondary hover:bg-yellow-300 hover:text-black  items-center flex px-5 py-1 border border-transparent  font-medium   rounded-md  my-3 shadow-lg cursor-pointer w-44 justify-center"}`} onClick={onClick}
                        href={href}
                    >
                        {Icon && <Icon className="mr-2" />}
                        {text}

                    </a>
                )}
            </div>
        </div>
    );
}

export default Button;