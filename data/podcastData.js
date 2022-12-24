const podcastData = [
  {
    title: 'The Sickle Cell Podcast',
    description: `Talking about all things sickle cell related, sharing warrior experiences and providing sickle cell related education.`,
    imgSrc: 'sicklecellpodcast.png',
    href: 'https://open.spotify.com/show/7EYWqOW5I1ga5eL3N7rpnN?si=52bb86c9a4ae4aea',
  },
  {
    title: 'Cheat Codes: A Sickle Cell Podcast',
    description: `Cheat Codes: A Sickle Cell Podcast, is led by expert hosts Dr. Ahmar Zaidi and Dr. Mike Callaghan from the Comprehensive Sickle Cell Center at the Children's Hospital of Michigan, and produced by BloodStream Media. Each episode of Cheat Codes: A Sickle Cell Podcast brings listeners a series of segments packed with critical education and research information that patients and families need to know, as well as updates and clarifications from the social media "buzz" around sickle cell.`,
    imgSrc: 'cheatcodespodcast.png',
    href: 'https://open.spotify.com/show/5yDVg1vmwn4Wfvt2BYNYxK',
  },
  {
    title: 'All The Things ADHD',
    description: `ALL THE THINGS ADHD is a podcast started by Lee Skallerup Bessette and Aimée Morrison because they wanted to created a resource for professional women who have been diagnosed later in life with ADHD (like them) and the people who love them and are seeking to better understand them (us). The podcast will address the stereotypes, stigmas, societal pressures, and systemic forces that shape the narrative around ADHD, as well as practical tips and advice for getting along with ADHD.`,
    imgSrc: 'allthethingsadhd.png',
    href: 'https://open.spotify.com/show/3SSy7GjXMoKtQmYPJ6lIFo',
  },
  {
    title: 'ADHD Podcasts',
    description: `CHADD’s podcasts—ADHD 365 and All Things ADHD—address a variety of topics for anyone dealing with ADHD. Listen for interventions, strategies, and tips for parents, teens, adults, educators, and professionals.`,
    imgSrc: 'adhdpodcasts.png',
    href: 'https://podcasts.apple.com/us/podcast/adhd-podcasts/id1149072856',
  },
  {
    title: 'Diagnosis Glaucoma',
    description: `Diagnosis Glaucoma is a podcast for people with glaucoma, or for anyone simply interested in learning more about the eye condition. The hosts, Dr. Mona Kaleem and Dr. Harry Quigley, are both experts in glaucoma who work together at the Wilmer Eye Institute at Johns Hopkins University, which is among the leading eye hospitals in the world.`,
    imgSrc: 'diagnosisglaucoma.png',
    href: 'https://open.spotify.com/show/2XHPAdxu3C87GUlC6XhaEy?si=hQTf94VcSOy4obk4tbI9Ug',
  },
  {
    title: 'Sarcoma Sisters',
    description: `This podcast provides information on sarcoma for people with sarcoma and their loved ones. Dr. Lisa Kopp is a board-certified pediatric oncologist. She is a Medical Director at Day One Biopharmaceuticals and is an Adjunct Associate Professor at the University of Arizona in Tucson, Arizona. Dr. Wendy Allen-Rhoades is a board-certified pediatric oncologist. She is a Senior Associate Consultant at Mayo Clinic in Rochester, Minnesota.`,
    imgSrc: 'sarcomasisters.png',
    href: 'https://open.spotify.com/show/22wSvUszIbw3pAwhANL0VL',
  },
  {
    title: 'Sarcoma Insight Podcast',
    description: `Sarcomas are rare cancers that affect bone and soft tissue. Due to their rarity, a diagnosis of sarcoma can be difficult to navigate and the impact on individuals and families are far reaching. The goal of this podcast is to improve sarcoma education for patients, friends, families and trainees. Our goal is to shed light on the diagnostic workup, treatment and follow up process for patients diagnosed with sarcoma or other tumors of bone and soft tissue treated by orthopedic oncologists.`,
    imgSrc: 'sarcomainsight.png',
    href: 'https://open.spotify.com/show/1SxDvvDROXRdKvRnMuxd4L',
  },
  {
    title: 'Inside Schizophrenia',
    description: `Inside Schizophrenia is a long-form monthly podcast providing a unique perspective on life through the lens of people living with schizophrenia and psychosis. New episodes are published the third Wednesday of every month on your favorite podcast player. Each episode includes a conversation between cohosts Rachel Star Withers and Gabe Howard and an interview featuring someone with lived experience, a family member or caregiver, a first responder, or an expert to help us understand schizophrenia in a more meaningful way.`,
    imgSrc: 'insideschizophrenia.png',
    href: 'https://open.spotify.com/show/3qnxXtGNPpyRIRJCcouYFL',
  },
  {
    title: 'Breastcancer.org Podcast',
    description: `Breastcancer.org is a nonprofit organization dedicated to providing the most reliable, complete, and up-to-date information about breast cancer. Our mission is to help women and their loved ones make sense of the complex medical and personal information about breast cancer, so they can make the best decisions for their lives. Breastcancer.org podcasts offer unique insights on prevention, treatment, research, and other breast cancer topics from our medical experts and invited guests.`,
    imgSrc: 'breastcancerorg.png',
    href: 'https://open.spotify.com/show/1ZfvbbIIQsOISALlQl9Suo',
  },
  {
    title: 'Investigating Breast Cancer',
    description: `Investigating Breast Cancer, the official podcast of the Breast Cancer Research Foundation, examines the latest in breast cancer news with the most respected minds in science. The series contains insightful conversations with BCRF's scientific leadership and features experts that are taking part in groundbreaking science every day. As the only organization dedicated exclusively to breast cancer research, BCRF’s podcast reflects a multitude of hot topics, examining the promise of scientific discovery.`,
    imgSrc: 'investigatingbreastcancer.png',
    href: 'https://open.spotify.com/show/0Dtr8lJ8UwYZfmOtHXTx1k',
  },
  {
    title: `Alzheimer's Speaks`,
    description: `Alzheimer’s Speaks Radio is about "Sound Information, Not Sound Bites." We are true talk radio with a mission to raise all voices around the world - big and small. From, a person diagnosed with a form of dementia or MCI, to family and friends, care partners, authors, researchers, support services, education, entertainment, advocacy work, to technology platforms, devices and support; all voices are welcome to have an interesting and respectful conversation with our host Lori La Bey.`,
    imgSrc: 'alzheimerspeaks.png',
    href: 'https://podcasts.apple.com/us/podcast/alzheimers-speaks/id986940432',
  },
  {
    title: `Living With Alzheimer's`,
    description: `Living With Alzheimer’s is a podcast about living with dementia from the perspective of Ginger, an octogenarian with early-stage Alzheimer’s, and Christoph, her son and full-time caregiver. Their conversations with each other and with a variety of subject matter experts provide listeners with heartfelt stories of Ginger’s journey as well as best practices for other caregivers who are providing support for friends or family members living with the impacts of dementia.`,
    imgSrc: 'livingwithalzheimers.png',
    href: 'https://open.spotify.com/show/1kfO1uEQwE5Bpjcg1RY5fl',
  },
  {
    title: 'Autism By Autistics',
    description: `Join Melissa and Sophie as they discuss various topics surrounding autism from personal viewpoints, own experience, the autistic community and academic research.`,
    imgSrc: 'autismbyautistics.png',
    href: 'https://open.spotify.com/show/4414S7q4HnIFNdyHvqoMk4',
  },
  {
    title: 'The Autistic Life',
    description: `Tales of an Autistic/ADHD human living in a neurotypical world. Discussing mental health, self-acceptance and all things Neurodivergent life. Music: “Theme 27, Version 2” by Joe Kuta published by Jos. M. Kuta Music Publishing, BMI.`,
    imgSrc: 'theautisticlife.png',
    href: 'https://open.spotify.com/show/5qegW7xnjYXWHrve2yBQgn',
  },
  {
    title: 'I Lost My Person',
    description: `Join your hosts Alison and Dave, who both lost their spouses to ALS (Lou Gehrig's Disease). Follow them on their journey as widows, as they juggle family responsibilities and chase joy. #endals`,
    imgSrc: 'ilostmyperson.png',
    href: 'https://open.spotify.com/show/2vQ8NQuLn5GCZ4daJMvXYF',
  },
  {
    title: 'The Dottore Chronicles',
    description: `Musings, wonderings, and expressions from one Dr. Emil Ahangarzadeh. Includes a heavy dose of discussion regarding ALS (aka MND, Lou Gehrig's Disease) and updates on how Olga Ahangarzadeh (his wife who has been stricken with the disease) is handling its progression.`,
    imgSrc: 'dottorechronicles.png',
    href: 'https://open.spotify.com/show/0Hy43vXKw3zs1QuZfPkPIf',
  },
  {
    title: 'Cardiovascular Conversations',
    description: `Join the experts from Allina Health Minneapolis Heart Institute as they discuss current topics, treatments, and procedures in Cardiology, Vascular Surgery, and Cardiothoracic Surgery.`,
    imgSrc: 'cardiovascularconversations.png',
    href: 'https://podcasts.apple.com/us/podcast/cardiovascular-conversations-with-minneapolis-heart/id1548851200',
  },
  {
    title: 'The Healthy Heart Show',
    description: `On The Healthy Heart Show, you will get access to a diverse group of pioneers in the holistic health industry who are educating the masses on how to prevent and reverse disease naturally. Our hosts and guests will share the latest information in nutrition, lifestyle, mental wellness, advanced testing, and evidence-based supplements all in an effort to support the 100 Year Heart.`,
    imgSrc: 'healthyheartshow.png',
    href: 'https://open.spotify.com/show/1iwS11RGiE4iND0tX1zcsJ',
  },
  {
    title: 'RealTalk MS',
    description: `Jon Strum cuts through all the jargon and breaks down the latest multiple sclerosis news. You’ll meet the scientists who are creating tomorrow’s MS treatments today. You’ll hear from the experts discussing how the latest tweaks and changes to our healthcare laws will impact your MS treatment. And we’ll be talking to the courageous MS warriors who are out there advocating on behalf of the MS community every day, as well as the men and women who are committed to living their best lives with MS and living their best lives as MS caregivers.`,
    imgSrc: 'realtalkms.png',
    href: 'https://podcasts.apple.com/us/podcast/realtalk-ms/id1288782723?uo=4',
  },
  {
    title: 'Breaking It Down– A Multiple Sclerosis Podcast',
    description: `Breaking it down - A multiple sclerosis podcast by the MS Trust brings together a range of voices from the MS community to cover all aspects of life with multiple sclerosis. Featuring a combination of expert advice and real life experiences from people with MS, episodes provide an in-depth insight into the impact MS symptoms can have and how they can be most successfully managed.`,
    imgSrc: 'breakingdownms.png',
    href: 'https://open.spotify.com/show/086r60efGPGX0l18heeXQs',
  },
  {
    title: 'Inside HIV',
    description: `Discover how resilience triumphs the greatest of challenges as we delve into the latest medical and scientific developments, harness the collective energy of communities and encourage wellbeing through the lived experience of HIV-positive people in Australia and beyond.`,
    imgSrc: 'insidehiv.png',
    href: 'https://open.spotify.com/show/18PflWUZNdzw8CLutcsxEh',
  },
  {
    title: 'HIV, Hope & Charity',
    description: `HIV, Hope & Charity is a podcast series brought to you by TVPS, a sexual health charity supporting people affected by HIV. This podcast aims to get as many people as possible HIV educated by exploring the real story behind HIV historical events and celebrating HIV Heroes. Have a listen and get yourself a little more HIV educated!`,
    imgSrc: 'hivhopecharity.png',
    href: 'https://open.spotify.com/show/16VnZqjwrBFG4nB96Ra58s',
  },
  {
    title: 'The Psoriasis Geek Podcast',
    description: `Find your best treatment for Psoriasis. We talk about the things no one else does (but really should) - with a focus on Nutrition, Stress Management, Mental Health, Education, Community, and Inspirational Stories.`,
    imgSrc: 'psoriasisgeek.png',
    href: 'https://podcasts.apple.com/us/podcast/the-psoriasis-geek-podcast/id1411444847',
  },
  {
    title: 'Medscape InDiscussion: Psoriasis',
    description: `Join dermatologist Dr Steven Feldman as he and expert guests examine a wide range of best practices for individuals with psoriasis and provide salient clinical takeaways for listeners. Episode topics include quality of life, topical treatment, phototherapy, systemic therapy and more.`,
    imgSrc: 'medscapepsoriasis.png',
    href: 'https://podcasts.apple.com/us/podcast/medscape-indiscussion-psoriasis/id1617844704',
  },
  {
    title: 'Those Girls With Arthritis',
    description: `Just your basic 20 something year olds navigating life with chronic illnesses. Join warriors, Bri & Beka, every Tuesday morning as they discuss life with a chronic illness, share their personal stories, and chat with other warriors.`,
    imgSrc: 'thosegirlswitharthritis.png',
    href: 'https://open.spotify.com/show/2X56S46NXQ781x2hddnF2Z?si=53IsXQ38SR6pcubw_0blaA&nd=1',
  },
  {
    title: 'Arthritis Life',
    description: `Arthritis life features real patient stories, expert advice, life hacks and more to help you feel more empowered and less alone. Host Cheryl Crow shares her insights from both as a rheumatoid arthritis patient for seventeen years and as an occupational therapist, a health profession that focuses on empowering people with health challenges to function in their daily lives.`,
    imgSrc: 'arthritislife.png',
    href: 'https://podcasts.apple.com/us/podcast/arthritis-life/id1519637317',
  },
  {
    title: 'The Stomping on Cerebral Palsy Radio Show with DJ Ty',
    description: `The stomping on Cerebral Palsy Radio Show with DJ Ty aims to bring awareness to Cerebral Palsy alongside educating the community on what it's like to live with such a condition. Bringing awareness to Cerebral Palsy 365 days a year..`,
    imgSrc: 'socp.png',
    href: 'https://podcasts.apple.com/us/podcast/the-stomping-on-cerebral-palsy-radio-show-with-dj-ty/id1596603356',
  },
  {
    title: 'Let’s Talk CP',
    description: `The Cerebral Palsy Foundation is connecting the Cerebral Palsy community one podcast at a time with “Let’s Talk CP” The new podcast series bringing you education, conversation, support and much more on a variety of topics. Join Jason Benetti, White Sox and ESPN sports announcer, and friends, as we get real with families, clinicians and researchers asking the questions you want to know about your CP journey.`,
    imgSrc: 'letstalkcp.png',
    href: 'https://podcasts.apple.com/us/podcast/lets-talk-cp/id1526711465',
  },
  {
    title: 'Gastrointestinal Cancer Update',
    description: `This series bridges the gap between research and patient care by providing medical oncologists and hematologists with ongoing access to the perspectives and opinions of national and international clinical investigators with expertise in gastrointestinal cancers.`,
    imgSrc: 'gcu.png',
    href: 'https://podcasts.apple.com/us/podcast/gastrointestinal-cancer-update/id160270314',
  },
  {
    title: 'Gastric Cancer CancerCare Connect Education Workshops',
    description: `CancerCare's free Connect Education Workshops are a way for people to learn about cancer-related issues from the convenience of their home or office. Leading experts in oncology provide the most up-to-date information in these workshops to help you and your loved ones better understand and cope with your cancer diagnosis, treatment options, quality-of-life concerns, treatment side effects, pain management, doctor-patient communication and other important topics.`,
    imgSrc: 'ccgc.png',
    href: 'https://podcasts.apple.com/us/podcast/gastric-cancer-cancercare-connect-education-workshops/id1463358045',
  },
]

export default podcastData
