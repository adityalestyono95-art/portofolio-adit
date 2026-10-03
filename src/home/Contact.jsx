import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const[Loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "", phone: "", message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, { from_name: formData.name, from_phone : formData.phone ,message : formData.message }, import.meta.env.VITE_PUBLIC_KEY).then(() => {
            alert("Pesan berhasil dikirim!")
            setFormData({name: "", phone: "", message : ""})
            setLoading(false)
           
        },
        (error) => {
                console.log(error)
                alert ("Terjadi Kesalahan")
                setLoading(false)
            }
    ) 

        
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <h2>Hubungi Saya</h2>
                <form className="contact-wrapper" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nama Lengkap</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Masukan Nama Lengkap"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="no">No Whatsapp</label>
                        <input
                            type="number"
                            name="phone"
                            id="no"
                            placeholder="Masukan No Whatsapp"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                   

                    <div className="form-group">
                        <label htmlFor="msg">Pesan</label>
                        <textarea
                            name="message"
                            id="msg"
                            rows="8"
                            placeholder="Ketikan di sini..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
    

                    <button type="submit" disabled={Loading}>Kirim</button>
                </form>
            </div>
        </section>
    );
};


export default Contact;