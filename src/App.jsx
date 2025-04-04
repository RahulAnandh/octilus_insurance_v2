import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Step_1_1 from "./components/insurance/step_1_1";
import Step_1_2 from "./components/insurance/step_1_2";
import Step_1_3 from "./components/insurance/step_1_3";
import Step_2_1 from "./components/insurance/step_2_1";
import Step_2_2 from "./components/insurance/step_2_2";
import Step_2_3 from "./components/insurance/step_2_3";
import DigitalSignature from "./components/insurance/digital_signature";
import FinalResultPage from "./components/insurance/final_result_page";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStep,
  changeCollection,
  postPersonalData,
  postDemographicInformation,
  setErrorMessages,
} from "./features/insurance/insuranceSlice";

function App() {
  const insurance = useSelector((state) => state.insurance);
  const dispatch = useDispatch();
  const onFinish = (col) => {
    if (col === 1) {
      dispatch(postPersonalData(insurance.personal_data_api_payload));
    } else if (col === 2) {
      dispatch(
        postDemographicInformation(
          insurance.demographic_information_api_payload
        )
      );
    }
  };
  const callInputValidater = () => {
    console.log("1---2", insurance);
    if (insurance.step === 1) {
      if (insurance.personal_data_api_payload.data.lstSalutation.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_lstSalutation",
            value: "Please Select Title.",
          })
        );
        return;
      }
      if (insurance.personal_data_api_payload.data.txtFName.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_txtFName",
            value: "Please Fill the First Name.",
          })
        );

        return;
      }
      if (insurance.personal_data_api_payload.data.txtLName.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_txtLName",
            value: "Please Fill the Second Name.",
          })
        );

        return;
      }
      if (insurance.personal_data_api_payload.data.birthday.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_birthday",
            value: "Please Select Birthday.",
          })
        );
        return;
      }
      dispatch(changeStep(insurance.step + 1));
    }
    if (insurance.step === 2) {
      console.log(insurance.personal_data_api_payload);
      if (insurance.personal_data_api_payload.data.txtEmail.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_txtEmail",
            value: "Please Fill a Valid E mail.",
          })
        );
        return;
      }
      if (
        insurance.personal_data_api_payload.data.txtPhone.length > 10 ||
        insurance.personal_data_api_payload.data.txtPhone.length < 10
      ) {
        dispatch(
          setErrorMessages({
            name: "error_txtPhone",
            value: "Please Fill a Valid Phone Number.",
          })
        );
        return;
      }
      dispatch(changeStep(insurance.step + 1));
    }
    if (insurance.step === 3) {
      console.log(insurance.personal_data_api_payload);
      if (insurance.personal_data_api_payload.data.txtPostCode.length == 0) {
        dispatch(
          setErrorMessages({
            name: "error_txtPostCode",
            value: "Please Fill a Valid Postal Code.",
          })
        );
        return;
      }
      if (
        insurance.personal_data_api_payload.data.txtaddressline1.length == 0
      ) {
        dispatch(
          setErrorMessages({
            name: "error_txtaddressline1",
            value: "Please Fill a Valid Address Line 1.",
          })
        );
        return;
      }
      if (
        insurance.personal_data_api_payload.data.txtaddressline2.length == 0
      ) {
        dispatch(
          setErrorMessages({
            name: "error_txtaddressline2",
            value: "Please Fill a Valid Address Line 2.",
          })
        );
        return;
      }

      dispatch(changeStep(insurance.step + 1));
    }
  };
  const steps_collection = [
    {
      key: 1,
      title: "Personal data",
      content: <Step_1_1 />,
      step: "1_1",
      step_collection: 1,
      previous_button: false,
      next_button: true,
      finish_button: false,
    },
    {
      key: 2,
      title: "Contact information",
      content: <Step_1_2 />,
      step: "1_2",
      step_collection: 1,
      previous_button: true,
      next_button: true,
      finish_button: false,
    },
    {
      key: 3,
      title: "Address",
      content: <Step_1_3 />,
      step: "1_3",
      step_collection: 1,
      previous_button: true,
      next_button: false,
      finish_button: true,
    },
    {
      key: 4,
      title: "",
      content: <Step_2_1 />,
      step: "2_1",
      step_collection: 2,
      previous_button: false,
      next_button: true,
      finish_button: false,
    },
    {
      key: 5,
      title: "",
      content: <Step_2_2 />,
      step: "2_2",
      step_collection: 2,
      previous_button: true,
      next_button: true,
      finish_button: false,
    },
    {
      key: 6,
      title: "Please share the details",
      content: <Step_2_3 />,
      step: "2_3",
      step_collection: 2,
      previous_button: true,
      next_button: false,
      finish_button: true,
    },
  ];

  return (
    <div className="container">
      <div className="heading-and-step-container">
        <div className="form-heading">
          <h1>Survey</h1>
          <p>Insurance Evaluation Survey</p>
        </div>
        {insurance.collection === 1 && (
          <>
            <button
              onClick={() => dispatch(changeStep(1))}
              className={
                insurance.step === 1 ? "step-button-active" : "step-button"
              }
            >
              Step 1
            </button>
            <button
              onClick={() => dispatch(changeStep(2))}
              className={
                insurance.step === 2 ? "step-button-active" : "step-button"
              }
            >
              Step 2
            </button>
            <button
              onClick={() => dispatch(changeStep(3))}
              className={
                insurance.step === 3 ? "step-button-active" : "step-button"
              }
            >
              Step 3
            </button>
          </>
        )}
        {insurance.collection === 2 && (
          <>
            <button
              onClick={() => dispatch(changeStep(4))}
              className={
                insurance.step === 4 ? "step-button-active" : "step-button"
              }
            >
              Step 1
            </button>
            <button
              onClick={() => dispatch(changeStep(5))}
              className={
                insurance.step === 5 ? "step-button-active" : "step-button"
              }
            >
              Step 2
            </button>
            <button
              onClick={() => dispatch(changeStep(6))}
              className={
                insurance.step === 6 ? "step-button-active" : "step-button"
              }
            >
              Step 3
            </button>
          </>
        )}
      </div>
      <div>
        {steps_collection.map((obj) => {
          return (
            <>
              {obj.step_collection === insurance.collection &&
                obj.key === insurance.step && (
                  <div>
                    <div className="form-container">{obj.content}</div>
                    <button
                      className={
                        obj.previous_button
                          ? "previous-button-active "
                          : "previous-button-not-active "
                      }
                      disabled={!obj.previous_button}
                      onClick={() => {
                        dispatch(changeStep(insurance.step - 1));
                      }}
                    >
                      Previous
                    </button>
                    {obj.next_button && (
                      <button
                        className={
                          obj.next_button
                            ? "next-button-active "
                            : "next-button-not-active "
                        }
                        onClick={() => {
                          callInputValidater();
                        }}
                      >
                        Next
                      </button>
                    )}
                    {obj.finish_button && (
                      <button
                        onClick={() => {
                          dispatch(changeStep(insurance.step + 1));
                          dispatch(changeCollection(insurance.collection + 1));
                          onFinish(insurance.collection);
                        }}
                        className={
                          obj.finish_button
                            ? "finish-button"
                            : "button-not-active"
                        }
                      >
                        Finish
                      </button>
                    )}
                  </div>
                )}
            </>
          );
        })}
        {insurance.step === 7 && (
          <div className="form-container">
            <DigitalSignature />
          </div>
        )}
        {insurance.step === 8 && insurance.collection === 4 && (
          <div className="form-container">
            <FinalResultPage />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
