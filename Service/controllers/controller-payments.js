import Stripe from 'stripe'
import { STRIPE_PRIVATE_KEY } from '../config.js'

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res)=> {
    const sessions = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Cedula',
                        description: 'Cedula digital',
                    },
                    currency: 'usd',
                    unit_amount: 1500, //15.00
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:9000/success',
        cancel_url: 'http://localhost:9000/cancel',
    })
    return res.json(sessions)
}