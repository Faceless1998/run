import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PageHeader from '../shared/PageHeader';
import './About.css';

// Data for the About Us page
const federationDetails = {
  en: {
    name: "Adjarian Obstacle Sports Federation (AOSF)",
    mission: "To unite athletes of all levels and ages, providing opportunities for physical development, community building, and promoting healthy, active lifestyles. Whether you're an experienced runner or a newcomer, AOSF strives to offer exciting events that challenge and inspire.",
    description: "AOSF is a member-based, not-for-profit organization that promotes Ninja Sports, Obstacle Course Racing (OCR), trail running, and adventure racing in the Adjara region. Founded by OCR enthusiasts and professionals, our Federation now organizes a variety of events from obstacle races to scenic trail runs and traditional road races.",
    goals: [
      "Collaborate with key stakeholders to unify the obstacle and running sports community in Georgia.",
      "Represent the needs of athletes by organizing safe, affordable, and fair race events, whether on the road, trail, or obstacle courses.",
      "Be inclusive of all organizations, brands, and partners, fostering growth within the community.",
      "Work with event organizers to ensure maximum safety, operational excellence, and fairness in all competitions.",
      "Host national and international championships, elevating Georgia as a premier destination for running and obstacle sports.",
      "Promote trail running, road racing, and obstacle sports in schools and universities to inspire the next generation of athletes.",
      "Provide structured training programs, certified coaches, and camps to help athletes reach their full potential.",
    ],
    team: [
      { title: "President", name: "Archil Manvelidze" },
      { title: "Vice-President", name: "David Zurabashvili" },
      { title: "Treasurer", name: "Simon Beridze" },
      { title: "General Secretary", name: "Olga Vakhrusheva" },
    ],
  },
  ru: {
    name: "Аджарская федерация спортивных препятствий (АФСП)",
    mission: "Объединять спортсменов всех уровней и возрастов, предоставляя возможности для физического развития, создания сообщества и пропаганды здорового, активного образа жизни. Независимо от того, опытный ли вы бегун или новичок, АФСП стремится предлагать захватывающие мероприятия, которые бросают вызов и вдохновляют.",
    description: "АФСП - это некоммерческая организация, основанная на членстве, которая продвигает ниндзя-спорт, гонки с препятствиями (OCR), трейловый бег и приключенческие гонки в регионе Аджария. Основанная энтузиастами и профессионалами OCR, наша федерация теперь организует различные мероприятия от гонок с препятствиями до живописных трейловых забегов и традиционных дорожных гонок.",
    goals: [
      "Сотрудничать с ключевыми заинтересованными сторонами для объединения сообщества спортивных препятствий и бега в Грузии.",
      "Представлять потребности спортсменов, организуя безопасные, доступные и справедливые соревнования, будь то на дороге, тропе или полосе препятствий.",
      "Быть инклюзивными для всех организаций, брендов и партнеров, способствуя росту сообщества.",
      "Работать с организаторами мероприятий для обеспечения максимальной безопасности, операционного превосходства и справедливости во всех соревнованиях.",
      "Проводить национальные и международные чемпионаты, повышая статус Грузии как ведущего направления для бега и спортивных препятствий.",
      "Продвигать трейловый бег, дорожные гонки и спортивные препятствия в школах и университетах для вдохновления следующего поколения спортсменов.",
      "Предоставлять структурированные программы тренировок, сертифицированных тренеров и лагеря для помощи спортсменам в достижении их полного потенциала.",
    ],
    team: [
      { title: "Президент", name: "Арчил Манвелидзе" },
      { title: "Вице-президент", name: "Давид Зурабашвили" },
      { title: "Казначей", name: "Симон Беридзе" },
      { title: "Генеральный секретарь", name: "Ольга Вахрушева" },
    ],
  },
  ka: {
    name: "აჭარის სპორტული დაბრკოლებების ფედერაცია (ასდფ)",
    mission: "ყველა დონისა და ასაკის სპორტსმენების გაერთიანება, ფიზიკური განვითარების, საზოგადოების შექმნისა და ჯანსაღი, აქტიური ცხოვრების წესის პოპულარიზაციის შესაძლებლობების მიცემა. იყავით თქვენ გამოცდილი მორბენი თუ დამწყები, ასდფ ცდილობს გთავაზოთ საინტერესო ღონისძიებები, რომლებიც გიწვევთ და გაგაღვიძებთ.",
    description: "ასდფ არის წევრობაზე დაფუძნებული, არაკომერციული ორგანიზაცია, რომელიც ხელს უწყობს ნინძა სპორტს, დაბრკოლებების გარბენს (OCR), ტრეილის სირბილს და სათავგადასავლო გარბენებს აჭარის რეგიონში. OCR-ის ენთუზიასტებისა და პროფესიონალების მიერ დაარსებული, ჩვენი ფედერაცია ახლა აწყობს სხვადასხვა ღონისძიებას დაბრკოლებების გარბენებიდან მალაგურ ტრეილის გარბენებამდე და ტრადიციულ საგზაო გარბენებამდე.",
    goals: [
      "მთავარ მხარეებთან თანამშრომლობა საქართველოში დაბრკოლებების სპორტისა და სირბილის საზოგადოების გაერთიანებისთვის.",
      "სპორტსმენების საჭიროებების წარმოდგენა უსაფრთხო, ხელმისაწვდომი და სამართლიანი გარბენების ღონისძიებების ორგანიზებით, იქნება ეს საგზაო, ტრეილის თუ დაბრკოლებების გარბენი.",
      "ყველა ორგანიზაციის, ბრენდისა და პარტნიორის ჩათვლა, საზოგადოების ზრდის ხელშეწყობა.",
      "ღონისძიებების ორგანიზატორებთან მუშაობა ყველა შეჯიბრში მაქსიმალური უსაფრთხოების, ოპერაციული უმჯობესესობისა და სამართლიანობის უზრუნველსაყოფად.",
      "ეროვნული და საერთაშორისო ჩემპიონატების ჩატარება, საქართველოს ამაღლება სირბილისა და დაბრკოლებების სპორტის წამყვან დესტინაციად.",
      "ტრეილის სირბილის, საგზაო გარბენებისა და დაბრკოლებების სპორტის პოპულარიზაცია სკოლებსა და უნივერსიტეტებში მომავალი თაობის სპორტსმენების შთაგონებისთვის.",
      "სტრუქტურირებული სავარჯიშო პროგრამების, სერტიფიცირებული მწვრთნელებისა და ბანაკების მიცემა სპორტსმენების სრული პოტენციალის მიღწევაში დასახმარებლად.",
    ],
    team: [
      { title: "პრეზიდენტი", name: "არჩილ მანველიძე" },
      { title: "ვიცე-პრეზიდენტი", name: "დავით ზურაბაშვილი" },
      { title: "კაზნაჩეი", name: "სიმონ ბერიძე" },
      { title: "გენერალური მდივანი", name: "ოლგა ვახრუშევა" },
    ],
  }
};

const About = () => {
  const { t, currentLang } = useLanguage();
  const { name, mission, description, goals, team } = federationDetails[currentLang];

  return (
    <div className="about-container">
      <PageHeader 
        title={name}
        subtitle={t('aboutSubtitle')}
      />

      <div className="container">
        <section className="about-mission">
          <h2 className="section-title">{t('ourMission')}</h2>
          <p className="about-text">{mission}</p>
        </section>

        <section className="about-description">
          <h2 className="section-title">{t('aboutUs')}</h2>
          <p className="about-text">{description}</p>
        </section>

        <section className="about-goals">
          <h2 className="section-title">{t('ourGoals')}</h2>
          <ul className="goal-list">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </section>

        <section className="about-team">
          <h2 className="section-title">{t('ourTeam')}</h2>
          <ul className="team-list">
            {team.map((member, index) => (
              <li key={index}>
                <strong>{member.title}:</strong> {member.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About; 