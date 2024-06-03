const Booking = require("../../models/booking");
const Event = require("../../models/event");

const { transformEvent } = require('./merge');
const { transformBooking } = require('./merge')


module.exports = {
  
    bookings: async (args, req) => {

      if (!req.isAuth){
        throw new Error('Unauthenticated');
      }
      try {
        const bookings = await Booking.find();
        return bookings.map((booking) => {
          return transformBooking(booking);
        });
      } catch (err) {
        throw err;
      }
    },
  
    bookEvent: async (args, req) => {
      if (!req.isAuth){
        throw new Error('Unauthenticated');
      }
      
      try {
        const fetchedEvent = await Event.findOne({ _id: args.eventId });
        const booking = new Booking({
          user: "66596f13c39bd1f5c7b1e096",
          event: fetchedEvent,
        });
        const result = await booking.save();
        return transformBooking(result);
      } catch (err) {
        throw err;
      }
    },
  
    cancelBooking: async (args, req) => {

      if (!req.isAuth){
        throw new Error('Unauthenticated');
      }

      try {
        // populate('event') replaces the event field's ObjectId(from Booking collection) with the actual document from the Event collection.
        const booking = await Booking.findById(args.bookingId).populate("event");
        const event = transformEvent(booking.event)
        await Booking.deleteOne({ _id: args.bookingId });
        return event;
      } catch (err) {
        throw err;
      }
    },
  };