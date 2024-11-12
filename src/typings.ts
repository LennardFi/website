import { ImageProps, StaticImageData } from "next/image"
import { ErrorScope } from "./lib/errors"

declare namespace Website {
    namespace Api {
        interface ApiError {
            scope:
                | Exclude<ErrorScope, "build" | "database" | "server">
                | "server-internal"
            id: string
            message: string
            internalMessage?: string
        }

        interface ContactRequestBody {
            name: string
            mail: string
            phone: string
            description: string
        }

        type ContactResponseType = "error" | "ok"
    }

    namespace Base {
        type DeviceSize = "small" | "normal" | "large" | "x-large"
    }

    namespace Config {
        interface MailingConfig {
            host: string
            port: number
            user: string
            password: string
            toMailAddress: string
            fromMailAddress: string
            /**
             * Add development hint in e-mail
             */
            dev?: boolean
        }
    }

    namespace ContentGrid {
        interface ContentGridCellBase<T extends string> {
            type: T
        }

        type EmptyContentGridCell = ContentGridCellBase<"empty">

        interface ImageContentGridCell extends ContentGridCellBase<"img"> {
            src: StaticImageData
            de?: string
            en?: string
        }

        interface TextContentGridCell extends ContentGridCellBase<"text"> {
            de: string
            en: string
            className?: string
        }

        type ContentGridCell =
            | EmptyContentGridCell
            | ImageContentGridCell
            | TextContentGridCell

        type ContentGridCellAnchor = "horizontal" | "vertical"
    }

    namespace I18n {
        type Language = "de-DE" | "de" | "en-US" | "en"
        type NavigationDictionaryEntries = "about_me" | "contact" | "portfolio"

        type AboutPageDictionaryEntries =
            | "pageTitle"
            | "hello"
            | "about_me_text_1"
            | "about_me_text_2"
            | "about_me_text_3"
            | "about_me_text_4"

        type ContactPageDictionaryEntries =
            | "pageTitle"
            | "text_arrangeShooting"
            | "form_name"
            | "form_mail"
            | "form_phone"
            | "form_describeIdea"
            | "form_submitAction"
            | "form_requestSent"
            | "form_requestError"

        type HomePageDictionaryEntries =
            | "section_portraits"
            | "section_streetPhotography"
            | "section_wedding"
            | "section_business"
            | "section_dogs"
            | "section_wildAnimals"

        type ImprintPageDictionaryEntries = "pageTitle"

        type FooterDictionaryEntries =
            | "link_privacy"
            | "link_imprint"
            | "link_links"

        type LinksPageDictionaryEntries =
            | "link_website"
            | "link_arrange_shooting"
            | "link_imprint"
            | "link_privacy"

        type NotFoundPageDictionaryEntries = "notFoundLabel"

        interface Dictionary {
            footer: Record<FooterDictionaryEntries, string>
            navigation: Record<NavigationDictionaryEntries, string>
            pages: {
                about: Record<AboutPageDictionaryEntries, string>
                contact: Record<ContactPageDictionaryEntries, string>
                home: Record<HomePageDictionaryEntries, string>
                imprint: Record<ImprintPageDictionaryEntries, string>
                links: Record<LinksPageDictionaryEntries, string>
                notFound: Record<NotFoundPageDictionaryEntries, string>
            }
        }
    }

    namespace ImageViewer {
        interface ImageDetails {
            label: Record<I18n.Language, string>
            src: ImageProps["src"]
            href?: string
        }
    }
}

export type Maybe<T> = T | undefined

export default Website
