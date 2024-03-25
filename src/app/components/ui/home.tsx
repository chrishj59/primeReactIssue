'use client';

import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { useState } from 'react';

export default function HomePage() {
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<div>
			<div className="card flex justify-content-center">
				Home Page
				<Checkbox
					onChange={(e: CheckboxChangeEvent) =>
						setChecked(e.checked ? e.checked : false)
					}
					checked={checked}></Checkbox>
			</div>
		</div>
	);
}
