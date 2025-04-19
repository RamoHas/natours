// import Flutterwave from 'flutterwave-node-v3';

// const flw = new Flutterwave(
//   process.env.FLW_PUBLIC_KEY,
//   process.env.FLW_SECRET_KEY
// );

// export const createFlutterwaveAccountLink = async (email, bankAccountDetails) => {
//   try {
//     const payload = {
//       account_bank: bankAccountDetails.bankCode,
//       account_number: bankAccountDetails.accountNumber,
//       business_name: bankAccountDetails.businessName || 'Edumatch Teacher',
//       business_email: email,
//       business_contact: bankAccountDetails.contactName || 'Edumatch Teacher',
//       business_contact_mobile: bankAccountDetails.contactPhone || '233000000000',
//       country: 'GH',
//       split_type: 'percentage',
//       split_value: 80
//     };

//     const response = await flw.Subaccount.create(payload);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating Flutterwave subaccount:', error.response?.data || error.message);
//     throw new Error('Failed to create Flutterwave subaccount');
//   }
// };
