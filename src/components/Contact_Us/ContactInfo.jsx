import React from 'react'

const ContactInfo = () => {
    return (
        <div>
            <h1 className="display-4 text-primary" style={{  backgroundColor: "rgba(255, 255, 255, 0.7", margin: "0 auto" }}>CONTACT INFORMATION</h1>
            <div className="normalText" style={{ marginTop: "30px" }}>
                <strong>Address</strong>
                <p>2560 Huntington Avenue, Suite 305, Alexandria, VA, 22303</p>
                <strong>Service Area</strong>
                <p>We proudly serve clients throughout Washington, DC, and surrounding communities.</p>
                <strong>Hours of Operation</strong>
                <p>Monday - Friday: 9:00am - 5:00pm</p>
                <strong>Phone</strong>
                <p><a href="tel:7039015440">(703) 901-5440</a></p>
            </div>

            <img data-attachment-id="568" data-permalink="https://www.mirlogic.com/contact-us/building/" data-orig-file="https://www.mirlogic.com/wp-content/uploads/2020/02/Building.jpg" data-orig-size="1200,900" data-comments-opened="0" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="" data-image-description="" data-medium-file="https://www.mirlogic.com/wp-content/uploads/2020/02/Building-400x300.jpg" data-large-file="https://www.mirlogic.com/wp-content/uploads/2020/02/Building-1024x768.jpg" loading="lazy" class="alignright wp-image-568 size-medium" src="http://000oz92.rcomhost.com/miclogic/wp-content/uploads/2020/02/Building-400x300.jpg" alt="Building" width="400" height="300" srcset="https://www.mirlogic.com/wp-content/uploads/2020/02/Building-400x300.jpg 400w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building-768x576.jpg 768w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building-1024x768.jpg 1024w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building-600x450.jpg 600w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building-50x38.jpg 50w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building-486x363.jpg 486w, https://www.mirlogic.com/wp-content/uploads/2020/02/Building.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></img>
            <br />
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.515160869053!2d-77.07928135000067!3d38.79774777948592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1bd2cc22bd7%3A0x943d5249a0cce180!2s2560%20Huntington%20Ave%2C%20Alexandria%2C%20VA%2022303!5e0!3m2!1sen!2sus!4v1600452484219!5m2!1sen!2sus" width="1000" height="400"></iframe>
        </div>
    )
}

export default ContactInfo;