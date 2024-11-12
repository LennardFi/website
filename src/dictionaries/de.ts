import Website from "@/typings"

const Dictionary: Website.I18n.Dictionary = {
    pages: {
        about: {
            pageTitle: "Über mich",
            hello: "👋 Hallo",
            about_me_text_1: "Ich bin Lennard Fickus.",
            about_me_text_2: "25 Jahre alt, Programmierer und Hobbyfotograf.",
            about_me_text_3:
                "Hauptsächlich konzentriere ich mich auf die Portrait- und People-Fotografie. Jeder Mensch ist einzigartig und wunderbar von unserem Gott geschaffen worden und das versuche ich in meinen Bildern festzuhalten. ",
            about_me_text_4:
                "Wenn dich meine Werke interessieren: Viele meiner Bilder sind auf ",
        },
        contact: {
            pageTitle: "Kontakt",
            text_arrangeShooting:
                "Du möchtest ein kostenloses Shooting mit mir vereinbaren? Dann bist du hier genau richtig. Schreibe mir in einer Nachricht, was du dir vorstellst und ich melde mich schnellst möglichst bei dir.",
            form_name: "Name",
            form_mail: "E-Mail",
            form_phone: "Telefon",
            form_describeIdea: "Schreibe mir, was du dir vorstellst...",
            form_submitAction: "Senden",
            form_requestSent: "Anfrage versendet",
            form_requestError: "Fehler beim Versenden der Anfrage",
        },
        home: {
            section_portraits: "Porträts",
            section_streetPhotography: "Straßenfotografie",
            section_wedding: "Hochzeit",
            section_business: "Business Porträts",
            section_dogs: "Hunde",
            section_wildAnimals: "Wilde Tiere",
        },
        imprint: {
            pageTitle: "Impressum",
        },
        links: {
            link_arrange_shooting: "Kostenloses Foto-Shooting vereinbaren",
            link_imprint: "Impressum",
            link_privacy: "Datenschutzerklärung",
            link_website: "Website",
        },
        notFound: {
            notFoundLabel: "The requested page was not found :(",
        },
    },
    navigation: {
        about_me: "Über mich",
        contact: "Kontakt",
        portfolio: "Portfolio",
    },
    footer: {
        link_imprint: "Impressum",
        link_links: "Links",
        link_privacy: "Datenschutzerklärung",
    },
}

export default Dictionary
