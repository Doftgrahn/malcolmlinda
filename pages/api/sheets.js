import { GoogleSpreadsheet } from 'google-spreadsheet';
import lindaMalcolm from '../../utils/lindamalcolm-6dea371611ca.json';
import initMiddleware from '../../utils/middleware';
const SPREADSHEET_ID = '1DORIpNta9_1DQgjOZCRY3bJeIZv7c7eS8RK5WSdxSSw';
const SHEET_ID = '0';

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

import Cors from 'cors';

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'POST', 'OPTIONS'],
    })
);

const appendSpreadsheet = async (row) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: 'wedding@lindamalcolm.iam.gserviceaccount.com',
            private_key:
                '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCh8p3HdqJEAihw\nAYyvw6WZnEwBSYM/T/1A/f3zYjzSUk9UgnwYzqRoTWuvhCrICGytxnltN0lUHOb6\nOA0JAiryKKFxyNxoDHo3jpessJaiCbnbvwCswfA1u7bJz8PfUJQECPLTafGAVrSZ\nym9eL5IS4U8dkdeFsF+H8qc1NtvJbvC+HtMLavv3VEw8JO8UTNvn9TmN3xLcyOGU\nrs1EZYwzTcz1xGUOEXx8BsA597Ho3VbISQFOI3HtwYJGo8IdJ98NtKnI065OZarD\nKo1hewzm4iBJuBjYTRRj/T/CEzs9nCRvv6R29WJa3yVHDcT/Xyty8M1idn7SwMe/\niK9Ngf0rAgMBAAECggEAHO8Y63MxqI7uJJzSQvDknF5FYhF9RomHCN6YSayqizUz\ngTjS7Se2TgBPFgu6DQUcTavhM/clvcZwKhJrmcluXNePiKHHZzubdmOei7b9IrQ0\nJaOpfjQkM6V3EfVx3GssFtB2efk6saBMIhH99cjwAzmIBhNxeyw41TQwVZyYhhNo\nXC12J9GXEksbwh/6h1dYnQPWY+ud//jhavtPwYyk3Xxg9GA8v7avogQIRbz2628J\nfBG7okEgMwgaF3oQasbR3n9oEHhJkRimpswFvW62pTEFigD99czSHVONCZPx1qhs\nR/mzdfQttWpke0P0BkvBlNEgBjRaMEQFa81Pw0nHoQKBgQDRis9r/UDE9ZgQrswo\nwvK04yqgrVNHoZyIn7viHKPUZHJ46TIpUfO/yYnzcgxmudVm/NJYyVP4uLvcALwh\nddSqTD44cOuRKa1jrr005oGpofB3Gs6F30MSoBme3V7t5wEMJVeH8Lo40QWFWnvM\nA6VDtMJQ3gk4omp0jZwikMJNuwKBgQDF2nBX9p+aP3O7Z6jpfTwoGp+J/k1ad9NE\nV7DD6c8AgFyCn6/KQ6N9lXAtqck3R3mxxADXnPP5wt2zwA2KjZYjWGydHeq8lfI+\nTX+AojssZNmjhSFqEhl3XamjctbnKCl4sziG4EXh/O/+S2eYQO3Vc9SFfvl/i5Gw\n+LaI1R1fUQKBgAWAqKvETcQeUuz1OiVD4U3AvWjUxGAYLV0lHLD2YZL9REhKj2eo\nYEdECpxa/VphPOpkbz2no83fRAel+UrDpl8Ge4fN51G7j3MTrqJJ/1OuDfuCt7Oq\nRj+h9qpGU+zZaRyhimfmeW1uh7+VvbSA0AE0KPooqoNTOIpxAY2i0YdrAoGADIKz\nd9xwWyCIAOGdHKZ+l0qXq/IYkg/hnACvfLPcEvwK3Xebdf6w58/7N+f0gTpTx5nN\nM9UI2FIqEqOiN5CcXb/JnmW14hbZKndcCJY5h6UY3e4dHsfmNFYH0/3++L7hYHB0\nspKb2J5Vzo6WDlqMr2KTnZ1ZyWbZ34bag+x13wECgYAJQQfMZ9kph8ebjUwSuKWh\nEjAZMNGuOh6a75J/sE8wc8Xvjv+17XabkEJ63vZIeBcKj5fbeNFTL3/pNsnPyqNT\nXfygs+B2rf6CxDvDytFZPJXuzvM5Xobs/a7CETs1ssBnQsCDnWmlKBI4B0Itd4kK\nWXRSh41i3LRn0p4rxGswSA==\n-----END PRIVATE KEY-----\n',
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.addRow(row);
        console.log('Post');
    } catch (e) {
        console.error('Error: ', e);
    }
};

export default async (req, res) => {
    if (req.method !== 'POST') return;
    const data = req.body;

    try {
        const newRow = {
            Name: data.name,
            Allergies: data.alllergies,
            SpecificWishes: data.specific,
            IsAttending: data.isAttending,
            DrinkingPreferences: data.drinkingPreferences,
            WithAlcohol: data.withAlcohol,
        };
        await appendSpreadsheet(newRow);
        res.send('sucess');
    } catch (e) {
        res.status(404).send('fail');
    }
};
