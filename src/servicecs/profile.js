import { pool } from "../db/index.js"

const createRequest = (cols) => {
	let req = "update users set"
	Object.entries(cols).map(([key, value]) => {
		if (value) {
			req = `${req} ${key} = '${value}',`      
		}
	})
	return req
}

class profile {
	async getProfile(id) {
		return (await pool.query(`select * from users where id = ${id}`)).rows[0]
	}

	async updateProfile(profile) {
		try {
			const {age, ...rest} = profile
			await pool.query(`${createRequest(rest)} age = ${age}`)
			return "User was created successfully"
		} catch (error) {
			return "unexpected error`"
		}
	}
}

export const ProfileService = new profile()
