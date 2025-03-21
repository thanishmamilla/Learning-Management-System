// import React, { useEffect } from "react";
// import { Button } from "./ui/button";
// import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";

// const BuyCourseButton = ({ courseId }) => {
//   const [createCheckoutSession, {data, isLoading, isSuccess, isError, error }] =
//     useCreateCheckoutSessionMutation();

//   const purchaseCourseHandler = async () => {
//     await createCheckoutSession(courseId);
//   };

//   useEffect(()=>{
//     if(isSuccess){
//        if(data?.url){
//         window.location.href = data.url; // Redirect to stripe checkout url
//        }else{
//         toast.error("Invalid response from server.")
//        }
//     } 
//     if(isError){
//       toast.error(error?.data?.message || "Failed to create checkout session")
//     }
//   },[data, isSuccess, isError, error])

//   return (
//     <Button
//       disabled={isLoading}
//       onClick={purchaseCourseHandler}
//       className="w-full"
//     >
//       {isLoading ? (
//         <>
//           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           Please wait
//         </>
//       ) : (
//         "Purchase Course"
//       )}
//     </Button>
//   );
// };

// export default BuyCourseButton;


// import React, { useEffect } from 'react';
// import { Button } from './ui/button';
// import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi';
// import { Loader2 } from 'lucide-react';
// import { toast } from 'sonner';

// const BuyCourseButton = ({ courseId }) => {
//   // console.log(import.meta.env.VITE_RAZORPAY_API_KEY);  // Logs the Razorpay API key

//   const [createCheckoutSession, { data, isLoading, isSuccess, isError, error }] =
//     useCreateCheckoutSessionMutation();

//   const purchaseCourseHandler = async () => {
//     await createCheckoutSession(courseId);
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       // console.log(process.env.REACT_APP_RAZORPAY_KEY_ID)
//       if (data?.orderId) {
//         const options = {
//           key: "rzp_live_lYssRL80GcDiks", // Your Razorpay Key ID
//           amount: data.amount * 100, // Amount in paise
//           currency: data.currency,
//           order_id: data.orderId,
//           handler: function (response) {
//             // Handle payment success and notify server
//             fetch('/api/v1/purchase/webhook', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify(response),
//             }).then((res) => {
//               if (res.ok) {
//                 toast.success('Payment Successful');
//               } else {
//                 toast.error('Payment Failed');
//               }
//             });
//           },
//           prefill: {
//             name: 'John Doe', // You can fetch the user info here
//             email: 'john@example.com',
//             contact: '9876543210',
//           },
//           theme: {
//             color: '#F37254', // Customize the theme color
//           },
//         };

//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       } else {
//         toast.error('Invalid response from server');
//       }
//     }

//     if (isError) {
//       toast.error(error?.data?.message || 'Failed to create checkout session');
//     }
//   }, [data, isSuccess, isError, error]);

//   return (
//     <Button
//       disabled={isLoading}
//       onClick={purchaseCourseHandler}
//       className="w-full"
//     >
//       {isLoading ? (
//         <>
//           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           Please wait
//         </>
//       ) : (
//         'Purchase Course'
//       )}
//     </Button>
//   );
// };

// export default BuyCourseButton;


import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const BuyCourseButton = ({ courseId }) => {
  const [createCheckoutSession, { data, isLoading, isSuccess, isError, error }] =
    useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession({ courseId });
  };

  useEffect(() => {
    if (isSuccess) {
      if (data?.orderId && data?.amount && data?.currency) {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_API_KEY,
          amount: data.amount * 100, // in paise
          currency: data.currency,
          order_id: data.orderId,
          handler: async function (response) {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

            // Send to backend for verification
            const res = await fetch('https://api.cybermatrix1337.in/api/v1/purchase/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({
                paymentId: razorpay_payment_id,
                orderId: razorpay_order_id,
                signature: razorpay_signature,
                courseId
              }),
            });

            if (res.ok) {
              toast.success('Payment Successful and Course Unlocked');
            } else {
              toast.error('Payment Verification Failed');
            }
          },
          prefill: {
            name: 'John Doe',
            email: 'john@example.com',
            contact: '9876543210',
          },
          theme: {
            color: '#F37254',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        toast.error('Invalid server response');
      }
    }

    if (isError) {
      toast.error(error?.data?.message || 'Checkout session failed');
    }
  }, [data, isSuccess, isError, error]);

  return (
    <Button
      disabled={isLoading}
      onClick={purchaseCourseHandler}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        'Purchase Course'
      )}
    </Button>
  );
};

export default BuyCourseButton;
