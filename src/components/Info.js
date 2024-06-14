import React from "react";
import AboutUsSection from "./AboutSection";
import TeamSection from "./Team";
import Mission from "./Mission";
import Vision from "./Vision";
import Footer from "./Footer";
import WhatSetsUsApartSection from "./Apart";
import NavBar from "./NavBar";
import CallToAction from "./CalltoAction";

const Info = () => {
    return (
        <div>
            <NavBar />
            <TeamSection />
            <Mission />
            <CallToAction />
            <Vision />
            <WhatSetsUsApartSection />
            <Footer />
        </div>
    )
};


export default Info;