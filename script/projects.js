const scriptProjects = [
  {
    title: "BackstopJS Test",
    year: "2020",
    identifier: "backstopjs-test-2020",
    tags: ["Node.js", "QA", "Regression Testing", "Headless Browser", "CLI", "AWS S3"],
    priority: 4,
    sourceUrl: "https://github.com/zhumingcheng697/BackstopJS-Test",
    descriptions: [
      'This is a Node.js script that automates <a target="_blank" rel="noreferrer" href="https://github.com/garris/BackstopJS">BackstopJS</a> (or, technically, <a target="_blank" rel="noreferrer" href="https://github.com/zhumingcheng697/Backstop-Playwright">Backstop-Playwright</a>) tests.',
      'It can read test configurations written in YAML, execute tests across Chromium, Firefox, and WebKit environments thanks to the cross-platform functionality of <a target="_blank" rel="noreferrer" href="https://github.com/microsoft/playwright">Playwright</a>, and extract information of failed tests and deploy a combined HTML report onto S3 buckets.',
      'It can test all cases in a configuration automatically one after another, or choose which case to test by using the index or name of the test case. Snapshot of the corresponding reference webpage will be automatically generated if it does not exist before running the test.',
      'This project is now being used to QA university websites in production. It is my first project at the NYU web team and my first time working with Node.js. I started working on it in fall 2020 and I continued to add new features and make improvement to it through summer 2021. The migration from BackstopJS (Puppeteer) to Backstop-Playwright (Playwright), which I was especially pround of, and the functionality to combine failed test reports and deploy reports to S3 were actually all added in updates I made after the initial release.'
    ]
  },
  {
    title: "NYU Dining Test",
    year: "2020",
    identifier: "nyu-dining-test-2020",
    tags: ["Node.js", "QA", "CLI", "AWS S3", "Email Automation"],
    priority: 2,
    sourceUrl: "https://github.com/zhumingcheng697/NYU-Dining-Test",
    descriptions: [
      'This is a Node.js script that monitors the integrity of NYU dining web services.',
      'It automatically fetches NYU dining location and menu data from S3 buckets, parses and validates it, and emails the users should errors occur, for example, if a dining location is present in one data source but is absent from the other data source, or if the menu for an open dining location is not found.',
      'It can be run using a command line interface to read user input through keyboards, but it can also run in the background automatically at an interval if configured.',
      'This is my second project at the NYU web team. The feature set didn&rsquo;t change much after the initial release, but I was able to improve the efficiency of the  algorithm a bit and allowed users to run the tests against the production website and an internal testing website besides the data sources on S3.'
    ]
  },
  {
    title: "NYU Housing Sublet Mailer",
    year: "2021",
    identifier: "nyu-housing-sublet-mailer-2021",
    tags: ["PHP", "AWS Lambda", "AWS API Gateway", "Email Automation"],
    priority: 2,
    sourceUrl: "https://github.com/zhumingcheng697/Housing-Group-Functions",
    descriptions: [
      'This is a PHP script that forwards sublet information submitted through Qualtrics forms to subscribers of the NYU Housing Sublet Mailing List.',
      'I created a <a target="_blank" rel="noreferrer" href="https://nyu.qualtrics.com/jfe/form/SV_9MIRtGsYEMjhdtj">Qualtrics form</a> to take in all the relevant information of a sublet, which, upon submission, will automatically make an API call to the AWS Lambda function I wrote using the information entered in the form.',
      'The script will generate an email message using the given sublet information, send that to the NYU Housing Sublet Google Group email address, and Google Group will automatically forward the message to all current subscribers of the mailing list who is looking for sublets.',
      'This is my third major project at the NYU web team and my first time working with PHP. I started working on it in winter 2020/2021. In spring 2021, I incorporated AWS Secret Manager to manage the email credentials instead of storing it in a local file per request from NYU IT, and it was soon published at <a target="_blank" rel="noreferrer" href="https://www.nyu.edu/faculty/faculty-housing/policies/sublet-offer-form.html">nyu.edu</a> for faculty to use.'
    ]
  }
];
