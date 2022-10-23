import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 foot_log">
                            <img style={{ width: 180 }} src="https://amritahospitals.org/fbd/team/asset/img/amitahospitals-fbd-logo-footer.webp" alt='logo'/>
                            <p>Leading the Way in Medical Execellence,<br /> Trusted Care.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 foot_add">
                            <h4>Address</h4>
                            <p><img src="https://amritahospitals.org/fbd/team/asset/img/geo-alt.svg" alt='footer-logo'/> Mata Amritanandamayi Marg, Sector 88, Faridabad, Haryana 121002</p>
                            <p><img src="https://amritahospitals.org/fbd/team/asset/img/envelope.svg" alt='footer-logo'/> fbd@amritahospitals.org</p>
                            <p><img src="https://amritahospitals.org/fbd/team/asset/img/telephone.svg" alt='footer-logo'/> 0129 - 2851234</p>
                        </div>
                        <div className="col-lg-4 col-sm-6 social_links">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><a target="blank" href="https://www.facebook.com/amritafbd">
                                    <img src="https://amritahospitals.org/fbd/team/asset/img/fb.svg" alt='follow-us'/></a></li>
                                <li><a target="blank" href="https://www.instagram.com/amritafbd/">
                                    <img src="https://amritahospitals.org/fbd/team/asset/img/instagram.svg" alt='follow-us'/></a></li>
                                <li><a target="blank" href="https://twitter.com/amritafbd">
                                    <img src="https://amritahospitals.org/fbd/team/asset/img/twitter.svg" alt='follow-us'/></a></li>
                                <li><a target="blank" href="https://in.linkedin.com/company/amrita-hospital-faridabad">
                                    <img src="https://amritahospitals.org/fbd/team/asset/img/linkedin.svg" alt='follow-us'/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>© 2022 Amrita Hospital Faridabad | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer