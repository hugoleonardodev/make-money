import React from 'react';
import HighIcon from '../../../assets/icons/high-icon.svg';
import LowIcon from '../../../assets/icons/low-icon.svg';
import { ERROR, SUCCESS } from '../HighOrLow/HighOrLow';

interface CompanyRatingProps {
  companyRating: number;
}
const CompanyRating: React.FC<CompanyRatingProps> = ({ companyRating }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h5 style={{ color: companyRating > 0 ? SUCCESS : ERROR }}>
        {companyRating > 0 && <>+</>}
        {`${companyRating}%`}
      </h5>
      {companyRating > 0 ? (
        <HighIcon style={{ marginLeft: '4px' }} />
      ) : (
        <LowIcon style={{ marginLeft: '4px' }} />
      )}
    </div>
  );
};

export default CompanyRating;
