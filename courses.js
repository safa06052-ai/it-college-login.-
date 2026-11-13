
window.COLLEGE_COURSES = {
  "القسم العام": {
    first: [
      {
        name: "أساسيات تقنية المعلومات",
        doctor: "د. مفتاح الدبار",
        day: "السبت",
        times: ["9:00 AM"],
        location: "مدرج الإعمار"
      },
      {
        name: "برمجة 1",
        doctor: "د. مفتاح الدبار",
        day: "الاثنين",
        times: ["1:00 PM"],
        location: "مدرج الريادة"
      },
      {
        name: "فيزياء عامة",
        doctor: "د. فتحية العواي",
        day: "الثلاثاء",
        times: ["1:00 PM", "3:00 PM"],
        location: "مدرج الريادة"
      },
      {
        name: "رياضة 1",
        doctor: "د. انتصار عبدالهادي",
        day: "الخميس",
        times: ["1:00 PM", "3:00 PM"],
        location: "مدرج الإعمار"
      },
      {
        name: "اللغة العربية",
        doctor: "د. منى الكرامي",
        day: "السبت",
        times: ["3:00 PM"],
        location: "مدرج الإعمار"
      },
      {
        name: "اللغة الإنجليزية",
        doctor: "د. سمية سليمان",
        day: "السبت",
        times: ["1:00 PM"],
        location: "مدرج الإعمار"
      }
    ],

    second: [
      {
        name: "رياضة 2",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. آية زيدان",
            lectures: [
              { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "قاعة 52" },
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 47" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "د. مفتاح الدبار",
            lectures: [
              { day: "الثلاثاء", time: "1:00 PM - 3:00 PM", location: "قاعة 46" },
              { day: "الثلاثاء", time: "3:00 PM - 5:00 PM", location: "قاعة 47" }
            ]
          }
        ]
      },
      {
        name: "برمجة 2",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "د. مفتاح الدبار",
            lectures: [
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 47" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "د. مفتاح الدبار",
            lectures: [
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 47" }
            ]
          }
        ]
      },
      {
        name: "ثقافة وطنية",
        doctor: "د. ريم الزادمة",
        day: "الأربعاء",
        times: ["1:00 PM - 3:00 PM"],
        location: "قاعة 202"
      },
      {
        name: "مقدمة إحصاء وتحليل البيانات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "د. يونس امبارك",
            lectures: [
              { day: "الاثنين", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "د. يونس امبارك",
            lectures: [
              { day: "الثلاثاء", time: "11:00 AM - 1:00 PM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "حلول التقنية",
        doctor: "د. مفتاح الدبار",
        day: "الأربعاء",
        times: ["3:00 PM - 5:00 PM"],
        location: "قاعة 47"
      },
      {
        name: "اللغة الإنجليزية التقنية",
        doctor: "د. معمر الفاسي",
        lectures: [
          { day: "السبت", time: "9:00 AM - 11:00 AM", location: "قاعة 202" },
          { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
        ]
      }
    ]
  },

  "هندسة البرمجيات": {
    courses: [
      {
        name: "البرمجة الموجهة نحو هدف",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "الأربعاء", time: "1:00 PM - 3:00 PM", location: "قاعة 47" },
          { day: "الأربعاء", time: "3:00 PM - 5:00 PM", location: "قاعة 205" }
        ]
      },
      {
        name: "مقدمة في هندسة البرمجيات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "قاعة 203" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 203" }
            ]
          }
        ]
      },
      {
        name: "قواعد البيانات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الاثنين", time: "9:00 AM - 11:00 AM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "تصميم وتطوير مواقع الإنترنت",
        doctor: "أ. إيمان جبريل",
        lectures: [
          { day: "الاثنين", time: "9:00 AM - 11:00 AM", location: "قاعة 204" },
          { day: "الاثنين", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
        ]
      },
      {
        name: "هياكل البيانات والخوارزميات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 46" },
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 25" },
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 25" }
            ]
          }
        ]
      },
      {
        name: "اللغات الرسمية والأتمتة",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 205" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
            ]
          }
        ]
      },
      {
        name: "بيئات هندسة البرمجيات",
        doctor: "محمد القبي",
        lectures: [
          { day: "الأربعاء", time: "9:00 AM - 11:00 AM", location: "قاعة 202" },
          { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 202" }
        ]
      },
      {
        name: "مقدمة في شبكات الحاسوب",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. المبروك التمامي",
            lectures: [
              { day: "السبت", time: "9:00 AM - 11:00 AM", location: "قاعة 206" },
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. المبروك التمامي",
            lectures: [
              { day: "الأربعاء", time: "9:00 AM - 11:00 AM", location: "قاعة 205" },
              { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          }
        ]
      },
      {
        name: "تصميم منطقي",
        doctor: "أ. أمبارك أمحمد",
        day: "الاثنين",
        times: ["3:00 PM - 5:00 PM"],
        location: "قاعة 46"
      },
      {
        name: "معمارية الحاسوب",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
          { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "الجبر الخطي",
        doctor: "مفتاح الدبار",
        day: "الأربعاء",
        times: ["1:00 PM - 3:00 PM"],
        location: "مدرج الإعمار"
      },
      {
        name: "مواصفات ومتطلبات البرمجيات",
        doctor: "أبوعجيلة مصباح",
        day: "الأربعاء",
        times: ["9:00 AM - 11:00 AM"],
        location: "قاعة 46"
      },
      {
        name: "برمجة متقدمة 1",
        doctor: "هناء الهمالي",
        lectures: [
          { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 202" },
          { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 202" }
        ]
      },
      {
        name: "إدارة المشاريع البرمجية",
        doctor: "أبوعجيلة مصباح",
        day: "السبت",
        times: ["9:00 AM - 11:00 AM"],
        location: "قاعة 203"
      },
      {
        name: "الأنظمة الموزعة",
        doctor: "إيمان جبريل",
        day: "السبت",
        times: ["11:00 AM - 1:00 PM"],
        location: "قاعة 203"
      },
      {
        name: "طرق التصميم والمواصفات الرسمية",
        doctor: "نجاة أطبيقة",
        lectures: [
          { day: "السبت", time: "9:00 AM - 11:00 AM", location: "لم تحدد" },
          { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "لم تحدد" }
        ]
      },
      {
        name: "التحليل العددي",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "عائشة دينار",
            lectures: [
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 216" },
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 216" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "يونس أمبارك",
            lectures: [
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "نظم التشغيل",
        doctor: "إيمان جبريل",
        lectures: [
          { day: "الثلاثاء", time: "9:00 AM - 11:00 AM", location: "أونلاين (10)" },
          { day: "الثلاثاء", time: "11:00 AM - 1:00 PM", location: "أونلاين (10)" }
        ]
      },
      {
        name: "كتابة تقارير",
        doctor: "معمر الفاسي",
        day: "الخميس",
        times: ["3:00 PM - 5:00 PM"],
        location: "قاعة 46"
      },
      {
        name: "صيانة وتطوير البرمجيات",
        doctor: "محمد القبي",
        day: "الثلاثاء",
        times: ["1:00 PM - 3:00 PM"],
        location: "معمل الحاسوب (1)"
      },
      {
        name: "التنقيب في البيانات",
        doctor: "المبروك التمامي",
        lectures: [
          { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 203" },
          { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 203" }
        ]
      },
      {
        name: "أساسيات إنترنت الأشياء",
        doctor: "نجاة أطبيقة",
        lectures: [
          { day: "الاثنين", time: "9:00 AM - 11:00 AM", location: "قاعة 203" },
          { day: "الاثنين", time: "11:00 AM - 1:00 PM", location: "قاعة 203" }
        ]
      },
      {
        name: "مقدمة في نظم المعلومات",
        doctor: "إيمان جبريل",
        day: "الثلاثاء",
        times: ["11:00 AM - 1:00 PM"],
        location: "أونلاين (8)"
      },
      {
        name: "تطوير نظم قواعد البيانات",
        doctor: "المبروك التمامي",
        lectures: [
          { day: "السبت", time: "9:00 AM - 11:00 AM", location: "قاعة 206" },
          { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
        ]
      },
      {
        name: "مشروع التخرج",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الثلاثاء", time: "3:00 PM - 5:00 PM", location: "أونلاين (3)" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "أونلاين (1)" }
            ]
          },
          {
            name: "المجموعة 3",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "أونلاين (6)" }
            ]
          },
          {
            name: "المجموعة 4",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الاثنين", time: "3:00 PM - 5:00 PM", location: "أونلاين (3)" }
            ]
          }
        ]
      }
    ]
  },
  
  "الشبكات والاتصالات": {
    courses: [

      {
        name: "الدوائر الكهربائية والإلكترونية",
        doctor: "محمد شقلوف",
        lectures: [
          { day: "الثلاثاء", time: "9:00-11:00", location: "قاعة 202" },
          { day: "الثلاثاء", time: "3:00-5:00", location: "قاعة 202" }
        ]
      },

      {
        name: "نظرية الاتصالات",
        doctor: "إسماعيل العطوي",
        lectures: [
          { day: "الخميس", time: "9:00-11:00", location: "قاعة 48" },
          { day: "الخميس", time: "11:00-1:00", location: "قاعة 48" }
        ]
      },

      {
        name: "شبكات الاتصال عريضة الحزمة",
        doctor: "فوزية القزون",
        lectures: [
          { day: "الأحد", time: "11:00-1:00", location: "قاعة 205" },
          { day: "الخميس", time: "1:00-3:00", location: "قاعة 203" }
        ]
      },

      {
        name: "الشبكات اللاسلكية",
        doctor: "فاطمة اشكال",
        lectures: [
          { day: "الأربعاء", time: "9:00-11:00", location: "قاعة 203" },
          { day: "الأربعاء", time: "11:00-1:00", location: "قاعة 203" }
        ]
      },

      {
        name: "أمن الشبكات",
        doctor: "المبروك التمامي",
        lectures: [
          { day: "الإثنين", time: "9:00-11:00", location: "قاعة 202" },
          { day: "الإثنين", time: "11:00-1:00", location: "قاعة 202" }
        ]
      },

      {
        name: "الاتصالات البصرية",
        doctor: "أمحمد سليمان",
        lectures: [
          { day: "الإثنين", time: "3:00-5:00", location: "قاعة 202" },
          { day: "الخميس", time: "3:00-5:00", location: "معمل الحاسوب (1)" }
        ]
      },

      {
        name: "الاتصالات الرقمية",
        doctor: "إسماعيل العطوي",
        lectures: [
          { day: "الأحد", time: "9:00-11:00", location: "قاعة 48" },
          { day: "الأحد", time: "11:00-1:00", location: "قاعة 48" }
        ]
      },

      {
        name: "تخطيط وتنفيذ الشبكات",
        doctor: "مفتاح الدبار",
        lectures: [
          { day: "الثلاثاء", time: "11:00-1:00", location: "قاعة 203" },
          { day: "الخميس", time: "9:00-11:00", location: "قاعة 204" }
        ]
      },

      {
        name: "هندسة الإلكترونات",
        doctor: "محمد شقلوف",
        lectures: [
          { day: "الأحد", time: "9:00-11:00", location: "معمل الحاسوب (1)" }
        ]
      },

      {
        name: "الشبكات المتقدمة",
        doctor: "المبروك التمامي",
        lectures: [
          { day: "الثلاثاء", time: "9:00-11:00", location: "معمل الحاسوب (1)" }
        ]
      },

      {
        name: "معالجة الإشارات الرقمية",
        doctor: "فوزية القزون",
        lectures: [
          { day: "الأحد", time: "9:00-11:00", location: "قاعة 202" },
          { day: "الأحد", time: "11:00-1:00", location: "معمل الحاسوب (1)" }
        ]
      },

      {
        name: "قواعد البيانات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الأحد", time: "9:00-11:00", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الإثنين", time: "9:00-11:00", location: "قاعة 46" }
            ]
          }
        ]
      },

      {
        name: "هياكل البيانات والخوارزميات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "السبت", time: "1:00-3:00", location: "قاعة 46" },
              { day: "السبت", time: "3:00-5:00", location: "قاعة 46" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "الأحد", time: "1:00-3:00", location: "قاعة 25" },
              { day: "الأحد", time: "3:00-5:00", location: "قاعة 25" }
            ]
          }
        ]
      },

      {
        name: "مقدمة في شبكات الحاسوب",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. المبروك التمامي",
            lectures: [
              { day: "السبت", time: "9:00-11:00", location: "قاعة 206" },
              { day: "السبت", time: "11:00-1:00", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. المبروك التمامي",
            lectures: [
              { day: "الأربعاء", time: "9:00-11:00", location: "قاعة 205" },
              { day: "الأربعاء", time: "11:00-1:00", location: "قاعة 204" }
            ]
          }
        ]
      },

      {
        name: "تصميم منطقي",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "الإثنين", time: "3:00-5:00", location: "قاعة 46" }
        ]
      },

      {
        name: "معمارية الحاسوب",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "السبت", time: "11:00-1:00", location: "قاعة 46" },
          { day: "الأحد", time: "3:00-5:00", location: "قاعة 46" }
        ]
      },

      {
        name: "الجبر الخطي",
        doctor: "مفتاح الدبار",
        lectures: [
          { day: "الأربعاء", time: "1:00-3:00", location: "مدرج الإعمار" }
        ]
      },

      {
        name: "التحليل العددي",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "عائشة دينار",
            lectures: [
              { day: "السبت", time: "11:00-1:00", location: "قاعة 216" },
              { day: "السبت", time: "1:00-3:00", location: "قاعة 216" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "يونس أمبارك",
            lectures: [
              { day: "الأحد", time: "11:00-1:00", location: "قاعة 46" },
              { day: "الأحد", time: "1:00-3:00", location: "قاعة 46" }
            ]
          }
        ]
      },

      {
        name: "نظم التشغيل",
        doctor: "إيمان جبريل",
        lectures: [
          { day: "الثلاثاء", time: "9:00-11:00", location: "أون لاين (10)" },
          { day: "الثلاثاء", time: "11:00-1:00", location: "أون لاين (10)" }
        ]
      },

      {
        name: "كتابة تقارير",
        doctor: "معمر الفاسي",
        lectures: [
          { day: "الخميس", time: "3:00-5:00", location: "قاعة 46" }
        ]
      },

      {
        name: "مشروع التخرج",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الثلاثاء", time: "3:00-5:00", location: "أون لاين (3)" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "السبت", time: "3:00-5:00", location: "أون لاين (1)" }
            ]
          },
          {
            name: "المجموعة 3",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "3:00-5:00", location: "أون لاين (6)" }
            ]
          },
          {
            name: "المجموعة 4",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الإثنين", time: "3:00-5:00", location: "أون لاين (3)" }
            ]
          }
        ]
      }

    ]
  },
  
  "علوم الحاسوب": {
    third: [
      {
        name: "مقدمة في هندسة البرمجيات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "قاعة 203" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 203" }
            ]
          }
        ]
      },
      {
        name: "قواعد البيانات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الأحد", time: "9:00 AM - 11:00 AM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أ. أبوعجيلة مصباح",
            lectures: [
              { day: "الاثنين", time: "9:00 AM - 11:00 AM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "الجبر الخطي",
        doctor: "مفتاح الدبار",
        lectures: [
          { day: "الأربعاء", time: "1:00 PM - 3:00 PM", location: "مدرج الأعمار" }
        ]
      },
      {
        name: "مقدمة في نظم المعلومات",
        doctor: "أ. إيمان جبريل",
        lectures: [
          { day: "الثلاثاء", time: "11:00 AM - 1:00 PM", location: "أون لاين (8)" }
        ]
      }
    ]
  },

  "الأمن السيبراني": {
    courses: [
      {
        name: "هياكل البيانات والخوارزميات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 46" },
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 25" },
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 25" }
            ]
          }
        ]
      },
      {
        name: "اللغات الرسمية والأتمتة",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 205" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
            ]
          }
        ]
      },
      {
        name: "تصميم منطقي",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "الاثنين", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "معمارية الحاسوب",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
          { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "برمجة متقدمة 1",
        doctor: "هناء الهمالي",
        lectures: [
          { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 202" },
          { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 202" }
        ]
      },
      {
        name: "التحليل العددي",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "عائشة دينار",
            lectures: [
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 216" },
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 216" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "يونس أمبارك",
            lectures: [
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "نظم التشغيل",
        doctor: "إيمان جبريل",
        lectures: [
          { day: "الثلاثاء", time: "9:00 AM - 11:00 AM", location: "أون لاين (10)" },
          { day: "الثلاثاء", time: "11:00 AM - 1:00 PM", location: "أون لاين (10)" }
        ]
      },
      {
        name: "كتابة تقارير",
        doctor: "معمر الفاسي",
        lectures: [
          { day: "الخميس", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "معالجات صورية",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "نعيمة موسى",
            lectures: [
              { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "نعيمة موسى",
            lectures: [
              { day: "الأربعاء", time: "1:00 PM - 3:00 PM", location: "قاعة 203" }
            ]
          }
        ]
      },
      {
        name: "مقدمة في شبكات الحاسوب",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "المبروك التمامي",
            lectures: [
              { day: "السبت", time: "9:00 AM - 11:00 AM", location: "قاعة 206" },
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "المبروك التمامي",
            lectures: [
              { day: "الأربعاء", time: "9:00 AM - 11:00 AM", location: "قاعة 204" },
              { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
            ]
          }
        ]
      },
      {
        name: "مشروع التخرج",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الثلاثاء", time: "3:00 PM - 5:00 PM", location: "أون لاين (3)" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "أون لاين (1)" }
            ]
          },
          {
            name: "المجموعة 3",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "أون لاين (6)" }
            ]
          },
          {
            name: "المجموعة 4",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الاثنين", time: "3:00 PM - 5:00 PM", location: "أون لاين (3)" }
            ]
          }
        ]
      }
    ]
  },

  "الذكاء الاصطناعي": {
    courses: [
      {
        name: "هياكل البيانات والخوارزميات",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 46" },
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "أحمد الشاطر",
            lectures: [
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 25" },
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 25" }
            ]
          }
        ]
      },
      {
        name: "اللغات الرسمية والأتمتة",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 205" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
            ]
          }
        ]
      },
      {
        name: "تصميم منطقي",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "الاثنين", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "معمارية الحاسوب",
        doctor: "أ. أمبارك أمحمد",
        lectures: [
          { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
          { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "برمجة متقدمة 1",
        doctor: "هناء الهمالي",
        lectures: [
          { day: "الخميس", time: "9:00 AM - 11:00 AM", location: "قاعة 202" },
          { day: "الخميس", time: "11:00 AM - 1:00 PM", location: "قاعة 202" }
        ]
      },
      {
        name: "التحليل العددي",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "عائشة دينار",
            lectures: [
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 216" },
              { day: "السبت", time: "1:00 PM - 3:00 PM", location: "قاعة 216" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "يونس أمبارك",
            lectures: [
              { day: "الأحد", time: "11:00 AM - 1:00 PM", location: "قاعة 46" },
              { day: "الأحد", time: "1:00 PM - 3:00 PM", location: "قاعة 46" }
            ]
          }
        ]
      },
      {
        name: "نظم التشغيل",
        doctor: "إيمان جبريل",
        lectures: [
          { day: "الثلاثاء", time: "9:00 AM - 11:00 AM", location: "أون لاين (10)" },
          { day: "الثلاثاء", time: "11:00 AM - 1:00 PM", location: "أون لاين (10)" }
        ]
      },
      {
        name: "كتابة تقارير",
        doctor: "معمر الفاسي",
        lectures: [
          { day: "الخميس", time: "3:00 PM - 5:00 PM", location: "قاعة 46" }
        ]
      },
      {
        name: "معالجات صورية",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "نعيمة موسى",
            lectures: [
              { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "نعيمة موسى",
            lectures: [
              { day: "الأربعاء", time: "1:00 PM - 3:00 PM", location: "قاعة 203" }
            ]
          }
        ]
      },
      {
        name: "مقدمة في شبكات الحاسوب",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "المبروك التمامي",
            lectures: [
              { day: "السبت", time: "9:00 AM - 11:00 AM", location: "قاعة 206" },
              { day: "السبت", time: "11:00 AM - 1:00 PM", location: "قاعة 204" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "المبروك التمامي",
            lectures: [
              { day: "الأربعاء", time: "9:00 AM - 11:00 AM", location: "قاعة 204" },
              { day: "الأربعاء", time: "11:00 AM - 1:00 PM", location: "قاعة 205" }
            ]
          }
        ]
      },
      {
        name: "مشروع التخرج",
        groups: [
          {
            name: "المجموعة 1",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الثلاثاء", time: "3:00 PM - 5:00 PM", location: "أون لاين (3)" }
            ]
          },
          {
            name: "المجموعة 2",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "السبت", time: "3:00 PM - 5:00 PM", location: "أون لاين (1)" }
            ]
          },
          {
            name: "المجموعة 3",
            doctor: "إيمان جبريل",
            lectures: [
              { day: "الأحد", time: "3:00 PM - 5:00 PM", location: "أون لاين (6)" }
            ]
          },
          {
            name: "المجموعة 4",
            doctor: "نجاة أطبيقة",
            lectures: [
              { day: "الاثنين", time: "3:00 PM - 5:00 PM", location: "أون لاين (3)" }
            ]
          }
        ]
      }
    ]
  }

};

};
