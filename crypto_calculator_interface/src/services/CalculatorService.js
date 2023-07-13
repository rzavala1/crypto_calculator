import axios from 'axios';
const API_URl = process.env.REACT_APP_API_URL;


const CalculatorService = {

    calculate: async (investment) => {
        try {
            const response = await axios.get(API_URl+"/calculator?investment="+investment);
            return response.data;
        } catch (error) {
            console.error('Error fetching calculator:', error);
            throw error;
        }
    },
}

export default CalculatorService;