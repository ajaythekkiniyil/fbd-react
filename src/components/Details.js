import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { singleDoctorUrl } from './constants'
import { strapiUrl } from './constants'
function Details() {
    const { slug } = useParams()
    const [doctorData, setData] = useState({})
    const [Doctorimage, setDoctorImage] = useState({})

    useEffect(() => {
        axios.get(singleDoctorUrl + '[slug]=' + slug + '&populate=doctorImage').then((resp) => {
            // profile image url
            setDoctorImage(strapiUrl + resp.data.data[0].attributes.doctorImage.data.attributes.formats.large.url)
            // setting profile data to state
            setData(resp.data.data[0].attributes)
        })
    }, [])

    return (
        <>
            <section className="doctors-detail">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 p-0">
                            {/* <!--------------------------doc prof img start----------------------> */}
                            <img src={Doctorimage} alt='doctor' />
                            {/* <!--------------------------doc prof img end----------------------> */}
                        </div>
                        <div className="col-lg-5 p-0">
                            <div className="faculty_det">
                                {/* <!--------------------------doc prof title----------------------> */}
                                <h3>{doctorData.name}</h3>
                                <p>{doctorData.designation}</p>
                                {/* <!--------------------------doc prof designation----------------------> */}
                                <div className="fbd-address-block">
                                    <h4>Department</h4>
                                    <p><p>{doctorData.department}</p></p>
                                </div>
                                <div className="fbd-address-block">
                                    <img src={require('../images/diploma.png')} alt='qualification' />
                                    <h4>Qualification</h4>
                                    {/* <!--------------------------doc prof qualification----------------------> */}
                                    <p>{doctorData.qualification}</p>
                                </div>
                                {/* <div className="fbd-address-block">
                                    <i className="fi fi-rr-envelope"></i>
                                    <h4>Email</h4>
                                    <p><a href="">amitka@fbd.amrita.edu</a></p>
                                </div>
                                <div className="form-group col-lg-12">
                                    <a href="https://amritahospitals.org/fbd/contact-us/" type="submit" className="btn btn-primary btn-pill submit_button">Make an Appointment</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="doctors-bio">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {/* <!--------------------------doc prof about----------------------> */}
                                <a className="nav-link active show" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">About</a>

                                {
                                    doctorData.medicalQualification &&
                                    <a className="nav-link" id="v-pills-medicalqualification-tab" data-toggle="pill" href="#v-pills-medicalqualification" role="tab" aria-controls="v-pills-medicalqualification" aria-selected="false">Medical Qualification</a>
                                }

                                {
                                    doctorData.specializationExpertise &&
                                    <a className="nav-link" id="v-pills-specializationexpertise-tab" data-toggle="pill" href="#v-pills-specializationexpertise" role="tab" aria-controls="v-pills-specializationexpertise" aria-selected="false">Specialization & Expertise</a>
                                }

                                {
                                    doctorData.awardsCertification &&
                                    <a className="nav-link" id="v-pills-awardscertification-tab" data-toggle="pill" href="#v-pills-awardscertification" role="tab" aria-controls="v-pills-awardscertification" aria-selected="false">Awards & Certification</a>
                                }

                                {
                                    doctorData.awards &&
                                    <a className="nav-link" id="v-pills-awards-tab" data-toggle="pill" href="#v-pills-awards" role="tab" aria-controls="v-pills-awards" aria-selected="false">Awards</a>
                                }

                                {
                                    doctorData.awardsAchievements &&
                                    <a className="nav-link" id="v-pills-awardsachievements-tab" data-toggle="pill" href="#v-pills-awardsachievements" role="tab" aria-controls="v-pills-awardsachievements" aria-selected="false">Awards & Achievements</a>
                                }

                                {
                                    doctorData.professionalMembership &&
                                    <a className="nav-link" id="v-pills-professionalmembership-tab" data-toggle="pill" href="#v-pills-professionalmembership" role="tab" aria-controls="v-pills-professionalmembership" aria-selected="false">Professional Membership</a>
                                }

                                {
                                    doctorData.article &&
                                    <a className="nav-link" id="v-pills-article-tab" data-toggle="pill" href="#v-pills-article" role="tab" aria-controls="v-pills-article" aria-selected="false">Article</a>
                                }

                                {
                                    doctorData.experience &&
                                    <a className="nav-link" id="v-pills-experience-tab" data-toggle="pill" href="#v-pills-experience" role="tab" aria-controls="v-pills-experience" aria-selected="false">Experience</a>
                                }

                                {
                                    doctorData.bookChapter &&
                                    <a className="nav-link" id="v-pills-bookchapter-tab" data-toggle="pill" href="#v-pills-bookchapter" role="tab" aria-controls="v-pills-bookchapter" aria-selected="false">book Chapter</a>
                                }

                                {
                                    doctorData.publication &&
                                    <a className="nav-link" id="v-pills-publication-tab" data-toggle="pill" href="#v-pills-publication" role="tab" aria-controls="v-pills-publication" aria-selected="false">Publication</a>
                                }

                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {doctorData.about}
                                </div>

                                <div className="tab-pane fade" id="v-pills-medicalqualification" role="tabpanel" aria-labelledby="v-pills-medicalqualification-tab">
                                    {doctorData.medicalQualification}
                                </div>

                                <div className="tab-pane fade" id="v-pills-specializationexpertise" role="tabpanel" aria-labelledby="v-pills-specializationexpertise-tab">
                                    {doctorData.specializationExpertise}
                                </div>

                                <div className="tab-pane fade" id="v-pills-awardscertification" role="tabpanel" aria-labelledby="v-pills-awardscertification-tab">
                                    {doctorData.awardsCertification}
                                </div>

                                <div className="tab-pane fade" id="v-pills-awardsachievements" role="tabpanel" aria-labelledby="v-pills-awardsachievements-tab">
                                    {doctorData.awardsAchievements}
                                </div>

                                <div className="tab-pane fade" id="v-pills-awards" role="tabpanel" aria-labelledby="v-pills-awards-tab">
                                    {doctorData.awards}
                                </div>

                                <div className="tab-pane fade" id="v-pills-awardscertification" role="tabpanel" aria-labelledby="v-pills-awardscertification-tab">
                                    {doctorData.awardsCertification}
                                </div>

                                <div className="tab-pane fade" id="v-pills-professionalmembership" role="tabpanel" aria-labelledby="v-pills-professionalmembership-tab">
                                    {doctorData.professionalMembership}
                                </div>

                                <div className="tab-pane fade" id="v-pills-article" role="tabpanel" aria-labelledby="v-pills-article-tab">
                                    {doctorData.article}
                                </div>

                                <div className="tab-pane fade" id="v-pills-experience" role="tabpanel" aria-labelledby="v-pills-experience-tab">
                                    {doctorData.experience}
                                </div>

                                <div className="tab-pane fade" id="v-pills-bookchapter" role="tabpanel" aria-labelledby="v-pills-bookchapter-tab">
                                    {doctorData.bookChapter}
                                </div>

                                <div className="tab-pane fade" id="v-pills-publication" role="tabpanel" aria-labelledby="v-pills-publication-tab">
                                    {doctorData.publication}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details