import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
    return (
        <CDBFooter className="shadow">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <span className="ml-3 h5 font-weight-bold"> Contact Us</span>
                        </a>
                        <CDBFooterLink href="/">About Us</CDBFooterLink>
                        <CDBFooterLink href="/">Careers</CDBFooterLink>
                        <CDBFooterLink href="/">Flipkart Stories</CDBFooterLink>
                        <CDBFooterLink href="/">Press</CDBFooterLink>
                        <CDBFooterLink href="/">Flipkart Wholesale</CDBFooterLink>
                        <CDBFooterLink href="/">Corporate Information</CDBFooterLink>
                        <CDBBox display="flex" className="mt-4">
                            <CDBBtn flat color="dark">
                                <CDBIcon fab icon="facebook-f" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="mx-3">
                                <CDBIcon fab icon="twitter" />
                            </CDBBtn>
                            <CDBBtn flat color="dark" className="p-2">
                                <CDBIcon fab icon="instagram" />
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Help
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Payments</CDBFooterLink>
                            <CDBFooterLink href="/">Shipping</CDBFooterLink>
                            <CDBFooterLink href="/">Cancellation&Returns</CDBFooterLink>
                            <CDBFooterLink href="/">FAQ</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Policy
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Return Policy</CDBFooterLink>
                            <CDBFooterLink href="/">Terms of User</CDBFooterLink>
                            <CDBFooterLink href="/">Security</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            SOCIAL
                        </p>
                        <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                            <CDBFooterLink href="/">Twitter</CDBFooterLink>
                            <CDBFooterLink href="/">Instagram</CDBFooterLink>
                            <CDBFooterLink href="/">Youtube</CDBFooterLink>
                        </CDBBox>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Mail Us:
                        </p>
                        <p className="my-3" style={{ width: '250px' }}>
                            Flipkart Internet Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                        </p>
                    </CDBBox>
                    <CDBBox>
                        <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                            Registered Office Address:
                        </p>
                        <p className="my-3" style={{ width: '250px' }}>
                            Flipkart Internet Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India
                            CIN : U51109KA2012PTC066107
                            Telephone: 044-45614700
                        </p>
                    </CDBBox>
                </CDBBox>
                <small className="text-center mt-5">&copy; © 2007-2022 Flipkart.com</small>
            </CDBBox>
        </CDBFooter>
    );
};