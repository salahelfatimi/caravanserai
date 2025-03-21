import * as React from "react";

export const EmailTemplate = ({ FullName, Phone, StartDate, EndDate, Adults, Children, Email , Suites }) => (
  <div>
    <p><strong>My name is:</strong> {FullName}</p>
    <p>I would like to book a table:</p>
    <div>
      <p><strong>Name : </strong> {FullName}</p>
      {Email && <p><strong>Email: </strong> {Email}</p>}      
      <p><strong>Phone Number : </strong> {Phone}</p> 
      <p><strong>Suites : </strong> {Suites}</p>
      <p><strong>Check-in Date : </strong> {StartDate}</p>
      <p><strong>Check-out Date : </strong> {EndDate}</p>
      <p><strong>Adults : </strong> {Adults}</p>
      <p><strong>Children : </strong> {Children}</p>
    </div>
  </div>
);
