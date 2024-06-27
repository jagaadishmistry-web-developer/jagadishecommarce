const BlogContactPage = () => {
  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-2 2xl:gap-8 gap-6 xl:py-10 py-6">
          <div className="lg:col-span-1">
            <p className="font-bold pb-4">Enter Your Name</p>
            <input
              type="text"
              placeholder="Name"
              className="border border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-1">
            <p className="font-bold pb-4">Enter Your Email</p>
            <input
              type="text"
              placeholder="Email"
              className="border border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="font-bold pb-4">Enter Your Website</p>
            <input
              type="text"
              placeholder="Website"
              className="border border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-2 flex gap-2">
            <input type="checkbox" name="" id="" />
            Save my name, email, and website in this browser for the next time I
            comment
          </div>
          <div className="lg:col-span-2">
            <p className="font-bold pb-4">Enter Your Message</p>
            <textarea
              type="text"
              placeholder="Message"
              className="border border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4 xl:h-72 h-52"
            />
          </div>
        </div>
        <button className="bg-primary text-white xl:py-3 py-2 xl:px-8 px-5 rounded-full">
          Send Message
        </button>
      </div>
    </>
  );
};

export default BlogContactPage;
