/**
    * get status color
    * @param {*} status 
    * @returns 
    */
export const getStatusColor = (status) => {
    switch (status) {
        case 'Pending':
            return '#F71A1A';
        case 'Done':
            return '#32a852';
        case 'In the queue':
            return '#F0AB00';
        case 'In the work':
            return '#428BC1';
        default:
            return 'white'; // Default color if status is not recognized
    }
};
export const getAdminStatusColor = (status) => {
    switch (status) {
        case 'Cancelled':
            return '#F71A1A';
        case 'New Order':
            return '#428BC1';
        case 'In Process':
            return '#FE920C';
        default:
            return '#428BC1'; // Default color if status is not recognized
    }
};