import * as React from "react";

export interface AddressAndHoursProps {
  className?: string | undefined,
}

export default function(props: React.PropsWithChildren<AddressAndHoursProps>) {
  return (
    <div className={props.className}>
      {props.children}
      <div>
        <label>Address</label>
        <div>Lim's Nyama Choma</div>
        <div>29100 Pacific Hwy S</div>
        <div>Federal Way, WA 98003</div>
      </div>
      <div>
        <label>Phone</label>
        <a href="tel:+12069603964" target="_blank">(206) 960 - 3964</a>
      </div>
      <div>
        <label>Hours</label>
        Tuesday - Sunday: 10 AM - 10 PM
      </div>
    </div>
  );
}
