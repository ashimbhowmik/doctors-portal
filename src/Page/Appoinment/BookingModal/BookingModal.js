import { format } from "date-fns";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatementName, slots } = treatment; //treatment is appoinment option just differen name
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      treatment: treatementName,
      patient: name,
      slot: slot,
      email: email,
      phone: phone,
    };
    setTreatment(null);
    console.log(booking);

    console.log(slot, name, email, phone, date);
  };

  return (
    <div className="">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatementName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
              value={date}
            />
            <select
              name="slot"
              className="select select-bordered  select-ghost w-full"
            >
              {/* map jokhn array er upor loop kore tokhn 3 ta perameter dey 1.value 2.Index number 3. somponno array */}
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
