import * as isoly from "isoly"
import * as gracely from "gracely"
import * as authly from "authly"
import { Key as MerchantKey } from "./V1/Key"
import { Acquirer } from "../Acquirer"
import { CategoryCode } from "./CategoryCode"
import { Emv3d } from "./Emv3d"
import * as MerchantV1 from "./V1"

export interface Merchant {
	id: authly.Identifier
	name: string
}

// tslint:disable: no-shadowed-variable
// tslint:disable-next-line:no-namespace
export namespace Merchant {
	export function is(value: any | Merchant): value is Merchant {
		return typeof value == "object" &&
			authly.Identifier.is((value as any).id) &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			(value.descriptor == undefined || typeof value.descriptor == "string") &&
			isoly.CountryCode.Alpha2.is(value.country) &&
			Acquirer.is(value.acquirer) &&
			(value.mid == undefined || typeof value.mid == "string") &&
			(value.mcc == undefined || CategoryCode.is(value.mcc)) &&
			(value.emv3d == undefined || Emv3d.is(value.emv3d))
	}
	export function flaw(value: any | Merchant): gracely.Flaw {
		return {
			type: "model.Merchant",
			flaws: typeof(value) != "object" ? undefined :
				[
					authly.Identifier.is((value as any).id) || { property: "id", type: "authly.Identifier" },
					typeof(value.name) == "string" || { property: "name", type: "string" },
					typeof(value.url) == "string" || { property: "url", type: "string" },
					(value.descriptor == undefined || typeof value.descriptor  == "string") || { property: "descriptor", type: "string" },
					isoly.CountryCode.Alpha2.is(value.country) || { property: "country", type: "isoly.CountryCode" },
					Acquirer.is(value.acquirer) || { property: "acquirer", type: "model.Acquirer.Settings" },
					value.mid == undefined || typeof value.mid == "string" || { property: "mid", type: "string" },
					value.mcc == undefined || CategoryCode.is(value.mcc) || { property: "mcc", type: "model.Merchant.CategoryCode" },
					value.emv3d == undefined || Emv3d.is(value.emv3d) || Emv3d.flaw(value.emv3d),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export type Key = MerchantKey
	export namespace Key {
		export const is = MerchantKey.is
		export const flaw = MerchantKey.flaw
	}
	export namespace V1 {
		export type Key = MerchantV1.Key
		export namespace Key {
			export const is = MerchantV1.Key.is
			export const flaw = MerchantV1.Key.flaw
		}
	}
}
