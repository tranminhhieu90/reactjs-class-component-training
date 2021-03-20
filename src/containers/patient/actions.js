import { FETCH_PATIENTS, DELETE_PATIENT, UPDATE_PATIENT } from 'containers/Patient/constants';

export const fetchPatients = (patientsList) => {
  return {
    type: FETCH_PATIENTS,
    payload: [...patientsList],
  };
};
