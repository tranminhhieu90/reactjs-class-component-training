import { FETCH_PATIENTS_SUCCESS, FETCH_PATIENTS } from 'containers/patient/constants';

export const fetchPatientsSuccess = (patientsList) => {
  return {
    type: FETCH_PATIENTS_SUCCESS,
    payload: patientsList,
  };
};

export const fetchPatients = (patientsList) => {
  return {
    type: FETCH_PATIENTS,
    payload: patientsList,
  };
};
