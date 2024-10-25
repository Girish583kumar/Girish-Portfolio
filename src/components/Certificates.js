// Certificates.js
import React from 'react';
import { certificates } from './data';

const Certificates = () => {
    return (
        <section className="certificates-section">
            <h2>Certificates</h2>
            <div className="certificates-container">
                {certificates.map((certificate, index) => (
                    <div key={index} className="certificate-card">
                        <h3>{certificate.title}</h3>
                        <p><strong>Organization:</strong> {certificate.organization}</p>
                        <p><strong>Year:</strong> {certificate.year}</p>
                        <p>{certificate.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
