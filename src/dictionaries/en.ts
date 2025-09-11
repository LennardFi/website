import Website from "@/typings"

const Dictionary: Website.I18n.Dictionary = {
    pages: {
        about: {
            pageTitle: "About me",
            hello: "👋 Hello",
            about_me_text_1: "I'm Lennard Fickus.",
            about_me_text_2:
                "26 years old, developer and hobby photographer from Germany.",
            about_me_text_3:
                "Mainly I focus on portrait and people photography. Every person is unique and wonderfully created by our God and I try to capture that in my pictures. ",
            about_me_text_4:
                "If you are interested in my works: Many of my photos are on ",
        },
        contact: {
            pageTitle: "Contact",
            text_arrangeShooting:
                "You want to arrange a free shooting with me? Then you are at the right place. Write me in a message what you have in mind and I'll get back to you as soon as possible.",
            form_name: "Name",
            form_mail: "Mail",
            form_phone: "Phone",
            form_describeIdea: "Let me know what you have in mind...",
            form_submitAction: "Send",
            form_requestSent: "Request sent",
            form_requestError: "Error while sending request",
        },
        home: {
            section_portraits: "Portraits",
            section_streetPhotography: "Street Photography",
            section_wedding: "Wedding",
            section_business: "Business Portraits",
            section_dogs: "Dogs",
            section_wildAnimals: "Wild animals",
        },
        imprint: {
            pageTitle: "Imprint",
        },
        links: {
            link_arrange_shooting: "Arrange free shooting",
            link_imprint: "Imprint",
            link_privacy: "Privacy",
            link_website: "Website",
        },
        notFound: {
            notFoundLabel: "Die gesuchte Seite wurde nicht gefunden :(",
        },
    },
    navigation: {
        about_me: "About me",
        contact: "Contact",
        portfolio: "Portfolio",
    },
    footer: {
        link_imprint: "Imprint",
        link_links: "Links",
        link_privacy: "Privacy policy",
    },
}

export default Dictionary
