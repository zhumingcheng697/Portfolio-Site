const appProjects = [
  {
    title: "Metro ARchive",
    year: "2020",
    identifier: "metro-archive-2020",
    tags: ["ARKit", "iOS", "Xcode", "TestFlight"],
    priority: 5,
    bgImg: "metro-archive-2020/image.png",
    detailViewType: "video",
    videoUrl: "metro-archive-2020/video.mp4",
    descriptions: [
      'Metro ARchive is an Augmented Reality app Sammy and I developed in the first half of 2020 in collaboration with the <a target="_blank" href="https://rd.nytimes.com/projects/working-with-universities-to-experiment-with-spatial-computing">New York Times R&amp;D Team</a> and the <a target="_blank" href="https://www.nycmedialab.org/recent-projects/the-new-york-times-spatial-computing-for-news-challenge">NYC Media Lab</a>.',
      'It is my first time working with Augmented Reality or any types of 3D in a mobile app, and it&rsquo;s also my first time using the traditional View Controllers and View Delegates (as compared to SwiftUI) to build mobile iOS apps.',
      'We even enrolled into the paid Apple Developer Program, just so that we can publish it onto <a target="_blank" href="https://testflight.apple.com/join/PCuRPU3x">TestFlight</a> and let people can test it out on their iOS devices.',
      'If you are interested, be sure to go to our <a target="_blank" href="https://bit.ly/metro-archive-info">website</a> and follow the <a target="_blank" href="https://bit.ly/metro-archive">instructions</a> to install it onto your own device, or check out the <a target="_blank" href="https://github.com/zhumingcheng697/Metro-ARchive">GitHub repo</a> to see how it works.'
    ]
  },
  {
    title: "GuessTheNumber",
    year: "2020",
    identifier: "guess-the-number-2020",
    tags: ["SwiftUI", "watchOS", "ClockKit", "Xcode", "App Store"],
    priority: 4,
    bgImg: "guess-the-number-2020/image.png",
    detailViewType: "image",
    imageUrl: "guess-the-number-2020/hero.png",
    descriptions: [
      'GuessTheNumber is a currently standalone watchOS app that allows the user to guess numbers with the &ldquo;AI&rdquo; in the app, or randomize a number, color, or boolean value.',
      'The app takes advantage of the latest technologies including SwiftUI, SF Symbols, haptic feedbacks, watchOS complications, and Siri watch face shortcut donation.',
      'GuessTheNumber has also been localized for English, Simplified Chinese, Traditional Chinese, Japanese, and Russian.',
      'It is available for download on the <a target="_blank" href="https://apps.apple.com/app/id1513747066">App Store</a> and the source code is available on <a target="_blank" href="https://github.com/zhumingcheng697/GuessTheNumber">GitHub</a> as well.'
    ]
  },
  {
    title: "Courses",
    year: "2019",
    identifier: "courses-2019",
    tags: ["SwiftUI", "iOS", "Xcode"],
    bgImg: "courses-2019/image.png",
    detailViewType: "video",
    videoUrl: "courses-2019/video.mp4",
    descriptions: [
      'Courses App is a simple iOS app I developed last year that can store and display the detailed information of all the courses a student is currently taking or plans to take in the future.',
      'It is build with <a target="_blank" href="https://developer.apple.com/xcode/swiftui/">SwiftUI</a>, a new framework Apple announced last June at WWDC 2019 that can help developers build apps much faster and easier for all Apple platforms including iOS, macOS and watchOS.',
      'I self learnt SwiftUI during the two-week <i>Creative Output</i> project of the Ideation and Prototyping class I took last semester and built this app from the ground up.',
      'For every single day during the two week, I wrote some code, looked up some references online, wrote some reflection, and post the <a target="_blank" href="https://github.com/zhumingcheng697/Process-Site/tree/master/Creative%20Output">code</a> and <a target="_blank" href="https://github.com/zhumingcheng697/Process-Site/wiki#creative-output">reflection</a> onto my <a target="_blank" href="https://github.com/zhumingcheng697/Process-Site/tree/master/Creative%20Output/%E2%80%9CCourses%E2%80%9D">GitHub repo</a>.',
      'I was very satisfied with what I had learned and achieved in such a short period of time and was really proud of myself.',
      'As a side note, there was a weird bug in SwiftUI itself that would crash the app when displaying certain UI elements on iPads, and it was something that can&rsquo;t really be fixed on my side, so I completely disabled this app for iPads then. However, as I tried to load the app onto my iPad today, the bug is now gone and only when I searched up online did I realize that Apple has fixed it in <a target="_blank" href="https://developer.apple.com/documentation/ios_ipados_release_notes/ios_ipados_13_4_release_notes">iOS 13.4</a> just around a month ago. It defintely took them way longer than I expected to fix this issue, but fortunately it&rsquo;s resolved now and I can finally push a newer version to my repo after no updates for more than 6 months.'
    ]
  }
];
