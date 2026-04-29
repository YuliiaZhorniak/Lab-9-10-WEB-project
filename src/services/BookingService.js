const STORAGE_KEY = 'my_railway_bookings';

export const BookingService = {
  getBookings: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  saveBookings: (bookings) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }
};