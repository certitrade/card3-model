import * as authly from "authly"

const productionVerifier = authly.Verifier.create(
	"production",
	authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArZFavKxpyvdY5hv1ZKegVXPfcoI0Tx4CIN7lAxdW80M9bROncr3tVngC48iWzbX/6ziw5xGwujXG/j1qSNIZlTOWx2imlWCl5doTSPb1yt0CX3pREdlBfR5RJGQHRhGpiQA51HO9wA9Y9OAq4kqaFcCkEpJeqvNjvXPJSTM97x4rksil63WalUFSjmWK6lEiQIo/cnLCi6l6MkSxYBZTwS6jGjGvBcYeNPwVHToRLl4Yz0KRdYFyMcO5wk9B6hQ+fA3rkhXezU0squlzPCBZnoyp2T+OqM/ztLuykVlQjVN5RNP89O02jcmsviYH3aRxtYmnaoRKlhXtBmiXmi873wIDAQAB"
	)
)
const developmentVerifier = authly.Verifier.create(
	"development",
	authly.Algorithm.RS256(
		"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzWkKmoMsdU6TRKeMYFlwwRxb7uuA3Xh1zsya9m9QLcF7FhSLxsaDF7hHWmbBLsKBCDT35hl8mIxOssQGcq5CvhntAmI7RgWExs/VgtyJK1uRxgUKS7wCuWxlB3akXY4f2UXcFn+wOqBdhh1yep726MvB/Jh4nDusXb5G4evVJLIrMKc8vvLqmEo9x8wuXz5s6qvIlHf6h7KLICNsX0ZCv6Tf3OYbZlfd0us+gQTvqhk+dj6P2UaUlQmsEAOerLvSKWDa1KNe0i58/aoDgC9FZGCmpg1mtPegQ09IAVgCaqQ6zqA1wPIWiOO89pWWne28tRCNYGvNY0eXUSG6qXv5LQIDAQAB"
	)
)

export async function verify(token: authly.Token): Promise<authly.Payload | undefined> {
	return (
		(productionVerifier && (await productionVerifier.verify(token))) ||
		(developmentVerifier && developmentVerifier.verify(token))
	)
}
