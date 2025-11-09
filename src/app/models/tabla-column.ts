import { keyboardResponse } from "./keyboard";
import { MouseResponse } from "./mouse";

export interface Action<T = keyboardResponse | MouseResponse> {
	action: string;		// return a text => Edit | Delete
	fila?: T 					// return <KeyboardResponse | MouseResponse>
}

export const getEntityProperties = (entity: string): Array<string> => {
	let results: any = [];
	let classResponse: keyboardResponse | MouseResponse;

	switch(entity) {
		case 'keyboard': 
			classResponse = new keyboardResponse(); 
			break;
		case 'mouse': 
			classResponse = new MouseResponse(); 
			break;
	}

	if (classResponse!) {
		results = Object.keys(classResponse);
	}
	return results;
}







