import React from 'react'

export default function page() {

  const items = [
    {
      id:1,
      heading :'How do i place an order',
      text:"To place an order, simply browse through our product categories, select the items you'd like to purchase, and add them to your shopping cart. When you're ready, click on the cart icon, review your order, and proceed to checkout. You’ll be asked to enter your shipping details and payment information. Once your payment is confirmed, you'll receive an email confirmation with your order details."
    },
    {
      id:1,
      heading :'Do You offer home delevery',
      text:"Yes, we offer home delivery to a wide range of locations. During checkout, you can enter your address to see if we deliver to your area. We offer different delivery options, including same-day delivery, next-day delivery, and scheduled delivery for your convenience."
    },
  ]
  return (
    <div className='container-1400'>
     <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
    </div>
  )
}
