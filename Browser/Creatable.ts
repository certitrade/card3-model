export interface Creatable {
	colorDepth?: "1" | "4" | "8" | "15" | "16" | "24" | "32" | "48"
	java?: boolean
	javascript?: boolean
	language?: string
	timezone?: string
	height?: string
	width?: string
	parent?: string
}

// tslint:disable-next-line: no-namespace
export namespace Creatable {
	export function is(value: Creatable | any): value is Creatable {
		return typeof value == "object" &&
		(value.colorDepth == undefined || typeof value.colorDepth == "string" && ["1", "4", "8", "15", "16", "24", "32", "48"].includes(value.colorDepth)) &&
		(value.java == undefined || typeof value.java == "boolean") &&
		(value.javascript == undefined || typeof value.javascript == "boolean") &&
		(value.language == undefined || typeof value.language == "string") &&
		(value.timezone == undefined || typeof value.timezone == "string") &&
		(value.height == undefined || typeof value.height == "string") &&
		(value.width == undefined || typeof value.width == "string") &&
		(value.parent == undefined || typeof value.parent == "string")
	}
}