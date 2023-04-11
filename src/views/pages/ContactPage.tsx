import FullwidthLayout from "../layouts/FullwidthLayout";
import ContactHero from "../assets/images/contact-hero.webp";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
    return (
        <FullwidthLayout className="contact">
            <Hero title="Contact Us" image={ContactHero} />

            <h2>Write a message to us</h2>

            <ContactForm />

            <SocialButtons
                facebookUrl="#"
                twitterUrl="#"
                instagramUrl="#"
                youtubeUrl="#"
                linkedinUrl="#"
            />
            <SubscribeForm />
        </FullwidthLayout>
    );
};

export default ContactPage;
