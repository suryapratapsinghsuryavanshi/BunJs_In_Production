// Get the token generation functinality wiht sole-token.
import { soleToken } from 'sole-token'; // for instal module in bun you use: bun add <package_name>

// Create an simple api with bun.
export default new Response(JSON.stringify({
    path: '/token',
    token: soleToken()
}));