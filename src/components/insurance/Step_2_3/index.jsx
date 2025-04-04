import { useSelector, useDispatch } from "react-redux";
import { setDemographicData } from "../../../features/insurance/insuranceSlice";

const Step_2_3 = () => {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDemographicData({ name: name, value: value }));
  };
  return (
    <>
      <h2>Please share the details</h2>
      <form>
        <div className="input_card">
          <label>First Name</label>
          <input
            type="text"
            name="txtFirstName"
            onChange={(e) => {
              onChange(e);
            }}
            value={
              insurance.demographic_information_api_payload.question_data
                .txtFirstName
            }
          />
        </div>
        <div className="input_card">
          <label>Last Name</label>
          <input
            type="text"
            name="txtSecondName"
            onChange={(e) => {
              onChange(e);
            }}
            value={
              insurance.demographic_information_api_payload.question_data
                .txtSecondName
            }
          />
        </div>
        <div className="input_card">
          <label>Email</label>
          <input
            type="email"
            name="txtEMail"
            onChange={(e) => {
              onChange(e);
            }}
            value={
              insurance.demographic_information_api_payload.question_data
                .txtEMail
            }
          />
        </div>
        <div className="input_card">
          <label>Phone number</label>
          <input
            type="text"
            name="txtPhoneNumber"
            onChange={(e) => {
              onChange(e);
            }}
            value={
              insurance.demographic_information_api_payload.question_data
                .txtPhoneNumber
            }
          />
        </div>
      </form>
    </>
  );
};
export default Step_2_3;
