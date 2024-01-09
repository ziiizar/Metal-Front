import metalconf from "../../../api/metalconf"


export async function getCart (user_id) {
    const resp = await metalconf.get(`Cart/Get/${user_id}`
    )

    const cart = resp.data
    return cart
  }