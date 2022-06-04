import { PayPalButtons } from "@paypal/react-paypal-js";
import { XIcon } from "@heroicons/react/outline";

const PaymentButton = ({ setConfirmClick, amount }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center align-middle items-center">
      <div className="absolute bg-black opacity-40 w-full h-screen"></div>
      <div className="w-[400px] bg-white min-h-fit max-h-screen overflow-auto z-10 rounded-md p-3">
        <div className="flex items-end justify-end py-3 px-2 pb-6">
          <XIcon
            className="w-6 h-6 cursor-pointer hover:text-gray-500"
            onClick={() => setConfirmClick(0)}
          />
        </div>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
        />
      </div>
    </div>
  );
};

export default PaymentButton;
