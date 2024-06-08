import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  console.log(order)
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <span className="font-bold">Delivering to:</span>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Your Order</span>
        <ul>
          {order.cartItems.map((item) => (
            <li>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <span className="font-bold">Total</span>
        <span>Rs{(order.totalAmount / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;


// import { Order } from "@/types";
// import { Separator } from "./ui/separator";

// type Props = {
//   order: Order;
// };

// const OrderStatusDetail = ({ order }: Props) => {
//   console.log(order);
  
//   const { deliveryDetails, cartItems, totalAmount } = order;
  
//   // Ensure all required properties exist
//   if (!deliveryDetails || !cartItems || totalAmount == null) {
//     console.error("Order object is missing required properties", { deliveryDetails, cartItems, totalAmount });
//     return <div>Order details are incomplete.</div>;
//   }
  
//   return (
//     <div className="space-y-5">
//       <div className="flex flex-col">
//         <span className="font-bold">Delivering to:</span>
//         <span>{deliveryDetails.name}</span>
//         <span>
//           {deliveryDetails.addressLine1}, {deliveryDetails.city}
//         </span>
//       </div>
//       <div className="flex flex-col">
//         <span className="font-bold">Your Order</span>
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index}>
//               {item.name} x {item.quantity}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Separator />
//       <div className="flex flex-col">
//         <span className="font-bold">Total</span>
//         <span>£{(totalAmount / 100).toFixed(2)}</span>
//       </div>
//     </div>
//   );
// };

// export default OrderStatusDetail;
