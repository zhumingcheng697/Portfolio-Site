const webProjects = [
  {
    title: "Toolbox",
    year: "2019",
    identifier: "toolbox-2019",
    tags: ["p5.js", "CSS", "DOM", "API", "JSON", "Regex", "Geolocation"],
    priority: 3,
    bgImg: "toolbox-2019/image.png",
    detailViewType: "iframe",
    iframeUrl: "https://www.openprocessing.org/sketch/794151/",
    descriptions: [
      'The Toolbox is my final project for my <i>Creative Coding</i> class and I built it using JavaScript and p5.js only.',
      'It allows users to search for weather forecast using city name, zip code, or their current location, or generate multifunctional QR codes to send SMS or emails.',
      'I used the OpenWeatherMap RESTful API to access the weather forecast, a QR code library to generate QR codes locally, and regular expressions to validate the country code or coordinate data users have typed in.',
      'I localized it for English, Russian, and Japanese, optimized it for light mode and dark mode, and made it accessible using keyboard only.'
    ]
  },
  {
    title: "COVID | Headline",
    year: "2020",
    identifier: "covid-headline-2020",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "REST API"],
    priority: 4.5,
    bgImg: "covid-headline-2020/image.png",
    detailViewType: "iframe",
    iframeUrl: "https://zhumingcheng697.github.io/dynamic-web-midterm/",
    sourceUrl: "https://github.com/zhumingcheng697/dynamic-web-midterm",
    descriptions: [
      'COVID | Headline is the midterm project for my <i>Dynamic Web Applications</i> class that I built using React.',
      'The website displays the current COVID-19 statistics along side the top news headlines in a given country or region using two RESTful APIS.',
      'It will display the statistics and headlines in the estimated user location based on their IP address if they don&rsquo;t specify a location, or if no useful data can be found for the location they specified.',
      'It automatically loads more headlines when users scroll to the end of the page and automatically refreshes the COVID-19 statistics every 15 minutes in the background.',
      'I also optimized the website for devices with screen insets (also known as notches) and included support for light mode and dark mode.',
      'Unfortunately, the headline API currently does not work on publicly deployed sites due to plan restrictions. Feel free to clone my <a target="_blank" href="https://github.com/zhumingcheng697/dynamic-web-midterm">GitHub repo</a> and run it locally on your device to try out the full experience!'
    ]
  },
  {
    title: "Rate My Classes",
    year: "2020",
    identifier: "rate-my-classes-2020",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "React.js", "Express.js", "REST API", "Web Scraping", "Firebase"],
    priority: 5,
    bgImg: "rate-my-classes-2020/image.png",
    detailViewType: "iframe",
    iframeUrl: "https://rate-my-classes.netlify.app/",
    sourceUrl: "https://github.com/zhumingcheng697/dynamic-web-final",
    descriptions: [
      'Rate My Classes is the <a target="_blank" href="https://github.com/zhumingcheng697/dynamic-web-final">final project</a> for my <i>Dynamic Web Applications</i> class that I built using Firebase, Express, React, and Node.js.',
      'The website allows students to post and review class information and ratings.',
      'It includes accounts and password authentication functionalities to allow users to keep track of all their reviews in one place and users can edit or remove their previous reviews with ease.',
      'The puppeteer headless browser is also used in the <a target="_blank" href="https://stark-basin-35300.herokuapp.com/">back end</a> as a web scraper to obtain details of the classes such as department information, offered schedule, descriptions, and number of credits.'
    ]
  },
  {
    title: "OurScheduler",
    year: "2021",
    identifier: "our-scheduler-2021",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Vue.js", "Express.js", "D3.js", "REST API", "Web Scraping", "MongoDB"],
    priority: 5,
    bgImg: "our-scheduler-2021/image.png",
    detailViewType: "iframe",
    iframeUrl: "https://ourscheduler.netlify.app/",
    sourceUrl: "https://github.com/zhumingcheng697/OurScheduler",
    descriptions: [
      'OurScheduler is a powerful course scheduler for all college students built during <a target="_blank" href="https://pennapps-xxii.devpost.com">PennApps XXII</a> and was awarded the Best Education Hack and ranked Top 9.',
      'It allows college students across universities to choose a large amount of classes they are considering taking, lock some classes as &ldquo;must haves&rdquo;, choose the total number of credits and/or classes they want to take, and let the algorithm automatically generate multiple schedules for them that fit their needs.',
      'Different from traditional schedulers that force users to input the hours of the classes they want to take by hand or manually remove a class to add another a class that has a conflicting schedule, OurScheduler does everything automatically.',
      'Our website is built using MongoDB, Express, Vue, and Node.js. The puppeteer headless browser is also used as a web scraper to obtain the schedule of the courses, and the generated schedule is visualized using D3.js on the front end.',
      'Some of the technologies such as MongoDB or D3.js was pretty new to us so it took us some time to make everything working, but we were able to finish the project before the deadline.',
      'After the hackathon was over, I still continued to work on this project. I added support for dark mode, improved the efficiency and reliability of the schedule generation algorithm by up to 5 times, redesigned the generated schedules, and allowed users to switch through different versions of a schedule.'
    ]
  }
];
