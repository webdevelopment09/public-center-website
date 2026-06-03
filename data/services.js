export const branches = [
  {
    name: "მთაწმინდის ცენტრი",
    slug: "mtawminda",
    phone: "+995 555 12 34 56",
    image: "/images/mtawminda.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.450464883356!2d44.79565637647001!3d41.68921027126315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d005d8f9a5b%3A0xbc84774ba851fd6d!2z4YOb4YOg4YOQ4YOV4YOQ4YOa4YOk4YOj4YOc4YOl4YOq4YOY4YOj4YOg4YOYIOGDoeGDnuGDneGDoOGDouGDo-GDmuGDmCDhg6rhg5Thg5zhg6Lhg6Dhg5g!5e0!3m2!1ska!2sge!4v1777757246830!5m2!1ska!2sge",

    description:
      "მთაწმინდის ფილიალი გთავაზობთ თანამედროვე სპორტულ გარემოს.",

    location: "თბილისი, ლ. ასათიანის ქ.50",
    hours: "ორშ-შაბ: 07:00 - 23:00, კვირა: 09:00 - 21:00",
  },

  {
    name: "ვარკეთილის ცენტრი",
    slug: "varketili",
    phone: "+995 555 22 33 44",
    image: "/images/varketili-branch.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.633179537179!2d44.8810655!3d41.7068539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d001aa1274b%3A0xc127f9147e986143!2z4YOV4YOQ4YOV4YOQ4YOa4YOk4YOj4YOc4YOl4YOq4YOY4YOj4YOg4YOYIOGDoeGDnuGDneGDoOGDouGDo-GDmuGDmCDhg6rhg5Thg5zhg6Lhg6Dhg5g!5e0!3m2!1ska!2sge!4v1777757299613!5m2!1ska!2sge",

    description:
      "ვარკეთილის ფილიალი განკუთვნილია როგორც ვარჯიშისთვის, ასევე ყოველდღიური აქტივობებისთვის.",

    location: "თბილისი, ს. თაყაიშვილის ქ.27",
    hours: "ორშ-შაბ: 07:00 - 23:00, კვირა: 09:00 - 21:00",
  },

  {
    name: "დიდი დიღმის ცენტრი",
    slug: "didi-dighomi",
    phone: "+995 555 77 88 99",
    image: "/images/outside.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.5649771888293!2d44.75759539999999!3d41.7945881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446fcfd6a29d11%3A0x108124637fd7cadd!2z4YOb4YOg4YOQ4YOV4YOQ4YOa4YOk4YOj4YOc4YOl4YOq4YOY4YOj4YOg4YOYIOGDoeGDkOGDliDhg6rhg5Thg5zhg6Lhg6Dhg5g!5e0!3m2!1ska!2sge!4v1777757338851!5m2!1ska!2sge",

    description:
      "დიდი დიღმის ფილიალი გამოირჩევა ფართო სივრცით და თანამედროვე ინფრასტრუქტურით.",

    location: "თბილისი, დ. თავდადებულის ქ.18ა",
    hours: "ორშ-შაბ: 07:00 - 23:00, კვირა: 09:00 - 21:00",
  },
];

export const services = [
{
  title: "ფეხბურთი",
  slug: "football",

  cardImage: "/images/football-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/fotball-ვარკეთილი.jpg",
    "didi-dighomi": "/images/gallery-football67.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},


  shortDescription: "თანამედროვე საფეხბურთო სივრცე პროფესიონალური და სამოყვარულო ვარჯიშებისთვის. კომფორტული გარემო, ხარისხიანი ინფრასტრუქტურა.",

  fullDescription: "ფეხბურთის სივრცე შექმნილია როგორც ინდივიდუალური, ისე ჯგუფური ვარჯიშებისთვის. თანამედროვე მოედანი, პროფესიონალური გარემო და გამოცდილი მწვრთნელები ხელს უწყობენ ტექნიკის, ფიზიკური მომზადებისა და გუნდური თამაშის განვითარებას.",

  branches: ["varketili", "didi-dighomi"],
},

{
  title: "კალათბურთი",
  slug: "basketball",

  cardImage: "/images/basketball-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/hero-basketball45.jpg",
    "varketili": "/images/hero-basketball01.jpg",
    "didi-dighomi": "/images/gallery-basketball016.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery-basketball05.jpg",
    "/images/gallery-basketball04.jpg",
    "/images/gallery-basketball60.jpg",
    "/images/gallery-basketball015.jpg",
    "/images/gallery-basketball014.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery-baketball1.jpg",
    "/images/gallery-basketball69.jpg",
    "/images/.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery-basketball58.jpg",
    "/images/gallery-basketball73.jpg",
    "/images/gallery-basketball8.jpg",
  ],
},

  shortDescription: "სრულად აღჭურვილი კალათბურთის სივრცე ინდივიდუალური და გუნდური ვარჯიშებისთვის. იდეალური ადგილი სპორტული განვითარებისა და ენერგიული აქტივობებისთვის.",

  fullDescription: "კალათბურთის სივრცე განკუთვნილია ვარჯიშებისთვის, მეგობრული თამაშებისთვის და სპორტული განვითარებისათვის. აქ მომხმარებლებს შეუძლიათ გაიუმჯობესონ ტექნიკა, სისწრაფე, კოორდინაცია და გუნდური თამაშის უნარები.",

  branches: ["mtawminda", "varketili", "didi-dighomi"],
},

{
  title: "ფრენბურთი",
  slug: "volleyball",

  cardImage: "/images/volleyball-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/swimming-pool-saburtalo-hero.jpg",
    "didi-dighomi": "/images/swimming-pool-dighomi-hero.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},

  shortDescription: "პროფესიონალური სტანდარტების ფრენბურთის სივრცე, რომელიც განკუთვნილია როგორც ვარჯიშისთვის, ასევე მეგობრული და ტურნირული თამაშებისთვის.",
  fullDescription: "ფრენბურთის სივრცე იდეალურია როგორც დამწყებთათვის, ასევე გამოცდილ მოთამაშეებისთვის. კომფორტული გარემო და ორგანიზებული სივრცე ხელს უწყობს აქტიურ ვარჯიშს, გუნდურობას და ფიზიკური ფორმის გაუმჯობესებას.",
  branches: ["mtawminda", "varketili", "didi-dighomi"],
},

{
  title: "ცურვა",
  slug: "swimming",

  cardImage: "/images/swimming-pool-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/hero-swimming-pool92.jpg",
    "didi-dighomi": "/images/hero-swimming-pool321.jpeg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/swimming-pool-gallery12.jpg",
    "/images/swimming-pool-gallery65.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/swimming-pool-gallery65.jpg",
    "/images/swimming-pool-gallery65.jpg",
    "/images/gallery-swimming-pool57.jpg",
  ],

  "didi-dighomi": [
    "/images/swimming-pool-gallery69.jpg",
    "/images/swimming-pool-gallery12.jpg",
    "/images/gallery-swimming-pool57.jpg",
  ],
},

  shortDescription: "თანამედროვე საცურაო სივრცე უსაფრთხო და კომფორტული გარემოთი. იდეალურია როგორც პროფესიონალური მომზადებისთვის, ასევე ყოველდღიური დასვენებისა და ჯანმრთელობისთვის.",
  fullDescription: "საცურაო სივრცე განკუთვნილია ჯანმრთელობის, გამძლეობისა და ფიზიკური ფორმის გასაუმჯობესებლად. აუზი ქმნის უსაფრთხო და კომფორტულ გარემოს როგორც ინდივიდუალური ცურვისთვის, ასევე ჯგუფური და მწვრთნელთან ვარჯიშებისთვის.",
  branches: ["varketili", "didi-dighomi"],
},

{
  title: "სატრენაჟორო დარბაზი",
  slug: "gym",

  cardImage: "/images/hero-gym01.jpg",

  branchHeroImages: {
    "mtawminda": "/images/gallery-gym55.jpg",
    "varketili": "/images/hero-gym01.jpg",
    "didi-dighomi": "/images/hero-gym60.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery-gym59.jpg",
    "/images/gallery-gym019.jpg",
    "/images/gallery-gym56.jpg",
    "/images/gallery-gym010.jpg",
    "/images/gallery-gym017.jpg",
    "/images/gallery-gym018.jpg",
  ],

  "varketili": [
    "/images/gym-gallery012.jpg",
    "/images/gallery-gym000.jpg",
    "/images/gallery-gym.jpg",
    "/images/gallery-gym013.jpg",
    "/images/gallery-gym014.jpg",
    "/images/gallery-gym015.jpg",
  ],

  "didi-dighomi": [
    "/images/hero-gym098.jpg",
    "/images/gallery-gym50.jpg",
    "/images/gallery-gym64.jpg",
    "/images/gallery-gym02.jpg",
    "/images/gym-gallery.jpg",
    "/images/gallery-gym011.jpg",
  ],
},

  shortDescription: "სრულად აღჭურვილი ფიტნეს სივრცე თანამედროვე ტრენაჟორებითა და კომფორტული გარემოთი. იდეალური ადგილი ძალის, გამძლეობისა და ფორმის გასაუმჯობესებლად.",
  fullDescription: "სატრენაჟორო დარბაზი აღჭურვილია თანამედროვე სავარჯიშო სივრცით, რომელიც მომხმარებლებს ეხმარება ძალის, გამძლეობისა და სხეულის ფორმის გაუმჯობესებაში. ფიტნეს სივრცე מתאים როგორც დამწყებთათვის, ასევე გამოცდილ მომხმარებლებისთვის.",
  branches: ["mtawminda", "varketili", "didi-dighomi"],
},

{
  title: "ჩოგბურთი",
  slug: "tennis",

  cardImage: "/images/tennis-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/hero-tennis.jpg",
    "didi-dighomi": "/images/swimming-pool-dighomi-hero.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery-tennis1.jpg",
    "/images/gallery-padel65.jpg",
    "/images/gallery-tennis68.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},

  shortDescription: "მაღალი ხარისხის ჩოგბურთის კორტები პროფესიონალური და სამოყვარულო თამაშებისთვის. სივრცე, რომელიც აერთიანებს სპორტს, კომფორტსა და აქტიურ ცხოვრებას.",
  fullDescription: "ჩოგბურთის სივრცე განკუთვნილია ტექნიკის, სისწრაფის, კონცენტრაციისა და ფიზიკური მომზადების განვითარებისთვის. პროფესიონალური გარემო მომხმარებლებს აძლევს შესაძლებლობას ივარჯიშონ კომფორტულად და შედეგზე ორიენტირებულად.",
  branches: ["varketili"],
},

{
  title: "პადელი",
  slug: "paddle",

  cardImage: "/images/padel-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/ga.jpg",
    "varketili": "/images/gallery-padel66.jpg",
    "didi-dighomi": "/images/swimming-pool-dighomi-hero.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},

  shortDescription: "თანამედროვე და სწრაფად მზარდი სპორტისათვის შექმნილი კომფორტული პადელის კორტები. იდეალური არჩევანი აქტიური დასვენებისა და მეგობრული თამაშებისთვის.",
  fullDescription: "პადელი თანამედროვე და დინამიკური სპორტია, რომელიც აერთიანებს აქტიურ მოძრაობას, სტრატეგიას და გართობას. სივრცე იდეალურია როგორც მეგობრული თამაშებისთვის, ასევე რეგულარული სპორტული აქტივობისთვის.",
  branches: ["varketili"],
},

{
  title: "ორთაბრძოლა",
  slug: "martial-arts",

  cardImage: "/images/boxing-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/hero-martial-arts.jpg",
    "didi-dighomi": "/images/hero-martial-arts96.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/.jpg",
    "/images/.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/martial-arts-gallery0.jpg",
    "/images/martial-arts-gallery90.jpg",
    "/images/gallery-martial-arts63.jpg",
    "/images/gallery-martial-arts62.jpg",
    "/images/gallery-boxing-ring.jpg",
  ],

  "didi-dighomi": [
    "/images/martial-arts-gallery-96.jpg",
    "/images/martial-arts-gallery.jpg",
  ],
},

  shortDescription: "ორთაბრძოლის სერვისით შეგიძლიათ ისარგებლოთ სხვადასხვა საბრძოლო ხელოვნების სპორტით, როგორებიცაა: კრივი, ძიუდო, ჯიუჯიცუ, გრეპლინგი, პანკრატიონი და შერეული ორთაბრძოლები(MMA).",
  fullDescription: "ორთაბრძოლის სივრცე განკუთვნილია ფიზიკური მომზადების, დისციპლინისა და საბრძოლო ტექნიკის განვითარებისთვის. ვარჯიშები ხელს უწყობს ძალის, გამძლეობის, კოორდინაციისა და თავდაჯერებულობის გაუმჯობესებას, უსაფრთხო და ორგანიზებულ გარემოში.",
  branches: ["varketili"],
},

{
  title: "ტანვარჯიში",
  slug: "gymnastics",

  cardImage: "/images/gymnastics-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/hero-gymnastics.jpg",
    "didi-dighomi": "/images/hero-gymnastics7.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gymnastics-gallery9.jpg",
    "/images/gymnastics-gallery21.jpg",
    "/images/gymnastics-gallery11.jpg",
    "/images/gymnastics-gallery12.jpg",
    "/images/gymnastics-gallery13.jpg",
    "/images/gymnastics-gallery14.jpg",
  ],

  "varketili": [
    "/images/gymnastics-gallery21.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery-gymnastics54.jpg",
    "/images/gymnastics-gallery9.jpg",
  ],
},

  shortDescription: "მრავალფუნქციური ტანვარჯიშის სივრცე, რომელიც ხელს უწყობს სხეულის მოქნილობის, ბალანსისა და ფიზიკური განვითარების გაუმჯობესებას.",
  fullDescription: "ტანვარჯიშის სივრცე ხელს უწყობს მოქნილობის, ბალანსის, კოორდინაციისა და ფიზიკური განვითარების გაუმჯობესებას. ვარჯიშები მორგებულია სხვადასხვა ასაკისა და მომზადების დონის მომხმარებლებზე.",
  branches: ["varketili", "didi-dighomi"],
},

{
  title: "ჭადრაკი",
  slug: "chess",

  cardImage: "/images/chess-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/swimming-pool-saburtalo-hero.jpg",
    "didi-dighomi": "/images/swimming-pool-dighomi-hero.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},

  shortDescription: "მშვიდი და ინტელექტუალური გარემო სტრატეგიული აზროვნებისა და კონცენტრაციის განვითარებისთვის. იდეალურია როგორც დამწყებთათვის, ასევე გამოცდილ მოთამაშეებისთვის.",
  fullDescription: "ჭადრაკის სივრცე შექმნილია სტრატეგიული აზროვნების, კონცენტრაციისა და ლოგიკური უნარების განვითარებისთვის. მშვიდი და ორგანიზებული გარემო იდეალურია როგორც დამწყებთათვის, ასევე გამოცდილ მოთამაშეებისთვის.",
  branches: ["varketili"],
},

{
  title: "სკეიტ პარკი",
  slug: "skate-park",

  cardImage: "/images/skate-park-card.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/swimming-pool-saburtalo-hero.jpg",
    "didi-dighomi": "/images/swimming-pool-dighomi-hero.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],

  "varketili": [
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
  ],
},

  shortDescription: "თანამედროვე სკეიტ სივრცე ექსტრემალური სპორტისა და აქტიური გართობის მოყვარულებისთვის. უსაფრთხო და დინამიკური გარემო ყოველდღიური აქტივობებისთვის.",
  fullDescription: "სკეიტ პარკი განკუთვნილია აქტიური და ექსტრემალური სპორტის მოყვარულებისთვის. სივრცე მომხმარებლებს აძლევს შესაძლებლობას განავითარონ ბალანსი, კონტროლი, მოძრაობის ტექნიკა და თავდაჯერებულობა უსაფრთხო გარემოში.",
  branches: ["varketili"],
},

{
  title: "მედიათეკა",
  slug: "media-library",

  cardImage: "/images/hero-media-library08.jpg",

  branchHeroImages: {
    "mtawminda": "/images/swimming-pool-vake-hero.jpg",
    "varketili": "/images/hero-media-library6.jpg",
    "didi-dighomi": "/images/hero-media-library08.jpg",
  },

  galleryImages: {
  "mtawminda": [
    "/images/media-library-gallery-3.jpg",
    "/images/media-library-gallery-2.jpg",
    "/images/media-library-gallery-1.jpg",
    "/images/media-library-gallery-4.jpg",
    "/images/media-library-gallery-5.jpg",
    "/images/media-library-gallery-6.jpg",
  ],

  "varketili": [
    "/images/media-library-gallery-3.jpg",
    "/images/gallery-media-library132.jpg",
    "/images/gallery9.jpg",
  ],

  "didi-dighomi": [
    "/images/gallery-media-library131.jpg",
    "/images/gallery-media-library132.jpg",
  ],
},

  shortDescription: "თანამედროვე მედიათეკა, რომელიც გთავაზობთ ფართო არჩევანს წიგნებისა და მედია რესურსებისგან. კომფორტული გარემო სწავლებისა და დასვენებისთვის.",
  fullDescription: "მედიათეკა არის სივრცე, რომელიც აერთიანებს წიგნების, ჟურნალებისა და სხვა მედია რესურსების ფართო არჩევანს. კომფორტული და მშვიდი გარემო ხელს უწყობს სწავლასა და დასვენებას, რაც იდეალურია როგორც ინდივიდუალური, ასევე ჯგუფური ვიზიტებისთვის.",
  branches: ["varketili", "didi-dighomi"],
},
];

export function getBranchBySlug(slug) {
  return branches.find((branch) => branch.slug === slug);
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}