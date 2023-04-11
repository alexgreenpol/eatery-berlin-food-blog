import FullwidthLayout from "../layouts/FullwidthLayout";
import AboutHero from "../assets/images/about-hero.webp";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import HeadingBox from "../components/HeadingBox/HeadingBox";
import Hero from "../components/Hero/Hero";

const AboutPage = () => {
    return (
        <FullwidthLayout>
            <Hero title="About Us" image={AboutHero} />

            <HeadingBox
                title="Founder"
                description="Born in Potsdam in 1980, Ben Donath spent his early years in the former GDR. “Looking back, I work with a lot of influences from that time. There was little variety on the shelves, so creativity was needed for a variety on the table.” At the age of 16, he began his apprenticeship with the goal of becoming a pastry chef. Ben quickly discovered his love for the profession and the food processing. “Food preparation is not just a job to me. If you don't really love what you're doing, you can taste it quickly.” Over the years, Ben got to travel a lot professionally, working in various Michelin-starred restaurants and luxury hotels. He was constantly developing his skills, continuing his education, learning from colleagues and being inspired. This time was the most valuable for Ben because he was able to take something from everyone he met along the way. Today, Ben has developed his very own style and just like cooking, his food photographs and cooking videos bear his very personal signature."
            />

            <HeadingBox
                title="Purpose"
                description="After twenty years in the culinary industry, the essence for Ben is simple: “Food is essential to life, therefore make it good”. That's his credo. For Ben, simple food deserves the same dedication as preparing a fancy menu. The respectful treatment of food as an exhaustible resource, that cannot be taken for granted, Ben understands as his task. To transport this responsibility into a contemporary nutrition and to pass it on in expressive photographs and videos is his calling and the purpose of Eatery Berlin."
            />

            <HeadingBox
                title="The Bowl Stories cookbook"
                description="Creating and photographing recipes and publishing them on Eatery Berlin was a chance for Ben to share what he loves and does best, hoping to reach and inspire many people. In addition to a career change, Eatery Berlin also led to writing a cookbook. The Bowl Stories cookbook is based on classic recipes interpreted in a contemporary way. It is meant to find a place on everyone's bookshelf at home. For the mother who wants to surprise her family with something new or for singles trying to prepare a nice dinner for the first date, a gathering with friends or a quiet moment all to yourselves. Food is the best way to touch people's hearts and everyone needs a little something from time to time."
            />

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

export default AboutPage;
