import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">📩 Let's Connect</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          You can reach me through any of the following ways. Feel free to connect!
        </p>

        <div className="grid gap-4 text-left max-w-md mx-auto">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sarveshsingh8303744279@gmail.com" className="text-blue-600 hover:underline">
              sarveshsingh8303744279@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918303744279" className="text-blue-600 hover:underline">
              +91-8303744279
            </a>
          </p>
          <p>
            <strong>Resume:</strong>{" "}
            <a
              href="https://drive.google.com/file/d/105M6iBMLsKyqsIZN-VdEpZaAlffGdDqu/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Download PDF
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sarvesh-kumar-singh-5b01b5291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View LinkedIn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Sarvesh221007?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
