import PageWrapper from "@/components/PageWrapper";
import content from "@/data/content.json";

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <div className="pt-32 pb-20 px-6 text-white max-w-5xl mx-auto">

        <h1 className="
          text-5xl md:text-7xl font-extrabold mb-14
          bg-gradient-to-r from-[#00d4ff] via-[#ff006e] to-[#8338ec]
          bg-clip-text text-transparent
        ">
          EXPERIENCE
        </h1>

        <div className="space-y-12">
          {content.experience.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl"
            >
              <h2 className="text-3xl font-bold">{job.company}</h2>
              <p className="text-pink-300 font-semibold mt-1">{job.period}</p>
              <p className="text-gray-300 mt-1">{job.role}</p>

              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-300">
                {job.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </PageWrapper>
  );
}
