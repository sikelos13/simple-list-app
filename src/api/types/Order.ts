export interface Order {
    id: string;
    status: string;
    eta: string;
    parcel_id: string;
    sender: string;
    verification_required: boolean;
    location_id: string;
    location_name: string;
    location_coordinate_latitude: string;
    location_coordinate_longitude: string;
    location_status_ok: boolean;
    user_phone: string;
    user_name: string;
    notes: string;
    last_updated: string;
}