import * as React from "react";
import AddressAndHours from "./AddressAndHours";
import {
  directionsAndHoursContainer,
  directionsAndHours,
  addressAndHoursContainer,
  mapContainer,
} from "./DirectionsAndHours.module.scss";

export default function DirectionsAndHours() {
  return (
    <div className={directionsAndHoursContainer}>
      <div>
        <div><h1>Visit Us</h1></div>
        <div className={directionsAndHours}>
          <AddressAndHours className={addressAndHoursContainer} />
          <div className={mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2703.6274950329384!2d-122.3116803!3d47.3411458!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549059e6873b420b%3A0x52787b4cdbda984e!2s29100%20Pacific%20Hwy%20S%2C%20Federal%20Way%2C%20WA%2098003!5e0!3m2!1sen!2sus!4v1672066977653!5m2!1sen!2sus"
              width="600"
              height="350"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </div>
  );
}