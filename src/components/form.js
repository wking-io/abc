import React from 'react';

export const Field = ({ name, label, value, placeholder, update }) => (
	<div className="flex flex-col mb-8">
		<label className="mb-4 text-grey-600" htmlFor={name}>
			{label}
		</label>
		<input
			className="border-b border-grey-300 focus:border-grey-600 pb-4 text-2xl"
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={({ target }) => update(target.value)}
		/>
	</div>
);

export const Textarea = ({ name, label, value, update }) => (
	<div className="flex-1 flex flex-col lg:border-l border-grey-400 pb-16 lg:p-16">
		<label className="mb-4 text-grey-600" htmlFor={name}>
			{label}
		</label>
		<textarea
			className="bg-transparent text-black h-full text-2xl"
			name={name}
			value={value}
			placeholder="Write text here..."
			onChange={({ target }) => update(target.value)}
		/>
	</div>
);
