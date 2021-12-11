const appProjects = [
  {
    title: "Metro ARchive",
    year: "2020",
    identifier: "metro-archive-2020",
    tags: ["ARKit", "iOS", "Xcode", "TestFlight"],
    priority: 5,
    detailViewType: "video",
    sourceUrl: "https://github.com/zhumingcheng697/Metro-ARchive",
    deployUrl: "https://testflight.apple.com/join/PCuRPU3x",
    descriptions: [
      'Metro ARchive is an Augmented Reality app <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/s-levin">Sammy Levin</a> and I developed in the first half of 2020 in collaboration with the <a target="_blank" rel="noreferrer" href="https://rd.nytimes.com/projects/working-with-universities-to-experiment-with-spatial-computing">New York Times R&amp;D Team</a> and the <a target="_blank" rel="noreferrer" href="https://www.nycmedialab.org/recent-projects/the-new-york-times-spatial-computing-for-news-challenge">NYC Media Lab</a> to explore the application of spatial computing technologies in journalism.',
      'The app allows users to see how a historic street corner in NYC looked like a century ago, with an in-person on-site experience and an at-home table-top experience, both using Augmented Reality.',
      'We had not only 3D models of the buildings in the AR experience, but also articles, images, videos, and audio that tell the user the history of the street corner.',
      'It is my first time working with Augmented Reality or any types of 3D in a mobile app, and it&rsquo;s also my first time using the traditional View Controllers and View Delegates (as compared to SwiftUI) to build mobile iOS apps.',
      'During the development process, we ran into all sorts of issues such as unable to add textures to the 3D models, 3D models not being lit correctly in AR, assets glitching or floating around in the 3D space, distance between the device camera and real-world objects being calculated incorrectly, but we were able to fix all of these issues and ship a usable prototype, which was presented to executives from the New York Times and NYC Media Lab.',
      'We published Metro ARchive onto TestFlight so that people can test it out on their own iOS devices. If you are interested, be sure to go to our <a target="_blank" rel="noreferrer" href="https://bit.ly/metro-archive-info">website</a> and follow the <a target="_blank" rel="noreferrer" href="https://bit.ly/metro-archive">instructions</a> to install it onto your own device, or check out the GitHub repo to see how it works.'
    ]
  },
  {
    title: "GuessTheNumber",
    year: "2020",
    identifier: "guess-the-number-2020",
    tags: ["SwiftUI", "watchOS", "ClockKit", "Xcode", "App Store"],
    priority: 4,
    imageUrl: "guess-the-number-2020/hero.png",
    sourceUrl: "https://github.com/zhumingcheng697/GuessTheNumber",
    deployUrl: "https://apps.apple.com/app/id1513747066",
    descriptions: [
      'GuessTheNumber is a standalone watchOS app that allows the user to guess numbers with the &ldquo;AI&rdquo; in the app, or randomize a number, color, or boolean value.',
      'I developed it in summer 2020 to test out the capability of SwiftUI on the Watch and I took advantage of the latest technologies from Apple including SF Symbols, sound and haptic feedbacks, watchOS complications, and Siri watch face shortcuts.',
      'The core feature of the app was quite simple but I really put in the effort to improve all aspects of the user experience.',
      'Because I only have a 44mm Apple Watch, I ran the app on multiple simulators to make sure that the UI fits different display sizes nicely and the texts would not be truncated.',
      'As I was developing the app, a newer version of watchOS was also in beta, so I made sure that the app would work with both the new and older operating systems perfectly.',
      'I also localized the app for English, Simplified Chinese, Traditional Chinese, Japanese, and Russian.'
    ]
  }
];
