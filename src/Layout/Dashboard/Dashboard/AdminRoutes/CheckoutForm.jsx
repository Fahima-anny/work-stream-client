/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = ({modalData, setShowPayModal, refetch}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [errorMsg, setErrorMsg] = useState(null) ;
    const [clientSecret, setClientSecret] = useState("") ;
    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth() ;
    console.log(modalData.salary);

    useEffect(() => {
     axiosSecure.post("/create-payment-intent", {price: modalData.salary})
     .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret) ;
     })
    }, [modalData.salary, axiosSecure])

const handleSubmit = async (e) => {
    e.preventDefault() ;
    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)

    if(card === null ){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        console.log("Payment error" , error);
        setErrorMsg(error.message)
    }
    else{
        console.log("Payment Method", paymentMethod);
        setErrorMsg(null)
    }

    // confirm Payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email ,
                name: user?.displayName || "Admin"
            }
        }
    })
    let paymentTime 
    if(confirmError){
        console.log("confirm error : ", confirmError);
    }
    else{
        console.log("payment Intent", paymentIntent);
        if(paymentIntent.status === "succeeded"){
            setShowPayModal(false)
            paymentTime = new Date(paymentIntent.created * 1000).toISOString().split('T')[0]
 const updatedData = {
    transactionId: paymentIntent.id,
    paymentDate: paymentTime
 }
            axiosSecure.patch(`/payroll/${modalData._id}`, updatedData)
            .then(res => {
                console.log( "payment complete" ,res.data);
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        icon: "success",
                        title: "Payment Succeeded",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch() ;
                }
            })

        }
    }
    // console.log("payment Time",paymentTime);
}

    return (
     <form onSubmit={handleSubmit}>
 <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
      className="btn bg-blue-100 text-blue-700 hover:bg-blue-200 w-full mt-7"
      type="submit"
       disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {
        errorMsg && <p className="text-red-600">{errorMsg}</p>
      }
     </form>
    );
};

export default CheckoutForm;