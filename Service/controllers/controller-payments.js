import Stripe from 'stripe';
import { STRIPE_PRIVATE_KEY } from '../config.js';

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Cédula',
              description: 'Cédula digital',
            },
            currency: 'usd',
            unit_amount: 1500, // 15.00 USD
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/',
    });

    return res.json({ url: session.url }); 
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Error al crear la sesión de Stripe' });
  }
};
