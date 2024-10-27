// src/components/Certificates.js
import React from 'react';
import './Certificates.css';

const Certificates = () => {
    const certificateData = [
        {
            title: "Data Analyst",
            institution: "ExcelR Institute",
            year: "2023"
        },
        {
            title: "PCAP - Programming Essentials in Python",
            institution: "Cisco",
            year: "2023"
        },
        {
            title: "Fundamentals of Microsoft Azure",
            institution: "Microsoft",
            year: "2023"
        },
        {
            title: "Data Visualization with Python",
            institution: "IBM",
            year: "2023"
        },
    ];

    return (
        <div className="certificates">
            <h2 className="certificates-title">Certificates</h2>
            <div className="certificates-container">
                {certificateData.map((cert, index) => (
                    <div className="certificate-card" key={index}>
                        <h3 className="certificate-title">{cert.title}</h3>
                        <p className="certificate-institution">{cert.institution}</p>
                        <p className="certificate-year">{cert.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
