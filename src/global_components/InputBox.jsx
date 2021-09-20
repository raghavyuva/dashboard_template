import React from "react";

function InputBox({ name, required, placeholder, Style, onChange, value }) {
    return (
        <div>
            <div className="rounded-md  -space-y-px p-2">
                <div>
                    <label className="sr-only">{placeholder}</label>
                    <input
                        id={name}
                        name={name}
                        type={name}
                        autoComplete={name}
                        required={required}
                        className={`${Style
                                ? Style
                                : "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            }`}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputBox;