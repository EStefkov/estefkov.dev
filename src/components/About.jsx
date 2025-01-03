import { useLanguage } from "./LanguageProvider";

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Me",
      description:
        "Hi, I’m a passionate software developer with expertise in modern web technologies. I specialize in JavaScript, Java, and Spring, creating impactful applications that address real-world challenges.",
    },
    bg: {
      title: "За мен",
      description:
        "Здравейте, аз съм софтуерен разработчик с опит в съвременни уеб технологии. Специализирам в JavaScript, Java и Spring, създавайки ефективни приложения, които решават реални проблеми.",
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center">
          <img
            src="/me.webp"
            alt="Emiliyan Stefkov"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-indigo-600 shadow-lg transform hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            {translations[language].title}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {translations[language].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
