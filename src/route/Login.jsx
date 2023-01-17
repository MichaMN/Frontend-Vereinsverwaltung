import { useNavigate } from "react-router-dom";

import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdb-react-ui-kit";

export default function Login() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `dashboard`;
    navigate(path);
  };

  return (
    <MDBContainer className="my-5 d-flex justify-content-center align-items-center">
      <MDBCard className="login__card">
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1631495634750-0f14320bc0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="login form"
              className="rounded-start w-100 h-100 login__img"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center mt-2">
                <MDBIcon fas icon="fas fa-volleyball-ball fa-3x me-3" style={{ color: "#0178ff" }} />
                <span className="h1 fw-bold mb-0">MyVerein</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Jetzt Anmelden
              </h5>

              <MDBInput wrapperClass="mb-4" label="Email address" id="formControlLg" type="email" size="lg" />
              <MDBInput wrapperClass="mb-4" label="Password" id="formControlLg" type="password" size="lg" />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={routeChange}>
                Anmelden
              </MDBBtn>
              <a className="small text-muted" href="!#">
                Passwort vergessen?
              </a>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
