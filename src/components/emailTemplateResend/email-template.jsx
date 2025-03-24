import * as React from "react";

export const EmailTemplate = ({ fullName,comment, phone, startDate, endDate, adults, children, email, suites }) => (
  <div>
    <div>
      {fullName && <p><strong>Name : </strong> {fullName}</p>}
      {email && <p><strong>Email: </strong> {email}</p>}
      {phone && <p><strong>Phone Number : </strong> {phone}</p>}
      {suites && <p><strong>Suites : </strong> {suites}</p>}
      {startDate && <p><strong>Check-in Date : </strong> {startDate}</p>}
      {endDate && <p><strong>Check-out Date : </strong> {endDate}</p>}
      {adults && <p><strong>Adults : </strong> {adults}</p>}
      {children && <p><strong>Children : </strong> {children}</p>}
      {comment && <p><strong>Comment : </strong> {comment}</p>}
    </div>
  </div>
);
