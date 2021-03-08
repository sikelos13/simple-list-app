
import axios from 'axios';
import { handleErrorMessage } from '../utils/handleErrorMessage';
import { Order } from '../types/Order';

export interface FetchOrdersApiResponse {
    success: boolean;
    errorMessage: string;
    status: number
    data: {
        orders: Order[];
    }
}
/**
 *  Get orders list
 *
 * Endpoints:
 * - GET /orders
 *
 *
 * @returns Promise<FetchOrdersApiResponse>
 */

export const fetchOrdersApi = (): Promise<FetchOrdersApiResponse> => (
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}orders`)
        .then((response: any) => {
            if (response.status >= 200 && response.status < 300) {
                return {
                    ...response,
                    success: true
                }
            } else if (response.status === 400) {
                return {
                    ...response,
                    success: false,
                    errorMessage: handleErrorMessage(response)
                }
            } else {
                return {
                    ...response,
                    success: false,
                    errorMessage: handleErrorMessage(response)
                }
            }
        }).catch((error: any) => {
            return {
                ...error,
                success: false,
                errorMessage: handleErrorMessage(error)
            }
        })
);

