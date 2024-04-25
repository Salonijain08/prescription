import "./PrescriptionView.css";
import medicalImage from "../medical-symbol 1.png";
const PrescriptionView = () => {
  return (
    <div className="prescription-view">
      <section className="prescription-structure-parent">
        <div className="prescription-structure">
          <div className="prescription-structure-child" />
          <img
  className="medical-symbol-1-icon"
  loading="lazy"
  alt=""
  src={medicalImage}
/>

          <div className="dr-name-surname-parent">
            <div className="dr-name-surname">Dr. Name Surname</div>
            <div className="qualification">Qualification</div>
            <div className="address-contact">{`Address & Contact`}</div>
          </div>
        </div>
        <div className="prescription-content">
          <div className="prescription-content-child" />
          <div className="frame-parent">
            <div className="p-id-parent">
              <b className="p-id">P-ID :</b>
              <b className="name">Name :</b>
              <b className="age">Age :</b>
            </div>
            <div className="raj-parent">
              <div className="raj">12345_Raj</div>
              <div className="raj-sharma">Raj Sharma</div>
              <div className="y">45 Y</div>
            </div>
          </div>
          <div className="frame-group">
            <div className="date-parent">
              <b className="date">Date :</b>
              <b className="time">{`Time : `}</b>
            </div>
            <div className="button-parent">
              <div className="button">21-03-2024</div>
              <div className="div">13.00</div>
            </div>
          </div>
        </div>
      </section>
      <section className="diagnosis-details">
        <div className="diagnosis-structure">
          <div className="frame-container">
            <div className="symptoms-content-wrapper">
              <div className="symptoms-content">
                <div className="symptoms-details">
                  <div className="symptoms-header">
                    <b className="symptoms">Symptoms</b>
                    <b className="diagnosis">Diagnosis</b>
                  </div>
                </div>
                <div className="medical-condition">
                  <div className="pain-in-abdomen">Pain In Abdomen</div>
                  <div className="fatty-lever">Fatty Lever</div>
                </div>
              </div>
            </div>
            <div className="vitals-header-parent">
              <div className="vitals-header">
                <b className="bp">BP</b>
                <b className="weight">Weight</b>
              </div>
              <div className="parent">
                <div className="div1">110/80</div>
                <div className="remember-me">75</div>
              </div>
            </div>
          </div>
          <div className="rx-parent">
            <b className="rx">RX</b>
            <div className="medication-structure-wrapper">
              <div className="medication-structure">
                <div className="frame-div">
                  <div className="medicine-01-parent">
                    <div className="medicine-01">Medicine 01</div>
                    <div className="medicine-02">Medicine 02</div>
                  </div>
                  <div className="twice-daily-parent">
                    <div className="twice-daily">Twice Daily</div>
                    <div className="before-meal">Before Meal</div>
                  </div>
                </div>
                <div className="additional-medication">
                  <div className="medicine-03">Medicine 03</div>
                  <div className="before-meal1">Before Meal</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tests-to-do-parent">
            <b className="tests-to-do">Tests To Do</b>
            <div className="test-structure-wrapper">
              <div className="test-structure">
                <div className="test-01">{`Test 01    `}</div>
                <div className="test-04-wrapper">
                  <div className="test-04">Test 04</div>
                </div>
              </div>
            </div>
          </div>
          <div className="note-parent">
            <b className="note">Note</b>
            <div className="do-not-take-alcohol-visit-aft-wrapper">
              <div className="do-not-take">
                Do not take alcohol. Visit After 1 month.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PrescriptionView;
