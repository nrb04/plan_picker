import time from "../../assets/time.jpg";
import planning from "../../assets/planning.jpg";
import plannedCalendar from "../../assets/people-planned-in-calendar.jpg";
import EfficientPlanning from "../../assets/Efficient Planning.jpg";
import avatar from "../../assets/avatar.jpg";
import calendar from "../../assets/calendar.jpg";
import EventCalendar from "../../eventCalendar/EventCalendar";
import MyCalendar from "../../myCalendar/MyCalendar";



const About = () => {

  const events = [
    {
      title: "Meeting",
      start: new Date(2023, 7, 16, 10, 0),
      end: new Date(2023, 7, 16, 12, 0),
      description: "Discuss project updates.",
    },
    // {
    //   title: "Event 1",
    //   start: new Date(),
    //   end: new Date(new Date().setHours(new Date().getHours() + 1)),
    // },
    // {
    //   title: "Event 2",
    //   start: new Date(new Date().setDate(new Date().getDate() + 1)),
    //   end: new Date(
    //     new Date()
    //       .setDate(new Date().getDate() + 1)
    //       .setHours(new Date().getHours() + 1)
    //   ),
    // },
  ];

  return (
    <div>

      <MyCalendar/>

      <h1 className="mt-7 text-3xl font-semibold mb-5">Calendar events</h1>

      <EventCalendar events={events}/>

      <div className="bg-gray-200 mt-20">
        <div className="">
          <div className="relative">
            <div
              className="p-6 rounded-lg "
              style={{
                backgroundImage: `url(${calendar})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>

              {/* front text */}
              <div className="flex justify-center items-center flex-col  max-w-7xl mx-auto lg:h-[700px] md:h-[600px] h-[500px]">
                <h1 className="text-3xl  md:text-4xl lg:text-6xl font-semibold text-[#FFEE32] mb-4 z-10 text-center">
                  Experience Exceptional Scheduling Made Simple
                </h1>

                <div className="sm:flex-row flex gap-3 mt-8 flex-col z-10">
                  <button className="bg-[#FFEE32] text-black rounded-full px-4 py-2 hover:bg-yellow-400  font-bold shadow-md hover:shadow-lg">
                    Explore Features
                  </button>
                  <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-900  font-bold shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>

              {/* <p className="text-gray-600 mb-8">
          Welcome to our scheduling app. We're dedicated to providing you with a
          seamless and efficient scheduling experience.
        </p>
        <p className="text-gray-600 mb-8">
          Our team consists of passionate individuals who believe in the power
          of effective time management. We're here to make your scheduling
          process effortless and enjoyable.
        </p>
        <p className="text-gray-600 mb-8">
          Whether you're a busy professional, a student, or anyone looking to
          manage their time better, our app is designed to cater to your needs.
        </p>
        <p className="text-gray-600">
          Join us on this journey to productivity and better time utilization.
          Get started today and experience the difference.
        </p> */}
            </div>
          </div>

          {/* Revolutionize of Schedule */}
          <div className="py-[75px] md:py-[150px] flex flex-col md:flex-row gap-4 max-w-7xl mx-auto p-4">
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold text-2xl md:text-3xl">
                Revolutionize Your Schedule
              </h1>
              <p className=" mt-6">
                Welcome to the future of scheduling! Experience the magic of
                effortless appointment booking with our cutting-edge web
                apps—CalendlyEvolved and Calminator. Gone are the days of
                back-and-forth emails and clunky interfaces.
              </p>

              <div className="flex gap-6 mt-6">
                <div>
                  <h2 className="font-semibold text-2xl">100</h2>
                  <p>Time-saving</p>
                </div>
                <div>
                  <h2 className="font-semibold text-2xl">300</h2>
                  <p>Satisfied Users</p>
                </div>
                <div>
                  <h2 className="font-semibold text-2xl">24/7</h2>
                  <p>Support</p>
                </div>
              </div>
            </div>

            <img
              className="md:w-1/2 max-w-full h-auto rounded-xl mt-8"
              src={plannedCalendar}
              alt=""
            />
          </div>

          {/*  */}
          <div className="py-[75px] md:py-[150px] bg-[rgb(51,53,51)] text-white  w-full mb-8 rounded-xl ">
            <div className="flex md:flex-row-reverse flex-col gap-8 max-w-7xl mx-auto p-4">
              <img
                className="md:w-1/2 max-w-full h-auto rounded-xl"
                src={time}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-2xl md:text-3xl">
                  Time Management Superpowers at Your Fingertips
                </h1>
                <p className="font-semibold mt-8">
                  With our exceptional scheduling technology, making plans,
                  booking appointments, and coordinating meetings will become as
                  smooth as silk. Gone are the days of clunky calendars and
                  double-booked dates.
                </p>
              </div>
            </div>
          </div>

          {/* planning features */}
          <div className="py-[75px] md:py-[150px] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-4">
            <div className="rounded-xl bg-slate-300 p-4">
              <div className="bg-gray-200 rounded-xl p-4">
                <div>
                  <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                </div>
                <h1 className="font-semibold text-lg my-3">
                  Efficient Planning
                </h1>
                <p className="mb-2">Save hours weekly</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-300 p-4">
              <div className="bg-gray-200 rounded-xl p-4">
                <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                <h1 className="font-semibold text-lg my-3">Seamless Syncing</h1>
                <p className="mb-2">Never miss an event</p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-300 p-4">
              <div className="bg-gray-200 rounded-xl p-4">
                <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                <h1 className="font-semibold text-lg my-3">
                  Enhanced Productivity
                </h1>
                <p className="mb-2">Stay on top of tasks</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="py-[75px] md:py-[150px]  bg-[#333533] text-white  mb-8 rounded-xl">
            <div className="flex gap-6 flex-col md:flex-row max-w-7xl mx-auto p-4">
              <img
                className="md:w-1/2 max-w-full h-auto rounded-xl"
                src={planning}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-2xl md:text-3xl">
                  Scheduling Reinvented
                </h1>
                <p className="font-semibold mt-3">
                  Tired of juggling your busy schedule and manually organizing
                  appointments? Look no further—our powerful schedule web app is
                  here to save the day! Designed to revolutionize the way you
                  manage your time, this app is an essential tool for those on
                  the go.
                </p>
                <p className="font-semibold mt-4">
                  Sleek and user-friendly, our scheduler helps you arrange
                  meetings, prioritize tasks, and stay on top of your game. Say
                  goodbye to double bookings and hello to a stress-free life as
                  you master your schedule like a boss.
                </p>
                <p className="font-semibold mt-4">
                  Compatible with your favorite calendars, our app syncs
                  effortlessly across all your devices, ensuring you’re always
                  up to date and in the know. Kiss chaos goodbye and embrace
                  organization with open arms—it’s time to level up your
                  scheduling game!
                </p>
              </div>
            </div>
          </div>

          {/* App Features */}
          <div className="py-[75px] md:py-[150px]  bg-[#FDB833] mb-8 rounded-xl">
            <div className=" max-w-7xl mx-auto p-4">
              <h1 className="mb-8 text-2xl md:text-3xl font-semibold">
                App Features
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8  ">
                <div className="text-left">
                  <h1 className="text-lg">Timezone Sync</h1>
                  <p className="pt-2">
                    Automatically adjust to client's timezones.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Smart Availability</h1>
                  <p className="pt-2">
                    Managing your availability like a charm.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Integrations Galore</h1>
                  <p className="pt-2">
                    Sync effortlessly with popular platforms.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Customization Kingdom</h1>
                  <p className="pt-2">Tailor every aspect to your brand.</p>
                </div>

                <div>
                  <h1 className="text-lg">Team Scheduling</h1>
                  <p className="pt-2">Harness the power of collaboration.</p>
                </div>

                <div>
                  <h1 className="text-lg">Analytics Insights</h1>
                  <p className="pt-2">Use data to supercharge your meetings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* people say about us */}
          <div className="py-[75px] md:py-[150px] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-4">
            <div className="bg-gray-300 rounded-xl p-7  hover:bg-gray-200  shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                My calendar has never been this organized. I won’t go back!
              </p>
              <small>Linda Mathers</small>
            </div>

            <div className="bg-gray-300 rounded-xl p-7">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                Truly game-changing. I’ve saved countless hours.
              </p>
              <small>Steve Wellington</small>
            </div>

            <div className="bg-gray-300 rounded-xl p-7">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                Our entire team loves using Calminator. Highly recommended!
              </p>
              <small>TechOne Innovations</small>
            </div>
          </div>

          {/* questions */}
          <div className="py-[75px] md:py-[150px] bg-[#333533] text-white rounded-xl">
            <div className=" max-w-7xl mx-auto p-4">
              <h1 className="mb-8 text-2xl md:text-3xl  font-semibold">
                Got Questions?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 md:text-left gap-8">
                <div>
                  <h1 className="text-lg">Can I customize reminders?</h1>
                  <p className="pt-2">
                    Absolutely! Customize reminders to suit your preferences and
                    never miss a beat.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Are integrations available?</h1>
                  <p className="pt-2">
                    Definitely! Our apps integrate seamlessly with popular
                    platforms like Google Calendar, Zoom, and more.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg">How secure is my data?</h1>
                  <p className="pt-2">
                    We take security seriously. Your data is encrypted and
                    securely stored at all times.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg">What about team pricing?</h1>
                  <p className="pt-2">
                    We offer competitive team pricing plans. Head to our pricing
                    page for details!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="py-[75px] md:py-[150px]  bg-gray-100">
            <div className=" max-w-7xl mx-auto p-4">
              <h1 className="font-semibold text-2xl md:text-4xl">
                Ready to revolutionize your scheduling? Join us now!
              </h1>
              <div className=" gap-x-3 sm:flex-row flex gap-3 mt-8 flex-col">
                <button className=" rounded-full font-semibold bg-[#FFEE32] px-4 py-2 hover:bg-yellow-400   shadow-md hover:shadow-lg">
                  Sign Up
                </button>
                <button className=" rounded-full bg-black text-white px-4 py-2 font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
