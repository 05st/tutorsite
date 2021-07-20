export default function Booking() {
  return (
    <div class="relative top-24 p-6 flex flex-col items-center space-y-24">
      <div class="flex flex-col items-center space-y-2">
        <h1 class="text-4xl font-bold text-center">Book a session</h1>
        <p class="text-center">All of our tutors have previous tutoring experience, and a deep understanding of the subjects they teach. We guarantee it.</p>
      </div>

      <div class="grid md:grid-cols-2 md:grid-rows-none gap-6 grid-rows-2">
        <div class="bg-gray-50 w-full shadow p-4 space-y-4 rounded-lg">
          <h2 class="text-2xl font-bold text-center">The process is simple.</h2>
          <ul class="list-inside list-disc space-y-2 p-4 bg-gray-100 rounded-lg shadow-inner">
            <li class="text-lg">Fill out the form based on <span class="font-bold">what works best for you</span>.</li>
            <li class="text-lg">We figure out which tutor will suit your needs the best.</li>
            <li class="text-lg">You will receive an email with session details. Reply to it for confirmation.</li>
            <li class="text-lg">Attend your free <span class="font-bold">online</span> tutoring session.</li>
            <li class="text-lg">After the lesson, discuss with your tutor about future sessions, or fill out the form again.</li>
          </ul>
          <h3 class="text-xl text-center">That's it!</h3>
          <p class="text-sm text-gray-200 text-center">Please keep in mind all of our tutors are volunteers.</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-4 w-auto flex flex-col items-center space-y-4 shadow">
          <h2 class="font-bold text-2xl">Eager to get started? Fill out the form.</h2>
          <form class="flex flex-col items-center space-y-4 w-full h-full">
            <div class="grid grid-cols-2 gap-4 w-full">
              <input class="p-2 shadow-inner" type="text" placeholder="Name"/>
              <input class="p-2 shadow-inner" type="text" placeholder="email@address.tld"/>
              <select id="subject" class="p-2 shadow-inner">
                <option selected disabled hidden>Subject</option>
                <option value="math">Math</option>
                <option disabled>──────────</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="biology">Biology</option>
                <option disabled>──────────</option>
                <option value="cs">Computer Science</option>
              </select>
              <select id="platform" class="p-2 shadow-inner">
                <option selected disabled hidden>Platform</option>
                <option value="zoom">Zoom</option>
                <option value="skype">Skype</option>
                <option value="discord">Discord</option>
              </select>
              <input class="p-2 shadow-inner" type="date"/>
              <input class="p-2 shadow-inner" type="text" placeholder="Time & timezone"/>
            </div>
            <textarea class="p-2 shadow-inner w-full h-full" placeholder="Any further details or requests here. Be specific about what material will be worked on."/>
            <input class="p-2 bg-blue-400 hover:bg-blue-500 hover:cursor-pointer rounded text-white font-bold min-w-min w-1/4" type="submit" value="Book Session"/>
            <p class="text-sm text-gray-400 text-center">If you forgot anything, please reply to the confirmation email that you will receive within 24 hours.</p>
          </form>
        </div>
      </div>

      <div class="flex flex-col space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <h2 class="font-bold text-xl text-center">Not sure if you should sign up?</h2>
          <p class="text-center">If you meet <span class="font-bold">any</span> of these criteria, you'll be perfect.</p>
        </div>
        <ul class="list-inside list-disc space-y-2">
          <li>Are struggling with any subjects we cover.</li>
          <li>Would appreciate assistance with homework.</li>
          <li>Are preparing for future classes.</li>
          <li>Have any questions about the subjects.</li>
          <li>Eager to learn new things.</li>
        </ul>
      </div>
    </div>
  );
}
