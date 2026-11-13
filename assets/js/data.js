/* ==========================================================================
   MALTO — site data
   Edit this file to update members, challenges and events.
   - photo:  put an image in assets/img/members/ and write its path here,
             e.g. "assets/img/members/evren-ayberk-munis.jpg". Empty = initials.
   - github: add the repository URL to show a "Code" button on a challenge.
   ========================================================================== */

window.MALTO = {

  /* ---------------- Headline numbers (home page) ---------------- */
  stats: [
    /* "auto-…" values are counted from the lists below, so they update themselves */
    { value: "auto-challenges", suffix: "", label: "International challenges" },
    { value: "auto-podiums",    suffix: "", label: "Podium finishes" },
    { value: "auto-papers",     suffix: "", label: "Papers published" },
    { value: 41,  suffix: "",  label: "Student members" },
    /* counted automatically from the events list below:
       "auto-events"      = MALTALKS + workshops already held
       "auto-conferences" = conferences attended */
    { value: "auto-events",      suffix: "", label: "Events organised" },
    { value: "auto-conferences", suffix: "", label: "Conferences attended" }
  ],

  /* ---------------- Challenges & publications ---------------- */
  challenges: [
    {
      id: "c09",
      short: "Neural Debris Removal",
      name: "Neural Debris Removal in Streak Detection Models",
      venue: "Kaggle challenge",
      venueUrl: "https://www.kaggle.com/competitions/neural-debris-removal-in-streak-detection-models",
      year: 2026, date: "2026-07",
      result: "1st place",
      resultDetail: "1st on both public and private leaderboards, among ~570 participants",
      podium: 1,
      brief: "The objective of the competition was to remove poisoned behaviour from a RetinaNet model designed to detect streak-like space debris.",
      solution: "We created synthetic data by drawing clean streaks on permitted backgrounds to remove poisoned behaviour while preserving genuine detections. We then combined independently cleaned models using consensus, stability checks and physics-inspired detectors, with a final restoration step to recover overly suppressed detections.",
      paper: null,
      paperUrl: "",
      github: "",
      source: "https://www.linkedin.com/posts/maltoo_neural-debris-removal-in-streak-detection-activity-7488913676440068096-hkr-",
      team: ["Gianbattista Busonera"],
      advisors: ["Flavio Giobergia (advisor)", "Claudio Savelli (method support)"]
    },
    {
      id: "c08",
      short: "OmniRNA · ECML PKDD 2026",
      name: "OmniRNA Discovery Challenge — ECML PKDD 2026",
      venue: "ECML PKDD 2026 · Naples",
      year: 2026, date: "2026-07",
      result: "1st place",
      resultDetail: "1st among 28 teams — solution presented at ECML PKDD 2026 in Naples",
      podium: 1,
      brief: "OmniRNA is a comprehensive benchmark evaluating RNA foundation models across four areas: biological function, variant effects, 2D and 3D structure, and evolutionary relationships.",
      solution: "We combined RNA language model embeddings with sequence features and machine learning methods for m6A prediction and ncRNA classification, used pre-trained models and mutation-aware priors for zero-shot fitness scoring, and developed covariation and quartet-classification methods for evolutionary reasoning.",
      paper: null,
      paperUrl: "",
      github: "https://github.com/MAL-TO/omnirna",
      source: "https://www.linkedin.com/posts/maltoo_omnirna-challenge-activity-7473286981536407552-y4mD",
      team: ["Emir Faruk Erman", "Hüseyin Arda Arslan", "Kutay Zilcioğlu", "Taha Atabay Cetin", "Murat Beşli"],
      advisors: ["Claudio Savelli (advisor)", "Flavio Giobergia (advisor)"]
    },
    {
      id: "c07",
      short: "Machine-Generated Code · SemEval 2026",
      name: "SemEval 2026 Task 13 — Detecting Machine-Generated Code",
      venue: "SemEval 2026",
      year: 2026, date: "2026-07",
      result: "Top 10",
      resultDetail: "Subtask C: 10th · Subtask B: 11th — among ~35 teams",
      podium: 0,
      brief: "The challenge focused on identifying the origin of code: distinguishing human-written, AI-generated, hybrid and adversarial code, and tracing AI-generated code to its source model family.",
      solution: "We combined UniXcoder and CodeT5 in a soft-voting ensemble, using Tree-sitter-based code normalisation, data augmentation to address class imbalance, and three-phase curriculum training with hard negative mining.",
      paper: "MALTO at SemEval-2026 Task 13: Detecting Human, AI, and Hybrid Code via Hard Negative Mining and Curriculum-Driven Ensembles",
      paperUrl: "https://aclanthology.org/2026.semeval-1.304/",
      github: "https://github.com/MAL-TO/machine-generated-code",
      source: "https://www.linkedin.com/posts/maltoo_semeval-2026-task13-subtask-c-activity-7472993348631392256-ThcM",
      team: ["Hüseyin Arda Arslan", "Evren Ayberk Munis", "Timofei Khudonogov", "Mert Akgün", "Murat Beşli", "Ayhan Meherrem"],
      advisors: ["Claudio Savelli (advisor)", "Flavio Giobergia (advisor)"]
    },
    {
      id: "c06",
      short: "FadeIT · EVALITA 2026",
      name: "EVALITA 2026 — FadeIT: Fallacy Detection in Italian Social Media",
      venue: "EVALITA 2026 · Bari",
      year: 2026, date: "2026-02",
      result: "2nd place",
      resultDetail: "2nd place — presented at the EVALITA conference in Bari",
      podium: 2,
      brief: "FADEIT focuses on detecting and classifying logical fallacies in Italian social media posts about migration, climate change and public health.",
      solution: "We developed a classifier based on an Italian encoder, combined with multiple pooling strategies, to classify logical fallacies in Italian tweets.",
      paper: "MALTO at FadeIT: A BERT-Based System for Multi-Label Fallacy Detection in Italian Social Media",
      paperUrl: "https://aclanthology.org/2026.evalita-1.64/",
      github: "https://github.com/MAL-TO/FADEIT-2026",
      source: "https://www.linkedin.com/posts/maltoo_evalita-fadeit-second-place-activity-7408794480608186368-Elh9",
      team: ["Matin Salami", "Luca M. Rodia", "Vladimir Schiau", "Evren Ayberk Munis"],
      advisors: ["Claudio Savelli (advisor)", "Flavio Giobergia (advisor)"]
    },
    {
      id: "c05",
      short: "SVELA · EVALITA 2026",
      name: "EVALITA 2026 — SVELA: Selective Verification of Erasure from LLM Answers",
      venue: "EVALITA 2026 · Bari",
      year: 2026, date: "2026-02",
      result: "2nd place",
      resultDetail: "2nd place — presented at the EVALITA conference in Bari",
      podium: 2,
      brief: "When a language model is asked to 'forget' data, how do we verify that it really did? SVELA evaluates whether specific information has been erased from LLM answers.",
      solution: "A specific-attention-head approach for membership inference attacks, used to evaluate LLM unlearning.",
      paper: "MALTO at SVELA: A Specific-Attention-Head Approach for Membership Inference Attacks in LLMs Unlearning Evaluation",
      paperUrl: "https://aclanthology.org/2026.evalita-1.45/",
      github: "https://github.com/MAL-TO/SVELA",
      source: "",
      team: ["Evren Ayberk Munis", "Mattia Sabato", "Erfan Bayat", "Andrea Lolli"],
      advisors: []
    },
    {
      id: "c04",
      short: "Unlearning · SemEval 2025",
      name: "SemEval 2025 Task 4 — Unlearning Sensitive Content from LLMs",
      venue: "SemEval 2025",
      year: 2025,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "Large language models can memorise sensitive data. The task: make a trained model forget a specific set of documents while keeping its general abilities intact.",
      solution: "Dual Teachers — a distillation-based approach that uses two teacher models to unlearn sensitive content.",
      paper: "MALTO at SemEval-2025 Task 4: Dual Teachers for Unlearning Sensitive Content in LLMs",
      paperUrl: "https://aclanthology.org/2025.semeval-1.229/",
      github: "https://github.com/MAL-TO/Unlearning-sensitive-content-from-LLMs",
      source: "",
      team: ["Evren Ayberk Munis", "Erfan Bayat", "Andrea Grieco"],
      advisors: ["Claudio Savelli (advisor)", "Flavio Giobergia (advisor)"]
    },
    {
      id: "c03",
      short: "Mu-SHROOM · SemEval 2025",
      name: "SemEval 2025 Task 3 — Mu-SHROOM: Multilingual Hallucination Detection",
      venue: "SemEval 2025",
      year: 2025,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "LLMs hallucinate in every language. Mu-SHROOM asks systems to locate the exact spans of hallucinated content in LLM outputs across many languages.",
      solution: "Detecting hallucinations via uncertainty quantification, with validation by a larger model.",
      paper: "MALTO at SemEval-2025 Task 3: Detecting Hallucinations in LLMs via Uncertainty Quantification and Larger Model Validation",
      paperUrl: "https://aclanthology.org/2025.semeval-1.175/",
      github: "https://github.com/MAL-TO/Mu-SHROOM",
      source: "",
      team: ["Claudio Savelli", "Alkis Koudounas"],
      advisors: ["Flavio Giobergia (advisor)"]
    },
    {
      id: "c02",
      short: "Volvo Discovery · ECML PKDD 2024",
      name: "Volvo Discovery Challenge — ECML PKDD 2024",
      venue: "ECML PKDD 2024",
      year: 2024,
      result: "3rd place",
      resultDetail: "3rd place — results reported in the official challenge overview paper",
      podium: 3,
      brief: "Volvo Discovery Challenge at ECML PKDD 2024 focused on predicting truck component failure risk from sensor data, classifying it as Low, Medium or High. Models had to generalise to a new component generation using training data from the previous generation only.",
      solution: "We combined temporal features, including first derivatives and wavelet transforms, with two Time-Transformer models. The first identified healthy and unhealthy sequences; the second predicted when unhealthy sequences transitioned from Medium to High risk, ensuring a consistent progression towards failure.",
      paper: "Volvo Discovery Challenge at ECML-PKDD 2024 (challenge overview)",
      paperIsOverview: true,   /* organisers' report, not counted as a MALTO paper */
      paperUrl: "https://arxiv.org/abs/2409.11446",
      github: "https://github.com/MAL-TO/Volvo-Discovery-Challenge-ECML-PKDD-2024",
      source: "https://www.linkedin.com/posts/claudiosav_ecmlpkdd2024-activity-7259914018880954369-OU-N",
      team: ["Claudio Savelli", "Florentin Udrea", "Giacomo Rosso", "Roberta Raineri", "Andrea Panuccio", "Alkis Koudounas"],
      advisors: ["Flavio Giobergia (advisor)"]
    },
    {
      id: "c01",
      short: "SHROOM · SemEval 2024",
      name: "SemEval 2024 Task 6 — SHROOM: Hallucination Detection",
      venue: "SemEval 2024",
      year: 2024,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "SHROOM — a shared task on hallucinations and related observable overgeneration mistakes: decide whether an LLM output is fluent but factually unsupported.",
      solution: "Leveraging synthetic data to train an LLM hallucination detector.",
      paper: "MALTO at SemEval-2024 Task 6: Leveraging Synthetic Data for LLM Hallucination Detection",
      paperUrl: "https://aclanthology.org/2024.semeval-1.240/",
      github: "https://github.com/MAL-TO/shroom",
      source: "",
      team: ["Federico Borra", "Claudio Savelli", "Giacomo Rosso", "Alkis Koudounas"],
      advisors: ["Flavio Giobergia (advisor)"]
    },
    {
      id: "c10",
      short: "Mosquitoes · ACM MM 2022",
      name: "How Much Attention Should we Pay to Mosquitoes? — ACM Multimedia 2022",
      venue: "ACM Multimedia 2022",
      year: 2022,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "An audio challenge presented at ACM Multimedia 2022: recognising mosquitoes from the sound they make.",
      solution: "A Transformer-based audio model, analysing how much attention the model should pay to the mosquito sound within each recording.",
      paper: "How Much Attention Should we Pay to Mosquitoes?",
      paperUrl: "https://dl.acm.org/doi/abs/10.1145/3503161.3551594",
      github: "",
      source: "",
      team: ["Lorenzo Vaiani", "Alkis Koudounas"],
      advisors: []
    },
    {
      id: "c11",
      short: "Non-Verbal Emotion · 2022",
      name: "Non-Verbal Emotion Recognition — ACM Multimedia 2022 Workshop",
      venue: "ACM Multimedia 2022 Workshop",
      year: 2022,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "Recognising emotions from non-verbal vocal sounds, such as laughs, cries and sighs, rather than from words.",
      solution: "Transformer-based emotion recognition models, exploring how well they transfer across speakers’ genders.",
      paper: "Transformer-based Non-Verbal Emotion Recognition: Exploring Model Portability across Speakers’ Genders",
      paperUrl: "https://dl.acm.org/doi/pdf/10.1145/3551876.3554801",
      github: "",
      source: "",
      team: ["Lorenzo Vaiani", "Alkis Koudounas"],
      advisors: []
    },
    {
      id: "c12",
      short: "Misogyny in Memes · SemEval 2022",
      name: "SemEval 2022 Task 5 — Multimedia Automatic Misogyny Identification",
      venue: "SemEval 2022",
      year: 2022,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "Memes combine images and text. The task asked systems to identify misogynous memes, using both what is written and what is shown.",
      solution: "A multimodal approach that highlights the importance of visual elements for identifying misogyny in memes.",
      paper: "JRLV at SemEval-2022 Task 5: The Importance of Visual Elements for Misogyny Identification in Memes",
      paperUrl: "https://aclanthology.org/2022.semeval-1.84.pdf",
      github: "",
      source: "",
      team: ["Lorenzo Vaiani"],
      advisors: []
    },
    {
      id: "c13",
      short: "Robust Recommendations · 2022",
      name: "Robust Recommendations — Recommender Systems Challenge 2022",
      venue: "arXiv 2022",
      year: 2022,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "Building recommender systems that are not only accurate, but robust across different groups of users and items.",
      solution: "A matrix factorization model trained with triplet losses to produce more robust recommendations.",
      paper: "Triplet Losses-based Matrix Factorization for Robust Recommendations",
      paperUrl: "https://arxiv.org/pdf/2210.12098.pdf",
      github: "",
      source: "",
      team: ["Flavio Giobergia"],
      advisors: []
    },
    {
      id: "c14",
      short: "Podcast Summarization · TREC 2021",
      name: "TREC 2021 Podcasts Track — Podcast Summarization",
      venue: "TREC 2021",
      year: 2021,
      result: "Participant",
      resultDetail: "",
      podium: 0,
      brief: "Podcasts are long and unstructured. The task: automatically generate short, informative summaries of podcast episodes.",
      solution: "Our summarization approach for podcast episodes is described in the track paper.",
      paper: "PoliTO at TREC 2021 Podcast Summarization Track",
      paperUrl: "https://trec.nist.gov/pubs/trec30/papers/PoliTO-Pod.pdf",
      github: "",
      source: "",
      team: ["Lorenzo Vaiani"],
      advisors: []
    }
  ],

  /* Challenges hosted by MALTO */
  hosted: [
    {
      name: "MALTO Data Science Competition 2026",
      date: "May 2026",
      text: "Our own online competition: identify which AI model generated a given text. 34 participants, 300+ submissions."
    },
    {
      name: "MALTO Recruitment 2026 — Who Moves?",
      date: "2026",
      text: "A recruitment challenge we designed to select new Challengers for the team."
    }
  ],

  /* ---------------- People ----------------
     group: "leader" | "advisor" | "member" | "trainee" | "alumni" | "social"
     exLeader: true → shown first in Alumni
     ------------------------------------------ */
  people: [
    { name: "Evren Ayberk Munis",  group: "leader",  role: "Team Leader",         challenges: ["c04","c05","c06","c07"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/evrenayberkmunis/", scholar: "https://scholar.google.com/citations?user=alXZfqEAAAAJ&hl=en", photo: "assets/img/members/evren-ayberk-munis.jpg" },
    { name: "Flavio Giobergia",    group: "advisor", role: "Academic Advisor",    challenges: ["c01","c02","c03","c04","c06","c07","c08","c09","c13"], linkedin: "https://www.linkedin.com/in/fgiobergia/", scholar: "https://scholar.google.com/citations?user=P33mBRoAAAAJ&hl=en", photo: "",
      note: "Assistant Professor · DAUIN, Politecnico di Torino" },
    { name: "Ahmet Berk Calisir",     group: "member", role: "Challenger", challenges: [], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/ahmet-berk-calisir/", photo: "" },
    { name: "Amir Ranjbar",           group: "member", role: "Challenger", challenges: [], study: "MSc Artificial Intelligence and Data Analytics", linkedin: "https://www.linkedin.com/in/aexomir/", photo: "" },
    { name: "Andrea Lolli",           group: "member", role: "Challenger", challenges: ["c05"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/andrea-lolli-2912aq/", scholar: "https://scholar.google.com/citations?user=po1OpU0AAAAJ&hl=it", photo: "" },
    { name: "Ayhan Meherrem",         group: "member", role: "Challenger", challenges: ["c07"], study: "BSc Computer Engineering", linkedin: "https://www.linkedin.com/in/ayhan-meherrem/", scholar: "https://scholar.google.com/citations?user=0Zxe3ccAAAAJ&hl=en", photo: "" },
    { name: "Emir Faruk Erman",       group: "member", role: "Challenger", challenges: ["c08"], study: "MSc AI & Data Analytics Computer Engineering", linkedin: "https://www.linkedin.com/in/emirfarukerman/", photo: "" },
    { name: "Gianbattista Busonera",  group: "member", role: "Challenger", challenges: ["c09"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/gianbattista-busonera/", photo: "assets/img/members/gianbattista-busonera.jpg" },
    { name: "Hüseyin Arda Arslan",    group: "member", role: "Challenger", challenges: ["c07","c08"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/h%C3%BCseyin-arda-arslan-611530255/", photo: "" },
    { name: "Kuzey Kaçar",            group: "member", role: "Challenger", challenges: [], study: "BSc Computer Engineering", photo: "assets/img/members/kuzey-kacar.jpg", photoPos: "50% 12%" },
    { name: "Kutay Zilcioğlu",        group: "member", role: "Challenger", challenges: ["c08"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/kutay-zilcio%C4%9Flu-0a0b37227/", photo: "" },
    { name: "Luca M. Rodia",          group: "member", role: "Challenger", challenges: ["c06"], study: "BSc Mathematical Engineering", linkedin: "https://www.linkedin.com/in/luca-rodia-900a34214/", photo: "" },
    { name: "Matin Salami",           group: "member", role: "Challenger", challenges: ["c06"], study: "MSc Data Science and Engineering", scholar: "https://scholar.google.com/citations?user=-AfxQdoAAAAJ&hl=en", photo: "" },
    { name: "Mert Akgün",             group: "member", role: "Challenger", challenges: ["c07"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/akgunmert/", photo: "" },
    { name: "Murat Beşli",            group: "member", role: "Challenger", challenges: ["c07","c08"], study: "BSc Electronic and Communication Engineering", linkedin: "https://www.linkedin.com/in/murat-be%C5%9Fli-344456322/", photo: "" },
    { name: "Göksun Gökçe",           group: "member", role: "Challenger", challenges: [], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/goksungokce/", photo: "" },
    { name: "Taha Atabay Cetin",      group: "member", role: "Challenger", challenges: ["c08"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/taha-atabay-cetin/", photo: "assets/img/members/taha-atabay-cetin.jpg" },
    { name: "Timofei Khudonogov",     group: "member", role: "Challenger", challenges: ["c07"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/timmfy/", photo: "" },
    { name: "Vladimir Schiau",        group: "member", role: "Challenger", challenges: ["c06"], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/vladimir-schiau-35393543b/", scholar: "https://scholar.google.com/citations?user=w9P--1kAAAAJ&hl=en", photo: "" },

    /* Trainees — preparing to join future challenges */
    { name: "Beliz Bektaşlı",  group: "trainee", role: "Trainee", challenges: [], study: "BSc Computer Engineering", linkedin: "https://www.linkedin.com/in/beliz-bekta%C5%9Fl%C4%B1-139156393/", photo: "" },
    { name: "Nehir Koyuncu",   group: "trainee", role: "Trainee", challenges: [], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/nehirkoyuncu/", photo: "" },
    { name: "İrem Şengör",     group: "trainee", role: "Trainee", challenges: [], study: "BSc Computer Engineering", photo: "" },
    { name: "Ayşenaz Organ",   group: "trainee", role: "Trainee", challenges: [], study: "BSc Computer Engineering", linkedin: "https://www.linkedin.com/in/ay%C5%9Fenaz-organ-92b34b38b/", photo: "" },

    { name: "Alkis Koudounas",  group: "alumni", role: "Alumnus", position: "Sr. Research Engineer @ Sony", challenges: ["c01","c02","c03","c10","c11"], photo: "" },
    { name: "Claudio Savelli",  group: "alumni", exLeader: true, role: "Former Team Leader", position: "PhD Student @ Politecnico di Torino", challenges: ["c01","c02","c03","c04","c06","c07","c08","c09"], linkedin: "https://www.linkedin.com/in/claudiosav/", scholar: "https://scholar.google.com/citations?user=vL1jtR8AAAAJ&hl=it", photo: "" },
    { name: "Mattia Sabato",    group: "alumni", exLeader: true, role: "Former Team Leader", position: "PhD Student @ Intesa Sanpaolo AI Research & Sapienza Università di Roma", challenges: ["c05"], linkedin: "https://www.linkedin.com/in/mattiasabato/", photo: "" },
    { name: "Andrea Grieco", group: "alumni", role: "Alumnus", position: "", challenges: ["c04"], photo: "" },
    { name: "Andrea Panuccio", group: "alumni", role: "Alumnus", position: "", challenges: ["c02"], photo: "" },
    { name: "Erfan Bayat",      group: "alumni", role: "Alumnus", position: "", challenges: ["c04","c05"], linkedin: "https://www.linkedin.com/in/erfan-bayat13/", photo: "" },
    { name: "Federico Borra",   group: "alumni", role: "Alumnus", position: "PhD Student in Systems Medicine / Computational Biology @ IFOM / SEMM", challenges: ["c01"], linkedin: "https://www.linkedin.com/in/federico-borra-25a48a223/", scholar: "https://scholar.google.com/citations?user=vBl1EXgAAAAJ&hl=en", photo: "" },
    { name: "Florentin Udrea",  group: "alumni", role: "Alumnus", position: "Reinforcement Learning Engineer @ MOTOR AI", challenges: ["c02"], photo: "" },
    { name: "Giacomo Rosso",    group: "alumni", role: "Alumnus", position: "Generative AI Engineer @ JAKALA", challenges: ["c01","c02"], linkedin: "https://www.linkedin.com/in/giacomo-rosso-735b402ab/", photo: "" },
    { name: "Lorenzo Vaiani",   group: "alumni", role: "Alumnus", position: "Postdoc @ Politecnico di Torino", challenges: ["c10","c11","c12","c14"], photo: "" },
    { name: "Roberta Raineri",  group: "alumni", role: "Alumna",  position: "R&D Control System Engineer @ Modeway", challenges: ["c02"], scholar: "https://scholar.google.com/citations?user=0WmmC8YAAAAJ&hl=it", photo: "" },

    { name: "İpek Dingil",     group: "social", role: "Social Media & Communication Lead", challenges: [], study: "MArch Sustainability Architecture", linkedin: "https://www.linkedin.com/in/ipek-dingil-659125241/", photo: "" },
    { name: "Beliz Bektaşlı",  group: "social", role: "Social Media & Communication", challenges: [], study: "BSc Computer Engineering", linkedin: "https://www.linkedin.com/in/beliz-bekta%C5%9Fl%C4%B1-139156393/", photo: "" },
    { name: "Göksun Gökçe",    group: "social", role: "Social Media & Communication", challenges: [], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/goksungokce/", photo: "" },
    { name: "Nehir Koyuncu",   group: "social", role: "Social Media & Communication", challenges: [], study: "MSc Data Science and Engineering", linkedin: "https://www.linkedin.com/in/nehirkoyuncu/", photo: "" }
  ],

  /* ---------------- Events ----------------
     type: "maltalks" | "workshop" | "community" | "conference"
     ------------------------------------------ */
  events: [
    /* MALTALKS — each talk has its own page (maltalks-N.html).
       cover:  poster shown on the MALTALKS page
       photos: shown in the gallery on the talk's own page */
    {
      type: "maltalks", num: "#3", id: "maltalks-3", page: "maltalks-3.html",
      title: "How Machines Learned to Talk About What They See",
      speaker: "Fabio Cermelli, CTO of Focoos AI",
      partner: "HKN PoliTO",
      date: "2026-11-07", time: "10:00", place: "Aula 27, PoliTO",
      text: "From building a startup out of our university to understanding how language models connect words and images, Fabio Cermelli gave us a fascinating look into the world of Vision-Language Models and the work happening at Focoos AI. At the end we played a mini quiz organised by HKN PoliTO.",
      cover: "assets/img/events/maltalks-3/cover.jpg",
      photos: ["assets/img/events/maltalks-3/photo-1.jpg", "assets/img/events/maltalks-3/photo-2.jpg", "assets/img/events/maltalks-3/photo-3.jpg"],
      link: ""
    },
    {
      type: "maltalks", num: "#2", id: "maltalks-2", page: "maltalks-2.html",
      title: "From Documents to Knowledge",
      speaker: "Gülşen Eryiğit, Professor at Istanbul Technical University",
      date: "2026-09-25", time: "16:00", place: "Sala Conferenze Luigi Ciminiera, PoliTO",
      text: "The talk explores how AI can extract, retrieve and reason over knowledge in complex documents containing text, tables, figures and flowcharts. It covers multimodal representations, question answering and retrieval-augmented generation (RAG), connecting these approaches to knowledge graphs and GraphRAG.",
      cover: "assets/img/events/maltalks-2/cover.jpg",
      photos: ["assets/img/events/maltalks-2/photo-1.jpg", "assets/img/events/maltalks-2/photo-2.jpg", "assets/img/events/maltalks-2/photo-3.jpg", "assets/img/events/maltalks-2/photo-4.jpg", "assets/img/events/maltalks-2/photo-5.jpg"],
      link: ""
    },
    {
      type: "maltalks", num: "#1", id: "maltalks-1", page: "maltalks-1.html",
      title: "Explainable AI",
      speaker: "Alan Perotti, Senior Researcher @ Intesa Sanpaolo AI Research",
      date: "2026-02-20", time: "10:00–12:30", place: "Room 7S, PoliTO",
      text: "This MALTALK explores explainability in discriminative and generative AI, examining which features and data points influence model decisions and how inputs, patterns and learned representations shape generated content.",
      cover: "assets/img/events/maltalks-1/cover.jpg",
      photos: ["assets/img/events/maltalks-1/photo-1.jpg", "assets/img/events/maltalks-1/photo-2.jpg", "assets/img/events/maltalks-1/photo-3.jpg"],
      link: ""
    },

    {
      type: "community",
      title: "MALTO Data Science Competition",
      date: "2026-05", place: "Online",
      text: "Our own competition: identify which AI model generated a given text. 34 participants and 300+ submissions.",
      image: "", link: ""
    },
    {
      type: "community",
      title: "Therness × I3P Hackathon",
      date: "2026-03", place: "Turin",
      text: "24 hours to build a real-time welding defect detection system.",
      image: "", link: ""
    },
    /* CONFERENCES — each has its own page (conference-*.html).
       challenges: ids from the challenges list, linked from the conference page */
    {
      type: "conference", id: "conf-ecml-pkdd-2026", page: "conference-ecml-pkdd-2026.html",
      title: "ECML PKDD 2026", place: "Naples, Italy",
      date: "2026-09", dateLabel: "September 2026",
      text: "After winning the OmniRNA Discovery Challenge, MALTO attended ECML PKDD 2026 in Naples, where we presented our approach to RNA modelling. The conference offered an opportunity to exchange ideas with researchers from around the world and explore new developments in machine learning.",
      challenges: ["c08"],
      cover: "assets/img/events/conf-ecml-pkdd-2026/cover.jpg",
      photos: ["assets/img/events/conf-ecml-pkdd-2026/photo-1.jpg", "assets/img/events/conf-ecml-pkdd-2026/photo-2.jpg"]
    },
    {
      type: "conference", id: "conf-evalita-2026", page: "conference-evalita-2026.html",
      title: "EVALITA 2026", place: "Bari, Italy",
      date: "2026-02", dateLabel: "February 2026",
      text: "MALTO presented two research projects at EVALITA 2026 in Bari, connecting with Italy’s NLP community. Our attention head–based approach to verifying LLM unlearning earned 2nd place in both SVELA subtasks, while our ALBERTO-based system for detecting logical fallacies in Italian social media achieved 2nd place in FadeIT Subtask A.",
      challenges: ["c05", "c06"],
      cover: "assets/img/events/conf-evalita-2026/cover.jpg",
      photos: ["assets/img/events/conf-evalita-2026/photo-1.jpg"]
    },
    {
      type: "conference", id: "conf-ecml-pkdd-2024", page: "conference-ecml-pkdd-2024.html",
      title: "ECML PKDD 2024", place: "Vilnius, Lithuania",
      date: "2024-09", dateLabel: "September 2024",
      text: "MALTO attended ECML PKDD 2024 in Vilnius, Lithuania, where our team presented its solution to the Volvo Predictive Maintenance Challenge, earning 3rd place. The conference offered an opportunity to share our research and connect with the international machine learning community.",
      challenges: ["c02"],
      cover: "assets/img/events/conf-ecml-pkdd-2024/cover.jpg",
      photos: ["assets/img/events/conf-ecml-pkdd-2024/photo-1.jpg", "assets/img/events/conf-ecml-pkdd-2024/photo-2.jpg"]
    },
    /* WORKSHOPS — past editions have their own page (workshop-YYYY-MM.html).
       cover:  photo shown on the Workshops page card
       photos: gallery on the workshop's own page
       upcoming: true → listed under "Upcoming workshops", no page, not counted in stats */
    {
      type: "workshop", id: "workshop-2025-10", page: "workshop-2025-10.html",
      title: "MALTO Workshop October 2025",
      date: "2025-10-04", dateLabel: "4 & 11 October 2025", time: "9:00–13:00", place: "Aula 29, PoliTO",
      text: "The second edition of MALTO’s Machine Learning Workshop Series introduced students to data exploration, classification, regression and the foundations of deep learning through two interactive, hands-on sessions.",
      cover: "assets/img/events/workshop-2025-10/cover.jpg",
      photos: ["assets/img/events/workshop-2025-10/photo-1.jpg", "assets/img/events/workshop-2025-10/photo-2.jpg", "assets/img/events/workshop-2025-10/photo-3.jpg", "assets/img/events/workshop-2025-10/photo-4.jpg"]
    },
    {
      type: "workshop", id: "workshop-2025-05", page: "workshop-2025-05.html",
      title: "MALTO Workshop May 2025",
      date: "2025-05-17", dateLabel: "17 & 24 May 2025", time: "9:00–13:00", place: "Aula 29, PoliTO",
      text: "The first edition of MALTO’s Machine Learning Workshop Series introduced students to data exploration, classification, regression and clustering through two interactive, hands-on sessions. Designed for beginners with basic Python knowledge, the series offered a practical starting point for exploring Machine Learning, with no previous ML experience required.",
      cover: "",
      photos: []
    },
    {
      type: "workshop", upcoming: true,
      title: "Deep Learning Fundamentals",
      date: "2026-11-14", time: "10:00–13:00", place: "Aula 13, PoliTO",
      text: "An introduction to neural networks, covering multilayer perceptrons, loss functions, gradient descent, backpropagation and convolutional neural networks. Participants will use PyTorch to train and compare models on the Fashion-MNIST dataset."
    },
    {
      type: "workshop", upcoming: true,
      title: "Transformer Architectures",
      date: "2026-11-21", time: "10:00–13:00", place: "Aula 13, PoliTO",
      text: "An exploration of tokens, embeddings, self-attention and Transformer architectures, with examples from BERT, GPT and T5. Participants will implement an attention module in PyTorch and examine attention maps from pretrained models."
    },
    {
      type: "workshop", upcoming: true,
      title: "LLMs and VLMs",
      date: "2026-11-28", time: "10:00–13:00", place: "Aula 13, PoliTO",
      text: "An overview of Large Language Models and Vision-Language Models, from pretraining to alignment. Hands-on activities will include generating text with GPT-2, training a nanoGPT model and experimenting with an open-source vision-language model."
    }
  ],

  /* ---------------- Hackathons ----------------
     Kaggle competitions designed and hosted by MALTO.
     Each one has its own page (hackathon-<id>.html).
     icon: name of an icon in main.js ("motion" = surveillance camera, "aitext" = AI-written document)
     ------------------------------------------ */
  hackathons: [
    {
      id: "who-moves", page: "hackathon-who-moves.html", icon: "motion",
      title: "Who Moves?",
      fullTitle: "MALTO Recruitment Challenge: Who Moves?",
      tagline: "Raise an alarm only for people, vehicles and animals that actually move in surveillance video.",
      start: "2026-10-07", end: "2026-10-31", dateLabel: "7 – 31 October 2026",
      url: "https://www.kaggle.com/competitions/malto-who-moves",
      description: [
        "A security camera watches a parking lot all day. Leaves shake in the wind, clouds move their shadows, headlights sweep the asphalt and dozens of cars sit parked. A guard wants one alarm when a person, a vehicle or an animal actually moves through the scene, and silence otherwise.",
        "Participants built that pipeline: given real surveillance videos, raise an alarm for every person, vehicle and animal that moves, as early as possible, at the right place and with the right class, and stay quiet for everything else. Parked cars, people standing still, shadows, reflections, rain and moving branches must never trigger an alarm.",
        "Pretrained detectors were welcome and real time was not required. Alongside the leaderboard score, every participant submitted a short report explaining how they decide that something moves: we wanted to understand how they think about the problem, not just the number they reach."
      ],
      stats: { participants: 34, entrants: 57, submissions: 364 },
      metric: "F1 score on matched alarms (private leaderboard)",
      podium: [
        { name: "Filippo Taddei", score: "0.90554" },
        { name: "Aexomir",        score: "0.89204" },
        { name: "Azamat Shmitov", score: "0.87680" }
      ]
    },
    {
      id: "human-vs-ai", page: "hackathon-human-vs-ai.html", icon: "aitext",
      title: "Human vs. AI-Generated Text",
      fullTitle: "MALTO Recruitment Hackathon: Human vs. AI-Generated Text Classification",
      tagline: "Tell human writing apart from AI-generated text, and name the model that wrote it.",
      start: "2026-03-09", end: "2026-03-18", dateLabel: "9 – 18 March 2026",
      url: "https://www.kaggle.com/competitions/malto-recruitment-hackathon",
      description: [
        "Recent advances in large language models have made it increasingly difficult to distinguish human-written from machine-generated text. Modern AI systems such as ChatGPT, Gemini, Claude, Grok and DeepSeek produce fluent, coherent content that often closely resembles human writing.",
        "Participants were challenged to build machine learning models that identify whether a piece of text was written by a human or generated by an AI system and, if it was AI-generated, which specific model produced it. The dataset contained human-written texts alongside texts generated by multiple large language models.",
        "This made it a six-class classification task: human, ChatGPT, Gemini, Claude, Grok or DeepSeek. Submissions were evaluated with the Macro F1 score, so models had to perform well across every category, not just the most frequent ones."
      ],
      stats: { participants: 30, entrants: 36, submissions: 265 },
      metric: "Macro F1 score (final leaderboard)",
      podium: [
        { name: "Gianbattista Busonera",  score: "0.96423" },
        { name: "Ali Vaezi",              score: "0.95919" },
        { name: "Amirhesam Torkashvand",  score: "0.95677" }
      ]
    }
  ],

  /* ---------------- Contact ---------------- */
  contact: {
    email: "malto.polito@gmail.com",
    instagram: { handle: "@polimalto", url: "https://www.instagram.com/polimalto/" },
    linkedin:  { handle: "@maltoo",    url: "https://www.linkedin.com/company/maltoo/" }
  }
};
