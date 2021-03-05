import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import "./nav.css";

function Nav(){
    return (
      <div style={{ width: "100%", top: 0, position: "fixed", zIndex: 500 }}>
        <MDBNavbar color="stylish-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">
              <div class="row">
                &nbsp; &nbsp;
                <h4>
                  <MDBIcon
                    icon="chart-bar"
                    style={{
                      color: "white",
                      verticalAlign: "middle",
                      paddingRight: "10px",
                      paddingTop:"10px"
                    }}
                  />
                </h4>
                <p
                  style={{
                    color: "white",
                    paddingTop: "12px",
                    fontSize: "15px",
                  }}
                >
                  Exchange
                </p>
              </div>
            </strong>
          </MDBNavbarBrand>
          &nbsp; &nbsp;
          <MDBCollapse id="navbarCollapse3" s navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/Home">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Balance">Balance</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/buyorsell">BuyorSell</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/Exchange">Exchange</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/transcation">Transaction</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/login">
                  <MDBIcon icon="sign-in-alt" /> &nbsp; Logout
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
}

export default Nav