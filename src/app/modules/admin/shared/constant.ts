import {StatusBooking} from '@app/modules/admin/shared/enums';

export const ADMIN_MENU = [
    {
        text: 'DASHBOARD',
        path: '/admin/dashboard'
    },
    {
        text: 'FLOWERS',
        path: '/admin/flowers',
    },
    {
        text: 'ORDERS',
        path: '/admin/orders'
    },
    {
        text: 'USERS',
        path: '/admin/users',
    },
];

export const STATUS_METHOD: { value: StatusBooking, name: string }[] = [
    {value: StatusBooking.Paid, name: 'Paid'},
    {value: StatusBooking.Complete, name: 'Complete'},
    {value: StatusBooking.BookingAccepted, name: 'Booking accepted'},
    {value: StatusBooking.BookingRequested, name: 'Booking requested'}
];

