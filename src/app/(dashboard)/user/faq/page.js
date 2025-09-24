import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQs | Chil",
  description:
    "Find answers to frequently asked questions about our products, shipping, returns, and more.",
};

export default function page() {
  const items = [
    {
      id: 1,
      title: "1. How do I place an order?",
      text: "To place an order, simply browse through our product categories, select the items you'd like to purchase, and add them to your shopping cart. When you're ready, click on the cart icon, review your order, and proceed to checkout. You’ll be asked to enter your shipping details and payment information. Once your payment is confirmed, you'll receive an email confirmation with your order details.",
    },
    {
      id: 2,
      title: "2. Do You offer home delevery?",
      text: "Yes, we offer home delivery to a wide range of locations. During checkout, you can enter your address to see if we deliver to your area. We offer different delivery options, including same-day delivery, next-day delivery, and scheduled delivery for your convenience.",
    },
    {
      id: 3,
      title: "3. Can I track my order?",
      text: "Yes, you can track your order once it has been shipped. After your order is processed and dispatched, you’ll receive a tracking number via email or SMS. You can use this tracking number to monitor your order’s status through our carrier's tracking page.",
    },
    {
      id: 4,
      title: "4. What payments method do you accept?",
      text: "We accept various payment methods, including: Credit and Debit Cards (Visa, MasterCard, American Express) stripe / Bkash Naggod Bank Transfer (if applicable in your region) All payments are secure and encrypted for your protection.",
    },
    {
      id: 5,
      title: "5. How do i know if a product in stock?",
      text: 'Product availability is updated in real-time. If an item is out of stock, you’ll see a "Sold Out" or "Out of Stock" notification on the product page. We regularly restock items, so be sure to check back or sign up for stock notifications if available.',
    },
    {
      id: 6,
      title: "6. Can i modify or cancel my order after placing it?",
      text: "Once an order is placed, we aim to process and ship it as quickly as possible. If you need to make changes or cancel your order, please contact our customer support team as soon as possible. While we cannot guarantee that changes can be made, we'll do our best to accommodate your request before the order is shipped.",
    },
    {
      id: 7,
      title: "7. Do you offer discounts or promotions?",
      text: 'Yes, we often offer special promotions, discounts, and seasonal offers. To stay updated on our latest deals, sign up for our newsletter or follow us on social media. We also offer first-time shopper discounts and exclusive member deals.',
    },
    {
      id: 8,
      title: "8. Do you offer organic or speciality products?",
      text: "If you receive a damaged or incorrect item, please contact us within 48 hours of receiving your order. We will work to resolve the issue by either sending a replacement or processing a refund. Be sure to keep the packaging and take photos of the damaged item, as this helps us process your claim more quickly.",
    },
    {
      id: 9,
      title: "9. Can i purchase in bulk?",
      text: 'Yes, we offer bulk purchasing options for many of our products. If you\'re looking for bulk quantities or special wholesale pricing, please contact our customer service team or visit our "Bulk Orders" section for more information.',
    },
    {
      id: 10,
      title: "10. What should i do if I received a damaged or incorrect item?",
      text: "If you receive a damaged or incorrect item, please contact us within 48 hours of receiving your order. We will work to resolve the issue by either sending a replacement or processing a refund. Be sure to keep the packaging and take photos of the damaged item, as this helps us process your claim more quickly.",
    },
  ];
  return (
    <Accordion
      // type="single"
      collapsible
      className="container-1400 my-10 flex flex-col px-4 gap-4"
      defaultValue="item-1"
    >
     {
      items.map(i=>(
         <AccordionItem key={i?.id} value={`item-${i?.id}`} className='bg-white shadow border-none px-4'>
        <AccordionTrigger className="cursor-pointer no-underline hover:no-underline focus:no-underline data-[state=open]:text-blue-500 text-md font-semibold text-gray-600">
         {i?.title}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 font-semibold text-gray-400">
          <p>
           {i?.text}
          </p>
         
        </AccordionContent>
      </AccordionItem>
      ))
     }
    </Accordion>
  );
}
