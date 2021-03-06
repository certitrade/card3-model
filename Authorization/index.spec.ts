import * as model from "../index"

describe("Authorization", () => {
	it("is", () => {
		const authorization: model.Authorization = {
			id: "10001",
			number: "test001",
			reference: "cab-0123-def",
			created: "2005-05-05T15:05:15Z",
			currency: "SEK",
			amount: 100,
			card: {
				scheme: "visa",
				iin: "123456",
				last4: "9000",
				expires: [1, 20],
				type: "credit",
			},
			capture: [],
			refund: [],
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
	it("is", () => {
		const authorization: model.Authorization = {
			id: "xuA0QYGicGDb",
			number: "axb02",
			reference: "3e05c44a-0430-4a2e-bc05-36d970b2533e",
			descriptor: "A test transaction",
			created: "2020-02-06T12:34:18+00:00",
			amount: 1337.42,
			currency: "SEK",
			card: {
				scheme: "visa",
				iin: "410000",
				last4: "0000",
				expires: [2, 22],
			},
			capture: [],
			refund: [],
		}
		expect(model.Authorization.is(authorization)).toBeTruthy()
	})
	it("verify", async () => {
		const token =
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTcyODgwMzkxOTI4LCJpZCI6ImxqVnNEaVlCVHhBZyIsIm51bWJlciI6ImF4YjAxIiwicmVmZXJlbmNlIjoiMmJlNTNkN2ItYmViYi00YmE0LWFkODMtOTU2NGQ1NGZmMTVhIiwiZGVzY3JpcHRvciI6IkEgdGVzdCB0cmFuc2FjdGlvbiIsImNyZWF0ZWQiOiIyMDE5LTExLTA0VDE1OjEzOjExKzAwOjAwIiwiYW1vdW50IjoxMzM3LjQyLCJjdXJyZW5jeSI6IlNFSyIsImNhcmQiOnsiaWQiOiJmWjIxSnRkYiIsInNjaGVtZSI6InZpc2EiLCJpaW4iOiI0MTAwMDAiLCJsYXN0NCI6IjAwMDAiLCJleHBpcmVzIjpbMSwyMF19LCJjYXB0dXJlIjpbXSwicmVmdW5kIjpbXX0.vlJpdaQi4hbnIPF3GkOY21YtlH4lKj9TobqdWL1VkC3Y7RoSju3GkzeP7U65J3Tlfc8SY5Ru435h8NWB2nrWJuHoxE4w_Bh-Z_4JYtHKxFFW7Z1GJ1ZX2o0NcTXfyvkfMy6yGimPtc9-0AiMykBzOZiQzZtDTu0zgJO0fpDNO-L-Wj_fY6MNDJ_TEDXKPQK_EURaUM0rurekEvQFDHyk1R4vFvxO9or3y5KUjzq7F8E9WY70ndEZXVyQ8O2RU7CIrzEWYp_J3MHIQTN65SQ6wNdoTN9a3L7M0auB_7P1kjQLRbwi8IHoKgMCocj3_zMQTl4h7ZDNlJs1gdmb607h3w"
		const authorization = await model.Authorization.verify(token)
		expect(authorization).toEqual({
			iss: "card",
			iat: 1572880391,
			id: "ljVsDiYBTxAg",
			number: "axb01",
			reference: "2be53d7b-bebb-4ba4-ad83-9564d54ff15a",
			descriptor: "A test transaction",
			created: "2019-11-04T15:13:11+00:00",
			amount: 1337.42,
			currency: "SEK",
			card: {
				id: "fZ21Jtdb",
				scheme: "visa",
				iin: "410000",
				last4: "0000",
				expires: [1, 20],
			},
			capture: [],
			refund: [],
			token:
				"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXJkIiwiaWF0IjoxNTcyODgwMzkxOTI4LCJpZCI6ImxqVnNEaVlCVHhBZyIsIm51bWJlciI6ImF4YjAxIiwicmVmZXJlbmNlIjoiMmJlNTNkN2ItYmViYi00YmE0LWFkODMtOTU2NGQ1NGZmMTVhIiwiZGVzY3JpcHRvciI6IkEgdGVzdCB0cmFuc2FjdGlvbiIsImNyZWF0ZWQiOiIyMDE5LTExLTA0VDE1OjEzOjExKzAwOjAwIiwiYW1vdW50IjoxMzM3LjQyLCJjdXJyZW5jeSI6IlNFSyIsImNhcmQiOnsiaWQiOiJmWjIxSnRkYiIsInNjaGVtZSI6InZpc2EiLCJpaW4iOiI0MTAwMDAiLCJsYXN0NCI6IjAwMDAiLCJleHBpcmVzIjpbMSwyMF19LCJjYXB0dXJlIjpbXSwicmVmdW5kIjpbXX0.vlJpdaQi4hbnIPF3GkOY21YtlH4lKj9TobqdWL1VkC3Y7RoSju3GkzeP7U65J3Tlfc8SY5Ru435h8NWB2nrWJuHoxE4w_Bh-Z_4JYtHKxFFW7Z1GJ1ZX2o0NcTXfyvkfMy6yGimPtc9-0AiMykBzOZiQzZtDTu0zgJO0fpDNO-L-Wj_fY6MNDJ_TEDXKPQK_EURaUM0rurekEvQFDHyk1R4vFvxO9or3y5KUjzq7F8E9WY70ndEZXVyQ8O2RU7CIrzEWYp_J3MHIQTN65SQ6wNdoTN9a3L7M0auB_7P1kjQLRbwi8IHoKgMCocj3_zMQTl4h7ZDNlJs1gdmb607h3w",
		})
	})
})
