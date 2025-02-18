import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100
    });
  }, []);

    return (
        <div className="">
              <Helmet>
                    <title>Work Stream | Blogs</title>
                  </Helmet>

                  <div
        data-aos="fade-right"
        className="hero md:h-[90vh] object-top"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/QvvwpdD7/business-colleagues-smiling-looking-each-other.jpg)",
        }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className=" w-full pt-24 md:pl-32 text-white">
          <div className="max-w-xl border-l-[5px] border-l-blue-700 pl-4 py-2">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">Our Blogs</h1>
            <p className="para">Explore expert insights, industry trends, and valuable tips on employee management, productivity, and workplace innovation in our blog section.</p>
          </div>
        </div>
      </div>

<div className="max-w-screen-xl py-16 mx-auto px-3 md:px-0 space-y-16">
            
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <div>
        <img
           data-aos="fade-in"
        className="rounded-xl"
        src="https://i.ibb.co.com/Cp7n2YLC/portrait-young-office-worker-woman-sitting-office-desk-using-laptop-computer-looking-busy-with-serio.jpg" alt="" />
    </div>
    <div className="xl:col-span-2 space-y-3">
        <h1 className="font-bold text-blue-700 text-3xl">The importance of continuous learning  </h1>
        <h3 className="font-semibold">In the workplace for personal and society growth</h3>
        <p className="text-gray-500">
        Continuous learning in the workplace fosters personal growth, enhances skills, and boosts career development. It drives innovation, adaptability, and productivity, benefiting individuals and organizations alike. A strong learning culture strengthens society by creating a knowledgeable workforce, promoting economic growth, encouraging lifelong development, and ensuring businesses stay competitive in an evolving world.
        </p>
    </div>
</div>
            
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <div className="xl:col-span-2 space-y-3 text-right">
        <h1 className="font-bold text-blue-700 text-3xl">Networking strategies for career growth  </h1>
        <h3 className="font-semibold">Making meaningful social media connections</h3>
        <p className="text-gray-500">
        Networking is key to career growth, and social media makes it easier than ever. Engage with industry leaders, join relevant groups, and share valuable insights to build credibility. Personalize connection requests, participate in discussions, and nurture relationships consistently. Meaningful connections can open doors to new opportunities, collaborations, and career advancements.
        </p>
    </div>
    <div>
        <img
           data-aos="fade-in"
        className="rounded-xl"
        src="https://i.ibb.co.com/Cp5k0MMf/portrait-cheerful-male-female-colleagues-drinking-coffee-break-office.jpg" alt="" />
    </div>
</div>
            
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <div>
        <img
           data-aos="fade-in"
        className="rounded-xl"
        src="https://i.ibb.co.com/Sprc1zR/medium-shot-people-working-desk.jpg" alt="" />
    </div>
    <div className="xl:col-span-2 space-y-3">
        <h1 className="font-bold text-blue-700 text-3xl">Goal setting techniques   </h1>
        <h3 className="font-semibold">For achieving personal and professional success</h3>
        <p className="text-gray-500">
        Effective goal-setting techniques are key to achieving personal and professional success. Start by setting SMART goals—Specific, Measurable, Achievable, Relevant, and Time-bound. Break larger goals into smaller milestones, track progress regularly, and stay adaptable. Visualizing success, maintaining discipline, and seeking feedback can further enhance motivation and ensure steady growth.
        </p>
    </div>
</div>
            
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    <div className="xl:col-span-2 space-y-3 text-right">
        <h1 className="font-bold text-blue-700 text-3xl"> Developing a stronger company work culture</h1>
        <h3 className="font-semibold">Some Powerful key success strategies</h3>
        <p className="text-gray-500">
        Building a strong company culture requires clear values, open communication, and employee engagement. Foster teamwork, recognize achievements, and promote inclusivity. Encourage professional growth through training and mentorship. Lead by example, embrace feedback, and create a positive work environment where employees feel valued, motivated, and aligned with the company’s vision.
        </p>
    </div>
    <div>
        <img
           data-aos="fade-in"
        className="rounded-xl"
        src="https://i.ibb.co.com/C39k46c3/men-working-laptops.jpg" alt="" />
    </div>
</div>

</div>
        </div>
    );
};

export default Blogs;