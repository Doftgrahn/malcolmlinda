 import { GoogleSpreadsheet } from "google-spreadsheet";
import lindaMalcolm from '../../utils/lindamalcolm-6dea371611ca.json'
import initMiddleware from '../../utils/middleware'
const SPREADSHEET_ID = '1DORIpNta9_1DQgjOZCRY3bJeIZv7c7eS8RK5WSdxSSw';
const SHEET_ID = "0";
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;


const doc = new GoogleSpreadsheet(SPREADSHEET_ID);



import Cors from 'cors'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)



const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: lindaMalcolm.client_email,
        private_key: lindaMalcolm.private_key,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };



export default async (req, res) => {
    if(req.method !== 'POST')  return
    const data = req.body 
   

     const newRow = { Name: data.name, Allergies: data.alllergies ,SpecificWishes:data.specific };


    appendSpreadsheet(newRow);
    res.send('Success');
};
