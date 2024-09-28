import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = ({ offer, locale }) => {
  const salaryFormat = () => {
    if (offer.salary >= 1) {
      return locale.startsWith("es")
        ? offer.salary === 1
          ? "1 millón"
          : `${offer.salary} millones`
        : `${offer.salary} million`;
    }
    return offer.salary;
  };

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{salaryFormat()}</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.visits} />
      </td>
    </tr>
  );
};

export default Job;
