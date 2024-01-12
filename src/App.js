import logo from './logo.svg';
import './App.css';
import { Frames, CardNumber, ExpiryDate, Cvv } from 'frames-react';
//tokenized response
// {
//     "type": "card",
//     "token": "tok_bv75palxdxbujhp4dihggglqzi",
//     "expires_on": "2024-01-11T06:53:41.4959264Z",
//     "expiry_month": 2,
//     "expiry_year": 2024,
//     "scheme": "VISA",
//     "last4": "4242",
//     "bin": "424242",
//     "card_type": "CREDIT",
//     "card_category": "CONSUMER",
//     "issuer_country": "GB",
//     "product_id": "F",
//     "product_type": "Visa Classic",
//     "phone": {},
//     "preferred_scheme": ""
// }

// payment detail
// card number 4242 4242 4242 4242
function App() {
  return (
      <div className='bg-neutral-100 w-full h-screen flex justify-center items-center pt-[200px] '>
          <div className="App flex w-[600px] flex flex-col bg-white px-[80px] py-5" >
              <h3>We accept Visa and Master Card.</h3>
              <p className='text-neutral-600 text-xs mb-5'>Write down the Card Number, Expiry Date and CVV here:</p>

              <Frames
                  config={{
                      debug: true,
                      publicKey: 'pk_sbox_hojevrrthxvj5bqdmw4i6yg3nec',
                      localization: {
                          cardNumberPlaceholder: 'Card number enter',
                          expiryMonthPlaceholder: 'MM',
                          expiryYearPlaceholder: 'YY',
                          cvvPlaceholder: 'CVV',
                      },
                      style: {
                          base: {
                              fontSize: '17px',
                          },
                      },
                  }}
                  ready={() => {}}
                  frameActivated={(e) => {
                      console.log(e,'frame activated')}}
                  frameFocus={(e) => {}}
                  frameBlur={(e) => {}}
                  frameValidationChanged={(e) => {}}
                  paymentMethodChanged={(e) => {}}
                  cardValidationChanged={(e) => {}}
                  cardSubmitted={() => {}}
                  cardTokenized={(e) => {
                      console.log(e,'card tokenized')
                  }}
                  cardTokenizationFailed={(e) => {}}
                  cardBinChanged={(e) => {}}
              >
                  <div className=''>
                      <CardNumber className='card-number border-b h-[30px] mb-4' />
                  </div>

                  <ExpiryDate className='expire-date border-b h-[30px] mb-4' />
                  <Cvv className='cvv border-b h-[30px] mb-4' />
                  <button
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      onClick={() => {
                          Frames.submitCard();
                      }}
                  >
                      PAY GBP 25.00
                  </button>
              </Frames>
          </div>

      </div>
  );
}

export default App;
