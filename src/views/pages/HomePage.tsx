import FullwidthLayout from "../layouts/FullwidthLayout";
import HomeHero from "../assets/images/home-hero.webp";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import HeadingBox from "../components/HeadingBox/HeadingBox";
import Hero from "../components/Hero/Hero";
import ServicesList from "../components/ServicesList/ServicesList";

const HomePage = () => {
    return (
        <FullwidthLayout>
            <Hero
                title="Food is essential to life, therefore make it good."
                label="Ben Donath"
                subline="Visual Communication for Food & Beverage | Recipes | Stories"
                image={HomeHero}
            />

            <HeadingBox
                title="Ben Donath - Founder"
                description="For Ben, a simple food deserves the same dedication as preparing a fancy menu. The respectful treatment of food as an exhaustible resource, that cannot be taken for granted, Ben understands as his task. To transport this responsibility into a contemporary nutrition and to pass it on in expressive photographs and videos is his calling and the purpose of Eatery Berlin."
            />

            <HeadingBox title="Services">
                <ServicesList />
            </HeadingBox>

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

export default HomePage;
